const apiCall =[
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
const discountProduct =price =>{
    if(price>50000) return price;
    else return null;
}
const priceFifty = items => {
    if(items?.price === 36570) return items?.name;
    else return null;
}
const productPrices = apiCall.map(items=>discountProduct(items.price));
const productPrice = apiCall.map(items=>priceFifty(items));
console.log(productPrices);
console.log(productPrice);