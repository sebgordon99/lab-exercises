const Logger = require('../libraries/Logger');
let myLogger = new Logger()
class Calculator {
constructor() {

}

add(num1, num2) {
const value = num1 + num2
myLogger.log(value)
return value;
}
subtract(num1, num2) {
const value = num1 - num2
myLogger.log(value)
return value;
}
multiply(num1, num2) {
const value = num1 * num2
myLogger.log(value)
return value;
}
divide(num1, num2) {
const value = num1 / num2
myLogger.log(value)
return value;
}
}
module.exports = Calculator