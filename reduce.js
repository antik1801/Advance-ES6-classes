// mao
// .reduce (accumulator function, initial value) , gives the sum of the array items // use two peramiters
const numbers = [1,2,3,4,5,6,7,8,9,10];
const total = numbers.reduce((previus,current)=>{
    console.log(previus, current);
    return previus + current;
    }
    ,0)
console.log(total);
