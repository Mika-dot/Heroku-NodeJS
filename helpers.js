const imageFilter = function(req, file, cb) {
    // Принимать только изображения
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Разрешены только файлы изображений!';
        return cb(new Error('Разрешены только файлы изображений!'), false);
    }
    cb(null, true);
};
exports.imageFilter = imageFilter;