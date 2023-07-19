const fs = require("fs");
const path = require("path");
const { error } = require("console");
// const chalk = require('chalk');

function findMdFileURLs(fileContent) {
  const urlRegex = /\[([^[\]]*)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const matches = [...fileContent.matchAll(urlRegex)];
  const results =  matches.map((match) => ({
    text: match[1],
    url: match[2],
    file: filePath,
  }));
  // console.table(results);
  return results;
}

function validateMdLink(url) {
  // console.log(url)
  return fetch(url.url)
    .then((response) => {
      console.log(response); /*esse console esta mostrando todos os objetos */
      return response;
    })
    .catch((error) => error);
}

function checkMdLinks(urls, validate) {
  if (validate) {
    return Promise.all(urls.map(validateMdLink)).then((results) => {
      // console.log(results)
      const validatedLinks = [];
      for (let i = 0; i < urls.length; i++) {
        validatedLinks.push({ url: urls[i], isValid: validate });
      }
      return validatedLinks;
    });
  } else {
    return Promise.all(urls).then((results) => {
      // console.log(results);
      const validatedLinks = [];
      for (let i = 0; i < urls.length; i++) {
        validatedLinks.push({ url: urls[i], isValid: validate });
      }
      return validatedLinks;
    });
  }
}

function readFileContent(filePath) {
  return fs.promises.readFile(filePath, "utf-8").catch((error) => {
    throw new Error(/*chalk.yellow*/ "Nenhum arquivo md encontrado");
  });
}

function mdLinks(filePath, options = { validate: false }) {
  // console.log(options);
  const absolutePath = path.resolve(filePath);
  return readFileContent(absolutePath)
    .then((fileContent) => {
      const urls = findMdFileURLs(fileContent);
      return checkMdLinks(urls, options.validate)
        .then((url) => url)
        .catch((error) => {
          throw new Error(`Error processing URL: ${error.message}`);
        });
    })
    .catch((error) => {
      throw new Error(`Error processing file: ${error.message}`);
    });
}

// let filePath = process.argv[2]; usar na CLI
const filePath = "./test.md";

const validate = process.argv[2];

mdLinks(filePath, { validate: validate })
  .then((links) => {
    /*console.log(validate)*/
    console.log(links);
  })
  .catch((error) => {
    console.error(error);
  });

module.exports = mdLinks;
