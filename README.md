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

## Walkthrough Video
  

## Installation: 
1. Clone the repo 
2. Install mongoDB if you dont have it already
3. Run the following commands
```
    - npm init -y
    - npm install express
    - npm install mongoose
    - npm install moment
```
4. Start the server
```
    - $ npm start
```
5. Open Insomnia to test API routes

## Tests:  

Testing restful API calls with Insomnia   

---
**`http://localhost:3001/api/users/`**
* `GET` Get users
* `POST` post new user:
    ```json
    // example data
    {
        "username": "ladybug",
        "email": "ladybug@gmail.com"
    }
    ```
---
**`http://localhost:3001/api/users/:userid`**
* `GET` single user by `_id` 
* `PUT` update user by  `_id`
* `DELETE` remove user by `_id`
---
**`http://localhost:3001/api/users/:userId/friends/:friendId`**
* `POST` add a new friend to friend list
* `DELETE` remove a friend from friend list
---
**`http://localhost:3001/api/thoughts`** 
* `GET` get all thoughts
* `POST` create a new thought
    ```json
    // example data
    {
    "thoughtText": "This is amazing news!",
    "username": "ladybug",
    "userId": "7ldrr57b8a03ug4ta7gjr8"
    }
    ```
---
**`http://localhost:3001/api/thoughts/:thoughtId`**
* `GET` get a single thought by  `_id`
* `PUT` update a thought by `_id`
* `DELETE` remove a thought by `_id`
---

**`http://localhost:3001/api/thoughts/:thoughtId/reactions`**

* `POST` to create a reaction 
    ```json
    // example data
    {
    "reactionBody":"Awesome!!",
    "username":"ladybug"
    }
    ```
---
**`http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId`**
* `DELETE` remove a reaction by the `reactionId` 


## Submission:
 [Github repository] https://github.com/StaishaKnight/social-network.git
 
## Questions:
 Here is a link to my github:  
  https://github.com/StaishaKnight
 Email me at:  
staishaknight@gmail.com  
for additional questions

