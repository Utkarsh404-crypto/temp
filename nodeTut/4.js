const { createReadStream, readFileSync } = require('fs')

const http = require('http')
console.log('hello');
const server = http.createServer()
server.on('request', (req, res) => {
    console.log('in on');
    console.log(req.url);
    const str = createReadStream('./Vivid/index.html')
    const str1 = createReadStream('./Vivid/styles.css')

    // res.end(str)
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        str.on('open', () => {
            str.pipe(res)
        })
    } else if (req.url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        str1.on('open', () => {
            str1.pipe(res)
        })
    } else {
        str.on('error', (error) => {
            res.end(error)
        })
    }
})
server.listen(5000, () => {
    console.log('listening');
})
console.log('done1');