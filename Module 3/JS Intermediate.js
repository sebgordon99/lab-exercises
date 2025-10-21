// Question 1:

function ucFirstLetters(string) {
    const arrayOfStrings = string.split(" ");
    let emptyArray = []
    for (let i of arrayOfStrings) {
       i = i[0].toUpperCase() + i.slice(1, i.length);
       emptyArray.push(i)
    //    console.log(i)
    }
    
    return emptyArray.join(" ");
}
console.log(ucFirstLetters("los angeles") ) // Los Angeles
console.log(ucFirstLetters("lowercase word") ) // Lowercase Word
console.log(ucFirstLetters("I could be anythhhhhhhhhhhhing you like") ) // 


// Question 2:



// Question 3:



// Question 4:



// Question 5:



// Question 6:



// Question 7:



// Question 8:



// Question 9:



// Question 10:


