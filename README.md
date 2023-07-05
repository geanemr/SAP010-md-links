<div align="center">

# Markdown Links
</div>

<div align="center">
  <br>
  Status do projeto: Em andamento 🚧 <br>

---
## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
* [4. Considerações gerais](#4-considerações-gerais)
* [5. Critérios de aceitação mínimos do projeto](#5-criterios-de-aceitação-mínimos-do-projeto)
* [6. Entregáveis](#6-entregáveis)
* [7. Hacker edition](#7-hacker-edition)
* [8. Guias, dicas e leituras complementares](#8-guias-dicas-e-leituras-complementares)
* [9. Checklist](#9-checklist)
* [10. Dividindo o problema - babies steps](#10-dividindo-o-problema)

***

## 1. Prefácio

[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem de marcação
muito popular entre os programadores. É usada em muitas plataformas que
manipulam texto (GitHub, fórum, blogs e etc) e é muito comum encontrar arquivos
com este formato em qualquer repositório (começando pelo tradicional
`README.md`).

Os arquivos `Markdown` normalmente contém _links_ que podem estar
quebrados, ou que já não são válidos, prejudicando muito o valor da
informação que está ali.

Uma comunidade open source nos propôs criar uma ferramenta, usando
[Node.js](https://nodejs.org/), que leia e analise arquivos no formato
`Markdown`, para verificar os arquivos que contenham links e mostrar algumas
estatísticas.

![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)

## 2. Resumo do projeto

Neste projeto, será criado uma ferramenta de linha de comando (CLI) assim como
a sua própria biblioteca (library) em Javascript.

Desta vez, vamos ficar um pouco longe do navegador para construir um programa
executado com Node.js. Iremos aprender sobre processos
(`process.env`, `process.argv`, ...),como interagir com sistemas de arquivos,
como fazer consultas de rede, etc.

[Node.js](https://nodejs.org/pt-br/) é um ambiente de execução para JavaScript
construído com o [motor de JavaScript V8 do
Chrome](https://developers.google.com/v8/). Ele vai nos permitir executar o
JavaScript no nosso sistema operacional, seja no seu computador ou em um
servidor, o que nos abre portas para poder interagir com sistemas, arquivos,
redes e etc.

Desenvolver sua própria biblioteca é uma experiência fundamental para qualquer
desenvolvedora, pois te obriga a pensar na interface (API) dos seus _módulos_ e
como ela será usada por outras desenvolvedoras. Você deve levar em conta as
peculiaridades da linguagem, convenções e boas práticas.

## 3. Objetivos de aprendizagem

Reflita e depois enumere os objetivos que quer alcançar e aplique no seu projeto. Pense nisso para decidir sua estratégia de trabalho.

### JavaScript

- [ ] **Diferenciar entre tipos de dados primitivos e não primitivos**

- [ ] **Arrays (arranjos)**

  <details><summary>Links</summary><p>

  * [Arranjos](https://curriculum.laboratoria.la/pt/topics/javascript/04-arrays)
  * [Array - MDN](https://developer.mozilla.org//pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/)
  * [Array.prototype.sort() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  * [Array.prototype.forEach() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  * [Array.prototype.map() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  * [Array.prototype.filter() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  * [Array.prototype.reduce() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
</p></details>

- [ ] **Objetos (key, value)**

  <details><summary>Links</summary><p>

  * [Objetos em JavaScript](https://curriculum.laboratoria.la/pt/topics/javascript/05-objects/01-objects)
</p></details>

- [ ] **Uso de condicionais (if-else, switch, operador ternário, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estruturas condicionais e repetitivas](https://curriculum.laboratoria.la/pt/topics/javascript/02-flow-control/01-conditionals-and-loops)
  * [Tomando decisões no seu código — condicionais - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [ ] **Funções (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funções (controle de fluxo)](https://curriculum.laboratoria.la/pt/topics/javascript/02-flow-control/03-functions)
  * [Funções clássicas](https://curriculum.laboratoria.la/pt/topics/javascript/03-functions/01-classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/pt/topics/javascript/03-functions/02-arrow)
  * [Funções — blocos reutilizáveis de código - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [ ] **Recursão**

  <details><summary>Links</summary><p>

  * [Píldora de recursão - YouTube Laboratoria Developers (espanhol)](https://www.youtube.com/watch?v=lPPgY3HLlhQ)
  * [Recursão o Recursividade - Laboratoria Developers em Medium (espanhol)](https://medium.com/laboratoria-developers/recursi%C3%B3n-o-recursividad-ec8f1a359727)
</p></details>

- [ ] **Módulos de CommonJS**

  <details><summary>Links</summary><p>

  * [Modules: CommonJS modules - Node.js Docs](https://nodejs.org/docs/latest/api/modules.html)
</p></details>

- [ ] **Diferença entre expressões (expressions) e declarações (statements)**

- [ ] **Callbacks**

  <details><summary>Links</summary><p>

  * [Função Callback - MDN](https://developer.mozilla.org/pt-BR/docs/Glossario/Callback_function)
</p></details>

- [ ] **Promessas**

  <details><summary>Links</summary><p>

  * [Promise - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  * [How to Write a JavaScript Promise - freecodecamp (em inglês)](https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/)
</p></details>

- [ ] **Testes unitários (unit tests)**

  <details><summary>Links</summary><p>

  * [Introdução ao Jest - Documentação oficial](https://jestjs.io/docs/pt-BR/getting-started)
</p></details>

- [ ] **Testes assíncronos**

  <details><summary>Links</summary><p>

  * [Testando Código Assíncrono - Documentação oficial](https://jestjs.io/docs/pt-BR/asynchronous)
</p></details>

- [ ] **Uso de mocks e espiões**

  <details><summary>Links</summary><p>

  * [Simulações Manuais - Documentação oficial](https://jestjs.io/docs/pt-BR/manual-mocks)
</p></details>

- [ ] **Teste de compatibilidade em vários ambientes de execução**

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descritivos (Nomenclatura e Semântica)**

### Node.js

- [ ] **Instalar e usar módulos com npm**

  <details><summary>Links</summary><p>

  * [Sitio oficial de npm (em inglês)](https://www.npmjs.com/)
</p></details>

- [ ] **Configuração do package.json**

  <details><summary>Links</summary><p>

  * [package.json - Documentação oficial (em inglês)](https://docs.npmjs.com/files/package.json)
</p></details>

- [ ] **Configuração do npm-scripts**

  <details><summary>Links</summary><p>

  * [scripts - Documentação oficial (em inglês)](https://docs.npmjs.com/misc/scripts)
</p></details>

- [ ] **process (env, argv, stdin-stdout-stderr, exit-code)**

  <details><summary>Links</summary><p>

  * [Process - Documentação oficial (em inglês)](https://nodejs.org/api/process.html)
</p></details>

- [ ] **File system (fs, path)**

  <details><summary>Links</summary><p>

  * [File system - Documentação oficial (em inglês)](https://nodejs.org/api/fs.html)
  * [Path - Documentação oficial (em inglês)](https://nodejs.org/api/path.html)
</p></details>

### Controle de Versões (Git e GitHub)

- [ ] **Git: Instalação e configuração**

- [ ] **Git: Controle de versão com git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **Git: Integração de mudanças entre ramos (branch, checkout, fetch, merge, reset, rebase, tag)**

- [ ] **GitHub: Criação de contas e repositórios, configuração de chave SSH**

- [ ] **GitHub: Colaboração pelo Github (branches | forks | pull requests | code review | tags)**

- [ ] **GitHub: Organização pelo Github (projects | issues | labels | milestones | releases)**

### HTTP

- [ ] **Consulta ou solicitação (request) e resposta (response).**

  <details><summary>Links</summary><p>

  * [Visão geral do protocolo HTTP - MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Overview)
  * [Mensagens HTTP - MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Messages)
</p></details>

- [ ] **Códigos de status de HTTP**

  <details><summary>Links</summary><p>

  * [Códigos de status de respostas HTTP - MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)
  * [The Complete Guide to Status Codes for Meaningful ReST APIs - dev.to](https://dev.to/khaosdoctor/the-complete-guide-to-status-codes-for-meaningful-rest-apis-1-5c5)
</p></details>

## 4. Considerações gerais

* Este projeto deve ser feito individualmente.

* O intervalo de tempo estimado para concluir o projeto é de 4 a 5 Sprints.

* A biblioteca e script executável (ferramenta de linha de comando - CLI) devem
  ser implementados em JavaScript para serem executadas com Node.JS.
  **É permitido usar bibliotecas externas**.

* O seu módulo deve ser instalável via `npm install <github-user>/md-links`. O
  módulo deve incluir um _executável_ que pode ser chamado tanto por linha de
  comando quanto importado com `require` para ser usado em seu código.

* Os testes unitários devem cobrir no mínimo 70% dos _statements_, _functions_,
  _lines_ e _branches_. Recomendamos que explore o [Jest](https://jestjs.io/)
  para as suas provas unitárias.

* Neste projeto não é permitido utilizar `async/await`.

* Para este projeto, sugerimos que você **não use** a versão síncrona
da função de leitura de arquivo, `readFileSync`, e tente resolver esse
desafio de forma assíncrona.

* Para este projeto é opcional o uso de ES modules `(import/export)`. Caso
  você decida utilizá-lo deverá criar um script de `build` no `package.json`
  para que seja transformado em `requires` e `module.exports` com ajuda do Babel.

* Para diminuir a complexidade de seu algoritmo recursivo, recomendamos usar
a versão síncrona da função de leitura do diretórios, `readdirSync`.

## 5. Critérios de aceitação mínimos do projeto

Para começar este projeto você deverá fazer um _fork_ e _clonar_ este
repositório.

Antes de começar o código, é necessário criar um plano de ação. Ele deve estar
detalhado no `README.md` do seu repositório e em uma série de _issues_ e
_milestones_ para priorizar e organizar o trabalho, e para fazer um
acompanhamento do seu progresso.

Dentro de cada _milestone_ serão criados e atribuidos as _issues_
que considerar necessários.

### Arquivos do projeto

* `README.md` com descrição do módulo, instruções de instalação e uso,
  documentação da API e exemplos. Tudo que for relevante para qualquer
  desenvolvedora saber como utilizar a sua biblioteca sem inconvenientes.
* `index.js`: este arquivo deve exportar a função `mdLinks`.
* `package.json` deve possuir o nome, versão, descrição, autor, licença,
  dependências e scripts (pretest, test e etc).
* `.editorconfig` com a configuração para o editor de texto. Este arquivo não
  deve ser alterado.
* `.eslintrc` com a configuração para o linter. Este arquivo contém uma
configuração básica para ESLint, se quiser colocar regras adicionais
como Airbnb, você deverá modificar este arquivo.
* `.gitignore` para ignorar o `node_modules` e outras pastas que não devem
  ser incluídas no controle de versão (`git`).
* `test/md-links.spec.js` deve conter os testes unitários para a função
  `mdLinks()`. A sua implementação deve rodar estes testes.

## Este proyecto consta de DOS partes

### 1) JavaScript API

O módulo deve poder ser **importado** em outros scripts Node.js e deve oferecer a
seguinte interface:

#### `mdLinks(path, options)`

##### Argumentos

* `path`: Rota absoluta ou relativa ao arquivo ou diretório. Se a rota passada é
  relativa, deve resolver como sendo relativa ao diretório onde foi chamada -
  _current working directory_
* `options`: Um objeto com a seguinte propriedade:
  - `validate`: Um booleano que determina se deseja validar os links
    encontrados.
  - `stats`: Booleano que determina se deseja obter um output
    com informações estatísticas gerais.

##### Valor de retorno

A função deve **retornar uma promessa** (`Promise`) que
**resolve um array** (`Array`) e
objetos(`Object`), onde cada objeto representa um link, contendo as seguintes
propriedades:

Com `validate:false` :

* `href`: URL encontrada.
* `text`: Texto que irá aparecer dentro de um link (`<a>`).
* `file`: Rota do arquivo onde foi encontrado o link.

Com `validate:true` :

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.
* `status`: Código de resposta HTTP.
* `ok`: Mensagem `fail` em caso de falha ou `ok` em caso de sucesso.

#### Exemplo

```js
const mdLinks = require("md-links");

mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);

mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }, ...]
  })
  .catch(console.error);

mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);
```

### 2) CLI (Command Line Interface - Interface de Linha de Comando)

O executável da nossa aplicação deve poder ser executado da seguinte maneira,
através do **terminal**:

`md-links <path-to-file> [options]`

Por exemplo:

```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link de algo
./some/example.md https://outra-coisa-.net/algum-doc.html algum doc
./some/example.md http://google.com/ Google
```

O comportamento padrão não deve validar se as URLs respondem ok ou não, somente
deve identificar o arquivo Markdown (a partir da rota que recebeu como
argumento), analisar o arquivo Markdown e imprimir os links que vão sendo
encontrados, junto com a rota do arquivo onde aparece e o texto encontrado
dentro do link (truncado 50 caracteres).

#### Options

##### `--validate`

Se passamos a opção `--validate`, o módulo deve fazer uma requisição HTTP para
verificar se o link funciona ou não. Se o link resultar em um redirecionamento a
uma URL que responde ok, então consideraremos o link como ok.

Por exemplo:

```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link de algo
./some/example.md https://outra-coisa-.net/algum-doc.html fail 404 algum doc
./some/example.md http://google.com/ ok 301 Google
```

Vemos que o _output_ neste caso inclui a palavra `ok` e `fail` depois da URL,
assim como o status da resposta recebida à requisição HTTP feita pela URL.

##### `--stats`

Se passamos a opção `--stats` o output (saída) será um texto com estatísticas
básicas sobre os links.

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

Também podemos combinar `--stats` e `--validate` para obter estatísticas que
necessitem dos resultados da validação.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```

## 6. Entregáveis

O módulo deve ser instalável via `npm install <github-user>/md-links`. Este
módulo deve incluir **um executável** que pode ser chamado tanto por linha de
comando, como também possa ser importado com `require` para usá-lo no seu código.

## 7. Hacker edition

As seções chamadas _Hacker Edition_ são **opcionais**. É para caso você tenha
**terminado** todos os requisitos anteriores e ainda tenha tempo disponível,
e pode assim aprofundar e/ou exercitar mais sobre os objetivos de
aprendizagem deste projeto.

* Poder adicionar uma propriedade `line` a cada objeto `link` indicando em que
  linha do arquivo está o link.
* Poder agregar mais estatísticas.
* Integração contínua com Travis ou Circle CI.

***

## 8. Guias, dicas e leituras complementares

Participe do canal do Slack
[#project-md-links](https://claseslaboratoria.slack.com/archives/C03T1E5TJCQ)
para conversar e pedir ajuda no projeto.

### FAQs

#### Como faço para que o meu módulo seja instalável pelo GitHub?

Para que o módulo seja instalável pelo GitHub você tem que:

* Deixar o seu repo público
* Ter um `package.json` válido

Com o comando `npm install <githubname>/<reponame>` podemos instalar diretamente
pelo GitHub. Ver [docs oficiais dp `npm install`
aqui](https://docs.npmjs.com/cli/install)

Por exemplo, o
[`course-parser`](https://github.com/Laboratoria/course-parser) que é
usado para o currículo não está publicado nos registros públicos do NPM, com
isso temos que instalar diretamente pelo GitHub com o commando `npm install Laboratoria/course-parser`.

### Sugestões de implementação

A implementação deste projeto tem várias partes: ler do sistema de arquivos,
receber argumentos através da linha de comando, analisar um teste, fazer
consultas HTTP, etc. Tudo isso pode ser feito de muitas formas, tanto com
bibliotecas quanto com JS puro.

Por exemplo, o _parse_ (análise) do Markdown para extrair os links poderia ser
criado das seguintes maneiras (todas são válidas):

* Usando um _módulo_ como
  [markdown-it](https://github.com/markdown-it/markdown-it), que nos devolve um
  array de _tokes_ que utilizamos para identificar os links.
* Seguindo outro caminho, poderíamos usar [expressões regulares
  (`RegExp`)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions).
* Também poderíamos usar uma combinação de vários _módulos_ (poderia ser válido
  transformar o markdown em um HTML usando o
  [marked](https://github.com/markedjs/marked) e depois extrair os links com uma
  biblioteca de DOM como [JSDOM](https://github.com/jsdom/jsdom) o
  [Cheerio](https://github.com/cheeriojs/cheerio)).
* Usando um _custom renderer_ de [marked](https://github.com/markedjs/marked)
  (`new marked.Renderer()`).

Não hesite em consultar as suas companheiras e mentores
se tiver dúvidas a respeito
destas decisões. Não existe uma única maneira certa :wink:

### Tutoriais / NodeSchool workshoppers

* [learnyounode](https://github.com/workshopper/learnyounode)
  Considere os primeiros pontos para aprender mais sobre Node.js e quais
  são relevantes para este projeto, não é necessário fazer todas as etapas.
* [how-to-npm](https://github.com/workshopper/how-to-npm)
* [promise-it-wont-hurt](https://github.com/stevekane/promise-it-wont-hurt)

### Outros recursos

* [Sobre Node.js - Documentação oficial](https://nodejs.org/pt-br/about/)
* [Node.js file system - Documentação oficial](https://nodejs.org/api/fs.html)
* [Node.js http.get - Documentação
  oficial](https://nodejs.org/api/http.html#http_http_get_options_callback)
* [Node.js - Wikipedia](https://pt.wikipedia.org/wiki/Node.js)
* [What exactly is Node.js? -
  freeCodeCamp](https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5)
* [Node.js – O que é, como funciona e quais as
  vantagens](https://www.opus-software.com.br/node-js/)
* [O que é npm](https://www.hostinger.com.br/tutoriais/o-que-e-npm)
* [JavaScript assíncrono: callbacks, promises e async
  functions](https://medium.com/@alcidesqueiroz/javascript-ass%C3%ADncrono-callbacks-promises-e-async-functions-9191b8272298)
* [NPM](https://docs.npmjs.com/getting-started/what-is-npm)
* [Publicar
  package](https://docs.npmjs.com/getting-started/publishing-npm-packages)
* [Criando um módulo
  Node.js](https://docs.npmjs.com/getting-started/publishing-npm-packages)
* [Ler um
  arquivo](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)
* [Ler um
  diretório](https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback)
* [Path](https://nodejs.org/api/path.html)
* [Criando sua CLI com
  Node.js](https://medium.com/henriquekuwai/criando-sua-cli-com-node-js-d6dee7d03110)

## 9. Checklist

### General

* [ ] Poder instalar via `npm install --global <github-user>/md-links`

### `README.md`

* [ ] Um board com o backlog das implementações da sua biblioteca
* [ ] Documentação técnica da sua biblioteca
* [ ] Guia de uso e instalação da biblioteca

### API `mdLinks(path, opts)`

* [ ] O módulo exporta uma função com a interface (API) esperada
* [ ] Implementa suporte para arquivo individual
* [ ] Implementa suporte para diretórios
* [ ] Implementa `options.validate`

### CLI

* [ ] Possuir o executável `md-links` no path (configurado no `package.json`)
* [ ] Executar sem erros e ter o resultado esperado
* [ ] Implementar `--validate`
* [ ] Implementar `--stats`

### Testes

* [ ] Os testes unitários devem cobrir no mínimo 70% dos statements, functions,
  lines e branches.
* [ ] Rodar os testes e linter (`npm test`).

## 10. Dividindo o problema

Uma das habilidades que esperamos que vocˆw possa desenvolver durante o bootcamp
é o de definir "mini-projetos/babies steps" que a aproxime passo-a-passo
da solução do "grande projeto". É o mesmo que começar fazendo
as bordas de um quebra-cabeça sem necessariamente saber
como se encaixará no final.

Estas são algumas sugestões:

### Comece com um fluxograma

Este projeto é diferente dos que você tem trabalhado até agora.
Como não há uma interface web, tudo será desenvolvido em seu editor e
consola/terminal.

Por isso, para visualizar melhor o que você terá que fazer
para planejar suas tarefas e objetivos, é aconselhável fazer um
`fluxograma`.

Se você nunca fez um fluxograma, confira este [recurso](https://www.youtube.com/watch?v=Lub5qOmY4JQ).

Uma alternativa ao fluxograma pode ser `pseudocódigo`.

### Planejamento

Neste projeto recomendamos o uso do **Github Projects**, ferramenta
de planejamento e organização do GitHub

Por meio de **issues** e **milestones** pode-se organizar e planificar
tarefas e objetivos concretos.

Levando em consideração os **entregáveis** do projeto,
[9. Checklist](#9-checklist) e os **passos** que foram definidos em seu
`fluxograma`, crie o seu  planejamento em GitHub Projects.

### Antes do código

Desta vez você estará trabalhando em **NodeJS**, certifique-se de
saber para que serve e suas considerações.

Em particular, é preciso decidir antecipadamente se usará
`ES Modules`, ou seja usar **import/export**, ou se utilizará
`CommonJS Modules`, ou seja **require/module.exports**.

Certifique-se de ter esta decisão clara desde o início para
que você não encontre problemas mais tarde.

### Ler um arquivo

Como primeiro desafio, você pode tentar ler um único arquivo com
um caminho fixo e imprimir seu conteúdo no console com um `console.log`.

A biblioteca nativa `FS` (FileSystem) será útil para você.

**Lembrar**: Para este projeto, sugerimos que você **não use**
a versão síncrona da função de leitura de arquivo,
`readFileSync`, e tente resolver esse desafio de forma assíncrona.

### Descobrir a extensão de um arquivo

Já sabendo ler um arquivo, aventure-se em saber qual
é a sua extensão.

Lembre-se, as extensões são aquelas letras no final do
nome de um arquivo, por exemplo: .js, .txt, .doc etc.

A biblioteca `FS` também pode ser útil aqui.

### Obter o conteúdo de um diretório

Este projeto consiste em buscar arquivos, mas para isso,
você deve primeiro ser capaz de vê-los.

Tenta imprimir para console a lista de arquivos em uma pasta.

A biblioteca `FS` também será útil aqui.

**Lembrar**: Para diminuir a complexidade de seu algoritmo
recursivo, recomendamos usar a versão síncrona da função
de leitura do diretórios, `readdirSync`.

### Definir rotas

Para acessar pastas e arquivos, será necessário
indicar onde eles estão localizados em seu computador, sendo
chamadas de **rotas**.

Use a biblioteca nativa `path` para unir dois segmentos de caminho,
Por exemplo, se quisermos juntar:

1) /home/Laboratório/
2) ./teste

O resultado seria: /home/Lab/test

### Recursão

Este projeto pode ser resolvido com
**recursão**.

Por que?

Porque não sabemos quantas pastas e arquivos
teremos que passar antes de terminar.

Se você receber um caminho de pasta, não saberá com antecedência se
há mais pastas dentro ou mais arquivos.

Portanto, certifique-se de entender o que o
recursão e veja alguns exemplos.

### Crie uma promessa

O valor de retorno da nossa biblioteca é uma `Promise`,
não um `Array`.

Tente ler sobre promessas e criando uma por
conta própria usando **new Promise()**

É importante que você saiba o que é um **callback** porque serão usadas
nas promessas.
