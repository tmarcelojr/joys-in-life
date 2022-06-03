# joys-in-life

## Description
***

API for travel app to organize ideas and trip planning.

### Development Process
   DATE 		 | 		  PROGRESS     |     BLOCKS 		 |  	 GOALS     |
------------ | ----------------- | --------------- | ------------- |
06/02/2022 | Folder structure created. Functional CRUD on Trip, Tag, and Activity. | None | Implement Users and Auth |

## Models
***

```
Trip = {
    destination: String (required),
    name: String,
    startDate: String,
    endDate: String
}
```

## Routes
***

### Trip
   VERB 		 | 		  PATH 		 |  	 DESCRIPTION
------------ | ------------- | -------------------
GET | /api/v1/trips | list of trips |
GET | /api/v1/trips/:id | returns one trip |
POST | /api/v1/trips | adds new trip |
PUT | /api/v1/trips/:id | updates one trip |
DELETE | /api/v1/trips/:id | deletes one trip |

## Technologies
***
1. Express
2. JSON Web Token
3. Mongoose

## Stretch Goals
***