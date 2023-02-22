const numbers = [25, 45, 85, 47, 15, 36, 54];
const fives = numbers.find(number=> number%5 === 0);
const bigNums = numbers.filter(n => n>50);
const products = [
    {id:36, name: 'Samsung 365i', price: 25700, celler: 'A365i11'},
    {id:37, name: 'Glut ali 711', price: 36500, celler: 'A3152'},
    {id:38, name: 'iphone 915', price: 85000, celler: 'A365i11'},
    {id:39, name: 'samji', price: 31000, celler: 'A365i11'},
    {id:40, name: 'sauto', price: 45000, celler: 'A365i11'},
    {id:41, name: 'kairo', price: 58000, celler: 'A365i11'},
    {id:42, name: 'Jaco', price: 36570, celler: 'A365i11'},
    {id:43, name: 'mari', price: 36570, celler: 'A365i11'},
    {id:44, name: 'kuinzo', price: 415633, celler: 'A365i11'},
    {id:45, name: 'lapate', price: 258900, celler: 'A365i11'},
    {id:46, name: 'suatu', price: 457000, celler: 'A365i11'},
    {id:47, name: 'naumi', price: 59302, celler: 'A365i11'},
]
// const minPrice = prompt('Please enter the expected value');

// console.log(bigNums);
const thinNums = numbers.filter(number => number<45);
const even = numbers.filter(number => number % 2 ===0);
const lessEqualMinPrice = products.filter(product=>product.price <= 35000)
// console.log(...thinNums);
// console.log(...even);
console.log(lessEqualMinPrice);

// const parent = document.getElementById('items');
// const p = document.createElement('p');
// p.innerText = `item ${lessEqualMinPrice}`
// parent.appendChild(p);


// console.log(fives);