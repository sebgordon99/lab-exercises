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
console.log(ucFirstLetters("I could be anythhhhhhhhhhhhing you like") ) // I Could Be Anythhhhhhhhhhhhing You Like


// Question 2:

function truncate(str, max) {
        let cutWord = (str.substring(0, max))
        
       if (cutWord.length < max ){
return cutWord
       }
       return cutWord + "..."
}


console.log(truncate('This text will be truncated if it is too long', 25))
// This text will be truncat...
console.log(truncate('ee', 2))
// ee

// Question 3:



// Question 4:



// Question 5:



// Question 6:



// Question 7:



// Question 8:



// Question 9:



// Question 10:


