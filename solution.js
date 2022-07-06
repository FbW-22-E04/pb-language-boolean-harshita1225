const value1 = 3;
const value2 = "3";
//console.log("1.", 3 = "3");//sytax error
console.log("2.", 3 == "3");//true
console.log("3.", 3 === "3");//false 


// to compare two values we use ==
// to compare values and type together we use ===
// to ASSIGN a value to a variable we use =



console.log("-------------------------");
let myVar= true;
console.log('' && myVar ? 'good morning':'good evening');
//using empty string as false value



console.log("-------------------------");


let firstName = '' || 'John' || 0;
let emptyStr  = '' && false && 'Hello World';
let zero  = '' || false || 0;
let seven = 75 && 'nine' && 7;

console.log(firstName,zero,emptyStr,seven);
