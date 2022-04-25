const port = process.env.PORT || 3000
const express = require('express');
const api = express();

api.use('/styles', express.static(`public`));

const model = require('./ApiJs/model')
api.use('/api/model', model);

const picture = require('./ApiJs/picture')
api.use('/api/img', picture);

const label = require('./ApiJs/tag')
api.use('/api/label', label);

api.get('/', function (request, response) {
  response.sendFile(__dirname + '/website/Satellites/Cards/index.html');
  console.log('флаг 1');
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
  console.log(`localhost:3000`);
});