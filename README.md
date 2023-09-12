# DSCommerce
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/LeandroSouzaOliveira/dscommerce-frontend-react/blob/main/LICENSE) 

# Sobre o projeto

https://dscommerce-los.netlify.app

DSCommerce é uma aplicação full stack web e mobile, construída durante o curso **Formação Desenvolvedor Moderno** (#edição1), organizado pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

Inicialmente a aplicação apresenta uma página contendo pesquisa e catalogo de produtos. Uma vez escolhido o produto de interesse, com um click sobre ele, é aberta uma página de detalhes do produto, onde é dada opção para escolha de novos produtos ou comprar. Por questões de segurança é exigido que a partir dessa etapa o usuário se identifique por login. Feito o login, admitido para usuários administradores e clientes, é possível fechar o pedido. Caso o usuário seja administrador, ele pode ter acesso a uma área administrativa, com identidade distinta daquela usada para o cliente. Nessa área, esse usuário pode editar ou incluir novos produtos, que nesse caso alimentam o banco de dados por meio de requisições.

## Layout mobile (dois exemplos)
![Mobile Cart](https://github.com/LeandroSouzaOliveira/assets/blob/main/dscommerce/Cart.png) ![Mobile Confirmation](https://github.com/LeandroSouzaOliveira/assets/blob/main/dscommerce/Confirmation.png)

## Layout web (dois exemplos)
![Web product Listing](https://github.com/LeandroSouzaOliveira/assets/blob/main/dscommerce/Product%20Listing.png)

![Web Product Form](https://github.com/LeandroSouzaOliveira/assets/blob/main/dscommerce/Product%20Form.png)

## Modelo conceitual
![Modelo Conceitual](https://github.com/LeandroSouzaOliveira/assets/blob/main/dscommerce/Conceptual%20Model.png)

# Competências:
- Padrão camadas;
- Biblioteca QS

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
- OAuth2 / JWT
## Front end
- HTML / CSS / JavaScript / TypeScript
- ReactTS (Vite)
- React Router DOM
- React Select
- AXIOS
- History (5.3.0)
- JWT-DECODE (3.1.2)
## Implantação em produção
- Back end: localhost
- Front end web: Netlify
- Banco de dados: H2

# Como executar o projeto

## Back end
Pré-requisitos: Java 17

```bash
# clonar repositório
git clone https://github.com/LeandroSouzaOliveira/dscommerce

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: vite / yarn / react

```bash
# clonar repositório
git clone https://github.com/LeandroSouzaOliveira/dscommerce-frontend-react

# instalar dependências
yarn

# executar o projeto
yarn dev
```

# Agradecimentos
- DevSuperior https://devsuperior.com.br/

# Autor

Leandro de Oliveira Souza
