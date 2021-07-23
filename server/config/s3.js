const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require('path');
require('dotenv').config();

const s3 = new AWS.S3({
    accessKeyId: process.env.ACCESS_KEY_ID, //keyID 입력
    secretAccessKey: process.env.SECRET_ACCESS_KEY, // secretKey 입력
    region: process.env.REGION // 버킷 생성 리전 입력
});

let upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'surveyon-bucket',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, cb) => {
            let extension = path.extname(file.originalname)
            cb(null, `thumbnail/${Date.now()}_${extension}`);
        }
    }),
    limits: {fileSize: 5 * 1024 * 1024} //용량제한
});

exports.upload = multer(upload);