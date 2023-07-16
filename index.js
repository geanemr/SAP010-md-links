
const fs = require("fs");
const path = require("path");
// import chalk from 'chalk';

let pathInput = process.argv[2];

fs.promises.readFile(pathInput)
.then(fileBuffer => {
  console.log(fileBuffer.toString());
  const fileExtension = path.extname(pathInput);
  console.log(fileExtension);
}).catch(error => {
  console.error(error.message);
 
});


