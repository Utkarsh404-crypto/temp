const { application } = require('express')
const express = require('express')
const path = require('path')
const app = new express()
const { products } = require('./data')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://utkarsh:%23%40utk%23%40111vi1@cluster0.uuy1u.mongodb.net/test?authSource=admin&replicaSet=atlas-x0tvip-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('successful')).catch((err) => console.log(err));

app.use(express.static('./public'))
    // app.get('/', (req, res) => {
    //     res.sendFile(path.resolve(__dirname, './Vivid/index.html'))
    // })
    // app.get('/', (req, res) => {
    //         const pro = products.map((product) => {
    //             const { id, name } = product
    //             return { id, name }
    //         })
    //         res.json(pro)
    //     })
app.get('/:prod', (req, res) => {
    console.log(req.params);
    const { prod } = req.params
    console.log(prod); //access 'value' of object
    const pro = products.find((product) => product.id === Number(prod))
    return res.json(pro)

})
app.get('/api/get/query', (req, res) => {
    console.log(req.query);
    const { search, limit } = req.query
    let str = [...products]
    if (search) {
        str = products.filter((product) => {
            return product.name.startsWith(search)

        })

    }
    if (limit) {
        str = str.slice(0, Number(limit))
    }
    return res.status(200).json(str)

})
const logger = (req, res, next) => {

    res.send('....hiiiii')
    next()
}
app.get('/a/home', (req, res) => {
    res.send(`<a href="/a/about">about</a>`)
})
app.get('/a/about', (req, res) => {
    res.send(`<a href="/a/home">home</a>`)
})
app.post('/login', (req, res) => {
    res.send('POST')
})

app.all('*', (req, res) => {
    return res.status(404).send(`<h1>not found</h1>`)
})
app.listen(5000, () => {
    console.log('listening');
})