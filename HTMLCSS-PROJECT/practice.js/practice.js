/*
js program-return true if one of two number = 100 or if the sum of two no. is 100

function checkNum(num1 , num2) {
    if (num1 == 100 || num2 == 100) {
        console.log("true1");
    }

    else {
        console.log("checked");
        summation(num1 , num2)

        function summation(num1 , num2) {
            let num3 = num1 + num2;

            if (num3 == 100) {
                console.log("true");
            }
        }
    }
}

checkNum ( 50, 50);



//Js program to replace every char of a string


function replaceChars(str , replaceChar) {
    return str.split ('').map(char => replaceChar).join('');
}

const texxt = "abcd"
const newText = replaceChars(texxt , "p");
console.log(newText);

*/
/*
//Js practice program for loops--
for(let i=1; i<=5; i++ ){
    // console.log("*");
}

for(let i=1; i<=5; i++ ){
    for(let j=1; j<=i; j++){
        // console.log("*");
    }
}

var i,j,k,l;
for (let i = 1; i <= 5; i++) {

    for(k=1; k<= 5-i; k++){
        // console.log(" ");
    }

    for(let j=1; j<=i; j++){
        // console.log("*");
    }
}

for(let i=1; i<=5; i++){

    for (let k = 1; k <= 5-i; k++) {
        // console.log(" ");
    }

    for(let j = 1; j<=i; j++){
        // console.log("*");
    }

    for (let l = 2; l <= i; l++) {
        // console.log("*");
    }
}

let fruits= ["mgo", "apple", "santra", "melon", "fal"];

function fruitName (fruits){
    for(let i=0; i<fruits.length; i++){
        console.log(fruits[i]);
    }
    console.log(" ");
    
    for(let f1=1; f1<=5; f1++){
        console.log(fruits);
    }
    console.log(" ");
    
    for(let f1=0; f1<=4; f1++){
        console.log(fruits[f1]);
    }
    
}

// fruitName(fruits);

var i=1;
while(i<=20){
    if( i%2 == 0){
        // console.log(i);
    }
    i++;
}

let favMovies= ["msd", "pushpa","kgf", "bahubali"];

for (const movies of favMovies) {
    // console.log(movies);
}

let arr = [1,2,3,4,5,6,7,8];
let sum =0;
for (let num of arr){
    sum+= num;
}
// console.log(sum);
    
let obj = {
    name : "rds",
    class : 12,
    sec : "A",
    author : "gblgb"
}
for (let key in obj){
    // console.log(`${key}:${obj[key]}`);
}

let count = 0;

for (let key in obj){
    count++; 
}
// console.log(count);
*/

{ //CODECHIEF--

//TO CHECK WHETHER A GIVEN NUMBER IS EVEN OR ODD?
function enterNum (num){
    if (num == num%2){
        console.log("Even");
    } else {
        console.log("odd");
    }
}
// enterNum(45);

//PROGRAM TO FIND LARGEST OF THREE NUMBERS-
function largestNum (val1, val2, val3){
    if( val1 >= val2 && val1 >= val3){
        return val1;
    } else if ( val2>= val1 && val2 >= val3){
        return val2;
    } else {
        return val3;
    }
}
// console.log(largestNum(34,78,45));

//WRITE A PROGRAM TO PRINT SUM OF FIRST 10 NATURAL NUM-

let naturalNum = [1,2,3,4,5,6,7,8,9,10];
let sum =0;

for ( let i=1; i<=10; i++){
    sum += i;
}

// console.log(sum);

//WRITE A PROGRAM TO SWAP TWO NUMBERS USING ONLY TWO VARIABLES-

function swapNum(num1, num2) {

    num1 = num1 ^ num2;
    num2 = num1 ^ num2;
    num1 = num1 ^ num2;
    
    console.log("num1",num1);
    console.log("num2",num2);
}
// swapNum(45,54);

// WRITE A PROGRSM TO CHECK WHETHER INPUT YEAR IS LEAP YEAR OR NOT-

function checkLeapYr(){
    let yr = prompt("Enter a year:");
    yr = parseInt(yr);

    if ((yr % 4 == 0 && yr % 100 != 0) || yr % 400 == 0) {
        console.log(yr, "is a leap year");
    } else {
        console.log(yr, "is not a leap year");
    }
}
// checkLeapYr();

// WAP TO GET A NUMBER FROM USER AND CALCULATE ITS FACTORIAL AND KEEP THE CASE OF FACTORIAL OF 0 AS WELL-
function calculateFac () {
    let num = prompt("Enter a number");
    num = parseInt(num);

    if ( isNaN(num) || num < 0 ) {
        console.log("Enter a valid num");
    } 
    
    let factorial = 1;
    if (num === 0){
        factorial = 1;
    }
    else {
        for ( let i = 1; i <= num; i++){
            factorial *= i;
        }
    }
    console.log(`The num is ${num} and factorial is ${factorial}`);       
}
// calculateFac();

// WRITE A PROGRAM TO CHECK WHETHER GIVEN NUMBER IS PRIME NUMBER-

function isPrime (){
    let num = prompt("Enter a number");
    num = parseInt(num);

    if ( num <= 1){
        console.log("Enter a prime number");
    }

    for (let i = 1; i <= Math.sqrt(num); i++){
        if (num % i == 0){
            console.log(`${num} is not a prime num`);
        } else {
            console.log(`${num} is a prime num`);
        }
    }
}
// isPrime();

//WRITE A PROGRAM TO CHECK THE GIVEN NUMBER IS ARMSTRONG OR NOT-

function isArmstrong(num){
    const digits = num.toString().split('');
}

//WRITE A PROGRAM TO PRINT TRIANGLE OF STARS USING LOOPS-
for(let i=1; i<=5; i++){

    for(let k=1; k<= 5-i; k++){
        // console.log(" ");
    }

    for(let j=1; j<=i; j++){
        // console.log("*");
    }
}

//WRITE A PROGRAM TO PRINT TRIANGLE OF STARS USING LOOPS-
for(let i=1; i<=5; i++){

    for(let k=1; k<= 5-i; k++){
        console.log(" ");
    }

    for(let j=1; j<=i; j++){
        console.log("*");
    }

    for(let l=2; l<=i; l++){
        console.log(" ");
    }
}

//WRITE A JS PROGRAM TO CHECK A NUMBER IS PALINDROME(EX-121)-
function isPalindrome(){
    let userInp = prompt("Enter a number");
    let number = parseInt(userInp);

    let numStr = number.toString();
    let reverseStr = numStr.split('').reverse().join('');

    if( numStr === reverseStr){
        console.log(`${number} is a palindrome`);
    } else {
        console.log(`${number} is not a palindrome`);
    }
}
// isPalindrome();


}