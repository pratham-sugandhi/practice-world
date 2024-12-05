//VARIABLES --
// let,const,var

let a = 10;
let b = 15;
let c;

// console.log('c =',a+b);


let fullName = "prathu";
let surName = "sugandhi";
fullName = "pratham01"

// console.log(fullName.length);
// console.log(`${fullName}`);
// console.log(`${typeof fullName}`);


const obj = {
    name: "pratham",
    class: 12,
}

obj.class = 1;
obj.subject = "btech";
// console.log(obj);


const dictionary = {
    word1 : "meaning1",
    word2 : "meaning2",
    word3 : "meaning3"
}

// console.log(dictionary.word2);

let score = "100abc";
// console.log(typeof score);

let newScore = Number(score);

// console.log(newScore);
// console.log(typeof newScore);

let myNum = 926;
// console.log(typeof myNum);

let strNum = String(myNum);

// console.log(typeof strNum);
// console.log(strNum);

let falseVal = 0;
let checkVal = Boolean(falseVal);

// console.log(typeof checkVal);
// console.log(checkVal);



//STRINGS --

const gameName = new String('prathu_ds');

// console.log(gameName[5]); //u
// console.log(gameName.length); //9
// console.log(gameName.indexOf('u'));  //5
// console.log(gameName.charAt(3));  //t

// console.log(gameName.slice(3,7));  //thu_
// console.log(gameName.substring(3,7));  //thu_
// console.log(gameName.trim(5));
// console.log(gameName.replace('d','p' ));



// ARRAYS --

const marvel_heroes=  ["thor", "ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);

const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);

const everyHeroe = [...marvel_heroes, ...dc_heroes]
// console.log(everyHeroe);


//OBJECTS --

const obj1 = {
    name : "pratham",
    surname: "sugandhi",
    "fullname" : "pratham sugandhi"
}
 
// console.log(obj1.name);
// console.log(obj1["fullname"]);
// console.log(obj1["surname"]);


//singleton obj-- single instance

let book = function(name, age) {
    let result = {
        name : "sam",
        age : 909
    }
    return result;
};

let book2 = new book ("jcs", 99);
let book3 = new book ();

// console.log(book2,book3);  // ?? how to change name 


// non singleton-- multiple instance

let books = {};
books.name = "pds";
books.name = "dqd";
books.id = "787";
books.num =  8708;

// console.log(books);


//functions--
function userLogin(username = "sam"){
    if (username === undefined){
        console.log("pls enter a username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(userLogin("prathu"));

function calculatePrice (val1, val2, ...num) {
    return num;
};

// console.log(calculatePrice(3,5,9,6,3)); //first 2 ke baad ke saare

const user = {
    id : "kk",
    date : 2024
}

function userDiary(anydiary) {
    console.log(`${anydiary.id} && ${anydiary.date}`);
    return anydiary;
}

// userDiary(user);

const debitCard1 = {
    name : "pds",
    age : 19
};

const debitCard2 = {
    name : "ds",
    age : 39
};

const debitCard3 = {
    name : "ps",
    age : 29
};


function allCards (anyCard) {
    console.log(`name = ${anyCard.name} && age = ${anyCard.age}`);
    return anyCard;
}

// allCards (debitCard1);
// allCards (debitCard2);
// allCards (debitCard3);

const myArr = [200, 400, 600, 8000];

function getArray(retArray) {
    console.log(retArray[2]);
    return retArray;
}
// getArray (myArr);

const heroes = ["spiderman", "batman", "hulk"];

function allHeroes1 (getHeroes) {
    return getHeroes[1];
}
// console.log(allHeroes1(heroes));

const workers = {
    name :" qjdbq",
    class : 3,
    age : 29,  

    classes : function () {
        console.log(`${this.class}`);
        console.log(this);
        
    }
};
// workers.classes();
 
const songs = {
    sng1 : "csc", 
    sng2 : "nsj",

    app : function () {
        console.log(`song = ${this.sng1} && ${this.sng2}`);
        console.log(this);
    }
}
// songs.app();

//EXPLICIT
const chaii = (num1, num2) => {
    return num1+num2;
}
// console.log(chaii(2,8));

//IMPLICIT
const chaiPaani = (num1, num2) => (num1 + num2);
// console.log(chaiPaani(5,7));

const enrollment = (num, name) => ({
    num:89099,
    name:"mmidmipd"
});
// console.log(enrollment());

// SWITCH- 
const month = 4;
// switch (month) {
//     case 1:
//         console.log( "jan");
//         break;

//     case 2:
//         console.log( "feb");
//         break;

//     case 3:
//         console.log( "march");
//         break;
 
//     case 4:
//         console.log( "april");
//         break;  

//     case 5: 
//         console.log( "may");
//         break;
//     default:
//         break;
// }

//LOOPS-

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i == 5) {
        // console.log("5 is best no.");
    } 
    // console.log(element);
}

let myArr4 = ["flash", "batman", "spiderman"];

for (let index = 0; index < myArr4.length; index++) {
    const element = myArr4[index];
    // console.log(element);
}

for (let i = 0; i <= 20; i++ ) {
    if ( i == 5){
        // console.log(`5 detected`);
        break;
    }
    //console.log(`value = ${i}`);
}

for ( let i = 5; i <= 10; i++ ){
    if( i == 8){
        // console.log(`yosss`);
        continue;
    }
    // console.log(`values = ${i}`);
}

let index = 0;
while (index <= 20) {
    // console.log(`${index}`);
    index = index + 2;
}

let myArr3 = ["flash", "spidy", "batman"];
let arr = 0;

while (arr < myArr3.length) {
    // console.log(`${myArr3}`);
    arr++;
}

let scorex = 2;
do {
    // console.log(`${scorex}`);
    scorex++;
} while (scorex <= 10);

let arrs = ["kvkfsms", "dskfm", "fvfdv"];
for( const num of arrs) {
    // console.log(`${num}`);
}

const greeting = "helooo";
for (let greet of greeting){
    // console.log(`${greet}`);
}

const mapping = new Map();
mapping.set('Ind', 'India')
mapping.set('Pak', 'pakistan')
// console.log(mapping);

for (const [key, value] of mapping){
    // console.log(key, ':' ,value);
}


const myObject = {
    js : "javascript",
    cpp : "c++",
    rb : 'ruby'
 }

 for (const key in myObject){
    // console.log(`${key} and ${myObject[key]}`);
    
 }

 const programms = {
    pg1:"mcdlm",
    pg2: "l,flc",
    pg3:"vkdlmf",
 }

 for (const pgs in programms){
    // console.log(`${pgs} and ${programms[pgs]}`);
    
 }

 const maping = new Map();
maping.set('Ind', 'India')
maping.set('Pak', 'pakistan')

for (const key in maping){
    // console.log(key);
    //not iterable
}

// for each - array

const coding = ["js", "rb", "cpp", "java"];
coding.forEach ( (item, index, arr) => {
    // console.log(item, index, arr);
 })

const programming = ["mcdlm", "lflc","vkdlmf"];

programming.forEach((item, index)=>{
    // console.log(item, index);    
})

programming.forEach(function (item){
    // console.log(item); 
 });

 programming.forEach((val) =>{
    // console.log(val);
 })

 const objj =[
    {
        bhb :"jlbj",
        hhbk : "khj"
    },
    {
        bhb :"jlbj",
        hhbk : "khj"
    },
    {
        bhb:"jlbj",
        hhbk : "khj"
    }
]

objj.forEach((item) => {
    // console.log(item.bhb);
})

//filter 
const nums = [5,6,7,8,9];
const newNums = nums.filter((nums) => {
    return nums > 7 ;
})
// console.log(newNums);


const myums = [1,2,3,4,5,6,7,8,9,10];

const allums = myums.filter( (ums) => ( ums < 8));
// console.log(allums);



// console.log(newNums);

const myNums = [1,2,3,4,5,6,7,8,9,10];

const anoNums = myNums.map( (item) => (item + 10));
// console.log(anoNums);

const language = ["cnjcb", "zhxvch", "xbvjkbx", "ksdjfhj"];

const allLang = language.map( (lang) => (lang + 10));
// console.log(allLang);

const myyNums = [1,2,3,4];

const total = myyNums.reduce ( (acc , cur) => {
    // console.log(`acc : ${acc} and curValue : ${cur}`);
          return acc + cur;
          
} , 3);
// console.log(total);
