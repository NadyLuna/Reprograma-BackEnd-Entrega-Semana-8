# Projeto Prático - API

## Criando o servidor utilizando o Node.js e o Express Recebendo o .js

<h1 align="center">
  <br>
  <img src="public/imagens/uploading.png" alt="uploading server" width="216">
  <br>
    <br>
    <p align="center">Projeto Prático - Semana 8<p>
</h1>

### 1º passo - criando a estrutura

```
pasta-do-projeto
├── src
│   ├── controller
│   ├── model
│   ├── routes
│   ├── views
│   └── index.js
├── server.js
├── package.json
```

### 2º passo - alimentando a estrutura

1- **M**odel: Onde vamos alimentar com o arquivo .json criado.  
2- **C**ontroller: Onde iremos definir e exportar os métodos e o que será exibido para o usuário.  
3- **R**outes: Onde iremos criar, adicionar e exportar as rotas.
4- **A**pp: Configurações do aplicativo. Definição de rotas padrões. Quais as rotas que o usuário precisa ser autenticado ou não, por exemplo.
-5 **S**ever: Onde será criado o servidor e a definição da porta.