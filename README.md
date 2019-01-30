# Redux Saga Garden

An epic garden

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `garden` and create a `plant` table and add a few plants to your garden:

```SQL
CREATE DATABASE "garden";

-- Garden boxes can contain many plants 
CREATE TABLE "box" (
    "id" SERIAL PRIMARY KEY,
    "location" VARCHAR (100) NOT NULL
);
-- Each plant can only exist in one box
CREATE TABLE "plant" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL,
    "quantity" INT,
    "box_id" INT REFERENCES "box"
);

INSERT INTO "box" ("location") 
VALUES ('flower'), ('backyard 1'), ('backyard 2');

INSERT INTO "plant" ("name", "quantity", "box_id")
VALUES ('Rose', 4, 1),
('Tulip', 8, 1),
('Green Beans', 12, 2),
('Bell peppers', 4, 3),
('Kale', 2, 3),
('Hot peppers', 2, 3);
```

## Development Setup Instructions

* Run `npm install`
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server` to start the server
* Run `npm run client` to start the client
* Navigate to `localhost:3000`

## Lay of the Land

* `src/` contains the React application
* `public/` contains static assets for the client-side
* `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
* `server/` contains the Express App

## Base Mode

1. Complete the server side GET route to return plants joined with box locations. Test `http://localhost:5000/api/plant/` with Postman.

   You should get back the following results:
   ```JSON
   [{"id":1,"location":"flower","name":"Rose","quantity":4,"box_id":1},{"id":2,"location":"flower","name":"Tulip","quantity":8,"box_id":1},{"id":3,"location":"backyard 1","name":"Green Beans","quantity":12,"box_id":2},{"id":4,"location":"backyard 2","name":"Bell peppers","quantity":4,"box_id":3},{"id":5,"location":"backyard 2","name":"Kale","quantity":2,"box_id":3},{"id":6,"location":"backyard 2","name":"Hot peppers","quantity":2,"box_id":3}]
   ```

1. Display all of the plants in the `PlantList.js` component.
1. Add `redux-sagas` to the project to make an API GET request.
1. Add `redux-sagas` for posting a new plant (server side code for this is complete).
1. Add a `Delete` button for each plant to allow it to be removed from the database. The server `delete` route to do this is available at `http://localhost:5000/api/plant`, and it requires `req.query.id` to be an `id` from the database.

## Stretch Goals

1. Add `material-ui` to the project to give the site an earthy color palette (green and brown?)
1. Use `react-router` so that when a user navigates to `http://localhost:3000/#/plant/1` it displays the details for a given plant. The server `get` route to do this is available at `http://localhost:5000/api/plant/1`. Research [URL Parameters for React Router](https://reacttraining.com/react-router/web/example/url-params)


### Deployment

1. Create a new Heroku project
1. Create an Herkoku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. In the deploy section, select manual deploy
