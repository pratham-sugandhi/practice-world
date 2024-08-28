//Day-1...

/*
alert("hello world");

console.log("generating..");

let a =7;
let b=7;
let c;
console.log(c= a+b);

prompt=("enter a no");
let confirm=("blasting.., Enter a no");
if(isTrue){
    console.log(blasted)
}
else{
    console.log(d= "not blasting")
}

*/

let a=("number");
let b=(5);
let c;
console.log(c=a+b);

console.log(typeof c, typeof a, typeof b);

const p={
    "name":"pratham",
    "class":12,
}
p.class="1 st year";  //we can not change value in const
console.log(p);
p.number=1;
console.log(p);   //we can add new keys in object


//js-dictionary
const dict ={
    p:"lorem5",
    q:"lorem4",
    r:"lorem2",
};
console.log(dict);

//lec-2
let age =5; 
let grace=9;
age+=grace;

/*
if (age>18){
    console.log("you can drive")
}
else{
    console.log("you can not drive")
}
console.log(age+grace);
console.log(age);
*/

if (age>=18){
    console.log("you can drive");
}
else if(age==0){
    console.log("are you made");
}
else{
    console.log("you can not drive");
}
console.log(age);

let p=23;
let l=22;
let lp= l>p ?(l+p):(l-p);
/*
if(l>p){
   console.log("lp"="l+p");
}
else{
    console.log("lp"="l-p");
}
*/
