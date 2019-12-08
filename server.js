const http = require('http');
const url = require('url');

const start = (route, handle) => {
  const onRequest = (req, res) => {
    const pathname = url.parse(req.url).pathname;
    console.log('Request for ' + pathname + ' received.');

    route(handle, pathname, res);
  }
  
  http.createServer(onRequest).listen(8888);
  console.log('Server has started');
}
  
module.exports = { start };