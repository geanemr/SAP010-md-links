const fs = require('fs').promises;
const path = require('path');
const axios = require('axios');
// const chalk = require('chalk');

function findMdFileURLs(fileContent) {
  const urlRegex = /\[([^\]]+)\]\s*\(([^)]+)\)/g;
  const matches = [...fileContent.matchAll(urlRegex)];
  return matches.map((match) => match[2]);
}

function validateMdLink(url) {
  return axios
    .get(url)
    .then((response) => response.status === 200)
    .catch(() => false);
}

function validateMdLinks(urls) {
  return Promise.all(urls.map(validateMdLink)).then((results) => {
    const validatedLinks = [];
    for (let i = 0; i < urls.length; i++) {
      validatedLinks.push({ url: urls[i], isValid: results[i] });
    }
    return validatedLinks;
  });
}

function readFileContent(filePath) {
  return fs
    .readFile(filePath, 'utf-8')
    .catch((error) => {
      throw new Error(/*chalk.yellow*/('Nenhum arquivo md encontrado'));
    });
}

function mdLinks(filePath, options = { validate: false }) {
  const absolutePath = path.resolve(filePath);
  return readFileContent(absolutePath)
    .then((fileContent) => {
      const urls = findMdFileURLs(fileContent);

      if (options.validate) {
        return validateMdLinks(urls);
      }

      return urls.map((url) => ({ url }));
    })
    .catch((error) => {
      throw new Error(`Error processing file: ${error.message}`);
    });
}

// let filePath = process.argv[2]; usar na CLI
let filePath = './test.md';

mdLinks(filePath, { validate: true })
  .then((links) => {
    console.log(links);
  })
  .catch((error) => {
    console.error(error);
  });

module.exports = mdLinks;






