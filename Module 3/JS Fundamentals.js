// Question 1:
// - 1 (real answer 10)
// - -1
// - false (real answer 1)
// - false
// - 2
// - 6
// - 9px
// - $45
// - 2
// - not sure (real answer NaN)
// - -4 (real answer -9 5)
// - -14
// - 1
// - undefined (real answer NaN)
// - undefined (real answer true)
// - null (real answer false)
// - not sure (real answer -2)

console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(!true);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log(" -9 " + 5);
console.log(" -9 " - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(undefined == null);
console.log(undefined === null);
console.log(" \t \n" - 2);

// Question 2:

let three = "3";
let four = "4";
let thirty = "30";
//what is the value of the following expressions?
let addition = three + four;
// 34 - needs to be converted to numbers from strings
let multiplication = three * four;
// 12
let division = three / four;
// 0.75
let subtraction = three - four;
// -1
let lessThan1 = three < four;
// True
let lessThan2 = thirty < four;
// True not sure I understand why it doesn't work
console.log(
  addition,
  multiplication,
  division,
  subtraction,
  lessThan1,
  lessThan2
);

//Question 3:

if (0) console.log("#1 zero is true");
if ("0") console.log("#2 zero is true");
if (null) console.log("null is true");
if (-1) console.log("negative is true");
if (1) console.log("positive is true");

// Question 4:

// original
let a = 2,
  b = 3;
let result1 = `${a} + ${b} is `;
if (a + b < 10) {
  result1 += "less than 10";
} else {
  result1 += "greater than 10";
}
console.log(result1);

//rewritten using '?'
let c = 2,
  d = 50;
let result = `${c} + ${d} is `;
c + d < 10 ? (result += "less than 10") : (result += "greater than 10");
console.log(result);

//Question 5:

// original
function getGreeting(name) {
  return "Hello " + name + "!";
}
let q5result = getGreeting("John");
console.log(q5result);

// // rewritten using function expression syntax
const getGreeting2 = function (name) {
  return "Hello " + name + "!";
};
let q5result2 = getGreeting2("John");
console.log(q5result2);

// // rewritten using arrow function syntax
const getGreeting3 = (name2) => "Hello " + name2 + "!";
let q5result3 = getGreeting3("John");
console.log(q5result3);
