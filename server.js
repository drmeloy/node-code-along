const http = require('http');

const start = () => {
  const onRequest = (req, res) => {
    console.log('Request received');
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write('Hello world');
    res.end();
  };
  
  http.createServer(onRequest).listen(8888);
  console.log('Server has started');
};

module.exports = start;