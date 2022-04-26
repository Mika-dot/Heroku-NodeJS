const express = require('express');
const router = express.Router();
const app = express();

// app.use('/website/Styles/Cards/Styles.css', express.static(`website`));

router.all('/', (request, response) =>{
  response.send('<h1>Список картинок</h1>')
});

router.route('/')
  .post((request, response) => {
    response.send('<h1>post ID картиноки</h1>')
  });


router.route('/:id')
  .get((request, response) => {
    response.send('<h1>get ID картиноки</h1>' + request.params["id"])
  })
  .put((request, response) => {
    response.send('<h1>put get ID картиноки</h1>' + request.params["id"])
  })
  .delete((request, response) => {
    response.send('<h1>delete get ID картиноки</h1>' + request.params["id"])
  });

module.exports = router;  