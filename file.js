const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const crypto = require('crypto')
const multer = require('multer')
const { GridFsStorage } = require('multer-gridfs-storage')
const Grid = require('gridfs-stream')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const app = new express()

app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(methodOverride('_method'))

const mongoURI = 'mongodb+srv://utkarsh:%23%40utk%23%40111vi1@cluster0.uuy1u.mongodb.net/test?authSource=admin&replicaSet=atlas-x0tvip-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'
const conn = mongoose.createConnection(mongoURI)

app.use(express.static('./public'))
app.get('/', (req, res) => {
    res.render('index', {
        Name: 'Utkarsh'
    })
})
var gfs;
conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo)
    gfs.collection('uploads')
})

const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads'
                };
                resolve(fileInfo);
            });
        });
    }
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {

    res.redirect('/')

})

app.get('/image/:filename', (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {

        if (!file || file.length === 0) {
            return res.status(404).json({
                err: 'No file exist'
            })
        }
        // return res.json(file)
        if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
            const readstream = gfs.openDownloadStream(file.filename)
            readstream.pipe(res)
        }
    })

})
app.get('/files', (req, res) => {
    gfs.files.find().toArray((err, files) => {

        if (!files || files.length === 0) {
            return res.status(404).json({
                err: 'No files exist'
            })
        }
        return res.json(files)
    })
})
app.get('/files:id', (req, res) => {
    const { prod } = req.params
    const pro = gfs.files.find((file) => {
        file.id === Number(prod)
        return res.json(pro)
    })
})
app.listen('5000', () => {
    console.log('connected...');
})
