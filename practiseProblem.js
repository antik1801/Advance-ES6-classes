/*
আজকে কোন কোন জিনিস খেয়াল করবে 

১. nested অবজেক্ট (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। সেটা খেয়াল করতে হবে )

২. ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু খেয়াল করতে হবে। 



যে জিনিসগুলা এখন না লাগলেও দুই-তিন সপ্তাহ পরে লাগবে। তখন আবার এই জিনিসগুলো নিয়ে আলোচনা করবো। তবে এখন একটু দেখে রাখলে তখন ইজি লাগবে। 

৩. array এর মধ্যে map কিভাবে করতে হয়। 

৪. array এর মধ্যে forEach কিভাবে করে। এবং map এর forEach এর মধ্যে ডিফারেন্স কি

৫. filter জিনিসটা দিয়ে কি করা হয়। ফিল্টার যে array রিটার্ন করে সেটা ফিউচারের জন্য খেয়াল রাখতে হবে 

৬. find এবং filter এর মধ্যে ডিফারেন্স কি ? 

৭. অবজেক্ট এর সিম্পল destructuring কিভাবে করে ?

৮. array এর সিম্পল destructuring কিভাবে করে ?



যে জিনিসগুলো এখন জাস্ট ধারণা রেখে দাও। বুঝতে পারলে ভালো। না বুঝতে পারলেও কোন সমস্যা নাই। আমাদের এই কোর্স এ তেমন লাগবে না। তবে মাঝে মধ্যে ইন্টারভিউতে লেগে যেতে পারে। বা কিছুদিন পরে লেগে যেতেও পারে। 

৯. class কিভাবে ডিক্লেয়ার করে 

১০. inheritance কি জিনিস 

১১. prototypical inheritance এর কনসেপ্টটা কি (এইটা মাঝে মধ্যে ইন্টারভিউতে জিজ্ঞেস করে বসে)

আজকের practice টাস্কের লিঙ্কঃ 



https://drive.google.com/file/d/1XcvIBe_rJlr6GY2rTnHlbIluTABXNhp7/view?usp=sharing
*/


/*
1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number.

*/
const odd = [ 1, 3, 5, 7, 9 ];
const even = odd.map(item=> item+1);
console.log(even);
/*

2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method.

*/
const array = [33, 50, 79, 78, 90, 101, 30 ];
const Filter = array.filter(item=>item%10 === 0);
console.log(Filter);
/*
3) Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3.
*/
const prob3 = [33, 50, 79, 78, 90, 101, 30 ];
const FindMethod = prob3.find(number => number % 10 === 0);
console.log(FindMethod);
/*
4) You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method.
*/
const prob4 = [ 1, 9, 17, 22 ];
const Reduce = prob4.reduce((previous,next)=>previous+next,0);
console.log(Reduce);
/*
const people = [
    {name:'Meena', age: 20},
    {name:'Rina', age: 15},
    {name:'Suchitra', age: 22},
]
Challenging Follow above array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?

20 + 15 + 22 = 57 . The output will be 57
*/
const people = [
    {name:'Meena', age: 20},
    {name:'Rina', age: 15},
    {name:'Suchitra', age: 22},
]

const ages = people.map(objects=>objects.age);
const sum = ages.reduce((previous,next)=>previous+next,0);
console.log(sum);
/*
const student = {
    name: 'Fredie',
    age: 26,
}
console- age
*/


const student = {
    name: 'Fredie',
    age: 26,
}
console.log(student.age);

let data = {
    location: [
        {
        latitude: '34.5, 37.8',
        longitude: '98.77, 58.7',
        city: 'Hydrabad',
        country:'India',
        }
    ]
}
console.log(data.location[0].city);

const user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
}
const object = user;
console.log(object.email);
console.log(object.address);
console.log(object.address?.city);
console.log(object.address?.geo?.lat);
console.log(object.company);
