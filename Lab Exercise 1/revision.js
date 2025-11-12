const numArray = [1, 3, 5, 7];

const numArrayMapped = numArray.map((num) => num * num);

console.log(numArrayMapped); // return an array with each of the original numbers squared

const letterArray = ["a", "b", "c", "d"];

const letterArrayMapped = letterArray.map((letter) => letter + "z");

console.log(letterArrayMapped); // return an array with each of the original letters plus a "z"
