const doubleIt = number => number*2;
const numbers = [2,4,8,6,7,9];
const makeDoubled = numbers?.map(doubleIt);
console.log(makeDoubled);

// an array make 5 times of the elements
const fiveTimes = [1,2,3,4,5,6].map(x=>x*5);
console.log(fiveTimes);
