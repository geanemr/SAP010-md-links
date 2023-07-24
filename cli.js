const { mdLinks } = require("./md-links");

const filePath = "./test.md";
const options = {
    validate: process.argv.includes('--validate'),
    stats: process.argv.includes('--stats'),
    validateAndStats: process.argv.includes('--validate') && process.argv.includes('--stats'),
  }

mdLinks(filePath, options);


