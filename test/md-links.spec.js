const { findMdFileURLs, validateMdLink, mdLinks } = require("../src/md-links");
const fs = require("fs");
const path = require("path");

jest.mock("fs", () => ({
  readFile: jest.fn(),
}));

describe("findMdFileURLs", () => {
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
  it("should reject with an error when the file is empty", async () => {
    mockReadFileResolve("");
    await expect(findMdFileURLs("test.md")).rejects.toThrowError(
      "O arquivo está vazio"
    );
  });

  // Test case 2: Test when the file contains no URLs
  it("should resolve with an empty array when the file contains no URLs", async () => {
    const content = `
        This is some text without any URLs.
        It should not match the URL regex.
      `;
    mockReadFileResolve(content);
    const result = await findMdFileURLs("test.md");
    expect(result).toEqual([]);
  });

  // Test case 3: Test when the file contains URLs
  it("should resolve with an array of URLs when the file contains URLs", async () => {
    const content = `
        This is some text with a [URL 1](https://example.com) and [URL 2](https://test.com).
      `;
    mockReadFileResolve(content);
    const result = await findMdFileURLs("test.md");
    expect(result).toEqual([
      {
        href: "https://example.com",
        text: "URL 1",
        file: path.resolve("test.md"),
      },
      {
        href: "https://test.com",
        text: "URL 2",
        file: path.resolve("test.md"),
      },
    ]);
  });

  // Test case 4: Test when the file path is invalid (should reject with an error)
  it("should reject with an error when the file path is invalid", async () => {
    mockReadFileReject(new Error("File not found"));
    await expect(findMdFileURLs("invalid-file.md")).rejects.toThrowError(
      "Erro ao ler o arquivo: File not found"
    );
  });

  // Test case 5: Test when the file is not an MD file (should reject with an error)
  it("should reject with an error when the file is not an MD file", async () => {
    mockReadFileReject(new Error("File not found"));
    await expect(findMdFileURLs("invalid-file.txt")).rejects.toThrowError(
      "Nenhum arquivo md encontrado"
    );
  });
});

describe("validateMdLink", () => {
  it('should return an object with status: "ok" and ok: "ok" for a valid link', async () => {
    const url = "https://example.com";
    const text = "Example Link";
    const file = "/path/to/file.md";

    const result = await validateMdLink(url, text, file);

    expect(result).toStrictEqual({
      href: url,
      text: text,
      file: file,
      status: "ok",
      ok: "ok",
    });
  });

  it('should return an object with status: "error" and ok: "fail" for an invalid link', async () => {
    const url = "https://invalid-url";
    const text = "Invalid Link";
    const file = "/path/to/file.md";

    const result = await validateMdLink(url, text, file);
    expect(result).toStrictEqual({
      href: url,
      text: text,
      file: file,
      status: "error",
      ok: "fail",
    });
  });

  it('should return an object with status: "error" and ok: "fail" if fetch throws an error', async () => {
    const url = "failfail";
    const text = "Example Link";
    const file = "/path/to/failfail";

    const result = await validateMdLink(url, text, file);

    expect(result).toEqual({
      href: url,
      text: text,
      file: file,
      status: "error",
      ok: "fail",
    });
  });
});

describe("mdLinks' function tests", () => {
  it("should return the list of links on filePath when both validate and stats are false", async () => {
    filePath = "./test.md";
    options = { validate:false, stats:false };
    const expected = [
      {
        href: "https://nodejs.org/",
        text: "Node.js",
        file: "C:\\Users\\Matheus\\desktop\\geane\\projetos\\sap010-md-links\\test.md",
      },
      {
        href: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg",
        text: "md-links",
        file: "C:\\Users\\Matheus\\desktop\\geane\\projetos\\sap010-md-links\\test.md",
      },
      {
        href: "https://curriculum.laboratoria.la/pt/topics/javascript/04-arrays",
        text: "Arranjos",
        file: "C:\\Users\\Matheus\\desktop\\geane\\projetos\\sap010-md-links\\test.md",
      },
      {
        href: "https://brokenbrokenbroken",
        text: "Arranjos",
        file: "C:\\Users\\Matheus\\desktop\\geane\\projetos\\sap010-md-links\\test.md",
      },
    ]; 
    mdLinks(filePath, options).then(
      result => {
      expect(result).toEqual(expected);
      }
    )
  });
//   it("should return the list of links on filePath when validate is true and stats is false", async () => {
//     filePath = "./test.md";
//     options = { validate:true, stats:false };
//     const expected = [
//       {
//         href: 'https://nodejs.org/',
//         text: 'Node.js',
//         file: 'C:\\Users\\Matheus\\desktop\\geane\\projetos\\sap010-md-links\\test.md',
//         status: 'ok',
//       },
//       {
//         href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
//         text: 'md-links',
//         file: 'C:\\Users\\Matheus\\desktop\\geane\\projetos\\sap010-md-links\\test.md',
//         status: 'ok',
//         ok: 'ok'
//       },
//       {
//         href: 'https://curriculum.laboratoria.la/pt/topics/javascript/04-arrays',
//         text: 'Arranjos',
//         file: 'C:\\Users\\Matheus\\desktop\\geane\\projetos\\sap010-md-links\\test.md',
//         status: 'ok',
//         ok: 'ok'
//       },
//       {
//         href: 'https://brokenbrokenbroken',
//         text: 'Arranjos',
//         file: 'C:\\Users\\Matheus\\desktop\\geane\\projetos\\sap010-md-links\\test.md',
//         status: 'error',
//         ok: 'fail'
//       }
//     ]
//     mdLinks(filePath, options).then(
//       result => {
//       expect(result).toEqual(expected);
//       }
//     )
// });
// it("should return the list of links on filePath when validate is false and stats is true", async () => {
//   filePath = "./test.md";
//   options = { validate:false, stats:true };
//   const expected = [
//     {
//       href: 'https://nodejs.org/',
//       text: 'Node.js',
//       file: 'C:\\Users\\Matheus\\desktop\\geane\\projetos\\sap010-md-links\\test.md'
//     },
//     {
//       href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
//       text: 'md-links',
//       file: 'C:\\Users\\Matheus\\desktop\\geane\\projetos\\sap010-md-links\\test.md'
//     },
//     {
//       href: 'https://curriculum.laboratoria.la/pt/topics/javascript/04-arrays',
//       text: 'Arranjos',
//       file: 'C:\\Users\\Matheus\\desktop\\geane\\projetos\\sap010-md-links\\test.md'
//     },
//     {
//       href: 'https://brokenbrokenbroken',
//       text: 'Arranjos',
//       file: 'C:\\Users\\Matheus\\desktop\\geane\\projetos\\sap010-md-links\\test.md'
//     }
//   ]
//   mdLinks(filePath, options).then(
//     result => {
//     expect(result).toEqual(expected);
//     }
//   )
// });
// it("should return the list of links on filePath when both validate and stats are true", async () => {
//   filePath = "./test.md";
//   options = { validate:true, stats:true };
//   const expected = [
//     {
//       href: 'https://nodejs.org/',
//       text: 'Node.js',
//       file: 'C:\\Users\\Matheus\\desktop\\geane\\projetos\\sap010-md-links\\test.md',
//       status: 'ok',
//       ok: 'ok'
//     },
//     {
//       href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
//       text: 'md-links',
//       file: 'C:\\Users\\Matheus\\desktop\\geane\\projetos\\sap010-md-links\\test.md',
//       status: 'ok',
//       ok: 'ok'
//     },
//     {
//       href: 'https://curriculum.laboratoria.la/pt/topics/javascript/04-arrays',
//       text: 'Arranjos',
//       file: 'C:\\Users\\Matheus\\desktop\\geane\\projetos\\sap010-md-links\\test.md',
//       status: 'ok',
//       ok: 'ok'
//     },
//     {
//       href: 'https://brokenbrokenbroken',
//       text: 'Arranjos',
//       file: 'C:\\Users\\Matheus\\desktop\\geane\\projetos\\sap010-md-links\\test.md',
//       status: 'error',
//       ok: 'fail'
//     }
//   ]
//   mdLinks(filePath, options).then(
//     result => {
//     expect(result).toEqual(expected);
//     }
//   )
// });
});
