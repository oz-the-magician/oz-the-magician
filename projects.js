// The list of projects on the page. To add one: copy a block, fill it in, drop a 1200×750 image into img/.
// Groups render in the order below; projects keep their order inside a group.

export const GROUPS = [
  { id: 'tools', title: { ru: 'Инструменты', en: 'Tools' } },
  { id: 'play',  title: { ru: 'Игры и эксперименты', en: 'Games and experiments' } }
];

export const PROJECTS = [
  {
    group: 'tools',
    name: 'AI Risk Simulator',
    img: 'img/ai-risk.webp',
    demo: 'https://oz-the-magician.github.io/AI-Product-Risk-Simulator-Decision-Support-System-v3/',
    code: 'https://github.com/oz-the-magician/AI-Product-Risk-Simulator-Decision-Support-System-v3',
    about: {
      ru: 'Симулятор решений по безопасности AI-продукта. Соберите два набора мер, сравните, что они делают с риском, пользователями и деньгами, и посмотрите, какое решение сколько дало.',
      en: 'A decision simulator for AI product safety. Build two sets of measures, compare what they do to risk, users and money, and see how much each decision contributed.'
    },
    made: {
      ru: 'Monte Carlo, значения Шепли, граница Парето, пошаговый тур',
      en: 'Monte Carlo, Shapley values, Pareto frontier, guided tour'
    }
  },
  {
    group: 'tools',
    name: 'Prompt Constructor',
    img: 'img/prompt-constructor.webp',
    demo: 'https://oz-the-magician.github.io/prompt-constructor/',
    code: 'https://github.com/oz-the-magician/prompt-constructor',
    about: {
      ru: 'Конструктор промптов для текста, изображений, видео и кода. Собирает промпт из блоков и по ходу подсказывает, что его ослабляет: размытые слова, противоречия, отрицания, пропуски.',
      en: 'A prompt builder for text, image, video and code models. It assembles the prompt from blocks and points out what weakens it as you type: vague words, contradictions, negations, gaps.'
    },
    made: {
      ru: 'один офлайн-файл, без ИИ, интерфейс на чешском, русском и английском',
      en: 'one offline file, no AI involved, Czech, Russian and English interface'
    }
  },
  {
    group: 'tools',
    name: 'Калькулятор ипотеки',
    nameEn: 'Mortgage Calculator',
    img: 'img/mortgage.webp',
    demo: 'https://oz-the-magician.github.io/mortgage_calculator/',
    code: 'https://github.com/oz-the-magician/mortgage_calculator',
    about: {
      ru: 'Продаёте одну квартиру и покупаете другую: сколько ипотеки понадобится, каким будет платёж и какая доля дохода на него уйдёт.',
      en: 'Selling one flat and buying another: how big a mortgage you need, what the payment will be and how much of your income it takes.'
    },
    made: {
      ru: 'аннуитет и дифференцированный платёж, займы, ссылка на расчёт, печать в PDF',
      en: 'annuity and differentiated payments, extra loans, shareable link, print to PDF'
    }
  },
  {
    group: 'play',
    name: 'Blaster Arena',
    img: 'img/blaster-arena.webp',
    demo: 'https://oz-the-magician.github.io/blaster-arena/',
    code: 'https://github.com/oz-the-magician/blaster-arena',
    about: {
      ru: 'Браузерный 3D-шутер на арене: волны ботов, гигант-босс, 18 видов оружия, карточки улучшений и разрушаемые стены. Играется на компьютере и на телефоне.',
      en: 'A browser 3D arena shooter: waves of bots, a giant boss, 18 weapons, upgrade cards and destructible walls. Plays on desktop and on phones.'
    },
    made: {
      ru: 'Three.js, процедурные арены, редактор карт',
      en: 'Three.js, procedural arenas, map editor'
    }
  },
  {
    group: 'play',
    name: 'Cosmic Melody',
    img: 'img/cosmic-melody.webp',
    demo: 'https://oz-the-magician.github.io/cosmic-melody/',
    code: 'https://github.com/oz-the-magician/cosmic-melody',
    about: {
      ru: 'Превращает дату в минуту музыки. Положение Солнца и фаза Луны задают лад, темп и гармонию, а играют живые оркестровые сэмплы.',
      en: 'Turns a date into a minute of music. The position of the Sun and the phase of the Moon set the key, tempo and harmony, played on real orchestral samples.'
    },
    made: {
      ru: 'Web Audio, астрономические расчёты, четыре ансамбля',
      en: 'Web Audio, astronomy maths, four ensembles'
    }
  }
];
