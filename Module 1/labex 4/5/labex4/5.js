// // console.log('Hello Seb')

// // function greetUser(name) {
// //     return ('Hello ' + name)
// // }

// // console.log(greetUser("Sebastian"))

// function addtogether(firstnumber, b) {
//     return (firstnumber + b)
// }

// function divide(a, b) {
//     return (a / b)
// }

// function subtract(a, b) {
//     return (a - b)
// }

// function multiply(a, b) {
//     return (a * b)
// }

// function combo(a, b, c, d) {
//     return (a - b + c * d)
// }

// console.log(addtogether (23, 8.2))

// console.log(divide (2, 1))

// console.log(subtract(5, 6))

// console.log(multiply(4, (multiply(1, 2))))

// console.log(combo(1, 1, 1, 1))

let thisisanarray = ["John", "Orange", "Mitsubishi", "Banana", "Flute"];

thisisanarray[1] = thisisanarray[4];
// Replacing position 2 with 5

// thisisanarray[4] = "Orange";
// // Manually replacing 4 with 'Orange' as I don't know how to call functions simultaneously (if possible)

// thisisanarray.unshift("Chair");
// //Adding an extra element to the beginning of the array

// thisisanarray.pop();
// // Removing the last element

// console.log(thisisanarray);
// // Printing the array

// const d = new Date();
// let currentyear = d.getFullYear();
// const birthyear = 1999

// function defineBirth(currentyear, birthyear){

//     return (currentyear - birthyear)

// }

// console.log(defineBirth)

function defineBirth(birthyear) {
    const currentyear = new Date().getFullYear();
    return currentyear - birthyear;
}

console.log(defineBirth(1999));