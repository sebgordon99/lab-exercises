
class Logger {
constructor() {
this.id = Math.random()}
log = (value) => {
console.log(`[Calculator :${this.id}]:${value}`)
}
}
module.exports = Logger