const http = require('http');


const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-type', 'test/plain');
    res.end('Hello');
});

server.listen(3000, ()=>{
    console.log('Server started on http://localhost:3000');
});