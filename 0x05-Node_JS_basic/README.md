# 0x05. NodeJS Basics

## Back-end
JavaScript, ES6, NodeJS, ExpressJS

## Resources

Read or watch:
- Node JS getting started
- Process API doc
- Child process
- Express getting started
- Mocha documentation
- Nodemon documentation

## Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
- Run JavaScript using NodeJS
- Use NodeJS modules
- Use specific Node JS module to read files
- Use process to access command line arguments and the environment
- Create a small HTTP server using Node JS
- Create a small HTTP server using Express JS
- Create advanced routes with Express JS
- Use ES6 with Node JS with Babel-node
- Use Nodemon to develop faster

## Requirements

- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using node (version 12.x.x)
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using Jest and the command npm run test
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running npm run full-test
- All of your functions/classes must be exported by using this format: module.exports = myFunction;

## Provided files

### database.csv

```
firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS
```

### package.json

<details>
<summary>Click to show/hide file contents</summary>

```json
{
  "name": "0x05-Node_JS_basic",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "nodemon --exec babel-node --presets babel-preset-env ./full_server/server.js ./database.csv"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0"
  },
  "devDependencies": {
    "babel-eslint": "^10.1.0",
    "eslint": "^6.8.0"
  }
}
```
</details>

### babel.config.js

<details>
<summary>Click to show/hide file contents</summary>

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ]
  ]
}
```
</details>

### .eslintrc.js

<details>
<summary>Click to show/hide file contents</summary>

```js
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
  },
};
```
</details>

### Don’t forget to run $ npm install when you have the package.json

## Tasks

### 0. Executing basic javascript with Node JS
mandatory
In the file 0-console.js, create a function named displayMessage that prints in STDOUT the string argument.

```sh
bob@dylan:~$ cat 0-main.js
const displayMessage = require('./0-console');

displayMessage("Hello NodeJS!");

bob@dylan:~$ node 0-main.js
Hello NodeJS!
bob@dylan:~$
```

### 1. Using Process stdin
mandatory
Create a program named 1-stdin.js that will be executed through command line:

- It should display the message Welcome to Holberton School, what is your name? (followed by a new line)
- The user should be able to input their name on a new line
- The program should display Your name is: INPUT
- When the user ends the program, it should display This important software is now closing (followed by a new line)

Requirements:
- Your code will be tested through a child process, make sure you have everything you need for that

```sh
bob@dylan:~$ node 1-stdin.js 
Welcome to Holberton School, what is your name?
Bob
Your name is: Bob
bob@dylan:~$ 
bob@dylan:~$ echo "John" | node 1-stdin.js 
Welcome to Holberton School, what is your name?
Your name is: John
This important software is now closing
bob@dylan:~$ 
```

### 2. Reading a file synchronously with Node JS
mandatory
Using the database database.csv (provided in project description), create a function countStudents in the file 2-read_file.js

- Create a function named countStudents. It should accept a path in argument
- The script should attempt to read the database file synchronously
- If the database is not available, it should throw an error with the text Cannot load the database
- If the database is available, it should log the following message to the console Number of students: NUMBER_OF_STUDENTS
- It should log the number of students in each field, and the list with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
- CSV file can contain empty lines (at the end) - and they are not a valid student!

```sh
bob@dylan:~$ cat 2-main_0.js
const countStudents = require('./2-read_file');

countStudents("nope.csv");

bob@dylan:~$ node 2-main_0.js
2-read_file.js:9
    throw new Error('Cannot load the database');
    ^

Error: Cannot load the database
...
bob@dylan:~$
bob@dylan:~$ cat 2-main_1.js
const countStudents = require('./2-read_file');

countStudents("database.csv");

bob@dylan:~$ node 2-main_1.js
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
```

### 3. Reading a file asynchronously with Node JS
mandatory
Using the database database.csv (provided in project description), create a function countStudents in the file 3-read_file_async.js

- Create a function named countStudents. It should accept a path in argument (same as in 2-read_file.js)
- The script should attempt to read the database file asynchronously
- The function should return a Promise
- If the database is not available, it should throw an error with the text Cannot load the database
- If the database is available, it should log the following message to the console Number of students: NUMBER_OF_STUDENTS
- It should log the number of students in each field, and the list with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
- CSV file can contain empty lines (at the end) - and they are not a valid student!

```sh
bob@dylan:~$ cat 3-main_0.js
const countStudents = require('./3-read_file_async');

countStudents("nope.csv")
    .then(() => {
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });

bob@dylan:~$ node 3-main_0.js
Error: Cannot load the database
...
bob@dylan:~$
bob@dylan:~$ cat 3-main_1.js
const countStudents = require('./3-read_file_async');

countStudents("database.csv")
    .then(() => {
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });
console.log("After!");

bob@dylan:~$ node 3-main_1.js
After!
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume,

 Joseph, Paul, Tommy
Done!
bob@dylan:~$
```

### 4. Create a small HTTP server using Node's HTTP module
mandatory
In a file named 4-http.js, create a small HTTP server using the http module:

- It should be assigned to the variable app and this one must be exported
- HTTP server should listen on port 1245
- When the URL path is /, it should display Hello Holberton School! in the page body
- When the URL path is /students, it should display This is the list of our students
    - It should call the function countStudents from the previous task
    - with the database.csv file
    - and display the same content in the page body
    - If the database is not available, it should display the error message Cannot load the database.

Requirements:
- Your code will be tested using curl
- You must use the http module

```sh
bob@dylan:~$ node 4-http.js &
[1] 2331
bob@dylan:~$ curl localhost:1245
Hello Holberton School!bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
bob@dylan:~$ kill %1
[1]  + 2331 terminated  node 4-http.js
bob@dylan:~$
```

### 5. Create a more complex HTTP server using Node's HTTP module
mandatory
In a file named 5-http.js, create a more complex HTTP server using the http module:

- It should be assigned to the variable app and this one must be exported
- HTTP server should listen on port 1245
- It should return plain text
- When the URL path is /, it should display Hello Holberton School! in the page body
- When the URL path is /students, it should display This is the list of our students
    - It should call the function countStudents from the previous task
    - with the database.csv file
    - and display the same content in the page body
    - If the database is not available, it should display the error message Cannot load the database.
- /students should never be cached

Requirements:

- Your code will be tested using curl
- You must use the http module

```sh
bob@dylan:~$ node 5-http.js &
[1] 2331
bob@dylan:~$ curl localhost:1245
Hello Holberton School!bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ curl localhost:1245/students
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ curl localhost:1245/students
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
bob@dylan:~$ kill %1
[1]  + 2331 terminated  node 5-http.js
bob@dylan:~$
```

### 6. Create a small HTTP server using Express
mandatory
Install Express and in a file named 6-http_express.js, create a small HTTP server using Express module:

- It should be assigned to the variable app and this one must be exported
- HTTP server should listen on port 1245
- When the URL path is /, it should display Hello Holberton School! in the page body
- When the URL path is /students, it should display This is the list of our students
    - It should call the function countStudents from the previous task
    - with the database.csv file
    - and display the same content in the page body
    - If the database is not available, it should display the error message Cannot load the database.

Requirements:
- Your code will be tested using curl
- You must use the Express module

```sh
bob@dylan:~$ npm install express
...
bob@dylan:~$ node 6-http_express.js &
[1] 2331
bob@dylan:~$ curl localhost:1245
Hello Holberton School!bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
bob@dylan:~$ kill %1
[1]  + 2331 terminated  node 6-http_express.js
bob@dylan:~$
```

### 7. Create a more complex HTTP server using Express
mandatory
In a file named 7-http_express.js, create a small HTTP server using Express module:

- It should be assigned to the variable app and this one must be exported
- HTTP server should listen on port 1245
- When the URL path is /, it should display Hello Holberton School! in the page body
- When the URL path is /students, it should display This is the list of our students
    - It should call the function countStudents from the previous task
    - with the database.csv file
    - and display the same content in the page body
    - If the database is not available, it should display the error message Cannot load the database.
- When the URL path is /students/:major, it should display The list of students in the major FIELD (example Computer Science)
    - It should call the function countStudents from the previous task
    - with the database.csv file
    - and display the following content in the page body Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
    - If the database is not available, it should display the error message Cannot load the database.

Requirements:
- Your code will be tested using curl
- You must use the Express module

```sh
bob@dylan:~$ npm install express
...
bob@dylan:~$ node 7-http_express.js &
[1] 2331
bob@dylan:~$ curl localhost:1245
Hello Holberton School!bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students/CS
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students/SWE
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
bob@dylan:~$ kill %1
[1]  + 2331 terminated  node 7-http_express.js
bob@dylan:~$
```

### 8. Organize a complex HTTP server using Express
mandatory
Obviously writing every part of a server within a single file is not sustainable. Let’s split the logic of our server in separate files.

*Create a directory named full_server.
* Inside it, create these directories: controllers, routes and utils.
* Create a file full_server/utils.js, and copy the function readDatabase in it.
* Create a file full_server/controllers/StudentsController.js that will contain the definition of the StudentsController class.
* Create a file full_server/routes/index.js that will contain all the endpoints of our API.
* Create a file full_server/server.js that will create and run the server.

In the file full_server/utils.js:

- Create a function named readDatabase that accepts a file path as an argument:
    - It should read the database asynchronously
    - It should return a promise
    - When the file is not accessible, it should reject with the error Cannot load the database
    - Otherwise, it should return an object of arrays of the firstname of students per field
    - Example:

```json
{
  CS: ['firstname1', 'firstname2', ...],
  SWE: ['firstname1', 'firstname2', ...],
}
```

In the file full_server/controllers/StudentsController.js

:

- Create a class named StudentsController. Add two static methods:
    - getAllStudents:
        - Should accept a request and a response as argument
        - It should return a status 200
        - It should call the function readDatabase from the utils folder and display in the page:
            - First line: This is the list of our students
            - And for each field (order by alphabetic order case insensitive), a line that displays the number of students in the field, and the list of first names (ordered by appearance in the file)
            - If the database is not available, it should return a status 500 and the error message Cannot load the database
    - getAllStudentsByMajor:
        - Should accept a request and a response as argument
        - It should return a status 200
        - It should call the function readDatabase from the utils folder and display in the page the list of first names for the students (ordered by appearance in the file) in the specified field
        - If the field does not exist in the database, it should return a status 500 and the error message Cannot load the database

In the file full_server/routes/index.js:

- Link the route /students to the method getAllStudents in StudentsController
- Link the route /students/:major to the method getAllStudentsByMajor in StudentsController

In the file full_server/server.js:

- Create a small Express server:
    - It should use the routes defined in full_server/routes/index.js
    - It should listen on the port 1245

Requirements:
- You must use the Express module
- Every part of your application must be properly imported

```sh
bob@dylan:~$ node full_server/server.js &
[1] 2331
bob@dylan:~$ curl localhost:1245
Hello Holberton School!bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students
This is the list of our students
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students/CS
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students/SWE
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
bob@dylan:~$ kill %1
[1]  + 2331 terminated  node full_server/server.js
bob@dylan:~$
```
