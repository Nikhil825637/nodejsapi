
// const { write } = require('fs');
const http = require('http');
const data = require('./data');
// const { type } = require('os');
 http.createServer((req,resp)=>{
resp.writeHead(200,{'context-type':'application\json'});
resp.write(JSON.stringify(data));

resp.end();
 }).listen(4500);

