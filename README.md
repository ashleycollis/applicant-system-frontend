# Application System

## About

A web app for Inclusion's admissions team to retrieve and organize submissions.

## Set Up and View Application

- Clone the repo and cd into its directory
- Run `npm install -g knex`.
- Run `npm install`.
- Then run `createdb api-server`
- Then run the migrations by running `knex migrate:latest`
- Then seed the database with `knex seed:run`
- Finally, run the server by running `npm start`
- Open [http://localhost:3001](http://localhost:3001) to view it in the browser

## Testing

- Run npm test

## Contributors

- Ashley Collis-Burgess
- Jennie Wong
- John Fajardo
