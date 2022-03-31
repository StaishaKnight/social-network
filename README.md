# Social-Network-API

![](https://img.shields.io/badge/Created%20by-Victor%20Cesar%20Lopez-blue?style=for-the-badge)  
![](https://img.shields.io/badge/Database-MongoDB-yellow?style=flat-square&logo=mongoDB)  ![](https://img.shields.io/badge/npm%20package-express-orange?style=flat-square&logo=npm) ![](https://img.shields.io/badge/npm%20package-mongoose-cyan?style=flat-square&logo=npm) ![](https://img.shields.io/badge/npm%20package-moment-%3CCOLOR%3E?style=flat-square&logo=npm)
 ## Table of Contents:  
[1. Description](#Description)  
[2. Acceptance Criteria](#Acceptance-Criteria)  
[3. Walkthrough Videos](#Walkthrough-Videos)  
[4. Installation](#Installation)  
[5. Tests](#Tests)  
[6. License Details](#License-Details)  
[7. Submission](#Submission)   
[8. Questions](#Questions)  
## Description:
This is social network  uses a MongoDB database to handle large amounts of unstructured data such as Mongoose ODM, Express.js for routing, , and the moment package to format time stamps.

## Acceptance Criteria:
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Walkthrough Videos
[User Routes](https://drive.google.com/file/d/1WMXQbCPAECIsU78gSpFk8IejF80_jtpW/view)  
[Friend Routes](https://drive.google.com/file/d/1a2o-AOOmOIXz8dgTKsC1FvLIaNRoQJJf/view)  
[Thought Routes](https://drive.google.com/file/d/17ocul_N5VOl4O70y8XEILtf8691lvxEj/view)  
[Reaction Routes](https://drive.google.com/file/d/1gB0kILBgkD4XEpFXOeq6v5YhxP75W27d/view)  

## Installation:
This repo is not to be deployed, if you wanted to, you could by doing the following:  
1. Download the repo files from the link below
2. You must have mongoDB installed
3. Run the following at the command line
```
    - npm init -y
    - npm install express
    - npm install mongoose
    - npm install moment
```
4. Start the server
```
    $ npm start
```
5. Open Insomnia Core to test API routes

## Tests:  

Testing restful API calls with Insomnia Core  

---
**`http://localhost:3001/api/users/`**
* `GET` all users
* `POST` a new user:
    ```json
    // example data
    {
        "username": "ladybug",
        "email": "ladybug@gmail.com"
    }
    ```
---
**`http://localhost:3001/api/users/:userid`**
* `GET` a single user by its `_id` 
* `PUT` to update a user by its `_id`
* `DELETE` to remove user by its `_id`
---
**`http://localhost:3001/api/users/:userId/friends/:friendId`**
* `POST` to add a new friend to a user's friend list
* `DELETE` to remove a friend from a user's friend list
---
**`http://localhost:3001/api/thoughts`** 
* `GET` to get all thoughts
* `POST` to create a new thought
    ```json
    // example data
    {
    "thoughtText": "This is amazing news!",
    "username": "ladybug",
    "userId": "5edff358a0fcb779aa7b118b"
    }
    ```
---
**`http://localhost:3001/api/thoughts/:thoughtId`**
* `GET` to get a single thought by its `_id`
* `PUT` to update a thought by its `_id`
* `DELETE` to remove a thought by its `_id`
---

**`http://localhost:3001/api/thoughts/:thoughtId/reactions`**

* `POST` to create a reaction 
    ```json
    // example data
    {
    "reactionBody":"Hell Yeah!!",
    "username":"ladybug"
    }
    ```
---
**`http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId`**
* `DELETE` remove a reaction by the `reactionId` 


## Submission:
 [Github repository] 

## Questions:
 Here is a link to my github:  
  
 Email me at:  
staishaknight@gmail.com  
for additional questions

