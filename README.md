## Installation & Setup

### 1. Installing all dependencies

To install all dependencies type the following into the terminal:

```
npm install
```

or

```
npm i
```

After that you should see the _node_modules_ folder appear in the project files.

### 2. Running the api locally

To start the api and database run the following command in your terminal:

```
npm run start
```

or in developer mode with nodemon:

```
npm run start:dev
```

It should say the following in your terminal window:

```
Look on http://localhost:8080/
```

You can now access the api.

## Commit Guidelines

| Prefix   | Usecase                                                                                         | Example                                                                 |
|----------|-------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| feat     | Implementation of a new feature.                                                                | "feat: add ability to view most popular posts"                          |
| fix      | A bug fix (not a build-process fix).                                                            | "fix: check if file exists before attempting to unlink"                 |
| docs     | Update to project documentation.                                                                | "docs: add detailed installation instructions for Windows"              |
| style    | Update to code formatting.                                                                      | "style: convert from 4 space indentation to 2 spaces"                   |
| refactor | Refactoring of code: A code change that neither fixes a bug nor adds a feature.                 | "refactor: rename ArticleController to PostController"                  |
| test     | Adding or updating tests.                                                                       | "test: add assertions for Collection update and destroy methods"        |
| chore    | Updates to dependencies.                                                                        | "chore: bump mssql-jdbc to v11.2.3.jre17"                               |
| ci       | Updates to CI/CD related files and scripts                                                      | "ci: add test step to test application performance"                     |
| build    | Changes that affect the build system or external dependencies (angular.json, webpack, npm, ...) | "build: set default ChangeDetection to OnPush for component generation" |

## Entity Relationship Model

![ER Model SVG](docs/assets/er-model.png)

## Endpoints

| Implemented | Verb   | URL                            | Description                                                                                                   |
|-------------|--------|--------------------------------|---------------------------------------------------------------------------------------------------------------|
| ✔           | GET    | /shopping-lists                | Retrieve all shopping lists (Collection).                                                                     |
| ✔           | GET    | /shopping-lists/{id}           | Retrieve a shopping list (resource) that has the {id}.                                                        |
| ✔           | GET    | /shopping-lists/{id}/items     | Returns all items (collection) of a shopping list (resource) with the {id}.                                   |
|             | POST   | /shopping-lists/{id}/items     | Creates a new item (resource) in the shopping list (collection) with the {id}.                                |
| ✔           | POST   | /shopping-lists                | Creates a new shopping list (resource) with the data provided in the request body.                            |
| ✔           | PATCH  | /shopping-lists/{id}           | Updates an existing shopping list with the {id}. The request body contains only the fields to be overwritten. |
| ✔           | DELETE | /shopping-lists/{id}           | Deletes the shopping list (resource) with the {id}.                                                           |
| ✔           | GET    | /items                         | Returns all items (collection) that exist.                                                                    |
| ✔           | GET    | /items/{id}                    | Returns the item (resource) with the {id}.                                                                    |
|             | GET    | /items/{id}/shopping-lists     | Returns the shopping list (resource) of the item with the {id}.                                               |
|             | PATCH  | /items/{id}/shopping-lists     | Updates the shopping list of the item with the {id} using the fields provided in the request body.            |
|             | DELETE | /items/{id}/shopping-lists     | Deletes the shopping list of the item with the {id}.                                                          |
| ✔           | POST   | /items                         | Creates a new item with the data provided in the request body.                                                |
| ✔           | PATCH  | /items/{id}                    | Updates an existing item with the {id}. The request body contains only the fields to be overwritten.          |
| ✔           | DELETE | /items/{id}                    | Deletes the item (resource) with the {id}.                                                                    |
| ✔           | GET    | /storages                      | Retrieve all storages (Collection).                                                                           |
| ✔           | GET    | /storages/{id}                 | Retrieve a storage (resource) that has the {id}.                                                              |
| ✔           | GET    | /storages/{id}/items           | Returns all items (collection) of a storage (resource) with the {id}.                                         |
|             | POST   | /storages/{id}/items           | Creates a new item (resource) in the storage (collection) with the {id}.                                      |
| ✔           | POST   | /storages                      | Creates a new storage (resource) with the data provided in the request body.                                  |
| ✔           | PATCH  | /storages/{id}                 | Updates an existing storage with the {id}. The request body contains only the fields to be overwritten.       |
| ✔           | DELETE | /storages/{id}                 | Deletes the storage (resource) with the {id}.                                                                 |
|             | GET    | /items/{id}/storages           | Returns the storage (resource) of the item with the {id}.                                                     |
|             | PATCH  | /items/{id}/storages           | Updates the storage of the item with the {id} using the fields provided in the request body.                  |
|             | DELETE | /items/{id}/storages           | Deletes the storage of the item with the {id}.                                                                |
| ✔           | GET    | /items?search={query}          | Returns all items (collection) that match the search query.                                                   |
| ✔           | GET    | /shopping-lists?search={query} | Returns all shopping lists (collection) that match the search query.                                          |
| ✔           | GET    | /storages?search={query}       | Returns all storages (collection) that match the search query.                                                |
