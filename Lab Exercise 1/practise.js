const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array.reduce((accumulator, currentValue) => {
  console.log(accumulator, "accumulator");
  console.log(currentValue, "currentValue");
  return accumulator + currentValue;
});

console.log(sumWithInitial);
