// I paired [by myself] on this challenge.




// Pseudocode
// declare secretNumber
// change value of secretNumber to 7
// declare password
// change value of password to "just open the door"
// declare allowedIn
// change boolean of allowedIn to false
// declare a Array called members
// add "John" to the first position
// add "Mary" to the fourth position 


// __________________________________________
// Write your code below.

var secretNumber = 0;
secretNumber = 7;
var password = "";
password = "just open the door";
var allowedIn = true;
var allowedIn = false;
var members = [];
members[0] = "John";
members[3] = "Mary";





// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 


var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = ["John",,,"Mary"];



// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// Having some knowledge how javascript works and its syntax, this was a pretty simple exercise to finish.
// 
// 
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

