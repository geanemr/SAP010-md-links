const fs = require("fs");
const path = require("path");
const { green, yellow, magenta, red, cyan, white, } = require('colorette');

function findMdFileURLs(filePath, callback) {
  fs.readFile(filePath, "utf-8", (error, fileContent) => {
    if (error) {
      callback(new Error(red("Nenhum arquivo md encontrado")));
      return;
    }

    const urlRegex = /\[([^[\]]*)]\((https?:\/\/[^\s?#.]+[^\s]*)\)/gm;
    const matches = [...fileContent.matchAll(urlRegex)];
    const results = matches.map((match) => ({
      href: match[2],
      text: match[1],
      file: filePath,
    }));
    callback(null, results);
  });
}

function validateMdLink(url, text, file, callback) {
  if (!url) {
    callback(null, {
      href: url,
      text: text,
      file: file,
      status: "Error",
      ok: "fail",
    });
    return;
  }

  fetch(url)
    .then((response) => {
      callback(null, {
        href: url,
        text: text,
        file: file,
        status: green(response.status),
        ok: response.ok ? green("ok") : "fail",
      });
    })
    .catch((error) => {
      callback(null, {
        href: url,
        text: text,
        file: file,
        status: red("Error"),
        ok: red("Fail"),
      });
    });
}
function showConsole (options, links) {
  // criar novo if, se ambos forem usados juntos
  if (!options.stats){
    links.forEach((link) => {
      console.log(cyan("href:" + link.href));
      console.log(magenta("text:" + link.text));
      console.log(yellow("file:" + link.file));
      if (options.validate === true) {
        console.log(white("status:" + link.status));
        console.log(white("ok:" + link.ok));
      }
    console.log("------------------------");
    });
  }
  if (options.stats) {
    console.log("sou o stats")
 } 
}
function mdLinks(filePath, options = { validate: false }) {
  const absolutePath = path.resolve(filePath);
  findMdFileURLs(absolutePath, (error, urls) => {
    if (error) {
      console.error(error);
      return;
    }

    if (options.validate) {
      let processedCount = 0;
      const linkInfos = [];

      urls.forEach((url) => {
        validateMdLink(url.href, url.text, url.file, (error, linkInfo) => {
          linkInfos.push(linkInfo);
          processedCount++;

          if (processedCount === urls.length) {
            showConsole(options, linkInfos);
          }
        });
      });
    } else {
      showConsole(options, urls);
    }
  });
}


module.exports = {
  findMdFileURLs,
  validateMdLink,
  mdLinks,
}