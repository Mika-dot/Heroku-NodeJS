# Лабораторная работа №8

Получение данных из формы

**Цель**: изучить работу с получением данных из формы.

## Содержание и порядок выполнения лабораторной работы:

1. Согласно схеме данных и макету разработанных в 5-й работе сверстать форму.

1. Используя fetch, FormData и конечную точку (endpoint), созданную для добавления записи, организовать отправку данных на сервер.

1. На стороне сервера добавить использование промежуточного ПО (middleware) multer и cors.

1. Для multer создать diskStorage с destination и filename.

1. Для валидации файлов создать fileFilter.

1. Провести валидацию входящих данных. При возникновении ошибки в качестве ответа вернуть json со статусом и текстом ошибки.

1. В случае успешной проверки, вывести объект с данными в консоль и в качестве ответа вернуть json с положительным статусом.

1. Файлы должны сохранятся в папке для статического контента, а в объекте отображаться путь до сохраненного ресурса.

1. Зафиксировать результаты работы в системе контроля версий на github.

## Результаты выполнения лабораторной работы:

Работающий сервер на локальной машине с логикой, которая соответствует требованиям. Код сохранен в системе контроля версий.

## Источники

1. [Express Middleware](https://expressjs.com/en/resources/middleware.html)
1. [Учебник Express часть 6: Работа с формами](https://developer.mozilla.org/ru/docs/Learn/Server-side/Express_Nodejs/forms)
1. [Начало работы с Express](https://metanit.com/web/nodejs/4.1.php)
1. [How To Upload Images with a Node.js Backend in Multer and Express](https://www.digitalocean.com/community/tutorials/nodejs-uploading-files-multer-express)
1. [How To Add Advanced Photo Uploads in Node and Express](https://www.digitalocean.com/community/tutorials/how-to-add-advanced-photo-uploads-in-node-and-express)
1. [NodeJS + Express](https://dev.to/ericchapman/nodejs-express-part-1-introduction-314a)
