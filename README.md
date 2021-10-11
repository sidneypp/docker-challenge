# Desafio Docker

Este repositório faz parte do módulo de Docker do curso Full Cycle da Code Education.

Tem como principal objetivo resolver dois desafios propostos no módulo.

## 1. Desafio Golang

Consiste em criar e um publicar no docker hub uma imagem que imprime ```Code.education Rocks!``` na tela, usando a linguagem Go.

Os requisitos são que a imagem deve ter no máximo 2MB de tamanho

### **Solução**
Para obter uma imagem com esse tamanho, foi usado o conceito de Multistage Building do docker, criando uma etapa de build, para obter o arquivo binário e em seguida foi usada a imagem ```scratch``` apenas para copiar o binário do passo anterior e executar atráves de um comando CMD


## 2. Desafio Nginx com Node

Consiste em criar uma aplicação node, usando nginx como proxy reverso.

Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

```html
<h1>Full Cycle Rocks!</h1>
```

- Lista de nomes cadastrada no banco de dados.

O docker-compose terá de ser gerado de uma forma que basta apenas rodar ```docker-compose up -d``` que tudo deverá estar funcionando e disponível na porta: 8080.

### **Solução**

- Escolhi usar typescript para essa aplicação, por ser um desafio a mais
- Foi usado o Dockerize, pois se faz necessário esperar o banco de dados está disponível para subir a aplicação node
- Utilizei o prisma como ORM para lidar com as transações no banco de dados
- Utilizei Yarn, por ser mais perfomático que NPM
- Criei um volume docker chamado ```node_modules``` para a aplicação, pois como a instalação das depedências (```yarn install```) é feita na imagem, o host não tem a pasta node_modules e nesse caso ao montar o container apenas com o primeiro volume, a pasta seria removida.