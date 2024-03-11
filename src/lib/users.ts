import { IUser } from "@/interfaces/user.interface";

export const users: IUser[] = [
  {
    id: 1,
    name: "Александр",
    lastname: "Найдёнов",
    patronymic: "Сергеевич",
    img: "https://github.com/3N.png",

    resume: [
      {
        id: 1,
        title:
          "Меня зовут Александр Сергеевич. Я проживаю в городе Иркутск. Занимаюсь созданием веб-сайтов и мобильных приложений.",
        body: "Целеустремленный и опытный веб-разработчик с более чем пятилетним опытом работы. Глубокие знания веб-технологий, включая HTML, CSS, JavaScript, и опыт работы с современными фреймворками. Успешно завершил множество проектов, демонстрируя способность к творческому мышлению и решению сложных задач. Заинтересован в продолжении профессионального развития и усовершенствовании навыков в области веб-разработки.",
        experience: [
          {
            id: 1,
            title: "Fina - Senior Frontend Developer",
            body: "В компании Fina я занимал позицию Senior Frontend Developer, где руководил разработкой пользовательского интерфейса для ведущих проектов компании. Моя работа включала в себя разработку высококачественных и интуитивно понятных пользовательских интерфейсов, оптимизацию производительности веб-приложений и тесное сотрудничество с командой дизайна и бэкенд разработчиками. Я активно участвовал в принятии ключевых технических решений, проводил код-ревью и обучал младших членов команды. Мой вклад в проекты позволил значительно улучшить пользовательский опыт и увеличить конверсию веб-приложений.",
            dateTime: "2020-2021",
          },

          {
            id: 2,
            title: "fdsf",
            body: "fds",
            dateTime: "2021-2022",
          },
        ],

        education: [
          {
            id: 1,
            title: "Title Aleksandr",
          },
        ],

        development: [
          {
            id: 1,
            title: "Язык",
            body: "HTML",
          },

          {
            id: 2,
            title: "Язык",
            body: "CSS",
          },

          {
            id: 3,
            title: "Язык",
            body: "JavaScript",
          },

          {
            id: 4,
            title: "Язык",
            body: "TypeScript",
          },

          {
            id: 5,
            title: "Библиотека",
            body: "React",
          },

          {
            id: 1,
            title: "Библиотека",
            body: "React Native",
          },
        ],

        hobby: {
          id: 1,
          body: "Hobby Aleksandr",
        },

        projects: [],
      },
    ],

    contact: [
      {
        id: 1,
        title: "Написать в телеграм",
        href: "https://github.com/3N14C",
      },

      {
        id: 2,
        title: "Написать ВКонтакте",
        href: "https://github.com/3N14C",
      },

      {
        id: 3,
        title: "Написать на почту",
        href: "https://github.com/3N14C",
      },
    ],
  },

  {
    id: 2,
    name: "Иван",
    lastname: "Курбатов",
    patronymic: "Викторович",
    img: "https://picsum.photos/200",

    resume: [
      {
        id: 1,
        title:
          "Меня зовут Иван Викторович. Я проживаю в городе Иркутск. Занимаюсь созданием веб-сайтов и мобильных приложений.",
        body: "body",
        experience: [
          {
            id: 1,
            title: "title",
            body: 'body hhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhh',
            dateTime: "2020-2021",
          },
        ],

        education: [
          {
            id: 1,
            title: "Title Ivan",
          },
        ],

        development: [
          {
            id: 1,
            title: "Development",
            body: "CSS",
          },
        ],

        hobby: {
          id: 1,
          body: "Hobby Ivan",
        },

        projects: [],
      },
    ],

    contact: [
      {
        id: 1,
        title: "Написать в телеграм",
        href: "https://t.me/adefrol",
      },

      {
        id: 2,
        title: "Написать ВКонтакте",
        href: "https://vk.com/adefrol",
      },

      {
        id: 3,
        title: "Написать на почту",
        href: "mailto:adefrolx@gmail.com",
      },
    ],
  },
];
