const { mdLinks } = require("./md-links");
const { red, cyan, blueBright } = require('colorette');

const filePath = "./test.md";
const options = {
    validate: process.argv.includes('--validate'),
    stats: process.argv.includes('--stats'),
    validateAndStats: process.argv.includes('--validate') && process.argv.includes('--stats'),
  }

function showConsole(options, links) {
    if (!options.stats && !options.validate) {
      links.forEach((link) => {
        console.log(blueBright("• href: " + (cyan(link.href))));
        console.log(blueBright("• text: " + (cyan(link.text))));
        console.log(blueBright("• file: " + (cyan(link.file))));
        console.log("-------------------------------------------------------------")
      });
      } else if (!options.stats && options.validate) {
        links.forEach((link) => {
        console.log(blueBright("• href: " + (cyan(link.href))));
        console.log(blueBright("• text: " + (cyan(link.text))));
        console.log(blueBright("• file: " + (cyan(link.file))));
        console.log(blueBright("• status: " + (link.status === "error" ? (red(link.status)) : (cyan(link.status)))));
        console.log(blueBright("• ok: " + (link.ok === "fail" ? (red(link.ok)) : (cyan(link.ok)))));
        console.log("-------------------------------------------------------------")
      })
      } else if (options.stats && !options.validate) {
        const { total, unique } = statsLinksMdLinks(links);
        console.log(blueBright("• Total links: " + (cyan(total))));
        console.log(blueBright("• Unique links: " + (cyan(unique))));
      } else if(options.stats && options.validate) {
        const { total, unique, broken } = statsLinksMdLinks(links);
        console.log(blueBright("• Total links: " + (cyan(total))));
        console.log(blueBright("• Unique links: " + (cyan(unique))));
        console.log(blueBright("• Broken links: " + (red(broken))));
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
    showConsole(options, results);
    // console.log(results)
  })

