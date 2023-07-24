const {findMdFileURLs} = require('../md-links');

describe('findMdFileURLs', () => {
  it('deve extrair links corretamente de arquivos markdown', () => {
      const mdFiles = ['arquivo.md', 'arquivo2.md'];
      const filePath = './caminho /de/diretório';
      const file1Content = '[Link1](https://link1.com)';
      const file2Content = '[Link2](https://link2.com)';
      const expectedLinks = [
          { text: 'Link1', href: 'https://link1.com', file: filePath.join(filePath, 'arquivo.md') },
          { text: 'Link2', href: 'https://link2.com', file: filePat.join(filePath, 'arquivo2.md') },
      ];

      jest.spyOn(fs, 'readFile').mockResolvedValueOnce(file1Content).mockResolvedValueOnce(file2Content);

      return findMdFileURLs(mdFiles, filePath).then((result) => {
          expect(result).toEqual(expectedLinks);
      });
  });
});
