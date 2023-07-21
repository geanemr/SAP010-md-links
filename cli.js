const { mdLinks } = require("./md-links");

const filePath = "./test.md";
const validate = process.argv[2] === "--validate";
const stats = process.argv[3] === "--stats";
const options = {validate, stats};

mdLinks(filePath, options);


