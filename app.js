const express = require('express');
const app = express();

app.use(express.static(__dirname + '/styles'));
app.use(express.static(__dirname + '/public'));
//app.use(express.static(__dirname + '/three.js-master'));
app.use('/three.js-master', express.static(__dirname + '/three.js-master'));

app.listen(3000, () => {
  console.log('Сервер запущен по адресу http://localhost:3000');
});

app.get('/', (req, res) => {
  console.log("=== Просто так, " + new Date() + " ===");
  res.sendFile(__dirname + '\\index.html');
});
app.get('/login', (req, res) => {
  console.log("=== Страница входа, " + new Date() + " ===");
  res.sendFile(__dirname + '\\login.html');
});
app.get('/reg', (req, res) => {
  console.log("=== Страница регистрации, " + new Date() + " ===");
  res.sendFile(__dirname + '\\reg.html');
});
app.get('/add_card', (req, res) => {
  console.log("=== Страница добавления карточки, " + new Date() + " ===");
  res.sendFile(__dirname + '\\add.html');
});

const users = require('./users');
app.use('/users', users);
const cards = require('./cards');
app.use('/cards', cards);