// scripting lang- js
// console.log("Hello world..");

// keywords- special words with means
// var let const

// var a = 12;  // can't use outside fun
// let b = 20;   // can't use outside {}
// const c = 90;    // can't use outside {}

// can't redeclare outside but can be update-
    // const person = {name = "Pratham"};
    // person.name = "Sugandhi";    //allowed
    // person = {}  // not allowed

// hoisting - do hise me tutna (decl & initializstion) and top par jana; 
    // var -> hoisting -> undefined
    // let -> hhoisting -> X 
    // const -> hhoisting -> X

// primitive - copy krme pr real copy milti hai;;
 // string, number, boolean, null, undefined, symbol, bigint;
    
    // Symbol -> unique immutable value;
        // let obj = {
        //     name: "prathu",
        //     age : 19,
        //     uid : 1,
        // };

        // let u1 = Symbol("uid");
        // obj[u1] = "001";
    
    // bigint -> 
        // let a = 98493840843n;
        // a = a+3n;

// refrence - copy krne pr refrence milega- refrence ka change real me bhi honga
 // arrays[], objects{}, fun();

// Dynamic type - data changes!
    // let a = 132;
    // a = 'true';

// quirks-
    // typeof - null => Object
    // typeof - NaN => Number

// type coercion -> autometic conversion of type-
    // "5" + 1 => '51';
    // "5" - 1 => 4;

// falsy values- 0 false "" null NaN undefined document.all 

// function

// function fun(){
//     console.log("heyheyehye");
// }

// let fun = function(){
//     console.log("heyheyehye");
// }

// let fun = () => {
//     console.log("heyheyehye");
// }
// fun();

// function naachra(pratham){
//     console.log(`${pratham} gadhi naachri`);
// }

// naachra("gadha");
// naachra("hitta");

// first class function
    // let ghadhi = function(h2,a){
    //     h2("popat");
    // }

    // ghadhi(function(a){
    //     console.log("bewkoof "+a);
    // })

// higher order fun - return function
// function ghadhi (){
//     return function ghadha(){
//         console.log("hitta");
//     }
// }

// ghadhi()();

// closure -> fun retn another fun - retn fun use prnt var
    // function abc (){
    //     return function bcc() {
    //         let a = 199;
    //         function ccc() {
    //             console.log(a);
    //         }
    //     }
    // }

// // iife
// (function() {
//     console.log("params");
// })();

// let shery = (function () {
//     let  score = 0;
//     return {
//         getScore : function () {
//             console.log(score);
//         },

//         setScore : function (val) {
//             score = val;
//         }
//     }
// })();
// console.log(shery.getScore());
// console.log(shery.setScore(33));

// function discntCal(dis) {
//     return function (price) {
//         return price - price * (dis / 100);
//     }
// }
// let tenPer = discntCal(10);
// console.log(tenPer(200));

// function counter() {
//     let count = 0;
//     return function () {
//         count++;
//         return count;
//     }
// }
// let c1 = counter();
// console.log(c1());
// console.log(c1());
// console.log(c1());
// console.log(c1());

// let c2 = counter();
// console.log(c2());
// console.log(c2());
// console.log(c2());
// console.log(c2());


// Arrays-
// let arrays = [10,45,25,84,49];
// console.log(arrays[2]);
// arrays.push(78);
// arrays.pop();
// arrays.shift(); //1 haata
// arrays.unshift(0);
// arrays.splice(2,1);
// let arr = arrays.slice(0,3);
// console.log(arr);
// arrays.reverse();
// arrays.sort(function (a, b) {
//     return a - b;   //accesnding
// });
// arrays.sort(function (a, b) {
//     return b - a;   //desscending order
// });


//foreach-
    let arr = [23,56,47,88,35,80];

    // arr.forEach(function (params) {
    //     console.log(params+9);
    // })

//map srf use krna hai jab new array banana hai from old-
//map - blank array - 
//map arrays - return values
    // let newArr = arr.map(function (val) {
    //     return 12+val;
    // })

    // let ageArr = arr.map(function (val) {
    //     if(val >= 18){
    //         return "18+";
    //     }
    //     else
    //     return "tooo young";
    // })
    // console.log(ageArr);

// filter -  new arr with some member
    // filter rtn- true false
    // let newArr = arr.filter(function (params) {
    //     if(params>50)
    //     return true;
    // })
    // console.log(newArr);

// reduce - ek value ke liye
    // let ans= arr.reduce(function (accumlator, val) {
    //     return acc + val;
    // }, 0);
    // console.log(ans);

// find - accept fun
    // let a = arr.find(function (val) {
    //     return val === 80;
    // })
    // console.log(a);

// some - 
    // let v = arr.some(function (params) {
    //     return params>70;
    // })
    // console.log(v);

// every-
    // let e = arr.every(function (params) {
    //     return params > 25; 
    // })
    // console.log(e);

// destructoring- 
    // let [a,b, , c] = arr;
    // let arr1 = [...arr];    //copy - spread operator!

// Objects-
    // let obj = {
    //     name: "Broo",
    //     id : 10,
    //     bib: "rdrgb"
    // };

    // console.log(obj.name);
    // console.log(obj["name"]);

    // let obbb = {
    //     name : "kkvdpf",
    //     company : {
    //         model : " 42r",
    //         year : {
    //             date : "24:34::5",
    //             time : 8958
    //         }
    //     }
    // };
    // console.log(obbb.company.year.date);
    //console.log(obbb?.company?.year?.date);   //optional chaining

    // let {date, time} = obbb.company.year;
    // console.log(date);
    // console.log(time);

// for-in
    // let obj = {
    //     name: "Broo",
    //     id : 10,
    //     bib: "rdrgb"
    // };

    // for(let key in obj){
    //     console.log(key,+" "+ obj[key]);
    // }

    // console.log(Object.keys(obj));

    // let obj2 = {...obj};
    // let obj3 = Object.assign({price : "Infinity"}, obj);

    // let obj2 = JSON.parse(JSON.stringify(obj)); //for- nested obj copy   

// que-
    // const course = {
    //     title : "JS",
    //     duration : "4 weeks",
    // };

    // Object.entries(course).forEach(function (val) {
    //     console.log(val[0]+": "+val[1]);
    // });

// DOM-
    // 1) HTML SELECT -
        // let abs = document.getElementById("abs");
        // console.dir(abs);
        // document.getElementsByClassName("pds");

        // let abc = document.querySelector("h1");
        // let abc = document.querySelectorAll("h1");
        // console.dir(abc);

    // TEXT MANIPULATION -
        // let h1 = document.querySelector("h1");
        // h1.textContent = "Hello kaise ho";
        // h1.innerHTML = "<i> Hello html kaise ho </i>";
        // h1.innerText = "Hello text kaise ho";

    // ATTRIBUTE MANIPULATION -
        // let a = document.querySelector("a");
        // a.href = "https://google.com";
        // a.setAttribute("href", "https://google.com");

        // let img = document.querySelector("img");
        // img.setAttribute("src", "fjnvjknmz");
        // console.log(a.getAttribute("href"));

        // a.removeAttribute("href");

    // DYNAMIC DOM MANIPULATION -
        // let h1 = document.createElement("h1");
        // h1.textContent = "Hellloooo";
        // document.body.append(h1);
        // document.body.prepend(h1);

        // h1.style.color = "red";
        // h1.style.fontFamily = "gilroy";

        // h1.classList.add("hulu");
        // h1.classList.remove("hulu");
        // h1.classList.toggle("hulu");

    // EVENT LISTENER -
        // let p = document.querySelector("p");
        // p.addEventListener("click", function () {
        //     p.style.color = "green";
        // });

        // let p = document.querySelector("p");
        // function dblclick () {
        //     p.style.color = "red";
        // }
        // p.addEventListener("dblclick", dblclick);
        // p.removeEventListener("dblclick", dblclick);

        // let input = document.querySelector("input");
        // input.addEventListener("input", function (dets) {
        //     if (dets.data !== null) {
        //     console.log("data :-", dets.data);
        //     }
        // });

        // let sel = document.querySelector("select");
        // let device = document.querySelector("#device");

        // sel.addEventListener("change", function (dets) {
        //     device.textContent = `${dets.target.value} Device selected`;
        //     console.log(dets.target.value);
        // });



// PRACTICE - DOM
    // let lis = document.querySelectorAll("li");
    // lis.forEach(function (val) {
    //     console.log(val.textContent);
    // })
    // for(let i=0; i<lis.length; i++){
    //     console.log(lis[i].textContent);
    // }

// PROJECT - 

// let h1 = document.querySelector("h1");

// window.addEventListener("keydown", function (dets) {
//     // console.log(dets.key);
//     if(dets.key === " "){
//         h1.textContent = "SPC";
//     } else 
//     h1.textContent = dets.key;
// });
    
// input
// let btn = document.querySelector("#btn");
// let fileinp = document.querySelector("#fileinp");

// btn.addEventListener("click", function(){
//     fileinp.click();
// });

// fileinp.addEventListener("change", function(dets){
//     const file = dets.target.files[0];
//     if(file){
//         btn.textContent = file.name;
//     }
// })

// form-
let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#main");

form.addEventListener("submit", function(dets){
    dets.preventDefault();

    // console.log(inputs[0].value,inputs[1].value,inputs[2].value, inputs[3].value);

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src", inputs[0].value);

    let h3 = document.createElement("h3");
    h3.textContent = inputs[1].value;
    let h5 = document.createElement("h5");
    h5.textContent = inputs[2].value;
    let p = document.createElement("p");
    p.textContent = inputs[3].value;


    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    main.appendChild(card);

    inputs.forEach(function(inp){
        if(inp.type !== "submit"){
           inp.value = "";
        }
    });
});


