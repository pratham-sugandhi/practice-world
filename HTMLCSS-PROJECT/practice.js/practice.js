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

//Js practice program for loops--
for(let i=1; i<=5; i++ ){
    // console.log("*");
}

for(let i=1; i<=5; i++ ){
    for(let j=1; j<=i; j++){
        // console.log("*");
    }
}

let i,j,k,l;
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


