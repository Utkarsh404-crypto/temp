const path = require("path");
const express = require('express')
const app = new express()

// app.set('view engine', 'ejs')
app.use(express.static('./public'))
const h = (req, res) => {

    res.sendFile(path.resolve(__dirname, './public/index.html'))
}

const home = (req, res) => {
    res.render('index', {
        Name: 'Utkarsh Singh'
    });
};

module.exports = {
    getHome: home,
    getfirst: h
};