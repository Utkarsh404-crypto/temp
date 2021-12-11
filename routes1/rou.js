const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../controllers1/databasecollec')
const Post = require('../controllers1/postdata')
const hom1 = require("../controllers1/home1")
const hom2 = require("../controllers1/cont")
const { MongoClient } = require('mongodb')
const mongoose = require('mongoose')
const assert = require('assert')
const alert = require('alert')
const router = express.Router()
const app = new express()

app.use(express.json())
mongoose.connect("mongodb+srv://utkarsh:%23%40utk%23%40111vi1@cluster0.uuy1u.mongodb.net/test", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('successful')).catch((err) => console.log(err));

// const notesschema = {
//     name: String,
//     email: String,
//     pass: String,
//     passcon: String

// }

// const Note = mongoose.model('newDoc', notesschema)
let routes = app => {
    // router.get("/", hom1.getfirst);
    // router.get("/ejs", hom1.getHome);
    router.get("/up", (req, res) => {
        res.send("utks")
    })
    router.post('/insert', async(req, res) => {
        const pass1 = req.body.pass
            // const password = await bcrypt.hash(pass1, 10)
        if (req.body.pass === req.body.passcon) {
            let newNote = new User({
                name: req.body.name,

                email: req.body.email,

                pass: pass1,

                passcon: req.body.passcon



            })
            newNote.save()
            console.log(newNote.pass);
            res.redirect('/login.html')
        } else {
            alert('Password not matched')
        }

    })
    var password;
    var n;
    var login;
    router.get("/index.html", hom1.getfirst, () => {
        login = false;
    });
    // router.post('/login', async(req, res) => {


    //     try {
    //         var mydata = await User.find({ pass: req.body.pass })
    //         const my = mydata.find(obj => obj.pass === req.body.pass)
    //         password = my.pass
    //             // console.log(my.pass);
    //     } catch (err) {
    //         return res.status(404).send(err.message);
    //     }


    // })


    router.post('/login', async(req, res) => {
        try {
            var mydata = await User.find({ pass: req.body.pass })
            const my = mydata.find(obj => obj.pass === req.body.pass)
            password = my.pass
            n = my.name
            console.log(my.name);
            console.log(my.pass);
        } catch (err) {
            return res.status(404).send("<h1>Incorrect Credentials</h1>");
        }

        if (password === req.body.pass) {
            login = true
            res.render('index', {
                Name: n
            })
        } else {
            alert('Wrong Credentials')
        }



    })
    router.get('/ejs', (req, res) => {
        if (login) {
            res.render('index', {
                Name: n
            })
        } else {
            res.redirect('/login.html')
        }
    })

    router.post('/upload', async(req, res) => {
        let newPost = new Post({
            post: req.body.test


        })
        newPost.save()
        res.redirect('/ejs')
        try {
            var mydata1 = await Post.find({ post: req.body.test })
            const my1 = mydata1.find(obj => obj.post === req.body.test)
            var po = my1.post

            console.log(my1.post);
            // console.log(my.pass);
        } catch (err) {
            return res.status(404).send("<h1>Incorrect Credentials</h1>");
        }
        // res.render('index', {
        //     Name1: po
        // })
    })

    router.get('/login/messages', (req, res) => {
        res.render('pages/index', {
            Name: n
        })
    })
    return app.use("/", router);
};


module.exports = routes;