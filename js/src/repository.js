import h from './h';

export default class Repository {

  constructor(title, description, forks, stars, license, language, url) {
    this.title = title;
    this.description = description;
    this.forks = forks;
    this.stars = stars;
    this.license = license || null;
    this.language = language;
    this.url = url;
  }

  createTemplate() {
    const language = this.language || 'no language';

    const license = this.license
      ? h('div', { class: 'license'}, [this.license])
      : null;

    return h('div', { class: 'project', 'data-language': language.toLowerCase()}, [
      h('div', { class: 'inner' }, [
        h('div', { class: 'head' }, [
          h('div', { class: 'stars' }, [this.stars.toString()]),
          h('div', { class: 'forks' }, [this.forks.toString()]),
          license,
        ]),
        h('div', { class: 'language', 'data-language': language.toLowerCase() }, [language]),
        h('h3', { class: 'title' }, [this.title]),
        h('p', { class: 'description' }, [this.description]),
        h('a', { class: 'link', target: "_blank", href: this.url }, [this.url]),
      ])
    ]);
  }

}
