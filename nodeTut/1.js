// const http = require('http')
// console.log('hello');
// const server = http.createServer((req, res) => {
//     console.log('start')
//     res.end('hello world')

// })
// console.log('done');

// server.listen(5000, () => {
//     console.log('listening');
// })
// console.log('done1');
const http = require('http')
console.log('hello');
const server = http.createServer()

server.on('request', (req, res) => {
    console.log('in on');
    res.end('hi there')
})
server.listen(5000, () => {
    console.log('listening');
})
console.log('done1');