import { GROUPS, PROJECTS } from './projects.js';

const TEXT = {
  ru: {
    title: 'OZ — playground',
    role: 'Playground',
    lede: 'Делаю в свободное время разные штуки: инструменты, симуляторы, игры. Всё работает прямо в браузере.',
    foot: 'Список обновляется вместе с проектами. Исходники всех работ — на GitHub.',
    open: 'Открыть', code: 'Код', made: 'Внутри:',
    markLabel: 'OZ, главная', navLabel: 'Настройки и ссылки'
  },
  en: {
    title: 'OZ — playground',
    role: 'Playground',
    lede: 'Things I make in my spare time: tools, simulators, games. Everything runs right in the browser.',
    foot: 'The list grows with the projects. Source code for everything is on GitHub.',
    open: 'Open', code: 'Code', made: 'Inside:',
    markLabel: 'OZ, home', navLabel: 'Settings and links'
  }
};

const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function pickLang() {
  try {
    const saved = localStorage.getItem('oz-lang');
    if (saved === 'ru' || saved === 'en') return saved;
  } catch (e) {}
  return /^(ru|uk|be)/i.test(navigator.language || '') ? 'ru' : 'en';
}

function render(lang) {
  const t = TEXT[lang];
  document.documentElement.lang = lang;
  document.title = t.title;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t[el.dataset.i18n]; });
  document.querySelector('.mark').setAttribute('aria-label', t.markLabel);
  document.querySelector('.top-nav').setAttribute('aria-label', t.navLabel);
  document.querySelectorAll('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));

  document.getElementById('projects').innerHTML = GROUPS.map(g => {
    const items = PROJECTS.filter(p => p.group === g.id);
    if (!items.length) return '';
    return `
      <section class="group" aria-labelledby="g-${g.id}">
        <h2 class="group-title" id="g-${g.id}">${esc(g.title[lang])}</h2>
        <ul class="list">
          ${items.map(p => {
            const name = lang === 'en' && p.nameEn ? p.nameEn : p.name;
            return `
            <li class="project">
              <a class="shot" href="${p.demo}" tabindex="-1" aria-hidden="true">
                <img src="${p.img}" alt="" width="1200" height="750" loading="lazy" decoding="async">
              </a>
              <div class="body">
                <h3 class="name"><a href="${p.demo}">${esc(name)}</a></h3>
                <p class="about">${esc(p.about[lang])}</p>
                <p class="made"><span>${t.made}</span> ${esc(p.made[lang])}</p>
                <p class="links">
                  <a class="btn" href="${p.demo}">${t.open}</a>
                  <a class="quiet" href="${p.code}">${t.code}</a>
                </p>
              </div>
            </li>`;
          }).join('')}
        </ul>
      </section>`;
  }).join('');
}

let lang = pickLang();
render(lang);
document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => {
  lang = b.dataset.lang;
  try { localStorage.setItem('oz-lang', lang); } catch (e) {}
  render(lang);
}));
