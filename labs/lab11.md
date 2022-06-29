# Лабораторная работа №11

Получение данных с сервера и их отображение

**Цель**: получить данные с сервера и вывести список моделей на главной странице.

## Содержание и порядок выполнения лабораторной работы:

1. На основании структуры серверной стороны проекта, созданной в 10-й лабораторной работе (routes, controllers, services, models, configs, middlewares) добавить необходимые функции для извлечения всех моделей из базы данных на supabase.
1. На стороне сервера подготовить список объектов моделей, который отправляется в формате JSON с сервера при получении GET запроса на соответствующий URL.
1. В документе index.html с помощью JS и fetch отправить на сервер GET-запрос, получить и обработать ответ.
1. Из массива объектов сформировать карточки моделей. В них подставить необходимую информацию из объектов (название, изображение и т.д.). В карточки добавить ссылки или саму карточку сделать ссылкой и она должна вести на страницу для отображения конкретной модели, а к URL добавить параметр id с соответствующим значением.
1. Для стилей можно использовать css библиотеки/фреймворки.

## Результаты выполнения лабораторной работы:

Главная страница, на которой выводятся все модели, информация для которых поступает в виде json в ответе с сервера.

## Источники
1. [Организация структуры приложения](https://nodejsdev.ru/doc/app-structure/)
1. [Промежуточное ПО](https://nodejsdev.ru/doc/middleware/)
1. [Project structure for an Express REST API when there is no "standard way"](https://www.coreycleary.me/project-structure-for-an-express-rest-api-when-there-is-no-standard-way)
1. [Organizing your Express.js project structure for better productivity](https://blog.logrocket.com/organizing-express-js-project-structure-better-productivity/)
1. [Документация multer](https://github.com/expressjs/multer/blob/master/doc/README-ru.md)
1. [Документация supabase](https://supabase.com/docs)
1. [Руководство по Supabase](https://habr.com/ru/company/timeweb/blog/648761/)
1. [Как автоматически перезапускать приложения Node.js с помощью nodemon](https://www.digitalocean.com/community/tutorials/workflow-nodemon-ru)
1. [Пример](https://github.com/slavaver/node-sapr)