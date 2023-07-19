const fs = require("fs");
const path = require("path");
const { green, yellow, magenta, red, cyan } = require('colorette');

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
        status: response.status,
        ok: response.ok ? "ok" : "fail",
      });
    })
    .catch((error) => {
      callback(null, {
        href: url,
        text: text,
        file: file,
        status: "Error",
        ok: "fail",
      });
    });
}

function mdLinks(filePath, options = { validate: false }, callback) {
  const absolutePath = path.resolve(filePath);
  findMdFileURLs(absolutePath, (error, urls) => {
    if (error) {
      callback(error);
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
            callback(null, linkInfos);
          }
        });
      });
    } else {
      callback(null, urls);
    }
  });
}

const filePath = "./test.md";
const validate = process.argv[2] === "--validate";

mdLinks(filePath, { validate: validate }, (error, links) => {
  if (error) {
    console.error(error);
  } else {
    links.forEach((link) => {
      console.log(cyan("href:" + link.href));
      console.log(magenta("text:" + link.text));
      console.log(yellow("file:" + link.file));
      if (validate) {
        console.log(green("status:" + link.status));
        console.log(green("ok:" + link.ok));
      }
      console.log("------------------------");
    });
  }
});

