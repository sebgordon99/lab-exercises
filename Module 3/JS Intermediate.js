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
    return books.map(book => {
       return {
              ...book,
              genre: 'non-fiction'
       }
    })
}
const genreAdded = addGenre()
console.log("-->", genreAdded, "<--")

// 7d


// 7e

// Question 8:

const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

console.log(phoneBookABC)
// 8a-b:


const phoneBookDEF = new Map()
phoneBookDEF.set('Donna', '0455555555')
phoneBookDEF.set('Evelyn', '0466666666')
phoneBookDEF.set('Fiona', '0477777777')



// 8c:
phoneBookABC.set('Caroline', '0433333333')

console.log(phoneBookABC)

// 8d:

function printPhoneBook(contacts) {
    let result = contacts.entries()
    console.log(result)
}

printPhoneBook(phoneBookABC)
printPhoneBook(phoneBookDEF)


// 8e:

const mergedMap = new Map([...phoneBookABC, ...phoneBookDEF])

console.log(mergedMap)

// 8f:

printPhoneBook(mergedMap)

// Question 9:

let salaries = {
"Timothy" : 35000,
"David" : 25000,
"Mary" : 55000,
"Christina" : 75000,
"James" : 43000
};

// 9a:

function sumSalaries(salaries){
  let total = 0;

  for (let value of Object.values(salaries)) {
    total += value;
  }
  return total;
}
console.log(sumSalaries(salaries))

// 9b:

function topEarner(salaries){
  let maxSalary = 0;
  let winner = null;

  for (const [name, salary] of Object.entries(salaries)) {
    
    if (salary > maxSalary) {
      //return the corresponding key only
      maxSalary = salary;
      winner = name;
    } 
  }
  return winner;
}

console.log(topEarner(salaries))

// Question 10:

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

// 10a:

console.log(((today.getHours() * 60) + today.getMinutes()) + ' minutes have passed so far today')

// 10b:

// console.log((today.getMilliseconds() * 1000) + ' seconds have passed so far today')

console.log(((today.getHours() * 60 * 60) + (today.getMinutes() * 60) + (today.getSeconds())) + ' seconds have passed so far today')

// 10c:

let myBirth = new Date('1999-07-04')

const birthInMilli = today - myBirth
console.log(birthInMilli)

let result = ("I am " + (birthInMilli / 1000 / 60 / 1440 / 364.25) + " years old, " + (birthInMilli / 1000 / 60 / 1440) + " days old, " + (birthInMilli / 1000 / 60) + " minutes old, and " + (birthInMilli / 1000) + " seconds old.")
console.log(result)

// 10d:

function daysInBetween(date1, date2) {
  let firstDate = new Date(date1);
  let secondDate = new Date(date2);
  let result = secondDate - firstDate;
  let finalResult = result / 1000 / 60 / 1440
  return "There are " + finalResult + " days between your two dates.";

}
console.log(daysInBetween('1999-07-14', '2025-10-24'))