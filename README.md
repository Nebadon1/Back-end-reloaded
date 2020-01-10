# Chef Portfolio - Back end

## Heroku Deployment##
https://chef-portfolio-done-right.herokuapp.com/

## Documentation ##
https://documenter.getpostman.com/view/8589653/SWLh4RQA?version=latest

## Description

This project is a RESTful API built using Node and Express. The purpose of this project is to provide a Backend for a Chef Portfolio web application. User registration, login, post creation, deletion, fetching, or editing, are all handled here.

- The server is run using Node.
- Express is a minimalist Node web application framework for building APIs.
- SQLite3 was used for development.
- Postgres is an advanced open source relational database that supports both SQL             (relational)        querying. It was used for production.
- Knex is a SQL query builder for JavaScript.
- Jsonwebtoken is used for authenticating users.
- Bcrypt is used for hashing passwords.
- Helmet adds a base layer of security by hiding basic info about the API when interacting with it.
- Dotenv allows the server to interact with environment variables.
- Cors is a dependency used to allow Cross Origin Resource Sharing. This allows the Frontend client to interact with the Backend.
- Cross-env allows the developer to set environment variables in a script.
- Jest is the library used for writing tests.
- Supertest is the dependency used for making "requests" in jest tests.

## Dependencies Used

- Node
- Express
- SQLite3 (Development)
- Postgres (Production)
- Knex
- Bcryptjs
- Jsonwebtoken
- Cors
- Helmet
- Dotenv
- Nodemon (Development)
- Cross-Env (Development)
- Jest (Development)
- Supertest (Development)


## Getting Started
Install dependencies
```
npm install
```
Run database migrations
```
knex migrate:latest
```

Run the server
```
npm run server
```

## End Points ##
## Parameters ##
## Routes ##
please visit: https://documenter.getpostman.com/view/8589653/SWLh4RQA?version=latest

for complete explanation 