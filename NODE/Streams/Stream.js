/* const fs = require('fs');

const readStream = fs.createReadStream('./Streams/BigFile.txt');


readStream.on('data',(buffer)=>{
    console.log(buffer.toString());
}) */

const fs = require('fs');

const readstream = fs.createReadStream('./Streams/BigFile.txt');
const writestream = fs.createWriteStream('./Streams/CopyFile.txt');

readstream.on('data', (buffer)=>{
    writestream.write(buffer);
})