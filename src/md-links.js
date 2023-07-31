const fs = require("fs");
const path = require("path");

function findMdFileURLs(filePath) {
  const absolutePath = path.resolve(filePath);
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (error, fileContent) => {
      if (error) {
        if (!filePath.endsWith(".md")) {
          reject(new Error("Nenhum arquivo md encontrado"));
        } else {
          reject(new Error("Erro ao ler o arquivo: " + error.message));
        }
        return;
      }

      // if (fileContent.trim().length === 0) {
      //   reject(new Error("O arquivo está vazio"));
      //   return;
      // }

      const urlRegex = /\[([^[\]]*)]\((https?:\/\/[^\s?#.]+[^\s]*)\)/gm;
      const matches = [...fileContent.matchAll(urlRegex)];
      const results = matches.map((match) => ({
        href: match[2],
        text: match[1],
        file: absolutePath,
      }));
      console.log("teste 1")
      resolve(results);
    });
  });
}

function validateMdLink(url, text, file) {
  return fetch(url)
    .then((response) => ({
      href: url,
      text: text,
      file: file,
      status: response.status ? "ok" : "error",
      ok: response.ok ? "ok" : "fail",
    }))
    .catch((error) => ({
      href: url,
      text: text,
      file: file,
      status: "error",
      ok: "fail",
    }));
}

  function mdLinks(filePath, options = { validate: false }) {
    console.log(options.validate)
    const absolutePath = path.resolve(filePath);
    return findMdFileURLs(absolutePath)
      .then((urls) => {       
        if (options.validate) {
          let promises = urls.map(url => validateMdLink(url.href, url.text, url.file));
          return Promise.all(promises);
        } else {
          return urls;
        }
      })
      .catch((error) => {
        // console.log("catch")
        console.error('Error:', error);
      });
  }

module.exports = {
  findMdFileURLs,
  validateMdLink,
  mdLinks
}