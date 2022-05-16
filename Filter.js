const imageFilter = function(req, file, cb) {
    // Принимать только изображения
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Разрешены только файлы изображений!';
        return cb(new Error('Разрешены только файлы изображений!'), false);
    }
    cb(null, true);
};
const modelsFilter = function(req, file, cb) {
    // Принимать только изображения
    if (!file.originalname.match(/\.(stl|STL|obj|OBJ)$/)) {
        req.fileValidationError = 'Разрешены только файлы моделей!';
        return cb(new Error('Разрешены только файлы моделей!'), false);
    }
    cb(null, true);
};

exports.imageFilter = imageFilter;
exports.modelsFilter = modelsFilter;