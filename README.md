# shopping-list-api

## Entity Relationship Model

![ER Model SVG](docs/er-model.svg)

## URL & HTTP Verben

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