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