<p align="center">
   <img src="assets/logo.png" width="200"/>
</p>

# :bulb: [BACKEND] Very Useful Tools To Remember

[![Author](https://img.shields.io/badge/author-matheussousaf-fff000?style=flat-square)](https://github.com/matheussousaf)
[![Languages](https://img.shields.io/github/languages/count/matheussousaf/vuttr_backend?color=%23fff000&style=flat-square)](#)
[![Stars](https://img.shields.io/github/stars/matheussousaf/vuttr_backend?color=fff000&style=flat-square)](https://github.com/matheussousaf/vuttr_backend/stargazers)
[![Forks](https://img.shields.io/github/forks/matheussousaf/vuttr_backend?color=%23fff000&style=flat-square)](https://github.com/matheussousaf/vuttr_backend/network/members)
[![Contributors](https://img.shields.io/github/contributors/matheussousaf/vuttr_backend?color=fff000&style=flat-square)](https://github.com/matheussousaf/vuttr_backend/graphs/contributors)

<br />

> “To the man who only has a hammer, everything he encounters begins to look like a nail.” - Abraham Maslow

---

# :sparkles: Demo

You can access the main url for the API by clicking [here](https://vuttr-core.herokuapp.com/). Take a look in the [docs](https://vuttr-core.herokuapp.com/docs) to se how you can use it.

# :pushpin: Summary

- [Features](#rocket-features)
- [Installation](#construction_worker-installation)
- [Getting Started](#runner-getting-started)
- [Issues](#bug-issues)
- [License](#closed_book-license)

# :star: Features

- **CRUD** for new Tools
- JWT Authentication
- Unit Testing
- Containerized application
- CI/CD Pipelines
- OpenAPI Documentation

# :construction_worker: Installation

This is a step-by-step guide in how to get the API up and running on a **local development** environment. Later you'll see a guide to how to run the docker-compose/dockerfile containerization for the application.

**Prerequisites**:

- Node.js >= 12
- Yarn
- MySQL >= 5.7

**Installing**

Install all the dependencies with:

```sh
$ yarn install
```

You'll need to **configure the development environment**, edit the `.env.development` file, located at the root folder.

```sh
PORT=3333 # Port for the application (default 3333)
DB_PORT=3306 # Port for the database
HOST=localhost # Host for the database
USERNAME=matheus # Username for the database
PASSWORD=root # Password for the database
DATABASE=vuttr_core # The name of the database
TEST_DATABASE=vuttr_core_test # The name of the database
MIGRATIONS_FOLDER=src/migrations/*.ts # TypeORM migrations folder
ENTITIES_FOLDER=src/entities/*.ts # TypeORM entities folder
```

If the database does not exist, **create the database** using:

```sh
$ yarn create:db
```

Now you are good to go!

# :rocket: Getting Started

Run the following command in order to start the application in a development environment:

```sh
$ yarn dev
```

```sh
$ yarn test
```

# :whale: Docker

Build the image for the application using:

```sh
$ docker build -t vuttr_core
```


The application already has a `docker-compose.yml` file configured with the default attributes, just replace them with the actual environment variables:

Ex.:

```yaml
db:
    image: mysql:5.7
    environment:
      MYSQL_DATABASE: "vuttr_core"
      MYSQL_ROOT_PASSWORD: "root"
      MYSQL_USER: "user"
      MYSQL_PASSWORD: "password"
    ports:
      - "3306:3306"
    expose:
      - "3306"
    volumes:
      - my-db:/var/lib/mysql
  web:
    image: vuttr
    environment:
      USER: matheus
      PASSWORD: root
      DATABASE: vuttr_core
      PORT: 3000
    depends_on:
      - db
    ports:
      - "3333:3333"
```
After that, just run:

```sh
$ docker-compose up
```
And you will have both the **database** and the **application** up and running at your **localhost**.

# :bug: Issues

Feel free to **file a new issue** with a respective title and description on the the [Vuttr Backend](https://github.com/matheussousaf/vuttr_backend/issues) repository. If you already found a solution to your problem, **i would love to review your pull request**! Have a look at our [contribution guidelines](https://github.com/matheussousaf/vuttr_backend/blob/master/CONTRIBUTING.md) to find out about the coding standards.

# :tada: Contributing

Check out the [contributing](https://github.com/matheussousaf/vuttr_backend/blob/master/CONTRIBUTING.md) page to see the best places to file issues, start discussions and begin contributing.

# :closed_book: License

Released in 2020.
This project is under the [MIT license](https://github.com/matheussousaf/vuttr_backend/blob/master/LICENSE).

Made by **Matheus Figueirêdo** :metal: