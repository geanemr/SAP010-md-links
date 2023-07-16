// module.exports = () => {
//   // ...
// };

const fs = require("fs");
const path = require("path");

let pathInput = process.argv[2];

fs.promises.readFile(pathInput)
.then(fileBuffer => {
  console.log(fileBuffer.toString());
}).catch(error => {
  console.error(error.message);
 
});
