const multer = require('multer');
const path = require('path');

const statusStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        let folder = '';

        if (req.baseUrl.includes('/students')) {
            folder = './public/studentsFiles/';
        } else if (req.baseUrl.includes('/university')) {
            folder = './public/universityFile/';
        } else if (req.baseUrl.includes('/admissions')) {
            folder = './public/admissionsFile/';
        }
        cb(null, folder);
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});

const checkFileType = (file, cb) => {
    const filetypes = /jpeg|jpg|png|gif|mp4|mov|avi|pdf|docx/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(new Error('Only images and videos are allowed!'));
    }
};

const upload = multer({
    storage: statusStorage,
    limits: { fileSize: 1024 * 1024 * 5 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
});

module.exports = upload;
