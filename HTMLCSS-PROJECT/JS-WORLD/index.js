// DAY-1;
{
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
}


// DAY-2;
{
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
// console.log(newstr.trim);

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
}


// DAY-3
{
{ //ARRAYS-- collection of multiple item in single variable

const myArr = [ 0,1,2,3,4 ];
const myArr2 = new Array(1,2,3,4);
 
// console.log(myArr[0]); //0
// console.log(myArr2);

myArr.push(5); //to add
myArr.pop();   //to remove last

myArr.unshift(9);  //to add first
myArr.shift();  //to remove shift

// console.log(myArr.includes(3));  //will check presence returns- true,false
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
}


//DAY-4
{
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
}


// DAY-5
{ 
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
}


// DAY-6
{
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
}


// DAY 7
{
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
// 0, -0, false, BigInt 0n, "", null, undefined, NaN, document.all
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
}


//----REVISED---- //


// DAY 8
{
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

// FOR EACH-array
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
}


// DAY-9
{
// FILTERS-- (filter karna)
/*
const coding = ["js","ruby", "java", "python"];

const values = coding.forEach ((item) => {
   console.log(item);
   // return item; // --undefined hai
})

// console.log(values);  //--undefined hai

const myNums = [1,2,3,4,5,6,7,8,9];

let newNums = myNums.filter( (num) => num > 4);
// console.log(newNums);

//har value ka each axsis kiyajayega,, 
//then jo condition ko satisfy karenge,, voh var main jayenge! 

const myNums1 = [1,2,3,4,5,6,7,8,9];

let newNums2 = myNums1.filter( (num) => {
   return num > 4  //scope--return
});

const newNums3 = [];
myNums.forEach ( (num) => {
   if (num > 4) {
      newNums3.push(num);
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

// MAP-- ek arr se --> dusra arr
/*
const myNums = [1,2,3,4,5,6,7,8,9,10];
const newNums = myNums.map ( (num) => num + 10);
// console.log(newNums);   [11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]


const mNums = [1,2,3,4,5];
let marr = mNums.map(function(value){
   return 1;
})
// console.log(marr);  [ 1, 1, 1, 1, 1 ]

*/

//for each-hw
/*
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

const myTotal = myNums.reduce( (acc,curValue) => 
   {
      console.log(`acc : ${acc} and curValue : ${curValue}`);
      return acc + curValue}, 3
);

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

// DESTRUCTURING--
/*
user.address.zipCode
let {zipCode} = user.address
console.log(zipCode);

let [first, second] = user.roles;
console.log(first,second);
*/

//SPREAD & REST--
/*
const nmess = ["kmskc", "dncjnds", "jnmdn", "dispatchEvent",];
const copyNames = [...nmess];
console.log(copyNames);

const smallObj = {
   name : "dcl",
   class : 9, 
   mck : "cs"
}
const newObjj = {...smallObj}
console.log(newObjj);


function abcd (a,b,...rest){
   console.log(a,b,rest);
}
abcd(1,2,4,3,5);

*/
}


// DAY-10
{
/* DOM--
   Window-->
            Document-->
                        HTML-->

       -> HEAD                         -> BODY
  title         meta                          div   
 ->text-node    >attribute           >h1        >p       >attribute
                              attribute   text node
                              text node


document.getElementById('firstHeading');
document.getElementById('firstHeading').innerHTML = "<h1> prathu </h1>";


// DAY -11

API request and V8
const requestUrl = '...';
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl);
xhr.onreadystatechange = function(){
   console.log(xhr.readyState);
   if (xhr.readyState === 4){
      const data = JSON.parse(this.responseText); 
      console.log(typeof data); //string
      console.log(data.followers);
   }
} 
*/
}


// DAY -11 
{
// EVENTS--  Runs sequentialy on activity
// attachEvent()
// jQuery- on

// document.getElementById('owl').onclick = function(){
//    alert("owl clicked")
// }

// false- event bubbling(inside-outside)
// true- event capturing(top-bottom) 
}

{
/*
document.getElementById('immages').addEventListener('click', function(e){
   alert('clicked inside the ul')
}, false) 

document.getElementById('owl').addEventListener('click', function(e){
   alert('owl clicked')
   e.stopPropagation(); //stops bubbling
}, false) 

/* 
for false/bubbling-
1) owl clicked
2) clicked inside the ul

for true/capturing-
1) clicked inside the ul
2) owl clicked
*/
/*
document.querySelector('google').addEventListener('click', function(e){
   console.log("google clicked");
   e.preventDefault();
   e.stopPropagation();
}, false)

document.querySelector('#pak').addEventListener('click', function(e){
   console.log(e.target.tagName);
if (e.target.tagName === 'IMG'){
   console.log(e.target.id);
   let removeIt = e.target.parentNode;
   removeIt.remove();
}     
   // removeIt.parentNode.removeChild(removeIt);
})
*/

// ASYNC JS- setTimeout
/*
SYNC FUNCTION-
SYNCHRONOUS ACTIONS ARE THE ACTION THAT INITIATE AND RUNS ONE BY ONE,

let a = prompt("What is your Name");
let b = prompt("What is your age");
console.log(`name is ${a} and age is ${b}`)

ASYNC FUNCTION-
ASYNCHRONOUS ACTION WILL RETURN ACTION THAT WE INITIATED AND THEY FINISHED LATER,

setTimeout(function(){
   console.log("pratham");
}, 2000)

let nameP = function () {
   console.log("pds");
}
setTimeout(nameP, 4000);

const changeText = function(){
   document.querySelector('h1').innerHTML = "best js series"
}
const changeMe = setTimeout(changeText, 2000);

document.querySelector('#stop').
addEventListener('click', function(){
   clearTimeout(changeMe);
   document.querySelector('h1').innerHTML = "DOM LEARNING";
   console.log("stopped");
})
*/

// ASYNC JS- setInterval
/*
setInterval(function(){
   // console.log("pds");
}, 10000);

const sayName = function(str){
   // console.log(str,"pds");
}
// let stopName = setInterval (sayName, 10000, "hii");
// clearInterval(stopName);



//BUTTONS WORKING
/*
const change1 = function(){
   document.querySelector('h1').innerHTML = "WORKING..";
}

const stopping = document.querySelector('#start').
addEventListener('click', function(){
   setTimeout(change1, 2000);
})

document.querySelector('#stop').
addEventListener('click', function(){
   clearTimeout(stopping);
   document.querySelector('h1').innerHTML = "DOM LEARNING";
})
*/
/*
// clearTimeout(stopping);
// const start = document.querySelector('#start');

// start.addEventListener('click', function(){
//    setTimeout(change1, 5000);
//    console.log("on");
// })
// const change2 = function(){
//    document.querySelector('h1').innerHTML = "PAUSED..";
// }
// const stop = document.querySelector('#stop');
// stop.addEventListener('click', function(){
//    clearTimeout(change2);
// })
*/


/*
const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
console.log(randomColor);

let intervalId;
const startChangingColor = function(){
   if(!intervalId){
      intervalId = setInterval(changeBgColor, 1000);
   }
   //  intervalId = setInterval(changeBgColor, 1000);
    
    function changeBgColor (){
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
};

document.querySelector('#start')
.addEventListener('click', startChangingColor);

document.querySelector('#stop')
.addEventListener('click', stopChangingColor);
*/
}

{
//quess--
/*
const namse = ["John", "Doe", "Jane", "Smith"];
const lastname = ["Williams", "Smith", "Johnsons", "Doeing"];

const fullName = [...namse, ...lastname];
// console.log(fullName);


const products = [
   {name : "Laptop" , price : 100},
   {name : "Phone" , price : 10},
   {name : "Tablet" , price : 50},
   {name : "Monitor" , price : 20}
]
let pricess= products.filter(function(prod) { 
   return prod.price >= 20;
} )
// console.log(pricess);


const names = [
   { name: "john", role: "admin"},
   { name: "jane", role: "user"},
   { name: "lane", role: "admin"}
];

let obj ={};

names.forEach( (user) => {
   if( obj[user.role]) {
      // console.log(user, "done");
      obj[user.role].push(user);
      
   } else {
      obj[user.role] = [];
      obj[user.role].push(user);
   }
})

// console.log(obj,"yoss");


const names2 = [
   { name: "john", role: "admin"},
   { name: "jane", role: "user"},
   { name: "lane", role: "admin"}
];

let newarr = names2.filter( (user) => {
   return user.role !== "user";
})

// console.log(newarr);
*/


//MASTER JS--
{
//HIGHER ORDER FUN,, forEach
function nameVal(val) {
   
}

nameVal(function(){});

function myArr(val){
   return function(){};
}

myArr();

//CONSTRUCTOR FUNCTION
function circularbtn (color){
      this.radius = 4;
      this.color = color;
      this.pressable = true;   
}

var redbtn = new circularbtn("red");
let greenbtn = new circularbtn("green");

// console.log(redbtn, greenbtn);

//FIRST CLASS FUN,, setTimeout
/* fun are treated as varibales, 
u can save,pass them as arguments to another fun */

//IIFE- immediately ivoked function execution
let ans = (function (){
   let privateVal = 12;

   return {
      getter : function(){
         console.log(privateVal);
      },
      setter : function(val){
         privateVal = val;
      }
   }
})();


// ans.getter();  //12
// ans.setter(24);  //undefined
// ans.getter(); //24


//PROTOTYPAL INHERITANCE
let human = {
   canFly : false,
   canTalk : true,
   canWalk : true,
}

let stds = {
   amazingMindsets : true,
   hopes : true, 
   talents : true
}

stds.__proto__ = human;

// console.log(stds);
// console.log(stds.canFly);


//CALL APPLY BIND
function abcd(val1, val2,  val3) {
   console.log(this,val1, val2, val3);
}
let obj = {age : 24};

// abcd.call(obj,1,2,3); 
// abcd.apply(obj, [1,2,3]);

let binded = abcd.bind(obj);
// binded();
}
}


// DAY -12
//CALLBACKS--
// {
// SYNC FUNCTION-
// SYNCHRONOUS ACTIONS ARE THE ACTION THAT INITIATE AND RUNS ONE BY ONE,

// let a = prompt("What is your Name");
// let b = prompt("What is your age");
// console.log(`name is ${a} and age is ${b}`)

// ASYNC FUNCTION-
// ASYNCHRONOUS ACTION WILL RETURN ACTION THAT WE INITIATED AND THEY FINISHED LATER,

// console.log("Start") //1
// setTimeout(function(){   //3
//    console.log("pratham");
// }, 2000)
// console.log("End")//2

// function loadScript(SRC, Callback){
//    let script = document.createElement("script");
//    script.src = SRC;
//    script.onload = function () {
//       console.log("Loaded script with SRC: " + SRC);
//       Callback(56,SRC); //callback main bahar wale function ki value aayegi
//    }
//    script.onerror = function(){
//       console.log("Error: " + SRC);
//       Callback(new Error("Src got some error")) 
//    }
//    document.body.appendChild(script)
// }
// // loadScript("script.js",helloo);
// loadScript("https://dgd", (error, value)=>{
//    alert("Script is loaded"+ value)
// })

// function helloo(){
//    alert("HELLO WORLD!");
// }
// }

// PROMISES--
{
// {
// const promiseOne = new Promise(function(resolve , reject){
//    //Do any Async task
//    // DB calls, Networkcalls
//    setTimeout(function(){
//       // console.log("Async Task is Completed");
//       resolve();
//    }, 2000)
// })

// promiseOne.then(function(){
//    // console.log("Promise Consumed");
// })


// new Promise(function(resolve,reject){
//    setTimeout(function(){
//       // console.log("Async Task Two");
//       resolve()
//    },1000)
// }).then(function(){
//    // console.log("Async 2 resolved");
// })


// const promiseThree = new Promise(function(resolve, reject){
//    setTimeout(() => {
//       resolve({userName: "Prathu", class: 12, roll: 24})
//    }, 3000);
// })

// promiseThree.then(function(user){
//    // console.log(user);
// })


// const promiseFour = new Promise(function(resolve, reject){
//    setTimeout(function(){
//       let error = false; //[true code-then , false code-catch]
//       if(!error){
//          resolve({names: "Don", subj: "kemistry", bla:"blaa"})
//       } else {
//          reject("Error: Something went wrong")
//       }
//    },4000)
// })

// promiseFour
// .then((user)=>{
//    // console.log(user);
//    return user.username
// })
// .then((userName)=> {
//    // console.log(userName);
// })
// .catch((error) => {
//    // console.log(error);
// })
// .finally(() => {
//    // console.log("The promise is either resolve or rejected");
// })

// const promiseFive = new Promise(function(resolve, reject){
//    setTimeout(function(){
//       let error = false; 
//       if(!error){
//          resolve({names: "Don", subj: "kemistry", bla:"blaa"})
//       } else {
//          reject("Error: Js went wrong")
//       }
//    },1000)
// })

// async function conumePromiseFive() {
//    try {
//       const response = await promiseFive
//       console.log(response);
//    } catch (error) {
//       console.log(response);
//    }
// }
// // conumePromiseFive();

// async function getAllUser() {
//    try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       const data = await response.json();
//       console.log(data);
//    } catch (error) {
//       console.log("E :", error);
//    }
// }
// // getAllUser();


// /* PROMISE RUNS PARALLEL FOR EX 
// MANY PROMISE WITH 5 SECS TIMEOUT WILL GIVE ALL RESULTS IN SAME TIME--
// P1 TIME 5SEC P2 TIME 5SECS P3 TIME 5SECS 
// THO P1,P2,P3 SATH MAIN CONSOLE HONGE

// JABKI ASYNC KE OTHER TASK WAIT KARTE HAI --
// JESE SETTIMEOUT AGAR S1,S2,S3 HAI THO TINO 5SEC WAIT LENGE */
// }

{/*
//CHAINING
let p1 = new Promise(function(resolve,reject){
   setTimeout(function(){
      console.log("Resolved after 2 sec");
      resolve(56)
   },2000)
})

p1.then(function(value){
   console.log(value);
   let p2 = new Promise(function(resolve,reject){
      setInterval(function(){
         resolve("promise 2")
      }, 2000)
   })
   return p2;
})
.then(function(value){
   console.log("promise 2 resolved");
   return 2;
})
.then(function(){
   console.log("completed");
})

const loadScript = (src) => {
   let script = document.createElement("script");
   script.type = "text/javascript";
   script.src= src;
   document.body.appendChild(script)
   script.onload = () => {
      resolve ("done")
   }
   script.onerror = () => {
      reject("unfinished");
   }
}

let p1 = loadScript("https");
p1.then((val)=>{
   console.log(val);
})
.catch((error) => {
   console.log("we are sorry error occured");
   
})

//HANDLERS
let p1 = new Promise((resolve,reject)=>{
   setTimeout(() => {
       resolve(1);
   }, 2000)
})

p1.then(()=>{
   console.log("Promise is now resolved");
})

p1.then(()=>{
   console.log("Hurrayy");
})
*/
}

//METHODS OF PROMISES
{ /*
let p1 = new Promise((resolve,reject)=>{
   setTimeout(() => {
      //  resolve(1);
      reject(new Error("Error1"))

   }, 10000)
})

let p2 = new Promise((resolve,reject)=>{
   setTimeout(() => {
       reject(new Error("Error2"))
      // resolve(2);
   }, 2000)
})

let p3 = new Promise((resolve,reject)=>{
   setTimeout(() => {
       resolve(1);
   }, 3000)
})

p1.then(()=>{
   console.log("1 resolved");
})
p2.then(()=>{
   console.log("2 resolved");
})
p3.then(()=>{
   console.log("3 resolved");
})


let promise_all  = Promise.all([p1, p2, p3])  //will print all together in an array
let promise_all  = Promise.allSettled([p1, p2, p3])  //will print value and status- fulfilled/rejected
let promise_all  = Promise.race([p1, p2, p3])
let promise_all  = Promise.any([p1, p2, p3]) //aggregate error
let promise_all  = Promise.resolve(6);
let promise_all  = Promise.reject(new Error("Error"));

promise_all.then((value)=>{
   console.log(value); 
}) 
*/
}

//ASYUNC AWAIT
{ /*
async functions se kisi bhi promise ko roka ja sakta hai(await),,
aur easy syntax compare to then & catch.

async function harry() {
   let p1 = new Promise((resolve,reject) => {
      setTimeout(() => {
         // console.log("Indore weather is: 21");//3ii
         resolve("Indore weather is: 21")
      }, 2000)
   })
   let p2 = new Promise((resolve,reject) => {
      setTimeout(() => {
         // console.log("Burhanpur weather is: 19");//2ii
         resolve("Burhanpur weather is: 19")
      }, 5000)
   })

   // p1.then(alert) //2i
   // p2.then(alert) //3i
   console.log("Fetching Indore weather...");
   let indoreW = await p1;
   console.log("Fetched Weather: ",indoreW);
   
   console.log("Fetching Bur weather...");
   let burW = await p2;
   console.log("Fetched Weather: ",burW);

   return [indoreW,burW]

// console.log("WELCOME TO WEATHER REPORT");//1
   
}

// a.then((value)=>{
//    console.log(value);
// })

const  cherry = async ()=>{
   console.log("Hey i am cherryy,, i am waiting");
}

let main1 = async ()=>{
   console.log("Welcome to weather control");
   let a = await harry()
   let b = await cherry()
}
// main1(); */
}
//TRY-CATCH Finally
// {
// try {
//    let age = prompt("Enter your age");
//    age = Number.parseInt(age);
//    if(age > 150){
//       throw new ReferenceError("Age is probably not true")
//    }
// } catch (error) {
//    console.log(error.name); //refrence error
//    console.log(error.message);  //name is not defined
//    console.log(error.stack);
  
// }
// console.log("script i Running");

// const fun = () => {
//    try {
//       let a =0;
//       console.log(pg);
//       console.log("Programm runs");
//       return
//    } catch (error) {
//       console.log("Error occured");
//       console.log(pg);
//    } finally {
//       console.log("Work is almost done");
//       // close the file
//       // Exit  the loop
//       // write to the log file
//    }
// }
// fun();
// }

//FETCH-
// The global fetch() method starts the process of fetching a resources from the network,
{ 
// fetch('https://jsonplaceholder.typicode.com/users')
//    .then((response)=> {
//       return response.json()
//    })
//    .then((data)=>{
//       console.log(data);
//    })
//    .catch((error)=>{
//       console.log(error);
//    })


// GET REQUEST
// const data1 = async ()=>{
//    let p = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//    let response = await p.json()
//    return response
// }
// const minfun = async () => {
//    let todo = await data1()
//    console.log(todo);
// }
// minfun()


//POST REQUEST
// const data = async (todo) => {
//    let options = {
//       methods : "POST",
//       headers: {
//          "Content-type": "application"
//       },
//       body: JSON.stringify({
//          title: 'Harry',
//          body: 'bhai',
//          userId: 1100,
//       }),
//    }
//    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
//    let response = await p.json()
//    return response
// }

// const mainfun = async () => {
//    let tod0 = await data()
//    console.log(tod0);
// }
// mainfun()

{
// const data = async (todo) => {
//    let options = {
//       methods : "POST",
//       headers: {
//          "Content-type": "application"
//       },
//       body: JSON.stringify(todo),
//    }
//    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
//    let response = await p.json()
//    return response
// }

// const getTodo = async (id) => {
//    let response = await fetch('https://jsonplaceholder.typicode.com/todos'+id)
//    let r = await response.json()
//    return r
// }

// const mainfun = async () => {
//    let todo = {
//       title : "Pratham",
//       body : "bur",
//       userId : 1100,
//    }
//    let tod0 = await data(todo)
//    console.log(tod0);
//    console.log(await getTodo(5));

// }
// mainfun()
}
}
}


// DAY -13
//OOPS- code likhne ka str
/*
Classes were introduced in js with ES6. However, Js is prototype-based language,
and its classes are syntactic sugar over existingg prototype based inheritance mechanisms

object- collection of functions,,ex:promises, toLowerCase

4 pillars
Abstraction-fetch
Encapsulation(wrapper)
Inheritance
Polymorphism
*/

// {
// //Object Literal
// const user = {
//    username : "hitesh",
//    userLogin : 8,
//    signedIn : true,

//    getDetails : function (){
//       // console.log("Details fetched");
//       // console.log(`username: ${this.username}`);
//       // console.log(this);
//    }
// }
// // console.log(user.getDetails());

// // Constructor fun: Object ka refrence deta hai
// // new-- ek obj literal se multiple instances
// // new -> empty obj = instance -> constructor fun call honga -> this,, se inject hojate hai 
// // new-- copy deta hai taki code overwrite na ho!

// function Account(username, userLogin, isLoggedIn) {
//       this.userName = username,
//       this.userLogin = userLogin,
//       this.isLoggedIn = isLoggedIn;

//       this.greeting = function(){
//          console.log(`Welcome ${this.username}`);
//       }

//       return this; //implicit define
// }
// const userOne = new Account("hitesh", true, true)
// const userTwo = new Account("Pratham", true, false)

// // console.log(userTwo); 
// // console.log(userOne.constructor);  //[Function: Account]
// // console.log(userOne instanceof Account);  //true 

// //Instanceof
// function car(madeIn, model, year){
//    this.madeIn = madeIn,
//    this.model = model,
//    this.year = year

//    return this;
// }
// const auto = new car('India', 20, 2025)

// // console.log(auto);
// // console.log(auto.constructor);
// // console.log(auto instanceof car); //true
// }



// DAY -14
// PROTOTYPE - contains many helper properties and methods which we can use to complete our task
// Every created object gets a property called prototype, 
// which means whenever you create an obj it gets prototype property automatically
// --> new, classes, this, 
// prototypal-inheritance --to pass parents properties to children, js with the help of prototype(extra property) is called prototypal inheritance.

// {
// function createUser (username, score){
//    this.username = username
//    this.score = score
// }

// createUser.prototype.increment = function(){
//    this.score++
// }

// createUser.prototype.printMe = function(){
//    // console.log(`price is ${this.score}`);
// }

// const chai = new createUser("chai", 25)
// const tea = new createUser("tea", 250)

// // chai.printMe()

// let myHero = [ "throw", "spiddy"];

// let heroPower = {
//    username : "prathu",
//    __proto__: myHero
// }

// let allHeroes = (val)=> {
//    return val;
// }

// Array.prototype.heyPratham = () => {
//    // console.log(`pratham says hello`);
// }

// Object.prototype.pratham = () => {
//    // console.log(`pratham is present in all objects`);
// }

// // myHero.pratham()
// // myHero.heyPratham()
// // heroPower.pratham()
// // allHeroes.pratham()
// }

{
// function setuser (username) {
//    this.username;
//    // console.log("called"); //current execution ko dusre ko pass kardeta hai
   
// }

// function createUser (username, email, password){
//    setuser.call(this, username)
   
//    this.email
//    this.password
// }

// const chai2 = new createUser("chai", "chai@fb.com", "9303");
// // console.log(chai2);

// //Class constructor-

// class user7{
//    constructor (username, email, password){
//       this.username = username;
//       this.email = email;
//       this.password = password;
//    }

//    encryptPassword (){
//       return `${this.password}abc`
//    }

//    userName (){
//       return `${this.username.toUpperCase()}`
//    }
// }
// const tea0 = new user7("tea", "tea@gmail.com", "123");

// // console.log(tea0.encryptPassword());
// // console.log(tea0.userName());

// //Behind the scene
// function user00(username, email, password){
//    this.username = username;
//    this.email = email;
//    this.password = password;
// }

// user00.prototype.encryptPassword =  ()=>{
//    return `${this.password}abc`
// }

// // user00.prototype.changeuserName = ()=>{
// //    return `${this.username.toUpperCase()}`
// // }

// const tea1 = new user00("tea", "tea@gmail.com", "123");

// console.log(tea1.encryptPassword());
// // console.log(tea1.changeuserName());
}

{
// //super keywords
// class user1 {
//    constructor(username){
//       this.username = username
//    }

//    logMe (){
//       // console.log(`USERNAME IS ${this.username}`);
//    }
// }

// class Teacher extends user1{
//    constructor(username, email, password){
//       super(username)
//       this.email = email;
//       this.password = password;
//    }
//    adcourses(){
//       // console.log(`new course ${this.username}`);
//    }
// }

// const chai09 = new Teacher ("chai","chai@fb.com","123");
// // chai09.adcourses()

// const masalaChai = new user1 ("masalachai")
// // masalaChai.logMe()


// class user01 {
//    constructor (username){
//       this.username = username;
//    }

//    logMe (){
//       // console.log(`USERNAME IS ${this.username}`);
//    }

//    static createId(){  //static will not allow access
//       return `123`;
//    }
// }

// const hitesh = new user01 ("pratham");
// // console.log(hitesh.createId());  //error

// class Teacher2 extends user01 {
//    constructor(username, email){
//       super(username);
//       this.email = email
//    }
// }

// const iphone = new Teacher2 ("iphone", "iphone@email.com")
// // iphone.logMe();
// // console.log(iphone.createId());  //error
}


// DAY-15
// Class Constructor
// jab aapke pass aisa koi bhi mauka ho ke jaisi waale bahut sare 
// elements banane hai us waqt aap constructor fun use kar sakte ho 

{
// class React{
//    constructor(){
//       this.library = "React";
//       this.server = "https://localhost:300"

//       document
//          .querySelector('button')
//          .addEventListener('click', this.handleclick.bind(this))
//    }
//    handleclick(){
//       console.log("button clicked");
//       console.log(this);
//    }
// }

// const chai = {
//    name: 'ginger chai',
//    price: 250,
//    isAvailable: true
// }

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// Object.defineProperty(chai,"name", {
//    writable: false,
//    enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// for (let [key, value] of Object.entries(chai)){
//    if (typeof value !== "function"){
//       console.log(`${key} : ${value}`);
//    }
// }


// getter setter

// class useer {
//    constructor(email, password){
//       this.email = email;
//       this.password = password
//    }

//    get email (){
//       return this._email.toUpperCase()
//    }

//    set email (val){
//       this._email = val.toUpperCase()
//    }

//    get password(){
//       // return this._password.toUpperCase()
//       return `${this._password}pratham`  //always return
//    }

//    set password(value){
//       this._password = value.toUpperCase();  //no return
//    }
// }

// const pratham = new useer("p@p.ai", "abc");
// console.log(pratham.password);
// console.log(pratham.email);

// function userOne (email, password){
//    this.email = email;
//    this.password = password;

//    Object.defineProperty(this, 'email', {
//       get: function(){
//          return this._email.toUpperCase();
//       },
//       set : function (val){
//          this._email = val
//       }
//    })

//    Object.defineProperty(this, 'password', {
//       get: function(){
//          return this._password.toUpperCase();
//       },
//       set : function (val){
//          this._password = val
//       }
//    })
// }

// const chaiuser = new userOne("chai@gmail", "chai");
// console.log(chaiuser.email);
// console.log(chaiuser.password);

// const user0 = {
//    _email: 'p@pc.com',
//    _password: 'abcd',

//    get email(){
//       return this._email.toUpperCase()
//    },
//    set email(val){
//       this._email = val
//    }
// }


// const tea = Object.create(user0)
// console.log(tea.email);
}


// DAY -16
// CLOSURES-
{
// Lexical scoping- inner fun has outer fun scope access
function outer(){
   let username = "pratham";
   // console.log(secret);   //false
   
   function inner(){
      let secret = "my123";
      console.log("inner",username);
   }
   function innertwo(){
      console.log("innertwo",username);
      // console.log(secret);    //false
      
   }

   inner()
   innertwo()
}
// outer()

function makeFun (){
   const name = "Mozilla";
   function displayName(){
      console.log(name);
   }
   return displayName;
}

const myFun = makeFun();
// myFun()   
// agar return innerfun,, kiya tho sirf innerfun nhi balki outer fun ka pura lexical scope return hota hai- closure


   // document.getElementById("orange").onclick = function ()
   // {
   //    document.body.style.backgroundColor = `orange`
   // }
   // document.getElementById("green").onclick = function ()
   // {
   //    document.body.style.backgroundColor = `green`
   // }

   // 2 baar possible 10,0000 baar nhi


function clickHandler(color){
   // document.body.style.backgroundColor = `${color}`

   return function(){
      document.body.style.backgroundColor = `${color}`
   }
}

// document.getElementById("orange").onclick = clickHandler("orange");
// document.getElementById("green").onclick = clickHandler("green");

}