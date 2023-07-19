// const mdLinks = require('./md-links');

// const [, , filePath, command] = process.argv;

// if (!filePath) {
//   console.error('Por favor, forneça o caminho para o arquivo ou diretório.');
//   process.exit(1);
// }

// if (command === 'validate') {
//   mdLinks(filePath, { validate: true })
//     .then((links) => {
//       console.table(links);
//     })
//     .catch((error) => {
//       console.error(error.message);
//     });
// } else {
//   mdLinks(filePath)
//     .then((links) => {
//       console.table(links);
//     })
//     .catch((error) => {
//       console.error(error.message);
//     });
// }
