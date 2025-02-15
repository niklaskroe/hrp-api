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
npm start
```

It should say the following in your terminal window:

```
Look on http://localhost:8080/
```

You can now access the api. 

## Commit Guidelines

| Prefix | Usecase |	Example |
| - | - | - |
| feat |	Implementation of a new feature. |	"feat: add ability to view most popular posts" |
| fix |	A bug fix (not a build-process fix). |	"fix: check if file exists before attempting to unlink" |
| docs |	Update to project documentation. |	"docs: add detailed installation instructions for Windows" |
| style |	Update to code formatting. |	"style: convert from 4 space indentation to 2 spaces" |
| refactor |	Refactoring of code: A code change that neither fixes a bug nor adds a feature.	| "refactor: rename ArticleController to PostController" |
| test |	Adding or updating tests. |	"test: add assertions for Collection update and destroy methods" |
| chore |	Updates to dependencies. |	"chore: bump mssql-jdbc to v11.2.3.jre17" |
| ci |	Updates to CI/CD related files and scripts |	"ci: add test step to test application performance" |
| build |	Changes that affect the build system or external dependencies (angular.json, webpack, npm, ...) |	"build: set default ChangeDetection to OnPush for component generation" |

## Project Structure

```
.
+-- config
|   +-- db.js
|   +-- db.json
+-- src
|   +-- controllers
|       +-- item.controller.js
|       +-- shoppingList.controller.js
|   +-- models
|       +-- item.model.js
|       +-- shoppingList.model.js
|   +-- services
|       +-- item.service.js
|       +-- shoppingList.service.js
+-- app.js
```

## Entity Relationship Model

![ER Model SVG](docs/er-model.svg)

## Endpoints

| Verb  | URL                            | Beschreibung                                                                                                             |
|-------|--------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| GET   | /shopping-list                 | Alle Einkaufslisten (als Collection) abrufen.                                                                            |
| GET   | /shopping-list/{id}            | Eine Einkaufsliste (Ressource) mit der {id} abrufen                                                                      |
| GET   | /shopping-list/{id}/products   | Liefert alle Produkte (Collection) einer Einkaufsliste (Ressource) mit der {id} zurück.                                  |
| POST  | /shopping-list/{id}/products   | Erstellt ein neues Produkt (Ressource) in der Einkaufsliste (Collection) mit der {id}.                                   |
| GET   | /shopping-list/3/products/{id} | Liefert ein Produkt (Ressource) mit der {id} zurück, der sich in der Einkaufsliste mit der {id} 1 befindet.              |
| PUT   | /shopping-list/3/products/{id} | Aktualisiert ein Produkt mit der {id} in der Vorschlagsliste 3 mit den Feldern, die im Anfrage-Body mitgeliefert werden. |
| PATCH | /shopping-list/3/products/{id} | Aktualisiert ein Produkt (Ressource) mit der {id} in der Einkaufsliste 3                                                 |
|       |                                |                                                                                                                          |
