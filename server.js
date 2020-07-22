const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('request made');
});

server.listen(8000,'localhost',()=>{
    console.log('Hello World!');
    console.log('listening for request on port 8000');
});

