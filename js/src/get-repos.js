import h from './h';

export class Repos {
  constructor() {
    this.template = null;
    this.getRepos();
    console.log('sdf');
  }

  getRepos() {
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
  }

  render(repository = {}) {
    const template = this.createTemplate(repository);
    document.querySelector('.projects').appendChild(template);
  }

  createTemplate(repository = {}) {
    let language = 'no language';
    let license = null;
    if (repository.language) {
      language = repository.language;
    }
    if (repository.license) {
      license = h('div', { class: 'license' }, [repository.license.toString()]);
    }
    this.template = h('div', { class: 'project' }, [
      h('div', { class: 'inner' }, [
        h('div', { class: 'head' }, [
          h('div', { class: 'stars' }, [repository.stars.toString()]),
          h('div', { class: 'forks' }, [repository.forks.toString()]),
          license,
        ]),
        h('div', { class: 'language' }, [language]),
        h('h3', { class: 'title' }, [repository.title]),
        h('p', { class: 'description' }, [repository.description]),
        h('a', { class: 'link', href: repository.url }, [repository.url.toString()]),
      ]),
    ]);
    return this.template;
  }
}
