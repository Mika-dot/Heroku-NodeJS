const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

const helpers = require('./helpers');

app.use(express.static(__dirname + '/public'));

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },

    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

app.post('/upload-profile-pic', (req, res) => {

    let upload = multer({ storage: storage, fileFilter: helpers.imageFilter }).single('profile_pic');


    upload(req, res, function(err) {

        if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        }
        else if (!req.file) {
            return res.send('Please select an image to upload');
        }
        else if (err instanceof multer.MulterError) {
            return res.send(err);
        }
        else if (err) {
            return res.send(err);
        }

        console.log(req.body.userName1);
        
        
    });
});

app.post('/upload-multiple-images', (req, res) => {

    let upload = multer({ storage: storage, fileFilter: helpers.imageFilter }).array('multiple_images', 10);

    upload(req, res, function(err) {

        if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        }

        console.log(req.body);

        
    });
});

app.get('/', function(req, res) {
    res.sendfile('index.html');
  });

  app.listen(8080);