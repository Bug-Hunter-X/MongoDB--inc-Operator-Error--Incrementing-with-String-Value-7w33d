# MongoDB $inc Operator Error: Incrementing with String Value

This repository demonstrates a common error when using the `$inc` operator in MongoDB: attempting to increment a field with a string value. The `$inc` operator requires a numerical value to perform the increment operation. Passing a string results in an error.

## Bug
The `bug.js` file contains the erroneous code. The `updateOne` method attempts to increment the `field1` of a document with the value '1', which is a string. This results in a MongoDB error.

## Solution
The `bugSolution.js` file provides a corrected version of the code, where the increment value is a number, resolving the error.

## How to reproduce
1. Clone the repository.
2. Run the `bug.js` file. You will observe an error.
3. Run the `bugSolution.js` file. This will successfully update the document without errors.