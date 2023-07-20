const { mdLinks } = require("./md-links");

const filePath = "./test.md";
const validate = process.argv[2] === "--validate";
const { yellow, magenta, cyan, white, } = require('colorette');

mdLinks(filePath, { validate: validate }, (error, links) => {
  if (error) {
    console.error(error);
  } else {
    links.forEach((link) => {
      console.log(cyan("href:" + link.href));
      console.log(magenta("text:" + link.text));
      console.log(yellow("file:" + link.file));
      if (validate) {
        console.log(white("status:" + link.status));
        console.log(white("ok:" + link.ok));
      }
      console.log("------------------------");
    });
  }
});


