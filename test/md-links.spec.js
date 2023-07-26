const {findMdFileURLs, validateMdLink, mdLinks} = require('../src/md-links');
const fs = require('fs');
const { it } = require('node:test');
const path = require('path');

jest.mock('fs', () => ({
    readFile: jest.fn(),
  }));
  
  describe('findMdFileURLs', () => {
    // Helper function to mock fs.readFile resolving with given content
    const mockReadFileResolve = (content) => {
      fs.readFile.mockImplementationOnce((path, encoding, callback) => {
        callback(null, content);
      });
    };
  
    // Helper function to mock fs.readFile rejecting with an error
    const mockReadFileReject = (error) => {
      fs.readFile.mockImplementationOnce((path, encoding, callback) => {
        callback(error);
      });
    };
  
    // Test case 1: Test when the file is empty
    it('should reject with an error when the file is empty', async () => {
      mockReadFileResolve('');
      await expect(findMdFileURLs('test.md')).rejects.toThrowError('O arquivo está vazio');
    });
  
    // Test case 2: Test when the file contains no URLs
    it('should resolve with an empty array when the file contains no URLs', async () => {
      const content = `
        This is some text without any URLs.
        It should not match the URL regex.
      `;
      mockReadFileResolve(content);
      const result = await findMdFileURLs('test.md');
      expect(result).toEqual([]);
    });
  
    // Test case 3: Test when the file contains URLs
    it('should resolve with an array of URLs when the file contains URLs', async () => {
      const content = `
        This is some text with a [URL 1](https://example.com) and [URL 2](https://test.com).
      `;
      mockReadFileResolve(content);
      const result = await findMdFileURLs('test.md');
      expect(result).toEqual([
        {
          href: 'https://example.com',
          text: 'URL 1',
          file: path.resolve('test.md'),
        },
        {
          href: 'https://test.com',
          text: 'URL 2',
          file: path.resolve('test.md'),
        },
      ]);
    });
  
    // Test case 4: Test when the file path is invalid (should reject with an error)
    it('should reject with an error when the file path is invalid', async () => {
      mockReadFileReject(new Error('File not found'));
      await expect(findMdFileURLs('invalid-file.md')).rejects.toThrowError('Erro ao ler o arquivo: File not found');
    });
  
    // Test case 5: Test when the file is not an MD file (should reject with an error)
    it('should reject with an error when the file is not an MD file', async () => {
      mockReadFileReject(new Error('File not found'));
      await expect(findMdFileURLs('invalid-file.txt')).rejects.toThrowError('Nenhum arquivo md encontrado');
    });
  });

  describe('validateMdLink', () => {
    it('should return an object with status: "ok" and ok: "ok" for a valid link', async () => {
      const url = 'https://example.com';
      const text = 'Example Link';
      const file = '/path/to/file.md';
  
      const result = await validateMdLink(url, text, file);
  
      expect(result).toStrictEqual({
        href: url,
        text: text,
        file: file,
        status: 'ok',
        ok: 'ok',
      });
    });
  
    it('should return an object with status: "error" and ok: "fail" for an invalid link', async () => {
      const url = 'https://invalid-url';
      const text = 'Invalid Link';
      const file = '/path/to/file.md';

  
      const result = await validateMdLink(url, text, file);
      expect(result).toStrictEqual({
        href: url,
        text: text,
        file: file,
        status: 'error',
        ok: 'fail',
      });
    });
  
    it('should return an object with status: "error" and ok: "fail" if fetch throws an error', async () => {
      const url = 'failfail';
      const text = 'Example Link';
      const file = '/path/to/failfail';
  
      const result = await validateMdLink(url, text, file);
  
      expect(result).toEqual({
        href: url,
        text: text,
        file: file,
        status: 'error',
        ok: 'fail',
      });
    });
  });


