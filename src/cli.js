const { mdLinks } = require("./md-links");
const { green, yellow, magenta, red, cyan, white, } = require('colorette');

const filePath = "./test.md";
const options = {
    validate: process.argv.includes('--validate'),
    stats: process.argv.includes('--stats'),
    validateAndStats: process.argv.includes('--validate') && process.argv.includes('--stats'),
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

mdLinks(filePath, options)
.then((results) => {
  console.log(results)
    // showConsole(options, results);
  })

