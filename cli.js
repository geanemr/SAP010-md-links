const { mdlinks } = require('./md-links.js');
const path = process.argv[2];
const options = {
  validate: process.argv.includes('--validate'),
  stats: process.argv.includes('--stats'),
  validateAndStats: process.argv.includes('--validate') && process.argv.includes('--stats'),
};
mdlinks(path, options)
.then((results) => {
if (options.validate) {
    results.forEach((link) => {
        console.log(chalk.yellow('File:' + link.file));
        console.log(chalk.magenta('Text:' + link.text));
        console.log(chalk.cyan('Link:' + link.links));
        console.log(chalk.green('Status HTTP:' + link.status))
        console.log(chalk.green('OK:' + link.ok))
        console.log('¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨')
})
}
});