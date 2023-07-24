const fs = require("fs");
const path = require("path");
const { green, yellow, magenta, red, cyan, white, } = require('colorette');

function findMdFileURLs(filePath) {
  const absolutePath = path.resolve(filePath);
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (error, fileContent) => {
      if (error) {
        if (!filePath.endsWith(".md")) {
          reject(new Error(red("Nenhum arquivo md encontrado")));
        } else {
          reject(new Error(red("Erro ao ler o arquivo: " + error.message)));
        }
        return;
      }

      if (fileContent.trim().length === 0) {
        reject(new Error(red("O arquivo está vazio")));
        return;
      }

      const urlRegex = /\[([^[\]]*)]\((https?:\/\/[^\s?#.]+[^\s]*)\)/gm;
      const matches = [...fileContent.matchAll(urlRegex)];
      const results = matches.map((match) => ({
        href: match[2],
        text: match[1],
        file: absolutePath,
      }));
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

function statsLinksMdLinks(links){
  const linksSize = links.length;
  const uniqueLinks = new Set(links.map((link) => link.href)).size;
  let brokenLinks = []
  for(let i=0; i<links.length; i++){
     if (!brokenLinks.includes(links[i]) && links[i].ok !== "ok") {
     brokenLinks.push(links[i])
    }
  };
  const uniqueBrokenLinks = new Set(brokenLinks.map((link) => link.href)).size;
  return {
    total: linksSize,
    unique: uniqueLinks,
    broken: uniqueBrokenLinks,
  };
}

function showConsole(options, links) {
  if (!options.stats && !options.validate) {
    links.forEach((link) => {
      console.log(cyan("href: " + link.href));
      console.log(magenta("text: " + link.text));
      console.log(yellow("file: " + link.file));
      console.log("------------------------------")
    });
    } else if (!options.stats && options.validate) {
      links.forEach((link) => {
      console.log(cyan("href: " + link.href));
      console.log(magenta("text: " + link.text));
      console.log(yellow("file: " + link.file));
      console.log(white("status: " + link.status));
      console.log(white("ok: " + link.ok))
      console.log("------------------------------")
    })
    } else if (options.stats && !options.validate) {
      const { total, unique } = statsLinksMdLinks(links);
      console.log(green("Total links: " + total));
      console.log(yellow("Unique links: " + unique));
    } else if(options.stats && options.validate) {
      const { total, unique, broken } = statsLinksMdLinks(links);
      console.log(green("Total links: " + total));
      console.log(yellow("Unique links: " + unique));
      console.log(red("Broken links: " + broken));
    }
  }

  function mdLinks(filePath, options = { validate: false }) {
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
      .then((results) => {
        showConsole(options, results);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

module.exports = {
  findMdFileURLs,
  validateMdLink,
  mdLinks,
  showConsole,
  statsLinksMdLinks,
}