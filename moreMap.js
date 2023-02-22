const devide = number => number%3;
const numbers = [12,17,57,25]?.map(devide);

const toms = ['Tom Cruise','Tom Hanks','Tom Brady', 'Tom Solaiman']
const firstLetters = toms.map(toms=>toms[0]);
// console.log(firstLetters);
const nameLength = toms.map(friend=>friend.length);
// console.log(nameLength);
console.log(Math.max(...nameLength));

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 2, name: 'iphone', price: 57000},
    {id: 3, name: 'tablet', price: 35000},
    {id: 4, name: 'watch', price: 21000},
]
const itemsName = products?.map(item=>item?.name);
console.log(itemsName);