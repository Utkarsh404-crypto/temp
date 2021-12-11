const { readFile, writeFile } = require('fs').promises
const util = require('util')
    // const readFileProm = util.promisify(readFile)
    // const writeFileProm = util.promisify(writeFile)
const start = async() => {

    try {
        const read1 = await readFile('./1.txt', 'utf8')
        const read2 = await readFile('./2.txt', 'utf8')
        console.log(read1, read2);
    } catch (error) {
        console.log(error);
    }

}
start()