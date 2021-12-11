const express = require('express')
const app = new express()
app.use(express.static('./public'))
    // app.get('/', (req, res) => {
    //     res.sendFile(path.resolve(__dirname, './Vivid/index.html'))
    // })
    // app.get('/', (req, res) => {
    //     const pro = products.map((product) => {
    //         const { id, name } = product
    //         return { id, name }
    //     })
    //     res.json(pro)
    // })