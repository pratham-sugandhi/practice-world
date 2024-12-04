// DAY-1;

// VARIABLES--
/*
// console.log("prathu");

const accountId = 14445;
let accountEmail ="prathu@gmail.com";
var accountPass = "943";
accountCity = "jaipur";

// accountId = 23;   //error
accountEmail= "mm@gmail";
accountPass="678";
accountCity="bur";

// console.log(accountId);    //14445
// console.log(accountEmail); //mm@gmail
// console.log(accountPass);  //678
// console.log(accountCity);  //bur


// console.table([accountId, accountEmail, accountPass, accountCity]);


// NEW TOPIC-- DATATYPES
// "use strict"; // treat all js in newer ver

// alert(3+3); //basically works in browser

let name = "prathu";   //string
let age = 19;  //num
let isLoggedIn = true; //boolean
*/


// DATATYPES--
// PRIMITIVE DATATYPES--
/*
// number => // 2 to power 53;
// bigInt => // {large numbers}
// string => ""; //text,letters,words
// boolean => true/false;
// null = // type/ standalone value  //(empty)
// undefined => // value not provided
// symbol => // define comp/uniqueness


// console.log(typeof null); // object 
// console.log(typeof undefined); // undefined
*/

// NON-PRIMITIVE DATATYPES--
{
// OBJECT-
// ARRAY-
// FUNCTION-



let objName ={
    name: "prathu",
    class: "IT",
};

// console.log(objName);
// null => object 
}

{// DATATYPE CONVERSION--  TYPEOF-changehonga && var-NaN

 let score = "33abc";
// console.log(typeof score); //string

let valueInNum = Number(score);

// console.log(valueInNum);   //NaN
// console.log(typeof valueInNum);  //number

// "33" => 33 
// "33abc" => NaN  //typeof valueInNum-- number
// true => 1; false => 0;

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(typeof isLoggedIn);  //number
// console.log(booleanIsLoggedIn);  //true
// console.log(typeof booleanIsLoggedIn);  //boolean

//  1 => true;  0 => false;
// "" => false; "prathu" => true;

let someNum = 33;
let stringNum = String(someNum);

// console.log(typeof someNum);  //number
// console.log(stringNum);   //"33"
// console.log(typeof stringNum);  //string

}

{// OPERATIONS--

let value = 3;
let negValue = -value;
// console.log(negValue); //-3
// console.log(typeof negValue);  //number

let str1 = "hello";
let str2 = "prathu";

let str3 = str1 + str2;
// console.log(str3);  //helloprathu

// console.log( "2" + 2); //22
// console.log( 2 + "2");  //22
// console.log( "1"+ 2 +2);  //122
// console.log( 1 + 2 +"2");  //32

// console.log(+true); //1
// console.log(+"");  //0

let gameCounter = 100;
gameCounter++;  // ++gameCounter
// console.log(gameCounter); //101
}




// DAY-2;
{// CONVERSION--

// console.log("2" > 1);  //true
// console.log("02" > 1);  //true
//datatype must be comparable

// console.log(null > 0);  //false
// console.log(null == 0);  //false
// console.log(null >= 0);  //true

// console.log(undefined == 0); //false
// console.log(undefined >= 0); //false
// console.log(undefined <= 0); //false

// console.log(2 == "2");  //true
// console.log(2 === "2"); //false

}

{// DATATYPES-- on the basis of storing data in memory we have two types 

// 1) PRIMITIVE-
// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const Id = Symbol('123');
const anotherId  = Symbol('123');
// console.log(typeof Id);  //symbol
// console.log(typeof anotherId);  //symbol
// console.log(Id === anotherId);  //false

const bigNum = 474748838033n;
// console.log(typeof bigNum); //bigint



// 2) NON PRIMITIVE(reference)-
// Arrays, Objects, Functions

const heroes = ["shaktiman", "naagrajan"]; //array

const myObj= {       //object
    name:"prathu",
    age:19,
}

const myFunction = function(){     //function
    console.log("myname");
}

// console.log(typeof heroes);  //array
// console.log(typeof myObj);   //object
// console.log(typeof myFunction);  //function or objectfunction
}

{// STACK(primitive-- copy) AND HEAP(non-primitive-- refrence)--

let myYtName = "prathu"        //stack1
let anotherName = myYtName;        //stack2
anotherName = "swatmp";        //stack3

// console.log(myYtName);  //prathu
// console.log(anotherName); // swatmp

let user =         //stack
{        
    email : "nfinov",        //heap
    id : 90,         //heap
    roll :11        //heap
}
// console.log(user.email); //nfinov

let userTwo = user;
userTwo.email = "prathu@gmail.com"

// console.log(user.email); //prathu@gmail.com
// console.log(userTwo.email);  //prathu@gmail.com

}

{// STRINGS--

const name = "prathu";
const repoCount = 10;

// console.log(name + repoCount +"value");
// console.log(`hello my name is ${name} & my repo count is ${repoCount}`);

const gameName = new String('prathu_ds');

// console.log(gameName[0]);  //p
// console.log(gameName.__proto__);  //{}
// console.log(gameName.length);    //9
// console.log(gameName.charAt(5));   //u
// console.log(gameName.indexOf('a'));   //2
// console.log(gameName.toUpperCase); //PRATHUDS
// console.log(`gamename is ${gameName.length}`);

// console.log(typeof `name: ${gameName} `);
// console.log(`index: ${gameName[0]} `);

const newString = gameName.substring(0,4);
// console.log(newString); //prat

const anotherString = gameName.slice(-8,4);
// console.log(anotherString); //rat

const newstr = " prathu --ds  ";
// console.log(newstr);
console.log(newstr.trim);

const url = " d rathu";
// console.log(url.replace('d ','p'));  //prathu
// console.log(url.includes('p'));  //false
// console.log(gameName.split('_')); //[ 'prathu', 'ds' ]

}

{// NUMBERS--

const score = 400;
// console.log(score); //400

const balance = new Number(100);
// console.log(balance); //[Number: 100]

// console.log(balance.toString()); //100
// console.log(balance.toString().length); //3
// console.log(balance.toFixed(2));  //100.00

const otherNum = 23.33;
// console.log(otherNum.toPrecision(3));

const hundreds = 100000;
// console.log(hundreds.toLocaleString('en-IN'))


// MATHS---

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.35));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.6));


// console.log(Math.random());
// console.log(Math.floor(Math.random()*10) +1);

}

{// DATE AND TIME--

let myDate = new Date();  //object 
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 0, 24);
// console.log(myCreatedDate.toDateString);

let myCreatedDate = new Date("03-01-2024");
// console.log(myCreatedDate.toLocaleString);

let timeStamp = Date.now();
// console.log(timeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());

newDate.toLocaleString('default',{
  weekday: "long",
  dayPeriod: "narrow"
});

}



// DAY-3
{ //ARRAYS-- collection of multiple item in single variable

const myArr = [ 0,1,2,3,4 ];
const myArr2 = new Array(1,2,3,4);
 
// console.log(myArr[0]); //0

// myArr.push(5); //to add
// myArr.pop();   //to remove last

// myArr.unshift(9);  //to add first
// myArr.shift();  //to remove shift


// console.log(myArr.includes(3));  //will check presence
// console.log(myArr.indexOf(3));   //value 

const newArr = myArr.join();

// console.log(newArr); //[ 0, 1, 2, 3, 4 ]
// console.log(typeof newArr);  //string


// slice & splice diff-- splice separates out the range
// console.log("A ", myArr);  //A  [ 0, 1, 2, 3, 4 ]

const myn1 = myArr.slice(1,3);  //last range not include
// console.log(myn1);  //[ 1, 2 ]

const myn2 = myArr.splice(1,3);  //last range included
// console.log(myn2);  //[ 1, 2, 3 ]

}

{ //Array-2

const marvel_heroes=  ["thor", "ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);  //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heroes[3][1]);  //flash

const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);

const allNewHero = [...marvel_heroes, ...dc_heroes,];
// console.log(allNewHero);

const anoArray = [1,2,3,[4,5,6],7,8,9];
const newArr3 = anoArray.flat(Infinity);

// console.log(newArr3);
// console.log(Array.isArray("prathu"));  //false
// console.log(Array.from("prathu"));
// console.log(Array.isArray({name: "prathu"}));  //imp

let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1, score2, score3));
}



//DAY-4
{ //OBJECT-

//SINGLETON --constructor
// Object.create 

//OBJECT LITERALS-- no singleton

const mySymbol = Symbol("key1");

const jsUser ={
    name: "prathu",
    class: "A6",
    age: 19,
    isLoggedIn: false,

    [mySymbol]: "mykey1",
    "full name":"Pratham Sugandhi"
}

// console.log(jsUser.name);  //prathu
// console.log(jsUser["name"]);  //prathu
// console.log(jsUser[mySymbol]);  //mykey1


// console.log(jsUSer.full name);  //can't accessed
// console.log(jsUser["full name"]);  //correct form


jsUser.age =18;
// Object.freeze(jsUser);

jsUser.age =20;
// console.log(jsUser["age"]);

jsUser.greeting = function() {
   // console.log(`hello`);
}
// console.log(jsUser.greeting());

jsUser.greetingTwo = function() {
   // console.log(`hello user, ${this.age}`);
}
// console.log(jsUser.greetingTwo());
}

{//singleton- obj that ensure class has only one instance & provide a global point of access to it;

const tinder = function() {
   return {
      std : "pd",
      age : 19
   }
};  

const obj01 = new tinder();
const obj02 = new tinder();


// console.log(obj01 , obj02);


//non singleton- obj that has multiple instance
const tinderApp = {};   

tinderApp.id ="133";
tinderApp.name = "sam";
tinderApp.isLoggedIn = false;

// console.log(tinderApp);

const regularApp = {
    email: "bchdchjc.com",
    fullName:{
        userName: {
            firstname:"prathu",
            lastname: "sugandhi"
        }
    }
}

// console.log(regularApp);
// console.log(regularApp.fullName);
// console.log(regularApp.fullName.userName);
// console.log(regularApp.fullName.userName.firstname);


const obj1 = {
    1:"a", 2:"b"
}
const obj2 ={
    3:"c", 4:"d"
}
const obj4 ={
    5:"e", 6:"f"
}

// const obj3 ={obj1, obj2};
// const obj3 = Object.assign({}, obj1 , obj2, obj4);
// const obj3 ={...obj1, ...obj2, ...obj4};
// console.log(obj3);


const users = [
    {
        id : 1,
        email: "prathu@gmail.com"
    },
    {
        id: 1,
        email: "prathu@gmail.com"
    },
    {
        id: 1,
        email: "prathu@gmail.com"
    },
    {
        id: 1,
        email: "prathu@gmail.com"
    }
];

// console.log(users[1].email);

// console.log(tinderApp);
// console.log(Object.keys(tinderApp)); //array main object //imp
// console.log(Object.values(tinderApp));
// console.log(Object.entries(tinderApp));

// console.log(tinderApp.hasOwnProperty('isLoggedIn')); --true  //check availability of key
// console.log(tinderApp.hasOwnProperty('isLogged')); --false

const course ={
    courseName: "js",
    price: "999",
    courseInstructor: "pratham"
}
// course.courseInstructor;

const {courseInstructor: instructor} = course;
// console.log(course);
// console.log(instructor);

{ //JSON API --
/*
{
    "name" :"hitesh",
    "courseName": "hindi js",
    "price": "free"
}

[
    {},
    {},
    {},
    {}
]
*/
}
}



// DAY-5 
{ //FUNCTIONS--

function sayName (){
    console.log("p");
    console.log("r");
    console.log("a");
    console.log("t");
    console.log("h");
    console.log("a");
    console.log("m");
}

// sayName();

function addNo (num1 , num2 ){  //parameter
   //  console.log(num1 + num2);
}

function addNo (num1 , num2 ){ 
   let result = num1 + num2;
   return result

//    return num1 + num2;
}

const result = addNo(4,5);  // 4,5--arguments

// addNo ();
// console.log("Result", result)

function userLogin(username = "sam"){
    if (username === undefined){
        // console.log("pls enter a username");
        return;
    }
    return `${username} just logged in`;
}

// const returnn = userLogin("sam");
// console.log(returnn);

// console.log(userLogin());
// console.log(userLogin("prathu"));
}

{ //FUNCTIONS-2
function calculatePrice (val1, val2, ...num1){  //rest
    return num1;
}

// console.log(calculatePrice(500, 300, 400, 800));  //array main jayega

const user = {
    username: "prathu",
    price: 1199
}

function handleObj(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
    return anyobject
}

// handleObj(user);

const stdData = {
   std1 : "pd",
   std2 : "cl",
   std3 : "cc"
}

function handleData (anystd) {
   console.log(`std is ${anystd.std1 }`);
   return anystd;
}

// handleData(stdData);

const myArr = [200, 400, 600, 8000];

function retArray(getArray) {
    return getArray[3];
}
// console.log(retArray(myArr));  //8000
// console.log(retArray([200, 400, 600, 8000])); 

}




// DAY-6
{//ARROW FUNCTION--

const user={
    username:"pratham",
    price:999,

    welcomemess: function (){
        console.log(`${this.username}, welcome`);
        console.log(this);  //this-currentcontext
    }
}

// user.welcomemess();

user.username ="sam";
// user.welcomemess();

// console.log(this); //{}  --
// console.log(this); //window --browser

function chai() {
    let userName ="prathu";
    console.log(this.userName);  //undefined
}
// chai();   //undefined aayega

const chai2 = () => {
    let userName= "prathuu2";
    console.log(this.userName);  //undefined
}
// console.log(chai2());  //undefined


const chaiPaani = (num1,num2) =>{
    return num1+num2;   //explicit return
}
// console.log(chaiPaani (3,4));  //7


const chaiPaani1 = (num1,num2) => num1 + num2; //implicit return
const chaiPaani2 = (num1,num2) => (num1 + num2); //implicit return

// console.log(chaiPaani1(5,9 ));
// console.log(chaiPaani2(5,9 ));


const fullName = (name, surname) => 
   ({name:"prathu",
     surname:"sugandhi"
   });
// console.log(fullName());

}

{// Immediately Invoked Function Express (IIFE)-- used to remove global scope pollution
//--  () ()

(function chaii (){    //named IIFE
   //  console.log(`DB CONNECTED`);
}) ();

( function aurcode() {
//  console.log(`DB CONNECTED`);
}) ();

( (nam) => {     //unnamed IIFE
   //  console.log(`DB CONNECTED TO ${nam}`);
}) ("prathu");

}

/* EXECUTION CONTAXT--

   1) GLOBAL EC- (this/window)
      MEMORY CREATION PHASE-- MEMORY ALLOCATE
      EXECUTION PHASE- EXECUTION

   2) FUNCTION EC- 
   3) EVAL EC

   CALL STACK-
   Global execution-- FILO
   in           out
   one()      three()
   two()      two()
   three()    one()
*/





// DAY 7
// CONTROL FLOW-
/*  IF ELSE-

const userLoginnIn = true;
const temp = 41;

if (userLoginnIn) {
   console.log("print");
}

if (temp < 50) {
   console.log("temp less than 50");
} else {
   console.log("greater than 50");
}


const balance= 1000;

if (balance < 500){
console.log("less then")
} else if(balance <750) {
   console.log("less than 750");
} else {
   console.log("less than 1200");
}

// if (balance > 500) console.log("test");


const userLoginIn = true;
const debitCard = false;

if (userLoginIn && debitCard){
   console.log("allowed to buy")
} else {
   console.log("not allowed");
}

const userLoginGmail = false;
const userLoginEmail = true;

if (userLoginGmail || userLoginEmail){
   console.log("login in");
} else{
   console.log("login in first");
}

*/

// SWITCH-
/*
const month = 3;
switch (month) {
   case 1:
      console.log("jan");
      break;

   case 2:
      console.log("feb");     
      break;

   case 3:
      console.log("march");         
      break;
   
   case 4:
      console.log("april");         
      break;

   default:
      console.log("default");
      break;
}
*/

// TRUTHY VALUE-
// "0", "false", " ", [], {}, function(){}

// FALSY VALUE-
// 0, -0, false, BigInt 0n, "", null, undefined, NaN
/*

const userEmail = "prAthu";

if(userEmail){
   console.log("got email");
} else {
   console.log("didn't get");
}

const userArr = [];
if(userArr.length === 0){
   console.log("empty array");
} else {
   console.log("array");
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
   console.log("obj is empty");
}

// NULL COALESCING OPERATOR (??): null , undefined

let val1;
val1 = 5 ?? 10  //5
val1 = null ?? 10  //10
val1 = undefined ?? 10  //10
val1 = null ?? 5 ?? 10  //5

console.log(val1);


// TERNIARY Operator-
// condition ? true : false;

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80"):
console.log("more than 80");

*/

// LOOPS / ITERATIONS-
/*
// for loop

for (let i = 0; i <= 10; i++) {
   const element = i;
   if (element == 5) {
      // console.log("5 is best");
   }
   // console.log(element);
}

for (let i = 0; i <= 10; i++) {
   // console.log(`outer loop ${i}`);
   
   for (let j = 0; j <= 6 ; j++) {
      // console.log(`inner loop ${j}`); 
   }
}

let myArr = ["flash", "batman", "spiderman"];

for (let index = 0; index < myArr.length; index++) {
   const element = myArr[index];
   // console.log(element);
}

// break-end and continue-skip
for (let index = 1; index < 20; index++) {
   if (index == 5) {
      console.log(`detected 5`);
      break;
   }
   // console.log(`value = ${index}`);

}

for (let index = 1; index < 20; index++) {
   if (index == 5) {
      console.log(`detected 5`);
      continue;
   }
   // console.log(`value = ${index}`);
}
*/

// Types of Loops-- 
/*
let index = 0;
while (index <= 20) {
   // console.log(`value ${index}`);
   index = index +2;
}

let myArr= ["flash", "spidy", "batman"];
let arr =0;
while (arr < myArr.length) {
   // console.log(`value ${myArr}`);
   arr++;
}

let score =12;
do {
   // console.log(`score = ${score}`);
   score++; 
} while (score <= 10);

*/


//----REVISED---- //


// DAY 8
// FOR-OF
/*
// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5];

for (const num of arr) {
   // console.log(num);
}

const greetings = "helloo";
for (const greet of greetings) {
   // console.log(`each char is${greet}`);
}

// MAPS- an object which holds key value pair

const map = new Map();
map.set('IN', "INDIA");
map.set('USA', "UNITED STATE OF AMERICA");

console.log(map);

for (const [key, value] of map) {
   console.log(key, ':-', value);
}

const myObj = {
   'game1' : 'NFS',
   'game2' : 'spiderman'
}

for (const [key , value] of myObj) {
   // console.log(key , ':-', value);
   // obj are not iterable
}
*/

// FOR IN- 
/*
const myObject = {
   js : "javascript",
   cpp : "c++",
   rb : 'ruby'
}

for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`);
   
}

const programmig = ["js", "rb", "cpp"];
for (const key in programmig) {
   // console.log(programmig[key]);
}


const map = new Map();
map.set('IN', "INDIA");
map.set('USA', "UNITED STATE OF AMERICA");

for (const key in map) {
   // console.log(key);
   // not iterable
}
*/

// FOR EACH-
/*
const coding = ["js", "rb", "cpp", "java"];

coding.forEach( function (item) {
   // console.log(item);
   
} )

coding.forEach ( (val) => {
   // console.log(val);
   
})

function printMe(item) {
   // console.log(item);
}

// coding.forEach(printMe);

coding.forEach ( (item, index, arr) => {
   // console.log(item, index, arr);
})

const myCoding = [
   {
      lanName : "javascript",
      lanFILe : "js"
   },
   {
      lanName : "java",
      lanFILe : "j"
   },
   {
      lanName : "c++",
      lanFILe : "cpp"
   }
]

myCoding.forEach( (item) => {
   console.log(item.lanName);
})

*/



// DAY-9
// FILTERS--
/*
const coding = ["js","ruby", "java", "python"];

const values = coding.forEach ((item) => {
   console.log(item);
   // return item; --undefined hai
})

// console.log(values);  --undefined hai

// const myNums = [1,2,3,4,5,6,7,8,9];

// let newNums = myNums.filter( (num) => num > 4);
// // console.log(newNums);

//har value ka each axsis kiyajayega,, 
//then jo condition ko satisfy karenge,, voh var main jayenge! 

const myNums = [1,2,3,4,5,6,7,8,9];

// let newNums = myNums.filter( (num) => {
//    return num > 4  //scope--return
// });

const newNums = [];
myNums.forEach ( (num) => {
   if (num > 4) {
      newNums.push(num);
   }
})

// console.log(newNums);

const books = [
   { title: "b1", genre: "fn", pub: "1981", edn: '2008'},
   { title: "b2", genre: "n-fn", pub: "1991", edn: '2008'},
   { title: "b3", genre: "fn", pub: "1989", edn: '2006'},
   { title: "b4", genre: "his", pub: "1995", edn: '2018'},
   { title: "b5", genre: "fn", pub: "1989", edn: '2005'},
];

let userBooks = books.filter ( (bk) => bk.genre ==="fn");

userBooks = books.filter ( (bk) => 
  { return bk.pub <= 2005 && bk.genre === "fn" });
// console.log(userBooks);

*/

// MAP--
/*
const myNums = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNums.map ( (num) => num + 10);
console.log(newNums);

//for each-hw

const myNums2 = [1,2,3,4,5,6,7,8,9,10];

const newNums2 = myNums2
.map((num) =>
   {return num * 10 })
.map((num) => 
   { return num +1 })
.filter((num) => 
   { return num >= 40});

// console.log(newNums2);
*/

// REDUCE--
/*  
// (accumulator, currentValue) => accumulator + currentValue, initialValue;

const myNums = [1,2,3,4];

// const myTotal = myNums.reduce( (acc,curValue) => 
//    {
//       console.log(`acc : ${acc} and curValue : ${curValue}`);
//       return acc + curValue}, 3
// );

const myTotal = myNums.reduce( (acc , curr) => acc + curr ,3);

console.log(myTotal);

const shoppingCart = [
   {
      itemName: "js",
      price: 2999
   },
   {
      itemName: "py",
      price: 999
   },
   {
      itemName: "java",
      price: 3999
   },
   {
      itemName: "c++",
      price: 1999
   }
];

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0);
console.log(totalPrice);

*/



// DAY-10
// DOM--
/*
   Window-->
            Document-->
                        HTML-->

       -> HEAD                         -> BODY
  title         meta                          div   
>text-node    >attribute           >h1        >p       >attribute
                              attribute   text node
                              text node


document.getElementById('firstHeading');
document.getElementById('firstHeading').innerHTML = "<h1> prathu </h1>";

*/


