## Installation & Setup

### 1. Pulling and running Docker Container

```
docker-compose up
```

To check if the container is running type `docker ps`. You should see `shoppinglistdb` in the list.

### 2. Installing Project Dependencies

To install all dependencies type the following into the terminal:

```
npm install
```

or

```
npm i
```

After that you should see the _node_modules_ folder appear in the project files.

### 3. Running the API

To start the API:

```
npm run start
```

or in developer mode with nodemon:

```
npm run start:dev
```

It should say the following in your console:

```
[MQTTService] Connecting to MQTT
[main] Server listening on http://localhost:8080
[database] Connected to database container.
[main] Database connected.
[MQTTService] Connected to MQTT server.
```

You can now access the api.

### 4. Receiving MQTT messages

To recieve the MQTT messages published by the HRP API run the following command in another console window / tab:

```
npm run mqtt
```

or in developer mode with nodemon:

```
npm run mqtt
```

It should say the following in your console:

```
[MQTTSubscriber] Connected to MQTT server.
[MQTTSubscriber] 🔔 Subscribed to WWI23B2/kroeger/items
[MQTTSubscriber] 🔔 Subscribed to WWI23B2/kroeger/storages
[MQTTSubscriber] 🔔 Subscribed to WWI23B2/kroeger/shopping-lists
```

## AI Usage Disclosure

GitHub Copilot has been used to generate the OpenAPI documentation in the swagger format and generate some of the JS-Doc comments.
The idea for the project was created in collaboration with ChatGPT (listing possible ideas, rubber ducking "sessions").

Everything else was written by hand and not vibe-coded.

## Entity Relationship Model

![ER Model SVG](docs/assets/er-model.png)

## Endpoints

| Implemented | Verb   | URL                            | Description                                                                                                   |
|-------------|--------|--------------------------------|---------------------------------------------------------------------------------------------------------------|
| ✔           | GET    | /shopping-lists                | Retrieve all shopping lists (Collection).                                                                     |
| ✔           | GET    | /shopping-lists/{id}           | Retrieve a shopping list (resource) that has the {id}.                                                        |
| ✔           | GET    | /shopping-lists/{id}/items     | Returns all items (collection) of a shopping list (resource) with the {id}.                                   |
| X           | POST   | /shopping-lists/{id}/items     | Creates a new item (resource) in the shopping list (collection) with the {id}.                                |
| ✔           | POST   | /shopping-lists                | Creates a new shopping list (resource) with the data provided in the request body.                            |
| ✔           | PATCH  | /shopping-lists/{id}           | Updates an existing shopping list with the {id}. The request body contains only the fields to be overwritten. |
| ✔           | DELETE | /shopping-lists/{id}           | Deletes the shopping list (resource) with the {id}.                                                           |
| ✔           | GET    | /items                         | Returns all items (collection) that exist.                                                                    |
| ✔           | GET    | /items/{id}                    | Returns the item (resource) with the {id}.                                                                    |
| ✔           | POST   | /items                         | Creates a new item with the data provided in the request body.                                                |
| ✔           | PATCH  | /items/{id}                    | Updates an existing item with the {id}. The request body contains only the fields to be overwritten.          |
| ✔           | DELETE | /items/{id}                    | Deletes the item (resource) with the {id}.                                                                    |
| ✔           | GET    | /storages                      | Retrieve all storages (Collection).                                                                           |
| ✔           | GET    | /storages/{id}                 | Retrieve a storage (resource) that has the {id}.                                                              |
| ✔           | GET    | /storages/{id}/items           | Returns all items (collection) of a storage (resource) with the {id}.                                         |
| X           | POST   | /storages/{id}/items           | Creates a new item (resource) in the storage (collection) with the {id}.                                      |
| ✔           | POST   | /storages                      | Creates a new storage (resource) with the data provided in the request body.                                  |
| ✔           | PATCH  | /storages/{id}                 | Updates an existing storage with the {id}. The request body contains only the fields to be overwritten.       |
| ✔           | DELETE | /storages/{id}                 | Deletes the storage (resource) with the {id}.                                                                 |
| ✔           | GET    | /items?search={query}          | Returns all items (collection) that match the search query.                                                   |
| ✔           | GET    | /shopping-lists?search={query} | Returns all shopping lists (collection) that match the search query.                                          |
| ✔           | GET    | /storages?search={query}       | Returns all storages (collection) that match the search query.                                                |

### Why are some endpoints not implemented?

Some endpoints are not implemented because they are not necesssary for the use case and would be making the API more incomplete than without them. And here is why:

The endpoint `/shopping-lists/{id}/items` and `/storages/{id}/items` do exist for GET requests to fetch the collection of all Items in the specified storage or shopping-list respectively.
Enabling POST requests to these endpoints to create an item in said collection would not only be a bit redundant but also adding complexity. POST requests on these endpoints would require
all other CRUD operations as well, which would add another layer in the endpoint URL (e.g. `/shopping-lists/{id}/items/{itemId}`). These operations can easily be achieved with the existing
endpoint `/items/{id}` and the correlating shopping-list or storage ID in the request body. This would also be the preferred use from a practical UI perspective.

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