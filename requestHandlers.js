const start = () => {
  console.log('Request handler "start" was called.');

  const sleep = milliseconds => {
    const startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliseconds);
  }

  sleep(10000);
  return 'Hello Start';
}

const upload = () => {
  console.log('Request handler "upload" was called.');

  return "Hello Upload";
}

module.exports = { start, upload };
