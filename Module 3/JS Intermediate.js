// Question 1:

function ucFirstLetters(string) {
  const arrayOfStrings = string.split(" ");
  let emptyArray = [];
  for (let i of arrayOfStrings) {
    i = i[0].toUpperCase() + i.slice(1, i.length);
    emptyArray.push(i);
    //    console.log(i)
  }

  return emptyArray.join(" ");
}
console.log(ucFirstLetters("los angeles")); // Los Angeles
console.log(ucFirstLetters("lowercase word")); // Lowercase Word
console.log(ucFirstLetters("I could be anythhhhhhhhhhhhing you like")); // I Could Be Anythhhhhhhhhhhhing You Like

// Question 2:

function truncate(str, max) {
  let cutWord = str.substring(0, max);

  if (cutWord.length < max) {
    return cutWord;
  }
  return cutWord + "...";
}

console.log(truncate("This text will be truncated if it is too long", 25)); // This text will be truncat...
console.log(truncate("ee", 2)); // ee

// Question 3:

let animals = ["Tiger", "Giraffe"];
console.log(animals);
animals.push("Snake", "Cat");
console.log(animals);
animals.unshift("Hippopotamus");
console.log(animals);
animals.sort();
console.log(animals);
function replaceMiddleAnimal(newValue) {
  animals.splice(animals.length / 2, 1, newValue);
  // let midPoint = animals.length / 2;
  // animals[midPoint].push(newValue);
  return animals;
}
console.log(replaceMiddleAnimal("Crocodile"));

function findMatchingAnimals(beginsWith) {
  const animalMatches = animals.filter(
    (animal) => animal[0].toUpperCase() === beginsWith.toUpperCase()
  );

  if (animalMatches.length > 0) {
    return animalMatches;
  } else {
    return "No animals found starting with " + beginsWith;
    //     console.log(declineMessage);
    //     return declineMessage;
  }
}
console.log(findMatchingAnimals("x"));
console.log(findMatchingAnimals("C"));
// Question 4:

function camelCase(cssProp) {
  const arrayOfStrings = cssProp.split("-");
  let emptyArray = [];
  for (let i = 0; i < arrayOfStrings.length; i++) {
    let camelWord = arrayOfStrings[i].toLowerCase();
    // console.log(camelWord)
    if (i > 0) {
      camelWord = camelWord[0].toUpperCase() + camelWord.slice(1);
    }
    emptyArray.push(camelWord);
  }
  return emptyArray.join("");
}
console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display

// Question 5:

let twentyCents = 0.2;
let tenCents = 0.1;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen);

// 5a my guess is because it is converting it to a string, and adding the strings together.

function currencyOperation(float1, float2, operation) {
  if (operation == "+") {
    let result = float1 + float2;
    return result;
  } else if (operation == "-") {
    let result = float1 - float2;
    return result;
  } else if (operation == "*") {
    let result = float1 * float2;
    return result;
  } else if (operation == "/") {
    let result = float1 / float2;
    return result;
  }
  return "unknown operation";
  // let safeOperation = (Number(float1), operation, Number(float2));
  // return safeOperation;
}
console.log(currencyOperation(1.76, 2.56, "+"));
console.log(currencyOperation(4.8, 2.02, "/"));
console.log(currencyOperation(3, 2, "*"));
console.log(currencyOperation(3, 2, "34"));

// Question 6:

function unique(duplicatesArray) {
  return new Set(duplicatesArray);
}

const colours = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
const pets = ["cat", "cat", "dog", "snake", "snake", "snake", "snake", "snake"];
console.log(unique(colours)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]
console.log(unique(pets)); // ["cat", "dog", "snake"]

// Question 7:

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];

// 7a

function getBookTitle(bookId) {
  const result = books.find((book) => book.id == bookId);
  if (result) {
    return result.title;
  } else {
    return "Book not Found";
  }
}
console.log(getBookTitle(3)); // 1984
console.log(getBookTitle(5678)); // Book not Found

// 7b

function getOldBooks(){
let oldies = books.filter(book => book.year < 1950)
return oldies;
}
console.log(getOldBooks()) // 3 matching items in books array

// 7c

function addGenre(){
    const result = books.map(book => {
       return {
              ...book,
              category:
       }
    })
return output;
}
console.log(output)
// 7d
// 7e

// Question 8:

// Question 9:

// Question 10:
