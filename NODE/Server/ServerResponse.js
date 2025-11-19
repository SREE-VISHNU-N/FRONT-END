const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {

    res.setHeader('Content-Type','text/html')
    let path = './Server';

    console.log('Responded');

    if(req.url == '/'){
        res.statusCode = 200;
        path += '/index.html';
    }

    else if(req.url == '/home'){
        res.statusCode = 302;
        res.setHeader('Location','/'); 
        res.end();
    }     // this section for if try to enter home, it will redirect / page


    else if(req.url == '/about'){
        res.statusCode =200;
        path += '/about.html';
    }
    else if(req.url == '/joinus'){
        res.statusCode = 200;
        path += '/join.html';
    }
    else{
        path += '/notFound.html';
        res.statusCode = 404;
    }

    fs.readFile(path, (err, data) => {

        if (err) {
            console.log(err.message);
            res.end();
        }
        else {
            res.write(data);
            res.end();
        }

    })


})

server.listen(3000, 'localhost', () => {
    console.log('Listening');
})