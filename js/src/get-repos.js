import h from './h';

export class Repos {
  constructor() {
    this.template = null;
    this.languages = [];
    this.getRepos(this.createFilter());
  }

  getRepos(callback) {
    const request = new XMLHttpRequest();
    this.request = request;
    this.request.open('GET', 'https://api.github.com/users/neulandagentur/repos');
    this.request.addEventListener('load', () => {
      let data;
      if (this.request.status > 200 || this.request.status <= 300) {
        data = JSON.parse(this.request.responseText);
        data.forEach((repo) => {
          if (repo.private === 'false') {
            return;
          }
          let license = null;
          if (repo.license) {
            license = repo.license.spdx_id;
          }
          this.render({
            title: repo.name,
            description: repo.description,
            forks: repo.forks_count,
            stars: repo.stargazers_count,
            license,
            language: repo.language,
            url: repo.html_url,
          });
        });
      } else console.log('error');
    });
    this.request.send();
    if(callback) callback();
  }

  render(repository = {}) {
    const template = this.createTemplate(repository);
    document.querySelector('.projects').appendChild(template);
  }

  createFilter() {
    const template = h('ul', { class: 'filter-list' });
    document.querySelector('.language-filter').appendChild(template);
    this.createListItems();
  }

  addListener() {
    const items = document.querySelectorAll('.filter-item');
    items.forEach((listLanguage) => {
      listLanguage.addEventListener('click', () => {
        if (listLanguage.classList.contains('is--active')) {
          const projects = document.querySelectorAll('.project')
          projects.forEach((project) => {
            project.style.display = 'block';
            listLanguage.classList.toggle('is--active');
          })
        } else {
          const projectLanguages = document.querySelectorAll('[data-language]');
          projectLanguages.forEach((projectLanguage) => {
            if (projectLanguage.innerHTML !== listLanguage.innerHTML) {
              projectLanguage.parentNode.parentNode.style.display = 'none';
            } else {
              projectLanguage.parentNode.parentNode.style.display = 'block';
            }
          })
          listLanguage.classList.toggle('is--active');
        }
      })
    })
  }

  createListItems() {
    console.log(this.languages);
    this.languages.forEach((language) => {
      const listItem = h('li', { class: 'filter-item' }, [language]);
      document.querySelector('.filter-list').appendChild(listItem);
    });
    this.addListener();
  }

  createTemplate(repository = {}) {
    const language = repository.language || 'no language';

    if (this.languages.indexOf(language) < 0) {
      this.languages.push(language);
    }

    const license = repository.license
      ? h('div', { class: 'license'}, [repository.license.toString()])
      : null;
    this.template = h('div', { class: 'project' }, [
      h('div', { class: 'inner' }, [
        h('div', { class: 'head' }, [
          h('div', { class: 'stars' }, [repository.stars.toString()]),
          h('div', { class: 'forks' }, [repository.forks.toString()]),
          license,
        ]),
        h('div', { class: 'language', 'data-language': language.toLowerCase() }, [language]),
        h('h3', { class: 'title' }, [repository.title]),
        h('p', { class: 'description' }, [repository.description]),
        h('a', { class: 'link', href: repository.url }, [repository.url.toString()]),
      ]),
    ]);
    return this.template;
  }
}
