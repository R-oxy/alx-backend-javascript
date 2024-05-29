# 0x01. ES6 Promises

## Introduction

Hello! In this project, I'll be diving into the world of ES6 Promises. Promises are a powerful feature in JavaScript that allow us to handle asynchronous operations more effectively. They make our code cleaner and easier to read, especially when dealing with multiple asynchronous tasks. This project will cover the basics of Promises, how to use them, and explore some advanced features such as async/await and error handling.

## Resources

I've found some great resources to help understand Promises and their associated concepts:
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Promise: An introduction](https://developers.google.com/web/fundamentals/primers/promises)
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

## Learning Objectives

By the end of this project, I aim to be able to explain the following concepts to anyone without needing to refer to external sources:

- **Promises**: Understand the how, why, and what of Promises. This includes knowing how to create a Promise, how it works internally, and why it is useful for asynchronous operations.
- **Promise Methods**: Learn how to use the `then`, `resolve`, and `catch` methods effectively.
- **Promise Object Methods**: Understand and use every method available on the Promise object, including `all`, `race`, `allSettled`, and `any`.
- **Error Handling**: Master the use of `try` and `throw` for error handling in asynchronous code.
- **Await Operator**: Know how to use the `await` operator to pause the execution of an async function until a Promise is resolved.
- **Async Functions**: Learn how to write functions using the `async` keyword to handle asynchronous operations more elegantly.

## Requirements

- **Execution Environment**: All my files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.
- **Editors**: I'll be using vi, vim, emacs, or Visual Studio Code to write my code.
- **File Format**: All files should end with a new line.
- **README**: A README.md file at the root of the project folder is mandatory.
- **File Extension**: My code should use the `.js` extension.
- **Testing**: My code will be tested using Jest with the command `npm run test`.
- **Linting**: My code will be verified against lint using ESLint.
- **Export Functions**: All of my functions must be exported for testing and reuse.

## Additional Information on ES6 Promises

### What are Promises?

Promises in JavaScript are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They provide a cleaner, more intuitive way to work with asynchronous code compared to traditional callback functions.

### Key Promise Methods

- **then()**: Attaches callbacks for the resolution and/or rejection of the Promise.
- **catch()**: Attaches a callback for only the rejection of the Promise.
- **finally()**: Attaches a callback that will be executed regardless of whether the Promise was resolved or rejected.

### Creating a Promise

A Promise is created using the `Promise` constructor, which takes a function (executor) with two arguments: `resolve` and `reject`.

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Do some async operation
  if (success) {
    resolve('Operation successful');
  } else {
    reject('Operation failed');
  }
});
```

### Async/Await

`async` and `await` are syntactic sugar built on top of Promises, making asynchronous code look and behave more like synchronous code, which is easier to read and debug.

- **async**: The `async` keyword is used to declare an async function. Inside an async function, you can use the `await` keyword.
- **await**: The `await` keyword pauses the execution of the async function and waits for the Promise to resolve or reject.

```javascript
async function fetchData() {
  try {
    const data = await fetch('https://api.example.com/data');
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
```

### Error Handling

Proper error handling is crucial in asynchronous code. Promises provide the `catch` method, and with async/await, you can use `try`/`catch` blocks to handle errors.

```javascript
myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error));

// Using async/await
async function handlePromise() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
```

## Conclusion

This project will be a comprehensive guide to understanding and using Promises in JavaScript. By the end of it, I will have a solid grasp of handling asynchronous operations, making my code more efficient and easier to manage.