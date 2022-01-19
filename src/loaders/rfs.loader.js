/**
  * Rotating File Stream: helps to create a file stream that can create
  * files on rotation.
  * @ https://www.npmjs.com/package/rotating-file-stream
  * */

/* npm imports */
const rfs = require('rotating-file-stream');

/* app imports */
const __base = global.approot;

module.exports = () => {
  /* configurations for the rotation */
  const rfsConfig = {
    interval: '1d',
    path: `${__base}/src/logs`,
    size: '100MB',
    maxFiles: 15,
    maxSize: '2GB',
  };

  /* helps to generate the file name */
  const pad = (num) => (num > 9 ? '' : '0') + num;
  const fileNameGenerator = (time, index) => {
    /* time and index are generated arguments from RFS. based on the value
       of these, file rotation process happens */
    if (!time) return 'app-log-file.log';

    const now = new Date();
    const year = now.getFullYear();
    const month = pad(now.getMonth() + 1);
    const date = pad(now.getDate());

    return `app-log-${year}-${month}-${date}-${index}-file.log`;
  };

  /* create the instance and return */
  const rotatingFileStreamLoader = rfs.createStream(fileNameGenerator, rfsConfig);
  return rotatingFileStreamLoader;
};
