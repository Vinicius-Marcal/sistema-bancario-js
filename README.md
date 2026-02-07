# Sistema Bancário em JavaScript (POO)

Este projeto é um sistema bancário desenvolvido em JavaScript, com foco na aplicação prática dos conceitos de Programação Orientada a Objetos (POO) e organização de código em camadas.

O objetivo é simular operações básicas de um banco, como criação de clientes, contas bancárias, depósitos, saques e cálculo do saldo total do banco.

---

## Tecnologias Utilizadas

- JavaScript (ES Modules)
- Node.js
- Programação Orientada a Objetos
- Git e GitHub

---

## Estrutura do Projeto

sistema-bancario-js/
│
├── src/
│   ├── models/
│   │   ├── Cliente.js
│   │   ├── Conta.js
│   │   ├── ContaCorrente.js
│   │   └── ContaPoupanca.js
│   │
│   ├── services/
│   │   └── Banco.js
│   │
│   └── index.js
│
├── .gitignore
├── package.json
└── README.md

---

## Conceitos Aplicados

- Encapsulamento (uso de atributos privados)
- Herança
- Polimorfismo
- Composição
- Validações e tratamento de erros
- Organização de código por responsabilidade

---

## Funcionalidades

- Criação de clientes
- Criação de contas bancárias
- Depósitos e saques
- Taxa de saque em conta corrente
- Listagem de contas
- Busca de conta por nome
- Cálculo do saldo total do banco

---

## Como Executar o Projeto

### Pré-requisitos
- Node.js instalado

### Passos

1. Clone o repositório:
git clone https://github.com/seu-usuario/sistema-bancario-js.git

2. Acesse a pasta do projeto:
cd sistema-bancario-js

3. Execute o projeto:
node src/index.js

---

## Exemplo de Uso

O arquivo index.js simula o funcionamento do sistema, criando clientes, contas bancárias, realizando operações e exibindo o saldo total do banco.

---

## Autor

Projeto desenvolvido por Vinicius Marçal  
Estudante de Análise e Desenvolvimento de Sistemas
