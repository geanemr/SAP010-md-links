<div align="center">

# Markdown Links
</div>

<div align="center">
  <br>
  Status do projeto: concluído ✔ <br>
 Ferramentas e tecnologias utilizadas: <br>

  <a href="https://nodejs.org/en">
  <img src="https://skillicons.dev/icons?i=nodejs"/>
  <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript">
  <img src="https://skillicons.dev/icons?i=js"/>
  <a href="https://jestjs.io/pt-BR/">
  <img src="https://skillicons.dev/icons?i=jest"/>
   <a href="https://git-scm.com/">
  <img src="https://skillicons.dev/icons?i=git"/>
  <a href="https://github.com/">
  <img src="https://skillicons.dev/icons?i=github"/>
  <a href="https://code.visualstudio.com/">
  <img src="https://skillicons.dev/icons?i=vscode"/>
  
  </div>

---
## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Guia de instalação](#3-guia-de-instalação)
* [4. Guia de uso]()
* [5. Fluxograma](#5-fluxograma)
* [6. Organização do projeto](#6-organização-do-projeto)
* [7. Testes unitários](#7-testes-unitários)
* [8. Desenvolvedora](#8-desenvolvedora)

***

## 1. Prefácio

[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem de marcação
muito popular entre os programadores. É usada em muitas plataformas que
manipulam texto (GitHub, fórum, blogs e etc) e é muito comum encontrar arquivos
com este formato em qualquer repositório (começando pelo tradicional
`README.md`).


## 2. Resumo do projeto

Os arquivos `Markdown` normalmente contém _links_ que podem estar
quebrados, ou que já não são válidos, prejudicando muito o valor da informação que está ali. 

Pensando nisso, foi criado o projeto Md-links, com o objetivo de percorrer estes arquivos markdown, retornando as listas de links, textos e caminhos dos respectivos arquivos, além de informar quantos links de extensão .md esses arquivos possuem, se são únicos e se estão quebrados ou não.

## 3. Guia de instalação
Para instalar esta biblioteca você deve executar a seguinte linha de comando: `npm install md-links-geanemr`. 
Após a instalação, certifique de ter um arquivo .md com links dentro.

## 4. Guia de uso
a) Rode o comando mdlinks + o caminho relativo do seu arquivo , para obter os links dos arquivos (href), os textos (text) e os caminhos (file) dos mesmos:
 
 `md-links <caminho-do-arquivo>`
<div align="center">
<img src="src/images/comando 1.PNG" width="800em"/>
</div>

b) Rode o comando abaixo para, além das informações acima, fazer uma requisição HTTP e receber o status e ok dos seus links:

`md-links <caminho-do-arquivo> --validate`
<div align="center">
<img src="src/images/comando-validate.PNG" width="800em"/>
</div>

c) Você também pode receber informações estatísticas sobre os links. Rode o comando abaixo para saber qual o total de links do arquivo e quantos deles são únicos:

`md-links <caminho-do-arquivo> --stats`
<div align="center">
<img src="src/images/comando-stats.PNG" width="800em"/>
</div

d) E, para saber quantos destes arquivos únicos estão quebrados, rode o comando abaixo:

`md-links <caminho-do-arquivo> --validate --stats`
<div align="center">
<img src="src/images/comando-validate-stats.PNG" width="800em"/>
</div


## 5. Fluxograma

Foi criado o seguinte fluxograma para auxiliar no desenvolvimento do projeto:
<div align="center">
<img src="src/images/fluxograma.png" width="800em"/>
</div>

## 6. Organização do projeto

A ferramenta utilizada para organização do projeto foi o Github Projects:
<div align="center">
<img src="src/images/github-projects.PNG" width="1000em"/>
</div>

## 7. Testes unitários
Cobertura de testes em jest:
<div align="center">
<img src="src/images/cobertura-testes-jest.PNG" width="800em"/>
</div>

## 8. Desenvolvedora
Geane Ramos 

[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link)](https://github.com/geanemr) [![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link)](https://www.linkedin.com/in/geane-moraes-ramos/)


