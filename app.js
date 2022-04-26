const port = process.env.PORT || 3000
const express = require('express');
const app = express();
// const http = require("http");

// api.use('/styles', express.static(`website`));
// api.use('/website/Styles/Cards/Styles.css', express.static(`website`));

app.use(express.static(`website`));


const model = require('./ApiJs/model')
app.use('/api/model', model);

const picture = require('./ApiJs/picture')
app.use('/api/img', picture);

const label = require('./ApiJs/tag')
app.use('/api/label', label);

app.get('/', function (request, response) {
  response.sendFile(__dirname + '/website/Satellites/Cards/index.html');
  console.log('флаг 1');
});

app.listen(port,() => {
  console.log(`Server running at port `+port);
  console.log(`localhost:3000`);
});