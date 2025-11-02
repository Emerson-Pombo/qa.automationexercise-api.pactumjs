# 🧪 QA Automation Exercise API (PactumJS)

![Node.js](https://img.shields.io/badge/Node.js-20.x-green?logo=node.js)
![Mocha](https://img.shields.io/badge/Tested%20with-Mocha-orange?logo=mocha)
![CI](https://github.com/Emerson-Pombo/qa.automationexercise-api.pactumjs/actions/workflows/ci.yml/badge.svg)
![License](https://img.shields.io/badge/license-MIT-blue)

Este projeto foi desenvolvido com o objetivo de **automatizar testes de API** utilizando o framework **[PactumJS](https://pactumjs.github.io/)**, garantindo a validação de contratos com **Joi.dev**, geração de relatórios com **Mochawesome**, e integração contínua com **GitHub Actions**.

---

## 📁 Estrutura do Projeto

```bash
qa.automationexercise-api.pactumjs/
├── .github/
│   └── workflows/
│       └── ci.yml                # Pipeline CI no GitHub Actions
├── src/
│   ├── config/                   # Configurações de ambiente
│   ├── helpers/                  # Funções utilitárias (ex: api.js, data.js)
│   ├── schemas/                  # Schemas de validação Joi
│   └── specs/                    # Testes organizados por módulo
│       ├── auth/
│       ├── produtos/
│       └── usuarios/
├── reports/                      # Relatórios de execução
├── .env.example                  # Exemplo de variáveis de ambiente
├── package.json                  # Configurações do projeto
├── test.setup.js                 # Setup global dos testes
└── README.md                     # Documentação do projeto
```


## Stack utilizada

**Node.js:** Ambiente de execução para o JavaScript

**PactumJS:** Framework para testes de API

**Mocha:** Test Runner

**Chai:** Biblioteca de assertions

**Joi.dev:** Validação de contrato de resposta

**Mochawesome:** Geração de relatórios HTML detalhados

**Cross-env:** Suporte a variáveis de ambiente multi-OS

**GitHub Actions:** Integração contínua (CI/CD)

## 🚀 Como Executar Localmente
1. Clone o repositório:
   ```bash
   git clone git@github.com:Emerson-Pombo/qa.automationexercise-api.pactumjs.git
    cd qa.automationexercise-api.pactumjs
    ```
2. Instale as dependências:
    ```bash
    npm install
    ``` 
3. Configure as variáveis de ambiente:
4. Crie um arquivo `.env` na raiz do projeto baseado no `.env.example` e ajuste conforme necessário.
5. Execute os testes:
    ```bash
    npm test
    ```     
   
## 🧩 Scripts Disponíveis
No `package.json`, você encontrará os seguintes scripts úteis:
- `npm test`: Executa todos os testes.
- `npm run test:spec <spec_name>`: Executa testes de uma especificação específica.
- `npm run report`: Gera o relatório de testes em HTML.
- `npm run lint`: Verifica o código em busca de problemas de estilo.
- `npm run ci`: Executa o pipeline de CI localmente.
- `npm run watch`: Executa os testes em modo watch.

## 🧪 Testes Automatizados

Os testes estão organizados na pasta `src/specs/`, divididos por módulos como `auth`, `produtos` e `usuarios`. Cada teste utiliza PactumJS para fazer requisições HTTP e validar respostas, garantindo que a API funcione conforme o esperado.

## 📊 Relatórios de Testes
Após a execução dos testes, os relatórios detalhados são gerados na pasta `reports/` utilizando Mochawesome. Você pode visualizar os resultados em formato HTML, facilitando a análise dos testes realizados.

## 🔄 Integração Contínua (CI)
O projeto está configurado para integração contínua utilizando GitHub Actions. O pipeline definido em `.github/workflows/ci.yml` executa os testes automaticamente a cada push ou pull request, garantindo que o código esteja sempre testado e validado.

## 🧾 Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
Feito por Emerson Pombo 🚀

linkedin.com/in/emerson-pombo | github.com/Emerson-Pombo 


         



