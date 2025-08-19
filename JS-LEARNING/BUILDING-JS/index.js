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
    // let form = document.querySelector("form");
    // let inputs = document.querySelectorAll("input");
    // let main = document.querySelector("#main");

    // form.addEventListener("submit", function(dets){
    //     dets.preventDefault();

    //     // console.log(inputs[0].value,inputs[1].value,inputs[2].value, inputs[3].value);

    //     let card = document.createElement("div");
    //     card.classList.add("card");

    //     let profile = document.createElement("div");
    //     profile.classList.add("profile");

    //     let img = document.createElement("img");
    //     img.setAttribute("src", inputs[0].value);

    //     let h3 = document.createElement("h3");
    //     h3.textContent = inputs[1].value;
    //     let h5 = document.createElement("h5");
    //     h5.textContent = inputs[2].value;
    //     let p = document.createElement("p");
    //     p.textContent = inputs[3].value;


    //     profile.appendChild(img);
    //     card.appendChild(profile);
    //     card.appendChild(h3);
    //     card.appendChild(h5);
    //     card.appendChild(p);

    //     main.appendChild(card);

    //     inputs.forEach(function(inp){
    //         if(inp.type !== "submit"){
    //            inp.value = "";
    //         }
    //     });
    // });


// mouseover-
    // let abcd = document.querySelector("#abcd");

    // abcd.addEventListener("mouseover", function(){
    //     abcd.style.backgroundColor = "yellow";
    // });
    // abcd.addEventListener("mouseout", function(){
    //     abcd.style.backgroundColor = "red";
    // });

// mousemove -
    // let abcd  = document.querySelector("#abcd");

    // window.addEventListener("mousemove", function(dets){
    //     // console.log(dets.clientX, dets.clientY);
    //     abcd.style.top = dets.clientY + "px";
    //     abcd.style.left = dets.clientX + "px";
    // });

// Event bubling - parent se listener lekr apply karna 
    // let ul = document.querySelector("ul");

    // ul.addEventListener("click", function(dets){
    //     // console.log(dets.target);
    //     // dets.target.style.textDecoration = "line-through";

    //     dets.target.classList.toggle("lt");
    // });

// Event capturing - 
    // jab bhi eventhota hai flow do phase me hota hai-
    // 1) top lvl se neeche aayega
    // 2) raised Element se parent ki taraf (bubling)

    // let a = document.querySelector(".a");
    // let b = document.querySelector(".b");
    // let c = document.querySelector(".c");
    // let btn = document.querySelector("button");

    // btn.addEventListener("click", function(){
    //     console.log("button clicked");
    // });         //bubling phase (2)
    // c.addEventListener("click", function(){
    //     console.log("c clicked");
    // });         //bubling phase (3)
    // b.addEventListener("click", function(){
    //     console.log("b clicked");
    // });         //bubling phase (4)
    // a.addEventListener("click", function(){
    //     console.log("a clicked");
    // }, true);   //capture phase (!)

// charactercounter -- 

    // let inp = document.querySelector("input");
    // let span = document.querySelector("span");

    // inp.addEventListener("input", function(){
    //     // console.log(inp.value.length);

    //     let left = 20 - inp.value.length;
    //     span.textContent = left;

    //     if(left < 0){
    //         span.style.color = "red";
    //     }
    //     else {
    //         span.style.color = "white";
    //     }
    // });

// FORMS MANIPULATION - 
    // let nm  = document.querySelector("#name");
    // let form  = document.querySelector("form");

    // form.addEventListener("submit", function(dets){
    //     dets.preventDefault();

    //     if(nm.ariaValueMax.length <= 2){
    //         document.querySelector("#hide").style.display = "initial";
    //     } else{
    //         document.querySelector("#hide").style.display = "none";
    //     }
    // });

// inline validations - required, minlength , maxlength
// pattern validation - pattern ="[a-z]{3,8}";"

// regex code
    // form.addEventListener("submit", function(dets){
        // dets.preventDefault();

        // const regex = /^[];
        // let ans = regex.test("pdsug@gmail.com");
        // console.log(ans);    //true
    // });

// handle password and email-

    // <!-- Timers and Intervals -->

    // let tm = setTimeout(function (){
    //    console.log("hello");
    // }, 5000);
    // clearTimeout(tm);

    // setInterval(function (){
    //    console.log("hello");
    // }, 5000);
    // clearInterval(tm);

    // let count = 10;
    // let interval = setInterval(function(){
    //     if(count >= 0){
    //         count-- ;
    //         console.log(count);
    //     } else {
    //         clearInterval(interval);
    //     }
    // }, 1000);

// task -2 downloader(5:09)
// auto hide banner after 3secs

// localStorage - browser me store krna jo dekete nhi honga
    // store-
        // localStorage.setItem("name", "prathu");
    // fetch-
        // let val = localStorage.getItem("name");
    // remove-
        // localStorage.removeItem("name");
    // update-
        // localStorage.setItem("name", "pratham");

    // localStorage.setItem("friends", JSON.stringify(["amarsh","mayur","bla blba"]));
    // let fr = JSON.parse(localStorage.getItem("friends"));
    // console.log(fr);

// sessionStorage - temproray storage

    // store-
        // sessionStorage.setItem("name", "prathu");
    // fetch-
        // let val = sessionStorage.getItem("name");
    // remove-
        // sessionStorage.removeItem("name");
    // update-
        // sessionStorage.setItem("name", "pratham");


// cookies - data storage for small data upto (4kb)
// save data - page reload par server me jayega 
    // document.cookie = "email=prathu@test.com";

// DARK MODE -
    // function setDarkorLight () {
    //     if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //         document.body.classList.add("dark");
    //         document.body.classList.remove("light");
    //     } else {
    //         document.body.classList.add("light");
    //         document.body.classList.remove("dark");
    //     }
    // };

    // if (localStorage.getItem("theme")) {
    //     document.body.classList.add(localStorage.getItem("theme"));
    // } else {
    //     setDarkorLight();
    // }

    // window.matchMedia('(prefers-color-scheme: dark)')
    //     .addEventListener("change", function(){
    //         if (!localStorage.getItem("theme")) {
    //             setDarkorLight();
    //         }
    //     });

    // let btn = document.querySelector("button");
    // btn.addEventListener("click",function(){
    //     if(document.body.classList.contains("dark")){
    //         document.body.classList.remove("dark");
    //         document.body.classList.add("light");

    //         localStorage.setItem("theme", "light");
    //     } else{
    //         document.body.classList.add("dark");
    //         document.body.classList.remove("light");

    //         localStorage.setItem("theme", "dark");
    //     }
    // });

    // document.body.classList.add(localStorage.getItem("theme"));



// search-filter ->
    // let users = [
    // {
    //     name: "amisha rathore",
    //     pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    //     bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
    // },
    // {
    //     name: "amita mehta",
    //     pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
    //     bio: "main character energy 🎬 | coffee > everything ☕✨",
    // },
    // {
    //     name: "isha oberoi",
    //     pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
    //     bio: "walking through dreams in doc martens 💭🖤 | late night thinker",
    // },
    // {
    //     name: "Ojin Oklawa",
    //     pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
    //     bio: "too glam to give a damn 💅 | filter free soul",
    // },
    // {
    //     name: "diya bansal",
    //     pic: "https://i.pinimg.com/736x/74/b0/67/74b067e6c5ece09d99f68c42c5f6754e.jpg",
    //     bio: "a little chaos, a lot of art 🎨✨ | just vibes",
    // },
    // {
    //     name: "tanay rawat",
    //     pic: "https://i.pinimg.com/736x/9b/78/b9/9b78b95425278ee37e88869b8c5fb2c6.jpg",
    //     bio: "don’t text, just vibe 🪩 | soft heart, sharp mind",
    // },
    // {
    //     name: "mohit chhabra",
    //     pic: "https://i.pinimg.com/736x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
    //     bio: "aesthetic overload 📸🕊️ | living in lowercase",
    // },
    // ];

    // function showUsers(arr) {
    // arr.forEach(function (user) {
    //     // Create outer card div
    //     const card = document.createElement("div");
    //     card.classList.add("card");

    //     // Create image
    //     const img = document.createElement("img");
    //     img.src = user.pic;
    //     img.classList.add("bg-img");

    //     // Create blurred-layer div
    //     const blurredLayer = document.createElement("div");
    //     blurredLayer.style.backgroundImage = `url(${user.pic})`;
    //     blurredLayer.classList.add("blurred-layer");

    //     // Create content div
    //     const content = document.createElement("div");
    //     content.classList.add("content");

    //     // Create h3 and paragraph
    //     const heading = document.createElement("h3");
    //     heading.textContent = user.name;

    //     const para = document.createElement("p");
    //     para.textContent = user.bio;

    //     // Append heading and paragraph to content
    //     content.appendChild(heading);
    //     content.appendChild(para);

    //     // Append all to card
    //     card.appendChild(img);
    //     card.appendChild(blurredLayer);
    //     card.appendChild(content);

    //     // Finally, append card to the body or any container
    //     document.querySelector(".cards").appendChild(card);
    // });
    // }

    // showUsers(users);

    // let inp = document.querySelector(".inp");
    // inp.addEventListener("input", function () {
    // let newUsers = users.filter((user) => {
    //     return user.name.startsWith(inp.value);
    // });

    // document.querySelector(".cards").innerHTML = "";
    // showUsers(newUsers);
    // });


// CALL BOOK-

//
// - Change Text on Button Click
    // let btn = document.querySelector("button .change");
    // let h1 = document.querySelector("h1");
    // btn.addEventListener("click", function(){
    //     h1.textContent = "Changed";
    // });

// Create a button that, when clicked, changes the text of a <p> element to "Hello, DOM!".
    // let btn2 = document.querySelector("button #btn2");
    // let p = document.querySelector("p");
    // btn2.addEventListener("click", function(){
    //     p.textContent = "Changed";
    // });

// - Toggle Background Color
    // let toggleBtn = document.querySelector("#toggle-button");
    // let isLight = true;

    // bg.addEventListener("click", function(){
    //     if(isLight){
    //         document.body.style.backgroundColor = "blue";
    //     } else {
    //         document.body.style.backgroundColor = "red";
    //     }
    // });

// Build a toggle switch that changes the background color of the page between light and dark modes.
    // let bgc = document.querySelector("toggle-mode");
    // let isDark = false;
    // bgc.addEventListener("click", function(){
    //     if(isDark){
    //         document.body.style.backgroundColor = "white";
    //         document.body.style.color = "black";

    //     } else {
    //         document.body.style.backgroundColor = "black";
    //         document.body.style.color = "white";
    //     }
    // });

// - Add and Remove Elements
    // let h3 = document.createElement("h3");
    // h3.textContent = "Hello, world";

// Create a button that adds a new <li> to a list. Add another button that removes the last <li>.
    // let addBtn = document.querySelector("#add");
    // let removeBtn = document.querySelector("#remove");
    // let list = document.querySelector("#list");

    // addBtn.addEventListener("click", function () {
    //     let li = document.createElement("li");
    //     li.textContent = "New Item";
    //     list.appendChild(li);
    // });

    // removeBtn.addEventListener("click", function () {
    //     if (list.lastElementChild) {
    //         list.removeChild(list.lastElementChild);
    //     }
    // });


// - Form Validation
// Build a form with a name and email field. On submit, validate that both fields are filled and show an error message if not.
    // let form = document.querySelector("#myForm");
    // let nameInput = document.querySelector("#name");
    // let emailInput = document.querySelector("#email");
    // let errorMsg = document.querySelector("#error");


    // form.addEventListener("submit", function(dets){
    //     dets.preventDefault();
        
    //     if (nameInput.value === "" || emailInput.value === "") {
    //         errorMsg.textContent = "Please fill in both fields.";
    //     } else {
    //         errorMsg.textContent = "";
    //         alert("Form submitted successfully!");
    //         form.reset();
    //     }
    // });



// - Image Gallery Hover Effect
// When you hover over an image, display its caption below it.
    // let cards = document.querySelectorAll(".card");

    // cards.forEach(card => {
    // let caption = card.querySelector(".caption");

    // card.addEventListener("mouseenter", () => {
    //     caption.style.display = "block";
    // });

    // card.addEventListener("mouseleave", () => {
    //     caption.style.display = "none";
    // });
    // });


// - Accordion Menu
// Create a list of questions. When a question is clicked, show the answer below it and hide others.
        // let que = document.querySelectorAll("#questions");

        // que.forEach(q => {
        //     q.addEventListener("click", function () {
        //         document.querySelectorAll(".answer").forEach(ans => {
        //             ans.syle.display = "none";
        //         });

        //         let answer = q.nextElementSibling;
        //         answer.style.display = "block";
        //     });
        // });

// EXECUTION CONTEXT -
    // JS execution context - global execution context, function execution context, eval execution context
    // global execution context - global scope - window object
    // function execution context - function scope - function object
    // eval execution context - eval function scope - eval object
    // execution context - function ke andar jo bhi variable hai wo uske andar hi access hoga
    // execution context - function ke andar jo bhi variable hai wo uske calling location se access hoga

    // function dekh kr -> js execution context banta hai,
    // process - which works in diff phases - memory phase & execution phase

// LEXICAL SCOPING - (JS)
    // lexical scoping - function ke andar jo bhi variable hai wo uske andar hi access hoga
    // function outer() {
        //     let a = 10;  // outer function scope     
        //     function inner() {
        //         let b = 20;  // inner function scope
        //         console.log(a + b);  // a is accessible here 
        //     }
        //     inner();
        // }
        // outer();  // 30  

// DYNAMIC SCOPING -
    // dynamic scoping - function ke andar jo bhi variable hai wo uske calling location se access hoga
        // let a = 10;  // global scope
        // function outer() {
        //     let a = 20; 
        //     function inner() {
        //         console.log(a);  // a is accessible here 
        //     }
        //     inner();
        // }
        // outer();  // 20

    // non dynamic scoping - (lexical scoping)
        // let b = 30;  // global scope
        // function abcd(){
        //     console.log(b);  // b is accessible here
        // }

        // function xyz() {
        //     let b = 40;  // local scope
        //     abcd();  // calls the global b
        // }
        // xyz();  // 30


// CLOSURE - fun returns function
    // parent function ke andar jo bhi variable hai wo uske child function se access hoga

    // closure - parent function ke andar jo bhi variable hai wo uske calling location se access hoga
        // function outer() {
        //     let a = 10;  // outer function scope
        //     function inner() {
        //         let b = 20;  // inner function scope     
        //         console.log(a + b);  // a is accessible here
        //         return a + b;  // returns the sum of a and b
        //     }
        //     return inner;  // returns the inner function 
        // }

        // function abcd(){
        //     let a = 10;  // outer function scope
        //     return function () {
        //         console.log(a);  // a is accessible here
        //     };
        // }

        // abcd()();  // 10

    // private counter -
        // function createCounter() {
        //     let count = 0;  
        //     return function() {
        //         count++;
        //         console.log(count);  // count is accessible here
        //     };
        // }
        // let counter = createCounter();
        // counter();  // 1
        // counter();  // 2
        // counter();  // 3

        // let counter2 = createCounter();
        // counter2();         
        // counter2();  // 1
        // counter2();  // 2   
        // counter();  // 4

    // encapsulation - clicklimiter
        // function clickLimiter(limit) {
        //     let click = 0;
        //     return function() {
        //         if (click < limit) {
        //             click++;
        //             console.log(`Button clicked ${click} times`);
        //         } else {
        //             console.log("Click limit reached");
        //         }
        //     };
        // }
        // let buttonClick = clickLimiter(3);  
        // buttonClick();  // Button clicked 1 times
        // buttonClick();  // Button clicked 2 times
        // buttonClick();  // Button clicked 3 times
        // buttonClick();  // Click limit reached

//   TOASTER- 
    // function createToaster(config){
    //     return function(message){
    //         let parent = document.querySelector(".parent");
    //         let toast = document.createElement("div");
    //         toast.className = `toast ${config.theme === "dark" ? "bg-gray-800 text white" : "bg-gray-200 text black"}   
    //              p-4 rounded-lg shadow-lg transition-all duration-300 `;
            
    //         toast.textContent = message;
    //         document.querySelector(".parent").appendChild(toast);

    //         if(config.positionX !== "left" || positionY !=="top"){
    //             parent.classList.add("fixed");
    //             parent.className += 
    //                 `${config.positionX === "right" ? " right-5" : " left-5"} ${config.positionY === "bottom" ? " bottom-5" : "top-5"}}`;
    //         }
    //         setTimeout(() => {
    //             parent.removeChild(toast);
    //         }, config.duration * 1000);
    //     };
    // }

    // let toaster = createToaster({
    //     positionX: "right",
    //     positionY: "top",
    //     duration: 3,
    //     theme: "dark", 
    // });

    // toaster("Hello, this is a toast message!");
    // toaster("This is another toast message!");


// This keyword -  value and nature changes
    // global 
        // console.log(this) -> window
    // function
        // console.log(this) -> window
    
    // method -> object
        // let obj = {
        //     name : "prsthu",
        //     age: 26,
        //     sayAge: function(){
        //         console.log(this.age);
        //     },
        //     sayName: function(){
        //         console.log(this.name);
        //     }
        // };
        // obj.sayAge();
        // obj.sayName();
    
    // event handler - 
        // document.querySelector("h1")
        //     .addEventListener("click", function(){
        //         alert();
        //         console.log(this.style.color = "red");  //this - h1
        //     });

    // class - this -> {}
        // class Abcd{
        //     constructor(){
        //         console.log(this);
        //         this.a = 12;
        //     }
        // };
        // let val = new Abcd();   // {a : 12};


// CALL APPLY BIND --> fun ki value set krna
    // let obj = {
    //     name : "prathu",
    //     age : 35,
    // };
    // function abcd(a, b, c){
    //     console.log(this.name);
    //     console.log(this, a,b,c);
    // }

    // abcd.call(obj); //this => obj

    // abcd.apply(obj, [1,2,3]); 

    // let fun = abcd.bind(obj, 1,2,3); 
    // fun();

// User Manager-
    // let form = document.querySelector("form");
    // let username = document.querySelector("#name");
    // let role = document.querySelector("#role");
    // let bio = document.querySelector("#bio");
    // let photo = document.querySelector("#photo");

    // const userManager = {
    //     user : [],
    //     init : function(e){
    //         form.addEventListener("submit", this.submitForm.bind(this));
    //     },
    //     submitForm : function(e){
    //         e.preventDefault();
    //         console.log("form submitted");
    //         this.addUser();

    //     },

    //     addUser : function(){
    //         this.user.push({
    //             username: username.value,
    //             role: role.value,
    //             bio: bio.value,
    //             photo: photo.value,
    //         });
            
    //         form.reset();
    //         this.renderUi();
    //     },

    //     renderUi : function(){

    //         document.querySelector(".users").innerHTML ="";
    //         this.users.forEach(element => {
    //             // ...
    //         });
    //     },
    //     removeUser : function(){},
    // };


//  OOPS-
    // Constructor function->

        // function CreatePencil(name, price, color, company) {
            // this.name = name;
            // this.price = price;
            // this.color = color;
            // this.company = company;
            //     this.write = function(text){
            //         let h1 = document.createElement("h1");
            //         h1.textContent = text;
            //         h1.style.color = color;
            //         document.body.append(h1);
            //     }
        // };

        // let pencil1 = new CreatePencil("natraj", 10, "red", "Nataraj");
        // pencil1.write("yoohohooho");
        // let pencil2 = new CreatePencil("natraj", 10, "black", "Nataraj");
        // pencil2.write("badiiiyyyaa");

    // Prototype - 
        // CreatePencil.prototype.company = "Sheriyanss";

        // CreatePencil.prototype.write = function(text){
        //         let h1 = document.createElement("h1");
        //         h1.textContent = text;
        //         h1.style.color = this.color;
        //         document.body.append(h1);
        // }
    
    // Class ->
        // let h1 = document.body.querySelector("h1");
        // class CreatePencil{
        //     constructor(name, price, color, company){
        //         this.name = name;
        //         this.price = price;
        //         this.color = color;
        //         this.company = company;
        //     };

        //     erase (){
        //         h1.forEach( (params) => {
        //             if(params.style.color === this.color){
        //                 params.remove();
        //             }
        //         })
        //     };

        //     write (text) {
        //         // let h1 = document.createElement("h1");
        //         h1.textContent = text;
        //         h1.style.color = this.color;
        //         document.body.append(h1);
        //     }
        // };

        // class Admin extends CreatePencil{
        //     constructor(name, price, color){
        //         super(name, price, color);
        //         this.company = "All";
        //     };     
        // }

        // let pencil1 = new CreatePencil("nataraj", 20, "black", "natarajan");
        // let pencil2 = new CreatePencil("doms", 10, "red", "doms");
        // ;
        // console.log(pencil1.write("Hello World"));
        // pencil2.write("Hello World 2");
        // let a1 = new Admin("adi", 99, "blue");
        // a1.erase();

    // class User{
    //     constructor(name, address, username, email){
    //         this.name = name;
    //         this.address = address;
    //         this.username = username;
    //         this.email = email;
    //         this.role = "user";
    //     };

    //     write(text){
    //         let h1 = document.createElement("h1");
    //         h1.textContent = `${this.name} : ${text}`;
    //     };

    //     checkRole(){
    //         console.log(`you are: ${this.role}`);
    //     };
    // };

    // class Admin extends User{
    //     constructor (name, address, username, email){
    //         super(name, address, username, email);
    //         this.role =  "admin";
    //     };

    //     remove(){
    //         document.querySelectorAll("h1").forEach(function (elem){
    //             elem.remove();
    //         });
    //     }
    // }

    // let u1 = new User("Harsh", "bhopal", "kfdvjdb123", "hehyhe@gmail.com");
    // let u2 = new User("Prathu", "indore", "kfdvjdb123", "hehyhe@gmail.com");
    // let a1 = new Admin("admin1", "fdjuh", "nvhbd", "mvndiufyg");
    // a1.checkRole();

// prototypal inheritence - object -> object
    // let a = {};
    // let b = Object.create(a);  // b is prototype of a
    // b.name = "prathu";
    // b.age = 26;
    // console.log(b.name);  
    // console.log(b.age);

    // let coffee = {
    //     color : "brown",
    //     drink : function(){
    //         console.log("drinking coffee");
    //     },
    // };

    // let latte = Object.create(coffee);  // latte is prototype of coffee
    // latte.flavor = "vanilla";
    // latte.drink = function(){
    //     console.log("drinking latte");
    // };
    // console.log(latte.color);
    // latte.drink();

// ASYNC AND SYNC -
    // synchronous - line by line execution
    // asynchronous - execution is not line by line, it can execute in parallel or after some time
        // non-blocking execution, callback functions, promises, async/await
    
        // console.log("hey1");
        // console.log("hey2");

        // setTimeout(function(){
        //     console.log("hey4");
        // }, 2000);

        // console.log("hey5");

    // callback - passing function in another function parameters
        // function getProfile(username, cb){
        //     setTimeout( () => {
        //         console.log(`profile fetched ${username}`);
        //         cb({_id: 1324,username, age: 26, bio: "I am a software developer" },);
        //     } , 2000);
        // };

        // function postData(id, cb){
        //     setTimeout( () => {
        //         console.log(`posts fetched for ${id} !`);
        //         cb(
        //             [{_id: id, title: "Post 1"}, 
        //             {_id: id, title: "Post 2"}]
        //         );
        //     }, 2000);
        // }

        // function savedPosts(id, cb){
        //     setTimeout( () => {
        //         console.log(`saved posts fetched for ${id} !`);
        //         cb({_id: id, saved: [6, 78 , 88 , 9,] });
        //     }, 2000);
        // }

        // getProfile("Prathu", function(data){
        //     // console.log("profile data is: ", data);

        //     postData(data._id, function(posts){
        //         // console.log("posts are", posts);

        //         savedPosts (data._id, function(saved) {
        //             console.log("saved posts are", saved);
        //         });
        //     });

        // })

// PROMISES -
    // promises - ek object jo future me value return karega based on resolve/reject

    // let pr = new Promise(function(res, rej){
    //     setTimeout(function(){
    //         let rn = Math.floor(Math.random() * 10);
    //         if(rn > 5){
    //             let data = "resolved data -> " + rn;
    //             res(data);
    //         } else {
    //             let err = "rejected error -> " + rn;
    //             rej(err);
    //         }

    //     }, 2000);
    // });

    // pr.then(function(data){
    //     console.log("promise resolved with: ", data);
    // })
    // .catch(function(err){
    //     console.log("promise rejected with: ", err);
    // });

    // Async/Await -
        // let pr = new Promise(function(res, rej){
        //     setTimeout(function(){
        //         let rn = Math.floor(Math.random() * 10);
        //         if(rn > 5){
        //             let data = "resolved data -> " + rn;
        //             res(data);
        //         } else {
        //             let err = "rejected error -> " + rn;
        //             rej(err);
        //         }

        //     }, 2000);
        // });

        // async function abcd(){
        //     try {
        //         let val = await pr;
        //         console.log(val);
        //     } catch (err) {
        //         console.log(err);
        //     }
        // };
        // abcd();

// FETCH API / HTTPS FETCHED- 
    // fetch("https://randomuser.me/api/")
    //     .then((rawdata) =>  rawdata.json())
    //     .then((data) => {
    //         console.log(data.results);
    //         console.log(data.results[0].name);
    //         console.log(data.info);
    //         console.log(data.info.seed);
    //     })
    //     .catch((err) => {
    //         console.error("Error:", err);
    //     })

// fetch("https://randomuser.me/api/?results=5")
//   .then((rawdata) => rawdata.json())
//   .then((data) => {
//     data.results.forEach(user => {
//         // console.log(user.name);

//         const card = document.createElement("div");
//         card.className = "card h-100";

//         const img = document.createElement("img");
//         img.src = user.picture.large;
//         img.className = "card-img-top";
//         img.alt = "Card image";
//         card.appendChild(img);

//         const cardBody = document.createElement("div");
//         cardBody.className = "card-body";

//         const name = document.createElement("h5");
//         name.className = "card-title";
//         name.textContent = user.name.first + " " + user.name.last;

//         const text = document.createElement("p");
//         text.className = "card-text";
//         text.textContent = "This is a short description for the first card. You can add more details here.";

//         cardBody.appendChild(name);
//         cardBody.appendChild(text);
//         card.appendChild(cardBody);

//         const cardFooter = document.createElement("div");
//         cardFooter.className = "card-footer text-center";

//         const link = document.createElement("a");
//         link.href = "#";
//         link.className = "btn btn-primary";
//         link.textContent = "Learn More";

//         cardFooter.appendChild(link);
//         card.appendChild(cardFooter);

//         // Append to container
//         // document.getElementById("#users").appendChild(card);

//         // Append card to container
//         const usersContainer = document.querySelector(".users");
//         usersContainer.appendChild(card);


//     });
//   })
//   .catch((err) => {
//      console.error("Error:", err);
//   });

// USER PROJECT -->
function getUser(){
  fetch("https://randomuser.me/api/?results=5")
    .then((rawdata) => rawdata.json())
    .then((data) => {
        document. querySelector(".row").innerHTML = ""; 
        
        const usersContainer = document.querySelector(".row");

        data.results.forEach(user => {
        const col = document.createElement("div");
        col.className = "col";

        const card = document.createElement("div");
        card.className = "card h-100";

        const img = document.createElement("img");
        img.src = user.picture.large;
        img.className = "card-img-top";
        img.alt = "Card image";
        card.appendChild(img);

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const name = document.createElement("h5");
        name.className = "card-title";
        name.textContent = `${user.name.first} ${user.name.last}`;

        const text = document.createElement("p");
        text.className = "card-text";
        text.textContent = "This is a short description for the user.";

        cardBody.appendChild(name);
        cardBody.appendChild(text);
        card.appendChild(cardBody);

        const cardFooter = document.createElement("div");
        cardFooter.className = "card-footer text-center";

        const link = document.createElement("a");
        link.href = "#";
        link.className = "btn btn-primary";
        link.textContent = "Learn More";

        cardFooter.appendChild(link);
        card.appendChild(cardFooter);

        // Append card to column, then column to row
        col.appendChild(card);
        usersContainer.appendChild(col);
        });
    })
    .catch((err) => {
        console.error("Error:", err);
    });
}
getUser();

document.querySelector("#refreshBtn")
 .addEventListener("click", function() {
    getUser();
 });
