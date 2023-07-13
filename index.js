// module.exports = () => {
//   // ...
// };

const {promises: {readFile}} = require("fs");
const path = require("path");

let pathInput = process.argv[2];

readFile(pathInput)
.then(fileBuffer => {
  console.log(fileBuffer.toString());
}).catch(error => {
  console.error(error.message);
 
});