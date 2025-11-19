/* const http = require('http');

const server = http.createServer((req, res)=>{
    console.log('Responded');

    console.log(req.url);
    console.log(req.method);

    res.setHeader('Content-Type','text/plain');
    res.write('This is sended response');
    res.end();
})

server.listen(3000,'localhost',()=>{
    console.log('Listening');
}) */

const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('Responded');

    console.log(req.url);
    console.log(req.method);

    res.setHeader('Content-Type','html');
    res.write('<h1>Hello this is response</h1>');
    res.end();
})

server.listen(3000,'localhost',()=>{
console.log('listening');
})