//input  is string
// 1+1 return 2
// assume 2 numbers
// number operator number

function cal(input){

    // let splitInput = input.split("-");
    // console.log(splitInput);

const noSpace = input.replace(/  /g, "");
const operators = ["+", "-", "*", "/"];

const operator = operators.find((operator) => noSpace.includes(operator));
if (!operator) {
    return "invalid expression"
}

const expressionArray = noSpace.split(operator);

if (expressionArray != 2) {
    return INVALID;
}
if (operator === "+"){
    return expressionArray[0] + expressionArray[1];
}
if (operator === "-"){
    return expressionArray[0] - expressionArray[1];
}
if (operator === "*"){
    return expressionArray[0] * expressionArray[1];
}
if (operator === "/"){
    return expressionArray[0] / expressionArray[1];
}
    //1. remove the space
    //use operator as the divider
    //left of divider, right of divider
    //do the operation

    //chance that it doesnt match the pattern
    //return error
}

console.log(cal("1+1"));
console.log(cal("2-2"));
console.log(cal("3*3"));
console.log(cal("4/4"));

