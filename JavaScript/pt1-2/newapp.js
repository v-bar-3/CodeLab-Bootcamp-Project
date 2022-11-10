var bad = 3;
let good = 4;
//Let: block-scoped variables
//Var: function-scoped - generally better to use variables only when you need them, so we will use let
//JS will handle all of the necessary var assignments based on value
let good2 = "some text";
let myObject = {
    "firstName": "Vincent",
    "ID": 3
}
//Key-value pairs very similar to JSON objects
//Semi-colons are optional, recommended for cleanliness in code
const myVar = 3; //unchangeable
//console.log("someObject:", myObject);
doSomething();

function doSomething() {
    console.log("I'm doing something!");
};

//arrow functions; can run without function name
//assigns a function to a variable
//great use cases in React
arrowFunction = (someParam1, someParam2) => {
    console.log("Hey, I'm an arrow function!", someParam1, someParam2);
}

arrowFunction("yo",3);