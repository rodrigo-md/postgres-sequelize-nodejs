# 🐘 postgres-sequelize-nodejs
## Requirements

- Yarn
- Node v14

## How to

-  Clone this repo.
   -  Type `yarn` to install its dependencies.
   -  Make your changes
-  Starting for development:
   - Run `docker-compose up -d`
   -  Type `yarn dev` to start the server.
   -  Access the `http://localhost:3000` on the postman or insomnia.

### Run tests

For now we have only integration tests

1. Make sure you have running the postgres container first
2. Run the API in localhost with `yarn dev`
3. Run the tests with `npm test`