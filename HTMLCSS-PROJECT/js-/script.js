// VARIABLE AND DATA TYPES
// let a=56;
// let b=91;

// console.log("print a+b= ",a+b);


// OPERATORS
// let a=1;
// if(a>=5){
//     console.log(a);
// }
// else if (a=1) {
//     console.log("same");
// }
// else {
//     console.log("0");
// }
// else {
//     console.log("same");
// } 

// let p="prathu";
// let l="laxuu";
// if (p!="prathu") {
//     console.log("same")
// }
// else{
//     console.log("diff");
// }

// let p=21;
// let l=20;
// let pl=0;

// if(p+l <=pl){
//     console.log("its :",pl);
// }
// else{
//     console.log("!pl");
// }

// SWITCH XX
// let p=15 ;
// let value;
// switch (p=5, value) {
//     case value: 14;
        
//         break;

//     default: 15
//         break;
// }
// console.log(value,p);

// PRACTICE
// let prathu="laxuu";
// console.log(prathu,typeof prathu);

// let fam= prathu+"07";
// console.log(fam,typeof fam);

// const prathu ={
//     name:"Pratham",
//     sub : "BTECH",
//     age : 19
// };

// console.log(prathu);

// prathu.height=5.10;
// prathu.age=14;
// console.log(prathu);

// const dic={
//     a:"apple",
//     b:"ball",
//     c:"cat",
// }

// console.log(dic);

// dic.p="prathu";

// console.log(dic);

// let a=15;
// let b=34;
// let c=a+b;
// if (a || b >=20) {
//     console.log("more",a+b);
// } else {
//     console.log("less",a+b);
// }

// if ( c < a && b){
//     console.log("more",true);
// } else {
//     console.log("less", true);
// }

// let age=35;

// if(age>=10 && age<=20){
//     console.log("age=",age);
// }
// else{
//     console.log("aged");
// }

// LOOPS
// let p=10;
// for(let i=15; i<=110 ;i++){
//     console.log(p+i);
// }

// let obj={
//     nameFull: "prat",
//     age:50,
//     class:5,
// }

// for (const key in obj) {
//     console.log(key);
// }

// let a= "prathu"
// for (const a of "prathu") {
//     console.log(a);
// }

// let a=1;
// while (a<12) {
//     console.log(a);
//     a++;
// }

// let a=12;
// do {
//     console.log(a);
// } while (a<12);

// const stdMarks={
//     harry:98,
//     rohan:80,
//     prathu:99
// }
// for (const key in stdMarks) {
//     console.log(stdMarks);
//     }

// let num=0;
// if (num!=9) {
//     console.log("try again");
// } else {
//     console.log(num);
// }

// let fullName="prathu";
// console.log(fullName.length);
// // fullName.toUpperCase;
// // fullName.toLowerCase;
// console.log(fullName.slice(3));
// console.log(fullName.slice(2,3));
// console.log(fullName[2]);

// let fullName="pra";
// let secondName="prathu";
// let name1=fullName.concat(secondName,"sug")
// console.log(name1);

// let fullName="pra";
// console.log(fullName.toUpperCase());



// color button

// let index=0;
// function changeColor(){
//     let colors = ["red", "blue", "orange", "green"];

//     document.getElementsByTagName("body")[0].
//     style.background =colors[index++];

//     if(index > colors.length -1)
//         index=0;
// }


// function changeColor(){
//     let hex_numbers=["0","1","2","3","4","5","6","7","8","9"];

//     let hexcode ='';
//     for(let i=0; i<6 ;i++){
//         let random_index = Math.floor(Math.random () *
//         hex_numbers.length);

//         hexcode  += hex_numbers[random_index];
//     }

//     document.getElementById("hex-code").innerHTML = hexcode;
//     document.getElementsByTagName("body")[0].style.background = "#" + hexcode;
// }



// let count=0;
// function changeCount(num){
//     count += num;
//     document.getElementById("count").innerHTML = count;

// }



// <!-- TIC TAC GAME -->

// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset-btn");
// let newGameBtn = document.querySelector("#new-btn");
// let msgContainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");

// let turnO = true;

// const winPatterns = [
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8]
// ]

// const resetGame = () => {
//     turnO = true;
//     enableBoxes ();
//     msgContainer.classList.add("hide")
// }

// boxes.forEach ((box) => {
//     box.addEventListener("click",() => {
//         // console.log("box was clicked");
        
//         if (turnO){
//             box.innerText = "O";
//             turnO  =false;
//         } else {
//             box.innerText = "X";
//             turnO = true;
//         }

//         box.disabled = true;

//         checkWinner();
//     });
// });

// const disableBoxes = () => {
//     for( let box of boxes) {
//         box.disabled= true;
//     }
// }

// const enableBoxes = () => {
//     for( let box of boxes) {
//         box.disabled= false;
//         box.innerText ="";
//     }
// }

// const showWinner =(winner) => {
//     msg.innerText =`Congratulation, Winner is ${winner}`;
//     msgContainer.classList.remove("hide");
//     disableBoxes ();
// }

// const checkWinner = () => {
//     for( let pattern of winPatterns ) {
//         let pos1Val = boxes[pattern[0]].innerText;
//         let pos2Val = boxes[pattern[1]].innerText;
//         let pos3Val = boxes[pattern[2]].innerText;

//         if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
//             if(pos1Val === pos2Val && pos2Val === pos3Val){
//                 // console.log("winner ",pos1Val);
//                 showWinner(pos1Val);
//             }
//         }
//     }
// }

// newGameBtn.addEventListener("click", resetGame);
// resetBtn.addEventListener("click", resetGame);





// PRACTICE PURPOSE
// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset-btn");
// let newGameBtn = document.querySelector("#new-btn");
// let msgContainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg"); 

// let turnO = true;

// const winPatterns = [
//     [0,1,2], 
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],    
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8]
// ];

// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         if (turnO){
//             box.innerText = "O";
//             turnO  =false;
//         } else {
//             box.innerText = "X";
//             turnO = true;
//         }

//         box.disabled = true;

//         checkWinner();
//     })
// });

// const resetGame = () => {
//     turnO = true;
//     enableBoxes();
//     msgContainer.classList.add("hide");
// }


// const enableBoxes = () => {
//     for( let box of boxes) {
//         box.disabled= false;
//         box.innerText ="";
//     }
// }

// const disableBoxes = () => {
//     for( let box of boxes) {
//         box.disabled= true;
//     }
// }

// const checkWinner = () =>{
//     for (let pattern of winPatterns){
//         let pos1Val = boxes[pattern[0]].innerText;
//         let pos2Val = boxes[pattern[1]].innerText;
//         let pos3Val = boxes[pattern[2]].innerText;

//         if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
//             if (pos1Val === pos2Val && pos2Val === pos3Val) {
//                 showWinner(pos1Val);
//             }
//         }
//     }
// };

// const showWinner = (winner) =>{
//     msg.innerText =`Congratulation, Winner is ${winner}`;
//     msgContainer.classList.remove("hide");
//     disableBoxes ();
// }

// newGameBtn.addEventListener("click", resetGame);
// resetBtn.addEventListener("click", resetGame);







// STONE PAPER SCISSOR GAME:

// let userScore = 0;
// let compScore = 0;

// const userScorePara = document.querySelector("#user-score");
// const compScorePara = document.querySelector("#comp-score");

// const choices = document.querySelectorAll(".choice");
// const msg = document.querySelector("#msg")

// const genCompChoice = () => {
//     const options =["rock" , "paper", "scissors"];
//     const randIdx = Math.floor(Math.random() * 3);
//     return options [randIdx];
// }

// const drawGame = () => {
//     console.log("draw");
//     msg.innerText = "Draw"
//         msg.style.backgroundColor = "#081b31";
// };

// const showWinner = (userWin) => {
//     if (userWin) {
//         userScore ++;
//         userScorePara.innerText = userScore;
//         console.log("you win");
//         msg.innerText = "You Win!"
//         msg.style.backgroundColor = "green";
//     } 
    
//     else {
//         compScore ++;
//         compScorePara.innerText = compScore;
//         console.log("you lose");
//         msg.innerText = "You Lose!"
//         msg.style.backgroundColor = "red";
//     }
// }

// const playGame = (userChoice) => {
//     console.log("user choice", userChoice);
//     const compChoice = genCompChoice();
//     console.log("com choice", compChoice);

//     if(userChoice === compChoice) {
//         drawGame ();
//     } 
    
//     else {
//         let userWin = true;
//         if ( userChoice === "rock") {
//             // scissor , paper
//             userWin = compChoice === "paper" ? false : true;
//         } else if(userChoice === "paper") {
//             // rock , scissor
//             userWin = compChoice === "scissor" ? false : true;
//         } else {
//             // rock, paper
//             userWin = compChoice === "rock" ? false : true;
//         }

//         showWinner(userWin);
//     }
// };

// choices.forEach((choice) => {
//     choice.addEventListener("click", () => {
//         const userChoice = choice.getAttribute("Id");
//         playGame(userChoice);
//         // console.log("choice was clicked", choiceId);
//     })
// });



// CALCULATOR
/*
// const userInput = document.getElementById("userInput");
let userInput = document.querySelector("#userInput");
let expression = '';

function press(num) {
    expression += num;
    userInput.value = expression;
}

function equal() {
    userInput.value = eval(expression);
    expression ='';
}

function erase() {
    expression = '';
    userInput.value = expression;
}
*/



// COLOR CHANGER
const boxes = document.querySelectorAll('.box');
console.log(boxes);

const body =document.querySelector("body");

boxes.forEach( function(box){
    console.log(box);

    box.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        
        if (e.target.id === 'gray'){
            body.style.backgroundColor = e.target.id; //gray
        }
        if (e.target.id === 'white'){
            body.style.backgroundColor = e.target.id; //gray
        }
        if (e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id; //gray
        }
        if (e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id; //gray
        }
        if (e.target.id === 'red'){
            body.style.backgroundColor = e.target.id; //gray
        }
    });
});

//BMI CALCULATOR
const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `"Please give a valid weight" ${weight}`;
    } else {
        const bmi = (weight / ((height*height/10000))).toFixed(2);
        results.innerHTML = `<span>${bmi}<span>`;
    }

});


// DIGITAL CLOCK
// document.getElementById('clock');
const clock = document.querySelector('#clock');


setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleDateString());
    clock.innerHTML = date.toLocaleTimeString
}, 1000)


// GUESS A NUMBER
/*
const randomNum = parseInt(Math.random()*100 +1);

const submit = document.querySelector('#subt');
const userInp = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworHi = document.querySelector('.loworHi');
const startOver = document.querySelector('.rsultParas');

const p = document.createElement('p')

let prevGuess = [];
let numGuess =1;

let playGame =true;

if(playGame){
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInp.value);
        console.log(guess);
        validateGuess(guess);
        
    } )
}

function validateGuess (guess){
    if(isNaN(guess)){
        alert('please enter a valid no')
    } else if(guess < 1){
        alert('please enter num more than 1')
    } else if(guess > 100){
        alert('please enter num less than 100')
    } else{
        prevGuess.push(guess)
        if (numGuess === 11){
            displayGuess(guess)
            displayMess(`Game Over. Random no was ${randomNum}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
 
function checkGuess (guess){
    if (guess === randomNum){
        displayMess(`You guessed is right`)
        endGame()
    } else if (guess < randomNum){
        displayMess(`Num is tooo low`)
    } else if (guess > randomNum){
        displayMess(`Num is tooo high`)
    }
}

function displayGuess(){
    userInp.value = '';
    guessSlot.innerHTML += `${guess}  `
    numGuess++;
    remaining.innerHTML = `${11- numGuess}`
}
 
function displayMess(message){
    loworHi.innerHTML = `<h2>${message}</h2>` 
}

function newGame(){
    // 
}

function endGame(){
    // 
}

*/

// COLOR GENERATOR

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let colors = '#';
    for (let i = 0; i < 6; i++) {
        colors += hex[Math.floor(Math.random() * 16)];
    }
    return colors;
}

let intervalId;
const startChangingColor = function(){
    intervalId = setInterval(changeBgColor, 1000);
    
    function changeBgColor (){
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
};


document.querySelector('#start').
addEventListener('click', startChangingColor);

document.querySelector('#stop').
addEventListener('click', stopChangingColor);


// KEY

const insert = document.querySelector('.insert');

window.addEventListener('keydown', function (e){
    insert.innerHTML =`
    <div class = 'color'>
       <table>
        <tr>
            <th>key</th>
            <th>keyCode</th>
            <th>code</th>
        </tr>
        <tr>
            <td>${e.key === "" ? "space" : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
       </table>
    </div>
    `
})


//CENTER DIV

let rect = document.querySelector("#centre");

rect.addEventListener("mousemove", function(details){
    let rectLocation = rect.getBoundingClientRect();   //location X,Y,top,width
    let insideRect = details.clientx - rectLocation.left;   //mouselocation - rectlocation

    if(insideRect < rectLocation.width/2){
        // console.log("left");
        let redColor = gsap.utils.mapRange(0, rectLocation.width/2, 255, 0, insideRect);
        gsap.to(rect, {
            backgroundColor : `rgb(${redColor}, 0 , 0)`,
            ease: Power4
        });
    } else {
        // console.log("right");
        let blueColor = gsap.utils.mapRange(rectLocation.width/2, rectLocation.width, 0, 255, insideRect);
        gsap.to(rect, {
            backgroundColor : `rgb( 0 , 0, ${redColor})`,
            ease: Power4
        });
    }
})

rect.addEventListener("mouseleave", function (){
    gsap.to(rect, {
        backgroundColor: "white"
    })
})