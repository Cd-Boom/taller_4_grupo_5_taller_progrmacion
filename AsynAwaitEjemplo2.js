const fs = require('fs');
const util = require ('util');
const read = util.promisify(fs.readFile);


const run = async() => {
    const data = await read('data.txt');
    console.log(data.toString());
}

run();