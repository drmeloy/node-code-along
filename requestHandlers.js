const exec = require('child_process').exec;

const start = (response) => {
  console.log('Request handler "start" was called.');

  const body = /*html*/ `
    <html>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    </head>
    <body>
    <form action='/upload' method='post'>
    <input type='submit' value='Submit text' />
    </form>
    </body>
    </html>
  `;
  
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write(body);
  response.end();
}

const upload = (response) => {
  console.log('Request handler "upload" was called.');
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload");
  response.end();
}

module.exports = { start, upload };
