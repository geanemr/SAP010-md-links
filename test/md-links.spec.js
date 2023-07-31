const { findMdFileURLs, validateMdLink, mdLinks } = require("../src/md-links");
const path = require("path");

describe("findMdFileURLs", () => {
 
  // Test case 1: Test when the file contains no URLs
  it("should resolve with an empty array when the file contains no URLs", async () => {
    const result = await findMdFileURLs("./test/test2.md");
    expect(result).toEqual([]);
  });

  // Test case 2: Test when the file contains URLs
  it("should resolve with an array of URLs when the file contains URLs", async () => {
    const absolutePath = path.resolve("./test/test.md")
    const result = await findMdFileURLs("./test/test.md");
    expect(result).toEqual([
      {
        href: "https://nodejs.org/",
        text: "Node.js",
        file: absolutePath,
      },
      {
        href: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg",
        text: "md-links",
        file: absolutePath,
      },
      {
        href: "https://curriculum.laboratoria.la/pt/topics/javascript/04-arrays",
        text: "Arranjos",
        file: absolutePath,
      },
      {
        href: "https://brokenbrokenbroken",
        text: "Arranjos",
        file: absolutePath,
      },
    ]);
  });

  // Test case 3: Test when the file path is invalid (should reject with an error)
  it("should reject with an error when the file path is invalid", async () => {
    await expect(findMdFileURLs("invalid-file.md")).rejects.toThrowError(
      "Erro ao ler o arquivo: ENOENT: no such file or directory, open 'C:\\Users\\Matheus\\desktop\\geane\\projetos\\sap010-md-links\\invalid-file.md'"
    );
  });

  // Test case 4: Test when the file is not an MD file (should reject with an error)
  it("should reject with an error when the file is not an MD file", async () => {
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
  const absolutePath = path.resolve("./test/test.md")
  it("should return the list of links on filePath when both validate and stats are false", async () => {
    options = { validate: false, stats: false };
    const expected = [
      {
        href: "https://nodejs.org/",
        text: "Node.js",
        file: absolutePath,
      },
      {
        href: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg",
        text: "md-links",
        file: absolutePath,
      },
      {
        href: "https://curriculum.laboratoria.la/pt/topics/javascript/04-arrays",
        text: "Arranjos",
        file: absolutePath,
      },
      {
        href: "https://brokenbrokenbroken",
        text: "Arranjos",
        file: absolutePath,
      },
    ];
    mdLinks(absolutePath, options).then((result) => {
      expect(result).toEqual(expected);
    });
  });
  it("should return the list of links on filePath when validate is true and stats is false", async () => {
    options = { validate: true, stats: false };
    const expected = [
      {
        href: "https://nodejs.org/",
        text: "Node.js",
        file: absolutePath,
        status: "ok",
      },
      {
        href: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg",
        text: "md-links",
        file: absolutePath,
        status: "ok",
        ok: "ok",
      },
      {
        href: "https://curriculum.laboratoria.la/pt/topics/javascript/04-arrays",
        text: "Arranjos",
        file: absolutePath,
        status: "ok",
        ok: "ok",
      },
      {
        href: "https://brokenbrokenbroken",
        text: "Arranjos",
        file: absolutePath,
        status: "error",
        ok: "fail",
      },
    ];
    mdLinks(absolutePath, options).then((result) => {
      expect(result).toEqual(expected);
    });
  });
  it("should return the list of links on filePath when validate is false and stats is true", async () => {
    options = { validate: false, stats: true };
    const expected = [
      {
        href: "https://nodejs.org/",
        text: "Node.js",
        file: absolutePath,
      },
      {
        href: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg",
        text: "md-links",
        file: absolutePath,
      },
      {
        href: "https://curriculum.laboratoria.la/pt/topics/javascript/04-arrays",
        text: "Arranjos",
        file: absolutePath,
      },
      {
        href: "https://brokenbrokenbroken",
        text: "Arranjos",
        file: absolutePath,
      },
    ];
    mdLinks(absolutePath, options).then((result) => {
      expect(result).toEqual(expected);
    });
  });
  it("should return the list of links on filePath when both validate and stats are true", async () => {
    options = { validate: true, stats: true };
    const expected = [
      {
        href: "https://nodejs.org/",
        text: "Node.js",
        file: absolutePath,
        status: "ok",
        ok: "ok",
      },
      {
        href: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg",
        text: "md-links",
        file: absolutePath,
        status: "ok",
        ok: "ok",
      },
      {
        href: "https://curriculum.laboratoria.la/pt/topics/javascript/04-arrays",
        text: "Arranjos",
        file: absolutePath,
        status: "ok",
        ok: "ok",
      },
      {
        href: "https://brokenbrokenbroken",
        text: "Arranjos",
        file: absolutePath,
        status: "error",
        ok: "fail",
      },
    ];
     const result = await mdLinks(absolutePath, options)
      expect(result).toEqual(expected);
      
  });
});
