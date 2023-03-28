# OverView

Your Sale é uma aplicação que permite a criação e listagem de um pedido para venda, selecionando cliente e produtos.
O usuário consegue também ver os detalhes dos pedidos criados por ele, podendo verificar os dados preenchidos.

## Tecnologies

- React
- TypeScript
- Vite
- Vitest
- React testing-library
- Chakra UI
- React query
- Axios

### Vite
  Foi selecionado para o desenvolvimento utilizado vite, principalmente devido a velocidade durante o bundling da aplicação.
  Além também do HMR que proporciona um carregamento mais rápido da aplicação.
  
### Vitest & React testing-library

  Para o desenvolvimento de testes unitários na aplicação foram utilizados o vitest aliado ao react testing-library. A escolha
  ocorreu pela facilidade  de configuração do vitest por ser integrado junto ao vite. Além também de melhores funções para 
  testes proporcionadas pelo react testing-library.
  
### Chakra UI

  Para a estilização da aplicação foi selecionado o chakra UI, a fim de se obter uma maior agilidade e evoluir no uso de tal importante recurso.
  
### React-query & Axios

  A fim de se obter uma maior facilidade no processo de chamadas à API, foram utilizados o Axios junto ao react-query, permitindo também a implementação
  de cache às listas da aplicação.

## Installation

Utilize o gerenciador de pacotes que preferir  para instalar as dependências.Aqui será utilizado o [npm](https://pip.pypa.io/en/stable/) como exemplo.

```bash
npm install
```


### Tests

Para rodar os testes da aplicação rode: 

```python

npm run test

```

## Usage

Inicie a fake api rodando:

```python

json-server --watch db.json

```
Para rodar a aplicação rode: 

```python

npm run dev

```


- Author - [Gustavo Bertonsin](https://www.linkedin.com/in/gustavo-bertonsin-brito/)
