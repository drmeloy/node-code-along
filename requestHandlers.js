const querystring = require('querystring');
const fs = require('fs');
const formidable = require('formidable');

const start = (response) => {
  console.log('Request handler "start" was called.');

  const body = /*html*/ `
  <html>
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  </head>
  <body>
  <form action="/upload" enctype="multipart/form-data" method="post">
  <input type="file" name="upload" multiple="multiple">
  <input type="submit" value="Upload file" />
  </form>
  </body>
  </html>
  `

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();
}

const upload = (response, request) => {
  console.log('Request handler "upload" was called.');
  const form = new formidable.IncomingForm();
  console.log('About to parse');
  form.parse(request, (error, fields, files) => {
    console.log('parsing done');
    fs.rename(files.upload.path, '/assets/test.JPG', function(error){
      if (error) {
        fs.unlink('./assets/test.JPG');
        fs.rename(files.upload.path, './assets/test.JPG');
      }
    });
  });
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Received image:<br/>")
  response.write("<img src='/show' />");
  response.end();
}

const show = response => {
  console.log('Requeset handler "show" was called.');
  response.writeHead(200, {"Content-Type": "image/png"});
  fs.createReadStream("./assets/test.JPG").pipe(response);
}

module.exports = { start, upload, show };
