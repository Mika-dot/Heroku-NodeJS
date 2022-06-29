# Лабораторная работа №12

Отображение конкретной модели и ее редактирование

**Цель**: добавить возможность отображения конкретной модели и ее редактирования.

## Содержание и порядок выполнения лабораторной работы:

1. На основании структуры серверной стороны проекта, созданной в 10-й лабораторной работе (routes, controllers, services, models, configs, middlewares) добавить необходимые функции для извлечения данных конкретной модели из базы данных на supabase по параметру id.
1. На стороне сервера подготовить объект конкретной модели, который отправляется в формате JSON с сервера при получении GET запроса на соответствующий URL с id.
1. В документе model.html с помощью JS проверить наличие параметра id в URL в браузере и что его значение является числом. С помощью fetch отправить на сервер GET-запрос на URL с указанием id, получить и обработать ответ.
1. Если модель есть в базе данных, то отобразить все ее данные на странице, если отсутствует, то со стороны сервера должен прийти ответ с ошибкой и кодом 404 и этом случае пользователю на странице сообщить, что такой модели нет.
1. В ссылку для редактирования модели, которая должна вести на форму также добавить id.
1. При переходе на страницу с формой, на стороне клиента JS должен проверить наличие id и его значения. Если его нет, то страница функционирует как в 10-й работе, если id есть, то необходимо отправить запрос на получение данных модели и подставить их в качестве value в соответствующие поля. Также должны быть кнопки отмены, сохранения и удаления. Кнопка отмены перенаправляет на страницу конкретной модели, сохранение отправляет PUT/PATCH запрос для изменения данных, а удаление отправляет DELETE запрос и перенаправляет на главную страницу ([location.href](https://developer.mozilla.org/ru/docs/Web/API/Location/href) или [Location.replace()](https://developer.mozilla.org/ru/docs/Web/API/Location/replace))
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