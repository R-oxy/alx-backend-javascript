---

**0x06. Unittests in JS**

---

**Resources**  
Read or watch:

- Mocha documentation
- Chai
- Sinon
- Express
- Request
- How to Test NodeJS Apps using Mocha, Chai and SinonJS

---

**Learning Objectives**  
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- How to use Mocha to write a test suite
- How to use different assertion libraries (Node or Chai)
- How to present long test suites
- When and how to use spies
- When and how to use stubs
- What are hooks and when to use them
- Unit testing with Async functions
- How to write integration tests with a small node server

---

**Requirements**  
All of your code will be executed on Ubuntu 18.04 using Node 12.x.x  
Allowed editors: vi, vim, emacs, Visual Studio Code  
All your files should end with a new line  
A README.md file, at the root of the folder of the project, is mandatory  
Your code should use the js extension  
When running every test with `npm run test *.test.js`, everything should pass correctly without any warning or error

---

**Tasks**

0. **Basic test with Mocha and Node assertion library**    
Install Mocha using npm:

- Set up a scripts in your package.json to quickly run Mocha using `npm test`
- You have to use `assert`
- Create a new file named `0-calcul.js`:
  - Create a function named `calculateNumber`. It should accepts two arguments (number) a and b
  - The function should round a and b and return the sum of it
- Test cases
  - Create a file `0-calcul.test.js` that contains test cases of this function
  - You can assume a and b are always number
  - Tests should be around the “rounded” part

**Tips**:  
For the sake of the example, this test suite is slightly extreme and probably not needed  
However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases

**Requirements**:

- You have to use `assert`
- You should be able to run the test suite using `npm test 0-calcul.test.js`
- Every test should pass without any warning

**Expected output**

```bash
> const calculateNumber = require("./0-calcul.js");
> calculateNumber(1, 3)
4
> calculateNumber(1, 3.7)
5
> calculateNumber(1.2, 3.7)
5
> calculateNumber(1.5, 3.7)
6
> 
```

**Run test**

```bash
bob@dylan:~$ npm test 0-calcul.test.js 

> task_0@1.0.0 test /root
> ./node_modules/mocha/bin/mocha "0-calcul.test.js"

  calculateNumber
    ✓ ...
    ✓ ...
    ✓ ...
    ...

  130 passing (35ms)
bob@dylan:~$ 
```

---

1. **Combining descriptions**    
Create a new file named `1-calcul.js`:

- Upgrade the function you created in the previous task (`0-calcul.js`)
- Add a new argument named `type` at first argument of the function. type can be SUM, SUBTRACT, or DIVIDE (string)
- When type is SUM, round the two numbers, and add a and b
- When type is SUBTRACT, round the two numbers, and subtract b from a
- When type is DIVIDE, round the two numbers, and divide a with b - if the rounded value of b is equal to 0, return the string Error

**Test cases**:

- Create a file `1-calcul.test.js` that contains test cases of this function
- You can assume a and b are always number
- Usage of `describe` will help you to organize your test cases

**Tips**:  
For the sake of the example, this test suite is slightly extreme and probably not needed  
However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases

**Requirements**:

- You have to use `assert`
- You should be able to run the test suite using `npm test 1-calcul.test.js`
- Every test should pass without any warning

**Expected output**

```bash
> const calculateNumber = require("./1-calcul.js");
> calculateNumber('SUM', 1.4, 4.5)
6
> calculateNumber('SUBTRACT', 1.4, 4.5)
-4
> calculateNumber('DIVIDE', 1.4, 4.5)
0.2
> calculateNumber('DIVIDE', 1.4, 0)
'Error'
```

---

2. **Basic test using Chai assertion library**    
While using Node assert library is completely valid, a lot of developers prefer to have a behavior driven development style. This type being easier to read and therefore to maintain.

Let’s install Chai with npm:

- Copy the file `1-calcul.js` in a new file `2-calcul_chai.js` (same content, same behavior)
- Copy the file `1-calcul.test.js` in a new file `2-calcul_chai.test.js`
- Rewrite the test suite, using `expect` from Chai

**Tips**:  
Remember that test coverage is always difficult to maintain. Using an easier style for your tests will help you  
The easier your tests are to read and understand, the more other engineers will be able to fix them when they are modifying your code

**Requirements**:

- You should be able to run the test suite using `npm test 2-calcul_chai.test.js`
- Every test should pass without any warning

---

3. **Spies**    
Spies are a useful wrapper that will execute the wrapped function, and log useful information (e.g. was it called, with what arguments). Sinon is a library allowing you to create spies.

Let’s install Sinon with npm:

- Create a new file named `utils.js`
- Create a new module named `Utils`
- Create a property named `calculateNumber` and paste your previous code in the function
- Export the `Utils` module
- Create a new file named `3-payment.js`:
  - Create a new function named `sendPaymentRequestToApi`. The function takes two argument `totalAmount`, and `totalShipping`
  - The function calls the `Utils.calculateNumber` function with type SUM, totalAmount as a, totalShipping as b and display in the console the message `The total is: <result of the sum>`
- Create a new file named `3-payment.test.js` and add a new suite named `sendPaymentRequestToApi`:
  - By using `sinon.spy`, make sure the math used for `sendPaymentRequestToApi(100, 20)` is the same as `Utils.calculateNumber('SUM', 100, 20)` (validate the usage of the `Utils` function)

**Requirements**:

- You should be able to run the test suite using `npm test 3-payment.test.js`
- Every test should pass without any warning
- You should use a spy to complete this exercise

**Tips**:  
Remember to always restore a spy after using it in a test, it will prevent you from having weird behaviors  
Spies are really useful and allow you to focus only on what your code is doing and not the downstream APIs or functions  
Remember that integration test is different from unit test. Your unit test should test your code, not the code of a different function

---

4. **Stubs**    
Stubs are similar to spies. Except that you can provide a different implementation of the function you are wrapping. Sinon can be used as well for stubs.

- Create a new file `4-payment.js`, and copy the code from `3-payment.js` (same content, same behavior)
- Create a new file `4-payment.test.js`, and copy the

 code from `3-payment.test.js` (same content, same behavior)
- Replace the spy from the previous exercise with a stub that will simulate `calculateNumber` to always return 10 (using `sinon.stub`)

**Requirements**:

- You should be able to run the test suite using `npm test 4-payment.test.js`
- Every test should pass without any warning
- You should use a stub to complete this exercise

**Tips**:  
Remember that stubs are useful to simulate external function or API responses, but never use stubs when testing code you wrote yourself  
Always restore the stub after its usage in a test suite

---

5. **Hooks**    
Mocha provides hooks that will help you to write some code before or after a test suite. (i.e. `before`, `after`, `beforeEach`, and `afterEach`)

- Copy the file `4-payment.js` to a new file named `5-payment.js`
- Create a new file `5-payment.test.js` and copy the file from `4-payment.test.js` in it
- Add a `beforeEach` hook that will initialize the value of the variable `result` to 10
- In the `afterEach` hook, verify if the variable `result` is equal to 10
- Make sure that you are using hooks correctly in your file

**Requirements**:

- You should be able to run the test suite using `npm test 5-payment.test.js`
- Every test should pass without any warning

**Tips**:  
Remember to keep your tests independent and simple. Hooks help you to organize the tests and maintain your code more easily  
The `afterEach` hook will run after every test is run, and the `beforeEach` hook will run before every test is run

---

6. **Async tests with done**    
Testing asynchronous functions can be difficult. Mocha provides a method to handle this.

- Create a new file named `6-payment_token.js`
- Create a new function `sendPaymentRequestToApi` that takes two arguments `totalAmount`, and `totalShipping`
- Simulate an async function that will return a promise with the value 10 after 3 seconds
- Create a new file named `6-payment_token.test.js`
- Write an async test that waits for the response of `sendPaymentRequestToApi` to complete

**Requirements**:

- You should be able to run the test suite using `npm test 6-payment_token.test.js`
- Every test should pass without any warning
- You should use async/await and the `done` callback to complete this exercise

**Tips**:  
Mocha allows you to use the `done` callback to signal Mocha when the test is complete  
You can also use `async/await` syntax to handle promises more easily in modern JavaScript

---

7. **Skip**    
You can skip a test or a suite of tests when they are not ready. Mocha allows you to skip individual tests or entire test suites.

- Create a new file `7-skip.test.js`
- Write a test suite with a single test that will be skipped
- Add a reason to why it is skipped

**Requirements**:

- You should be able to run the test suite using `npm test 7-skip.test.js`
- The skipped test should be properly marked as skipped

**Tips**:  
Remember to use skip only when it is absolutely needed. Skipping tests should be avoided and only used for temporary issues

---

8. **Basic Integration testing**  
Integration tests are crucial to test the interaction between various components of your application.

- Create a new folder named `8-api`
- Inside it, create a new file `api.js` and create a simple Express server with a single route `/`
- Create a new file `api.test.js` and use `supertest` to write integration tests for your `/` route

**Requirements**:

- You should be able to run the test suite using `npm test 8-api/api.test.js`
- Every test should pass without any warning

**Tips**:  
Integration tests will help you test multiple components together and validate their interactions

---

9. **Regex Integration testing**    
When testing REST APIs, it is often useful to have routes that are dynamic.

- Modify `api.js` to add a new route `/cart/:id` that returns `Cart id is: <id>`
- Update `api.test.js` with tests for `/cart/:id` route

**Requirements**:

- You should be able to run the test suite using `npm test 8-api/api.test.js`
- Every test should pass without any warning

**Tips**:  
Dynamic routes are tested using regex in the request URL

---

10. **Deep equality & Post integration testing**    
Deep equality checks can help you compare objects with multiple nested levels.

- Modify `api.js` to add new endpoints:
  - `/available_payments` that returns a JSON object with available payment methods
  - `/login` that accepts a POST request with a JSON body containing username and password
- Update `api.test.js` with tests for these new endpoints

**Requirements**:

- You should be able to run the test suite using `npm test 8-api/api.test.js`
- Every test should pass without any warning

**Tips**:  
Use deep equality checks to compare complex objects or arrays
