import h from './h';
import Repository from './Repository';

/**
 * current state
 * @type {Object}
 */
const state = {
  activeItem: null,
  activeLanguage: null,
  items: []
};



export class Repos {
  constructor() {
    this.template = null;
    this.languages = [];
    this.request = null;
    this.data = null;
    this.fetchData(() => {
      this.renderListItems();
      this.renderFilter();
    });
  }

  fetchData(callback) {
    this.request = new XMLHttpRequest();
    this.request.open('GET', 'https://api.github.com/users/neulandagentur/repos');
    this.request.addEventListener('load', () => {
      if (this.request.status > 200 || this.request.status <= 300) {
        this.data = JSON.parse(this.request.responseText);
        if (callback) {
          callback();
        }
      } else {
        console.error(this.request.responseText);
      }
    });
    this.request.send();
  }

  renderListItems() {
    this.data.forEach((repo) => {

      const license = repo.license
        ? repo.license.spdx_id
        : null;

      const repoInstance = new Repository(
        repo.name,
        repo.description,
        repo.forks_count,
        repo.stargazers_count,
        license,
        repo.language,
        repo.html_url
      );

      const template = repoInstance.createTemplate();
      state.items.push({language: repo.language, item: template});
      document.querySelector('.projects').appendChild(template);
    });
  }

  filterUniqueLanguage() {
    const uniqueLanguage = [];

    this.data.forEach((repo) => {
      const language = repo.language;

      if (uniqueLanguage.indexOf(language) < 0){
        uniqueLanguage.push(language);
      }
    });

    return uniqueLanguage;
  }

  renderFilter() {
    const filterItems = this
      .filterUniqueLanguage()
      .map(language => h('li', { class: 'filter-item', click: (e, el) => { this.filterAction(language, el) }}, [language]));

    const filter = h('ul', {class: 'filter-list'}, filterItems);

    document.querySelector('.language-filter').appendChild(filter);
  }

  filterAction(language, filterItem) {
    if (state.activeLanguage === null) {
      state.items.forEach((item) => {
        if (item.language !== language) {
          item.item.style.display = 'none';
        }
      });
      state.activeLanguage = language;
      filterItem.classList.add('is--active');
      state.activeItem = filterItem;

    } else if (state.activeLanguage === language) {
      state.items.forEach((item) => { item.item.style.display = 'block' });
      state.activeLanguage = null;
      state.activeItem.classList.remove('is--active');
      state.activeItem = null;
    } else {
      state.items.forEach((item) => {
        if (item.language === language) {
          item.item.style.display = 'block';
        } else {
          item.item.style.display = 'none';
        }
      });

      filterItem.classList.add('is--active');
      state.activeItem.classList.remove('is--active');
      state.activeItem = filterItem;
      state.activeLanguage = language;
    }
  }
}
