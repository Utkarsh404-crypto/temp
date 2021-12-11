const { createReadStream } = require('fs')
const { readFile } = require('fs')



const http = require('http')
console.log('hello');
const server = http.createServer()

server.on('request', (req, res) => {
    console.log('in on');
    const str = readFile('./1.txt', 'utf8')

    str.on('open', () => {
        str.pipe(res)
    })
    str.on('error', (error) => {
        res.end(error)
    })
})
server.listen(5000, () => {
    console.log('listening');
})
console.log('done1');