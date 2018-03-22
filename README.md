![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) 17: Bearer Auth
===

## Submission Instructions
* Fork this repository & create a new branch for your work
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
* Push to your repository
* Submit a pull request to this repository
* Submit a link to your PR in canvas
* Write a question and observation on canvas

## Learning Objectives  
* Students will be able to create bearer authentication middleware
* Students will be able to utilize their bearer authentication middleware in their route structures
* Students will be able to test against authenticated routes

## Requirements
#### Configuration
* `package.json`
* `.gitignore`
* `.env`
* `README.md`

## Description
You're going to build a server that allows users to sign up and sign in to
their accounts. Once they've signed in to an account they should be able to
create resources in MongoDB. Use authorization in your server so users can
only access resources that they themselves have created.

Users must provide a JSON Web Token through `Bearer Authorization` to prove
that they've signed in before they're allowed to access protected resources
on the server. Users should only be allowed to retrieve resources they've
created themselves.

Your resource can be anything you want. Imagine users storing a collection of
their favorite movies, or saving emails, or making private ToDo list items for
just themselves.

## Instructions
* Copy your code from Lab 16 Basic Auth as a starting point.
* Create a bearer auth middleware module (feel free to use the one from lecture as a reference point)
* Create a new resource that has at least three properties
  * this resource must have a property of `userID` that references the `_id` of the user that created the resource
  * the `userID` property can only be set from an `_id` found using your bearer auth middleware module
* Using the express `Router`, create routes for doing **RESTful CRUD** operations against your resource

## Server Endpoints
### `/api/resource-name`
* `POST` request
* pass data as stringifed JSON in the body of a post request to create a new resource

### `/api/resource-name?id`
* `GET` request
* pass the id of a resource though the url queryparams and use `req.query` to fetch a resource   
* `PUT` request
* pass data as stringifed JSON in the body of a put request to update a resource
* `DELETE` request
* pass the id of a resource though the url query params and use to delete a resource   

## Tests
* create a series of tests to ensure that your `/api/resource-name` endpoint responds as described for each condition below:
* `GET` - test **200**, for a request made with a valid id
* `GET` - test **401**, if no token was provided
* `PUT` - test **200**, for a post request with a valid body
* `PUT` - test **401**, if no token was provided
* `POST` - test **200**, for a post request with a valid body
* `POST` - test **401**, if no token was provided

## Stretch Goals
* A `GET` request to `/api/resource-name` should return an array of all of the ids for that resource
* Create a series of tests for a `DELETE` request
