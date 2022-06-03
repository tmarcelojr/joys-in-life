# joys-in-life

## Description
***

API for travel app to organize ideas and trip planning.

### Development Process
   DATE 		 | 		  PROGRESS     |     BLOCKS 		 |  	 GOALS     |
------------ | ----------------- | --------------- | ------------- |
06/02/2022 | Folder structure created. Trip Index & Create routes functioning. | None | Complete routes for Trip model. |

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
POST | /api/v1/trips | adds new trip to database |

## Technologies
***
1. Express
2. JSON Web Token
3. Mongoose

## Stretch Goals
***