const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

const helpers = require('./Filter');

app.use(express.static(__dirname + '/public'));

const imageRepositoriesCover = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'storage/Cover/');
    },

    filename: function(req, file, cb) {
        cb(null, "Cover" + file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const imageRepositories = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'storage/Images/');
    },

    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const ModelRepositories = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'storage/Models/');
    },

    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

app.post('/cover-download', (req, res) => {

    let upload = multer({ storage: imageRepositoriesCover, fileFilter: helpers.imageFilter }).single('Cover');

    upload(req, res, function(err) {

        if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        }
        else if (err instanceof multer.MulterError) {
            return res.send(err);
        }
        else if (err) {
            return res.send(err);
        }

        //console.log(req.body.userName1);
        console.log(req.body);
        
    });
});

app.post('/Model-download', (req, res) => {

    let upload = multer({ storage: ModelRepositories, fileFilter: helpers.modelsFilter }).array('Model', 10);


    upload(req, res, function(err) {

        if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        }
        else if (err instanceof multer.MulterError) {
            return res.send(err);
        }
        else if (err) {
            return res.send(err);
        }

        //console.log(req.body.userName1);
        console.log(req.body);
        
    });
});


app.post('/Body-download', (req, res) => {

    let upload = multer({ storage: imageRepositories, imageRepositories: helpers.imageFilter }).array('Body', 10);


    upload(req, res, function(err) {

        if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        }
        else if (err instanceof multer.MulterError) {
            return res.send(err);
        }
        else if (err) {
            return res.send(err);
        }

        //console.log(req.body.userName1);
        console.log(req.body);
        
    });
});

app.get('/', function(req, res) {
    res.sendfile('index.html');
  });

  app.listen(8080);