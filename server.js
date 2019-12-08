const http = require('http');
const url = require('url');

const start = () => {
  const onRequest = (req, res) => {
    const pathname = url.parse(request.url).pathname;
    console.log('Request for' + pathname + 'received.');
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write('Hello world');
    res.end();
  }
  
  http.createServer(onRequest).listen(8888);
  console.log('Server has started');
}
  
module.exports = { start };