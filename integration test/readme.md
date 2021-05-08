Week 13 - Radium Rocket QA course.

At the file "basicOperations.js" are the validations to the parameters that you can enter, all of them exported.
On the other hand, at file "complexOperations.js" are the functions to be tested with all basic operations imported.
At "complexOperations.integration.test.js" are the integration tests that i made.
Finally, at "complexOperations.unit.test.js" are the unit tests that i made, with some basic operations mocked.

To run integration tests, open a console and write "$ npm run test-coverage complexOperations.integration.test.js".
To run unit tests, open a console and write "$ npm run test-coverage complexOperations.unit.test.js".
To run all tests, open a console and write "$ npm run test" or "$ npm run test-coverage".

NodeJs, Jest and Babel were used for this work.

Author: Pablo A. Balbo