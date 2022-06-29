# Лабораторная работа №10

Организация передачи данных из формы на стороне клиента через сервер в базу данных

**Цель**: организовать добавление новых записей в таблицу/таблицы базы данных, связанных с моделью.

## Содержание и порядок выполнения лабораторной работы:

1. Произвести рефакторинг кода и разделить код на модули, организовав слои. Например: routes, controllers, services, models, configs, middlewares:
    * routes/routers отвечают за обработку входящего запроса с определенным методом и путем и вызывают соответствующий контроллер.
    * controllers контроллеры проводят проверку взодящих запросов, извлекают необходимую информацию из запроса и передают ее в сервис.
    * services - вызывают одну или несколько моделей и передают им необходимую информацию для извлечения или добавления данных в БД.
    * models - храняться отдельный функции для работы с таблицами БД.
    * configs - содержит создание клиента для взаимодействия с БД. В нашем случае - supabase.
    * middlewares - промежуточное ПО отвечает за работу multer и проверку входящих файлов.

1. В папке configs добавить файл db.config.js, в котором подключить dotenv и клиент для работы с supabase. URL и API key должны быть извлечены из файла .env, который также добавлен в .gitignore.

1. Для удобства разработки можно установить nodemon, добавить новую команду для его запуска в scripts.

1. Объект, который вы выводили в консоль в предыдущей лабораторной работе, теперь нужно записать в таблицу/таблицы вашей БД.

## Результаты выполнения лабораторной работы:

Страница с формой для добавления новой модели, работающий сервер, который обрабатывает входящие данные с формы и отправляет их в бд. Структура проекта удовлетворяет требованиям.

## Источники
1. [Организация структуры приложения](https://nodejsdev.ru/doc/app-structure/)
1. [Промежуточное ПО](https://nodejsdev.ru/doc/middleware/)
1. [Project structure for an Express REST API when there is no "standard way"](https://www.coreycleary.me/project-structure-for-an-express-rest-api-when-there-is-no-standard-way)
1. [Organizing your Express.js project structure for better productivity](https://blog.logrocket.com/organizing-express-js-project-structure-better-productivity/)
1. [Документация multer](https://github.com/expressjs/multer/blob/master/doc/README-ru.md)
1. [Документация supabase](https://supabase.com/docs)
1. [Руководство по Supabase](https://habr.com/ru/company/timeweb/blog/648761/)
1. [Как автоматически перезапускать приложения Node.js с помощью nodemon](https://www.digitalocean.com/community/tutorials/workflow-nodemon-ru)