//Question 1:

function makeCounter() {
  let currentCount = 0;
  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}
let counter1 = makeCounter();
counter1(); // 1
counter1(); // 2

//1a:

let counter2 = makeCounter();

counter2();

//1b:

function makeCounter2(startFrom) {
  let currentCount = startFrom;
  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}

let test = makeCounter2(2);
test(); // 3
test(); // 4

//1c:

function makeCounter3(startFrom, incrementBy) {
  let currentCount = startFrom;
  return function () {
    currentCount = currentCount + incrementBy;
    console.log(currentCount);
    return currentCount;
  };
}

let test2 = makeCounter3(2, 2);
test2(); // 4
test2(); // 6

//Question 2:

function delayMsg(msg) {
  console.log(`This message will be printed after a delay: ${msg}`);
}
// setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// delayMsg("#4: Not delayed at all");
//previous lines commented out to help me test further questions

//2a:

// from bottom to top, because they each have a decreasing amount of delay built in, meaning the message with the least delay is printed first

//2b:

const delayMsg2 = (msg) =>
  console.log(`This message will be printed after a delay: ${msg}`);

// delayMsg2("#5: this was written using an arrow function");

//2c:

// setTimeout(delayMsg2, 10000,'#6: Delayed by 10s')

//2d:

let answer2c = setTimeout(delayMsg2, 10000, "this will be cancelled");
clearTimeout(answer2c);

//Question 3

//3c:
function printMe(msg = "printing debounced message") {
  let stringMsg = String(msg);
  console.log(stringMsg);
}
// printMe = debounce(printMe); //create this debounce function for a)
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
// setTimeout(printMe, 100);
// setTimeout(printMe, 200);
// setTimeout(printMe, 300);

//3a-b:

function debounce(func, ms = 1000) {
  let timerId;

  return function (...args) {
    const context = this;
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
    }, ms);
  };
}

let answer3a = debounce(printMe);

// answer3a()

let answer3b = debounce(printMe, 3000);

// answer3b()

//3c:


let answer3c = debounce(() => printMe("this is the answer to 3c"), 3001);

// answer3c()

//Question 4:
console.log("Question 4: -----------------");

//4a+c:


// function fibonacci(n, limit) {
//   if (n <= 1) {return n;
//   } else if (n > limit) {
//     return "done!";
//   } else {
//   return fibonacci(n - 1) + fibonacci(n - 2);}
// }

// let n = 1;
// let limit = 10;

// const tickId = setInterval(() => {
//     console.log("n:", n);
//   if (n < limit) {
//     console.log(fibonacci(n, limit));
//     n++;
//   } else {
//     clearInterval(tickId);
//     console.log("Done!");
//   }
// }, 1000);

//4b:
let num = 1;


// function fibonacci(n, limit) {
//   if (n <= 1) {return n;
//   } else if (num > limit) {
//     return "done!";
//   } else {
//  num = fibonacci(n - 1) + fibonacci(n - 2);
// return num;
// }
// }

// let n = 1;
// let limit = 10;

// const tickId = setInterval(() => {
//   if (num < limit) {
//     console.log(fibonacci(n, limit));
//     n++;
//   } else {
//     clearInterval(tickId);
//     console.log("Done!");
//   }
// }, 1000);

//Question 5:

console.log("question 5 -------------")

//5a

let car = {
make: "Porsche",
model: '911',
year: 1964,

description() {
console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
}
};

car.description(); //works
// setTimeout(() => car.description(), 200); //fails

//5b:

let car2 = {...car, year: 2023}

car2.description();
// setTimeout(() => car2.description(), 200);

//5c:

//it uses the new values, because i made a shallow clone, if i referenced car rather than car2 it would show the old values

//5d:

// setTimeout(car.description.bind(car), 200);

//5e: 

let car3 = {...car, model: 912}

// setTimeout(car3.description.bind(car3), 200);

//Question 6:

console.log("question 6------------")

//6a:

Function.prototype.delay = function(ms) {
  const originalFn = this;

  return function(...args) {
    setTimeout(() => {
      originalFn(...args);
    }, ms);
  };
};

function multiply(a, b) {
console.log( a * b );
}


// multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

//6b-c:

Function.prototype.delay = function(ms) {
  const originalFn = this;

  return function(...args) {
    const context = this; // preserve `this` if the function is a method
    setTimeout(() => {
      originalFn.apply(context, args); // call with all arguments
    }, ms);
  };
};

function multiply2(a, b, c, d) {
  console.log(a * b * c * d);
}

// multiply2.delay(501)(5, 5, 5, 5);

//Question 7:

console.log("question 7--------------------")

class DigitalClock {
constructor(prefix) {
this.prefix = prefix;
}
display() {
let date = new Date();
//create 3 variables in one go using array destructuring
let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];

if (hours < 10) hours = '0' + hours;
if (mins < 10) mins = '0' + mins;
if (secs < 10) secs = '0' + secs;
console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
}
stop() {
clearInterval(this.timer);
}
start() {
this.display();
this.timer = setInterval(() => this.display(), 1000);
}
}
// const myClock = new DigitalClock('my clock:')
// myClock.start()

//7a:

// class PrecisionClock extends DigitalClock {
//   constructor(prefix, precision = 1000) {
//     super(prefix);
//     this.precision = precision;
//   }

//   start() {
//     this.display();
//     this.timer = setInterval(() => this.display(), this.precision);
//   }
// }

// const fastClock = new PrecisionClock('Fast Clock:', 500);
// fastClock.start();

// const defaultClock = new PrecisionClock('Default Clock:');
// defaultClock.start();

//7b:

class AlarmClock extends DigitalClock {
  constructor(prefix, wakeUpTime = "07:00") {
    super(prefix);
    this.wakeUpTime = wakeUpTime;
  }

   start() {
    super.start(); // starts the regular clock

    // Check every second for the alarm
    this.timer = setInterval(() => {
      this.display(); // show current time

      const now = new Date();
      const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

      if (currentTime === this.wakeUpTime) {
        console.log("⏰ Alarm! Wake up!");
        this.stop();
      }
    }, 1000);
  }
}

const alarmClock = new AlarmClock("Alarm Clock", "15:06");
// alarmClock.start();

//Question 8:

console.log("question 8 -------------")

//8a:
function validateStringArg(fn) {
  return function(arg) {
    if (typeof arg !== "string") {
      throw new Error("Argument must be a string");
    }
    return fn(arg);
  };
}

function orderItems(itemName) {
return `Order placed for: ${itemName}`;
}

// create a decorated version of the original function
const validatedOrderItem = validateStringArg(orderItems);

console.log(validatedOrderItem("Apple Watch")); // should run the function
// console.log(validatedOrderItem(123)); // should throw an error

//8b-d:

function validateStringArgs(fn) {
  return function(...args) {
    args.forEach(arg => {
      if (typeof arg !== "string") {
        throw new Error("All arguments must be strings");
      }
    });
    return fn(...args);
  };
}

function orderItems2(...itemNames) {
  return `Order placed for: ${itemNames.join(", ")}`;
}

const validatedOrderItemB = validateStringArgs(orderItems2);

console.log(validatedOrderItemB("Apple Watch")); //should work
console.log(validatedOrderItemB("iPhone", "MacBook", "AirPods")); //should work
// console.log(validatedOrderItemB("iPad", 123)); //not every argument is a string (shows an error)

//Question 9: 

//9a-d
function randomDelay() {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 20000) + 1000;
    console.log(`Generated delay: ${delay / 1000} seconds`);

    setTimeout(() => {
      if (delay % 2 === 0) {
        resolve(`Success! Delay was even: ${delay / 1000} seconds`);
      } else {
        reject(`Failure! Delay was odd: ${delay / 1000} seconds`);
      }
    }, delay);
  });
}

// randomDelay()
//   .then((msg) => console.log(msg))
//   .catch((err) => console.error(err));

  //Question 10:

console.log("question 10 -------------")

//10a-c:

import fetch from 'node-fetch';
globalThis.fetch = fetch;

async function fetchURLData(urls) {
  try {
    const urlArray = Array.isArray(urls) ? urls : [urls];

    const fetchPromises = urlArray.map(async (url) => {
      const response = await fetch(url);

      if (response.status !== 200) {
        throw new Error(`Request failed with status ${response.status} for ${url}`);
      }

      return response.json();
    });

    const results = await Promise.all(fetchPromises);

    return Array.isArray(urls) ? results : results[0];
  } catch (error) {
    throw new Error(error.message);
  }
}

fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => console.log('Single result:', data))
  .catch(error => console.error(error.message));

fetchURLData([
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3'
])
  .then(data => console.log('Multiple results:', data))
  .catch(error => console.error(error.message));