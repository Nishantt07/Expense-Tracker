// let name = "nishant";
// console.log(name.toUpperCase());
// name = name.toUpperCase();
// console.log(name.toLowerCase());
// console.log(name);
// console.log(name.slice(2,7),"hoajao");
// console.log(name.slice(1));
// console.log(name);
// let name2 = "ashish";
// name2 = name2.toUpperCase();
// console.log(name.concat(" is the elder brother of  ", name2 ,"! am i saying right?"));
// let name = 'hii'
// name[1] = "j"
// console.log(name);
// name = "brooooother";
// console.log(name);
// console.log(name);
// let a = "POWER";
// a = a.padEnd(15," AND MONEY");
// console.log(a);
// let line = 'He gave her his coaty to hold of cost 5000000';
// let word = 'coat';
// console.log(line.includes(word));
// console.log(`the word  ${word} ${line.includes(word)? "is" : "is not" } in the sentence`);
// let remain = line.slice('He gave her his coaty to hold of cost'.length);
// console.log(typeof remain)
// remain = Number.parseInt(remain);
// console.log(typeof remain);
// console.log(remain);
// let  anarray = [12,34,23,"jai bajrang bali"];
// anarray[2] = 34;
// console.log(anarray[2]);
// for(let i in anarray){
//     console.log(anarray[i]);
// }
// console.log(typeof(anarray));
// let names = ["raman" , "chaman" , "bhawan" , "haman"];
// let total = (names.join("-"))
// console.log(total)
// console.log(names);
// console.log(names[3])
// console.log(typeof names);
// names = names.join("-")
// console.log(names);
// console.log(names[3]);
// console.log(typeof names);
// let num = [1,2,3,4] 
// let arc = num.shift();
// console.log(num);
// console.log(arc);
// let arc2 = num.unshift(34);
// console.log(arc2)
// console.log(num);
// console.log(num.length)
// for(i in num){
//     console.log(num[i])
// }
// delete num[0];
// console.log(num.length);
// for(i in num){
//     console.log(num[i]);
// }
// console.log(num.length);
// let num2 = [34,55,66,7];
// let array3 = num2.concat(num);
// console.log(array3);
// let num = [23,45,2,3,532,55223,34]
// const compareio = ( v1 , v2 ) =>{
// return  v2-v1 ;
// }
//  let tide = num.sort(compareio);
// console.log(tide);
// console.log(num);
// console.log(typeof tide);
// console.log(typeof num);
// console.log(num.reverse());
// let ree = num.splice(3,3);
// console.log(ree);
// console.log(num);
// console.log(num.splice(1,0,345,12,3,4,56,67,2));
// console.log(num);
// let ret = num.slice(2,7);
// console.log(num);
// console.log(ret);
// let marks = {
//     "raman" : 34,
//     "chaman" : 233,
//     "bhraman" : 23
// };
// for( let i  in marks ){
//     console.log(i);
// }
// for( let j of Object.values(marks) ){
//     console.log(j);
// let array = [23,244,32,22,223]
// array.forEach((a)=>{
//     console.log(a*a);
// })
// array.forEach((element) =>{
//     console.log(element-1);
//     console.log(element);
// })
// let name = "nishant";
// let arr = Array.from(name);
// console.log(name);
// console.log(arr)
// let ar2 = 2525112;
// let A4 =  ar2.toString();
// console.log(A4);
// console.log(typeof A4)
// let a5 = Array.from(A4);
// console.log(a5);
// let array = [23,244,32,22,223]
// for( let i of array){
//     console.log(i);
// }
// for( i in array){
//     console.log(array[i]);
// }
/// console.log(array);
// let a = array.forEach((element , index , array)=>{
// console.log(element , index , array);
// return element;
// })
// console.log(a);
// let b = array.map((value,index , aeray)=>{
//     console.log(value,index , aeray);
//     console.log(value + index)
//     return value+1;
// })
// console.log(b);
// let b = array.map((element)=>{
//     return element<50;
// })
// console.log(b);
// console.log(typeof b)
// console.log(array);
// let c  = array.filter((pelement)=>{
//     return pelement<50;
// })
// console.log(c);
// console.log(typeof c);
// console.log(array);
// console.log(typeof array);
// let arr1  = arr.reduce((h1 , h2)=>{
// return h1+h2;
// })
// console.log(arr1);
// const  reduce_function = (a,b)=>{
// return a+b;
// }
// let newarr = arr.reduce(reduce_function);
// console.log(newarr);
// let prompt = require('prompt-sync')();
// let num = prompt("enter the total numbers you want to add in an array");
// num = Number.parseInt(num);
// let arr = [];
// for(let i in arr){
//     let a = prompt("enter the number");
//     Number.parseInt(a)
//     arr[i] = a;
// }
// for(let i = 0; i<num ; i++){
//     let a = prompt("enter the number");
//     a = Number.parseInt(a)
//     arr[i] = a;
// }
// console.log(arr);
// arr.push(45);
// console.log(arr);
// let b;
// do{
//      b =  prompt("enter a number you want to add in an array");
//     b = Number.parseInt(b);
//     arr.push(b);
// }while( b !=0);
// console.log(arr);

// const { LocalStorage } = require("node-localstorage");


// let arr  = [20,32,40,54,65,23,10];
// let arr2 = arr.filter((number)=>{
//     return number %10 == 0;
// })
// console.log(arr2);

// const prompt = require("prompt-sync")();
// let xy = Math.floor(Math.random()*100);
// let guess;
// console.log(xy)
// let count = 0;
// do{
//     let guess = prompt("enter the number for a guess");
//     count = count +1;
//     guess = Number.parseInt(guess);      
//     if( guess > xy){
//         console.log("Your number is greater try again");
//     }
//     else if (guess<xy) {
//     console.log('Your number is lesser try again');
//     }
//     else{
//         console.log("The Game Is Over")
//         console.log(" Congo! You founded the number");
//         console.log('Your total score is ' , 100 - count);
//         break;
//     }
// }
// while(guess!==xy);
// console.time("for loop")
// for(let i=0;i<5;i++){
//     console.log(i)
//     i++;
// }
// console.timeEnd("for loop end")


// console.time("while loop")
// let i = 0;
// while(i<5){
//     console.log(i)
//     i++;
// }
// console.time("while loop end ")


// alert("Hello the value of a");
// let a = prompt("Enter the value" , 45)
// a = Number.parseInt(a)
// let write  =  confirm("Do you want to write it to the page");
// if (write){

//     document.write(a);
//     document.write(typeof a);
// }
// else{
//     document.write("allow me to enter a number to the screen by reloading it");
// 

// let con;

// do{
//     let age = prompt("enter your age");
//     age  = Number.parseInt(age)

//     if(age>4){
//      location.href = "https://www.google.com";

//     }

//     else if ( age < 18){
//        alert("sorry you are not eligible to drive the car");
//     }

//     else if ( age < 1 ){
//         console.error("your entered negative number ");
//     }
//     con  = confirm("Do you wanr to see the prompt again")

// }
// while( con == true ){
// };


// let color = prompt("enter your color to set the background");
// document.body.style.background = color;

// let prompt = require('prompt-sync')();

// let USERcount = 0;
// let COMPcount = 0;
// console.log("this game contains 3 rounds ");


// let round = 1;
// function playgame() { 
//     while( round <= 3){
//         let alphabets = "SWG";
//         let random  = Math.floor(Math.random()* alphabets.length);
//         let r =  alphabets[random];
//         console.log(r);
//         let input = prompt("enter an alphabet from an S,W OR G");
//         input = input.toUpperCase()


//         if(input=="S" && r=="S" ){
//             console.log("Luckily the round is drawn")
//             round ++;

//         }

//         else if(input=="W" && r=="W" ){
//             console.log("Luckily the round is drawn")
//             round ++;

//         }


//         else if(input=="G" && r=="G" ){
//             console.log("Luckily the round is drawn")
//             round ++;

//         }


//         else if( input=="S" && r=="W"){
//             console.log("Congo you wins");
//             USERcount++;
//             round ++;
//         }
//         else if( input=="W" && r=="S"){
//             console.log("Oops you lost");
//             COMPcount++;
//             round ++;
//         }


//         else if( input=="W" && r=="G"){
//             console.log("Congo you wins");
//             USERcount++;
//             round ++;
//         }

//         else if( input=="G" && r=="W"){
//             console.log("Oops you lost");
//             COMPcount++;
//             round ++;
//         }

//         else if( input=="G" && r=="S"){
//             console.log("Congo you wins");
//             USERcount++;
//             round ++;
//         }

//         else if( input=="S" && r=="G"){
//             console.log("Oops you lost");
//             COMPcount++;
//             round ++;
//         }

//         else{
//             console.log("Enter the correct input");
//         }
//     }

//     if ( round == 4 && COMPcount>USERcount){
//         console.log("Thank you for playing ");
//         console.log(`You lost the game by ${COMPcount} points`);
//     }

//     else if(round == 4 && COMPcount<USERcount){
//         console.log("Thank you for playing ");
//         console.log(`You won the game by  ${USERcount} points`)
//     }
//      else if (round == 4 && COMPcount == USERcount){
//             console.log("Thank you for playing")
//             console.log("Oops the game is drawn") 
//     }


// let pro = prompt("Do you want to play the game again YES/NO").toLowerCase();
// if( pro === "yes"){
//     round = 0;
//     playgame();
// }
// else{
//     console.log("thanks for quitting the game");
// }
// }

// playgame();

// console.log(document.head.childNodes)
// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// console.log(document.head.childNodes)
// let ar = Array.from(document.head.childNodes);
// console.log(ar);

// console.log(document.head.parentNode);
// console.log(document.body.parentElement)
// console.log(document.head.nextSibling);
// let a = document.bodz
// console.log(document.body.firstChild.firstChild.nextSibling);
// console.log(document.body.firstElementChild)
// let a = document.body.firstElementChild
// console.log(a.rows)
// console.log(a.caption)
// console.log(a.tHead)
// console.log(a.tFoot);
// console.log(a.tBodies)
// console.log(tr.Cells)

// let click = document.getElementById("nothing")
// click.style.color = "blue";
// let c = document.getElementsByClassName("hereii");
// // c.style.color = "red";

// Array.from(c).forEach((element) =>{
// element.style.color  = "red";
// });
// console.log(typeof c);

// let click = document.querySelector(".hereii");
// click.style.color = "red";
// let click2 = document.querySelectorAll(".hereii")
// click2[2].style.color = "red";
// let j = document.getElementById("id1");

// console.log(document.getElementById("id1").matches(".class1"));
// // console.log(document.getElementByClassName("class2")[0].matches("#id2"));
// console.log(document.getElementsByClassName("class2")[0].matches("#id2"));

// console.log(document.getElementsByClassName("classforme")[0].closest("#idforme"));
// console.log(document.getElementById("id1").contains(document.querySelector("#id1")
// ));

// let li = document.getElementsByClassName("classforli")[0];
// li.style.color = "green";

// let bi = document.getElementsByClassName("classforli")[2];
// bi.style.color = "green";

// console.log(document.body.firstChild.firstChild.style.color = "red")
// console.log(document.body.firstChild.lastChild.style.color = "green")

// let li  = document.querySelector(".classforli");
// li.style.color = "red";

// let li  = document.getElementsByClassName("classforli")
// Array.from(li).forEach((element)=>{
// element.style.color  = "red";
// })
// let li = document.getElementById("idfornavbar");
// console.log(li.nodeName)

// let a = idfordiv.hasAttribute("class");
// console.log(a);

// let b = classfordiv.hasAttribute("id");
// console.log(b);


// let c = idfordiv.setAttribute("class", "nikita");
// console.log(c);

// let a = nikita.setAttribute("id","nishant");
// console.log(a)

// let a = classfordiv.setAttribute("id","idfordiv");
// let idfordiv = document.getElementById("idfordiv");
// let A = idfordiv.removeAttribute("class");
// console.log(A);

// let element = document.getElementById("idfordiv");
// element.setAttribute("class","brother");
// let element2 = document.getElementsByClassName("classfordiv")[0];
// element2.setAttribute("id","brother")
// console.log(element.hasAttribute("id"));
// console.log(element2.hasAttribute("id"))
// console.log(element.getAttribute("id"));
// console.log(element.hasAttribute("class"))
// console.log(element.removeAttribute("id"));
// console.log(element.attributes)

// let a = document.getElementsByTagName("div")[0];
// a.innerHTML = "<div>hey i am a div which is inserted</div>";

// let a = document.getElementsByTagName("div")[1];
// let div = document.createElement("div");
// div.innerHTML = "<h1>This is also a inserted element</h1>"
// // a.replaceChild(a,div);
// let parent = document.getElementById("idfordiv");
// let a  = document.getElementById("idforchild");
// parent.replaceChild(div,a);

// let first = document.getElementsByClassName("first")[0];
// first.className = "red-text";
// first.classList.add("background");
// first.classList.remove("red-text")
// first.classList.toggle("red-text");

// setTimeout( function functionfortimeout() {
// alert("this is an alert");
// },5000);

// function hello(){
//     alert("this is also an timeout");
// }

// timeoutid = setTimeout(hello,2000);
// // console.log(timeoutid)
// clearTimeout(timeoutid)

// function thisissetinetrval(){
//     alert("this interval will come only two times");
// }

//  let intervalid  = setInterval(thisissetinetrval,2000);

// function entry(){
//     clearInterval(intervalid);
//     console.log("the interval is stopped successfully");
// }
// let settimeoutid = setTimeout(entry,5000);
// clearTimeout(settimeoutid);

// function sum(a,b,c){
// console.log("the addition of the three digits is will run after 3 seconds", a+b+c);
// }

// setInterval(sum,2000,7,8,9)

// let a = document.getElementsByClassName("classforabutton")[0];
// a.addEventListener("click",function (alertit){
//     alert("you have clicked on the button successfullyy");
// })

// a.addEventListener("click",function (alertit){
//     alert("you have clicked on the button successfullyy");
// })

// let cb = prompt("what is your favourite number");

// let y = function yoo(e) {
//     alert("Hello world your favourite number is 1");
//     console.log(screenX)
// }

// let x = function xoo(event) {
//     alert("hello world your favourite number is 2")
//     console.log(event. , screenX , screenY)
// }

// if (cb === "1") {
//     a.addEventListener("click", y);
// }

// if (cb === "2") {
//     a.addEventListener("click", x);
// }

// let c0 = document.getElementsByClassName("cars")[0];
// let c1 = document.getElementsByClassName("cars")[1];
// let c2 = document.getElementsByClassName("cars")[2];
// let c3 = document.getElementsByClassName("cars")[3];

// c0.addEventListener("click", function(){
//     alert(" A Formula 1 car designed for speed and aerodynamics, optimized for performance on high-speed circuits.")
// })

// c1.addEventListener("click", function(){
//     alert("A high-performance muscle car designed for street racing and track days with powerful V8 engine")
// })

// c2.addEventListener("click", function(){
//     // alert(" A precision-engineered road car focused on track performance, offering agility and downforce.")
//     // <a href = ""></a>
//     let w = window.open('https://www.ferrari.com/',"_blank")
//     w.focucs();
// })

// c3.addEventListener("click", function(){
//     alert(" An electric racing sedan with extreme acceleration and top speed, tailored for drag racing.")
// // })
// let blow = document.getElementsByClassName('bulb')[0];

// function forsetinterval(){
//     // blow.classList.toggle("bulb");
// }

// setInterval(forsetinterval,300);

// let jokes = [

//             {
//                 "category": "Programming",
//                 "type": "single",
//                 "joke": "Today I learned that changing random stuff until your program works is \"hacky\" and a \"bad coding practice\" but if you do it fast enough it's \"Machine Learning\" and pays 4x your current salary.",
//                 "flags": {
//                     "nsfw": false,
//                     "religious": false,
//                     "political": false,
//                     "racist": false,
//                     "sexist": false,
//                     "explicit": false
//                 },
//                 "id": 33,
//                 "safe": true,
//                 "lang": "en"
//             },
//             {
//                 "category": "Programming",
//                 "type": "single",
//                 "joke": "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.",
//                 "flags": {
//                     "nsfw": false,
//                     "religious": false,
//                     "political": false,
//                     "racist": false,
//                     "sexist": false,
//                     "explicit": false
//                 },
//                 "id": 37,
//                 "safe": true,
//                 "lang": "en"
//             },
//             {
//                 "category": "Programming",
//                 "type": "single",
//                 "joke": "Debugging: Removing the needles from the haystack.",
//                 "flags": {
//                     "nsfw": false,
//                     "religious": false,
//                     "political": false,
//                     "racist": false,
//                     "sexist": false,
//                     "explicit": false
//                 },
//                 "id": 40,
//                 "safe": true,
//                 "lang": "en"
//             },
//             {
//                 "category": "Programming",
//                 "type": "single",
//                 "joke": "\"We messed up the keming again guys.\"",
//                 "flags": {
//                     "nsfw": false,
//                     "religious": false,
//                     "political": false,
//                     "racist": false,
//                     "sexist": false,
//                     "explicit": false
//                 },
//                 "id": 20,
//                 "safe": true,
//                 "lang": "en"
//             },
//             {
//                 "category": "Programming",
//                 "type": "single",
//                 "joke": "A byte walks into a bar looking miserable.\nThe bartender asks it: \"What's wrong buddy?\"\n\"Parity error.\" it replies. \n\"Ah that makes sense, I thought you looked a bit off.\"",
//                 "flags": {
//                     "nsfw": false,
//                     "religious": false,
//                     "political": false,
//                     "racist": false,
//                     "sexist": false,
//                     "explicit": false
//                 },
//                 "id": 24,
//                 "safe": true,
//                 "lang": "en"
//             },
//             {
//                 "category": "Programming",
//                 "type": "single",
//                 "joke": "Four engineers get into a car. The car won't start.\nThe Mechanical engineer says \"It's a broken starter\".\nThe Electrical engineer says \"Dead battery\".\nThe Chemical engineer says \"Impurities in the gasoline\".\nThe IT engineer says \"Hey guys, I have an idea: How about we all get out of the car and get back in\".",
//                 "flags": {
//                     "nsfw": false,
//                     "religious": false,
//                     "political": false,
//                     "racist": false,
//                     "sexist": false,
//                     "explicit": false
//                 },
//                 "id": 132,
//                 "safe": true,
//                 "lang": "en"
//             },
//             {
//                 "category": "Programming",
//                 "type": "single",
//                 "joke": "There are only 10 kinds of people in this world: those who know binary and those who don't.",
//                 "flags": {
//                     "nsfw": false,
//                     "religious": false,
//                     "political": false,
//                     "racist": false,
//                     "sexist": false,
//                     "explicit": false
//                 },
//                 "id": 35,
//                 "safe": true,
//                 "lang": "en"
//             },
//             {
//                 "category": "Programming",
//                 "type": "single",
//                 "joke": "\"Can I tell you a TCP joke?\"\n\"Please tell me a TCP joke.\"\n\"OK, I'll tell you a TCP joke.\"",
//                 "flags": {
//                     "nsfw": false,
//                     "religious": false,
//                     "political": false,
//                     "racist": false,
//                     "sexist": false,
//                     "explicit": false
//                 },
//                 "id": 57,
//                 "safe": true,
//                 "lang": "en"
//             },
//             {
//                 "category": "Programming",
//                 "type": "single",
//                 "joke": "Your momma is so fat, you need to switch to NTFS to store a picture of her.",
//                 "flags": {
//                     "nsfw": false,
//                     "religious": false,
//                     "political": false,
//                     "racist": false,
//                     "sexist": false,
//                     "explicit": true
//                 },
//                 "id": 55,
//                 "safe": false,
//                 "lang": "en"
//             },
//             {
//                 "category": "Programming",
//                 "type": "single",
//                 "joke": "Java and C were telling jokes. It was C's turn, so he writes something on the wall, points to it and says \"Do you get the reference?\" But Java didn't.",
//                 "flags": {
//                     "nsfw": false,
//                     "religious": false,
//                     "political": false,
//                     "racist": false,
//                     "sexist": false,
//                     "explicit": false
//                 },
//                 "id": 4,
//                 "safe": true,
//                 "lang": "en"
//             }
//         ]
//  let element2 = document.getElementById("classforjokebox");
//  let element = document.getElementsByClassName("jokey")[0];


// function yo(){
//      let elementt  = Math.floor(Math.random()* jokes.length-1)
//      return elementt;
// } 

// let x = function (){
//     let ret = yo();
//     element2.innerHTML = jokes[ret].joke;
// }

// element.addEventListener("click",x)


// let a = new Date();
// let date = a.getDate();
// let month = a.getMonth();
// let year = a.getFullYear();

// let hour = a.getHours();
// let minutes = a.getMinutes();
// let seconds = a.getSeconds();
// let td = document.getElementById("todaydate");
// let tt = document.getElementById("todaytime");

// function updatetimeanddate() {
// td.innerHTML = `Today date is : ${date} - ${month+1} - ${year}`;
// console.log(`Today date is : ${date} - ${month+1} - ${year}`)
// tt.innerHTML = `Current time is : ${hour} - ${minutes} - ${seconds}`;
// console.log(`Current time is : ${a.getHours()} - ${a.getMinutes()} - ${a.getSeconds()}`)
// }
// let intervalid = setInterval( updatetimeanddate(), 1000);


// let a = new Date();
// let date = a.getDate();
// let month = a.getMonth();
// let year = a.getFullYear();

// let hour = a.getHours();
// let minutes = a.getMinutes();
// let seconds = a.getSeconds();
// let td = document.getElementById("todaydate");
// let tt = document.getElementById("todaytime");

// function updatetimeanddate() {
//     a = new Date(); // Update the Date object each time the function is called
//     date = a.getDate();
//     month = a.getMonth();
//     year = a.getFullYear();
//     hour = a.getHours();
//     minutes = a.getMinutes();
//     seconds = a.getSeconds();

//     td.innerHTML = `Today date is : ${date} - ${month + 1} - ${year}`;
//     console.log(`Today date is : ${date} - ${month + 1} - ${year}`);
//     tt.innerHTML = `Current time is : ${hour} - ${minutes} - ${seconds}`;
//     console.log(`Current time is : ${hour} - ${minutes} - ${seconds}`);
// }

// Use setInterval to call updatetimeanddate every 1000ms (1 second)
// let intervalid = setInterval(updatetimeanddate, 1000);

// const cart = ["hoddie" , "shirt" , "socks"];
// createorder(cart,function(orderid){
//     proceestopayment(orderid,function(paymentid){
//         ordersummary(paymentid, function(){
//             updatewallet(paymentid);
//         })
//     })
// })

// const cart = ["hoddie" , "shirt" , "socks"];
// let promise =  createorder(cart);
// promise
// .then(function(orderid){
//    return proceedtopayment(orderid);
// });
// .then( function (paymentid){
//    return ordersummary(paymentid)
// });
// .then( function(paymentid){
//     updatewallet(paymentid
//     );
// });


// function loadscript(source , callback){
// let element = document.createElement("script");
// element.src = source;
// document.body.appendChild(element);
// element.onload = function(){
//     console.log("Script is loaded successfully");
//     callback(null);
// }
// // element.onerror = function(){
// //     callback(new Error("Source is not valid and you are not eligible to do the work"));

// // }


// // }

// // function eligible(error){
// //     if(error){
// //         console.log(error)
// //     }
// //     else{
// //            console.log(" you are eligible to do the work")    
// //     }
// // }
// oadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", eligible)

// let p = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("I am a promise and i am fullfilled")
//         resolve(true)
//     }, 5000);
// })

// console.log(p);

// let cart = ["pent","shirt" , "sunglasses"];
//  let promise =  order(cart);
//  promise

// .then(function(orderid){
// return orderid;
//  })

// .then(function(orderid){
//  proceedtopayment(orderid);
// })

// .catch(function(Error){
//     console.log("There is something unusual in the code");
// })


// function createorder(cart){

//     let p = new Promise((resolve,reject) =>{
//         if(validatecart()==false){
//             console.log(Error)
//             reject(Error);
//         }
//         else {
//             let orderid = "23421";

//         function aftersometime(){
//             resolve(orderid);
//         }

//         setTimeout(aftersometime,5000);

//         }
//     })

//     return p ;
// }


// function proceedtopayment(orderid){
//     let p = new Promise((resolve,reject)=>{
//         resolve();
//         console.log("The payment was successfull of order id " + orderid)
//     })
// }


// function validatecart(){
//     return false;

// }


// source = "https://cdn.jsdeliv.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
// let promise = loadscript(source);
// promise
// .then(function(res){
//     return res;
// })
// .then(function (res){
// endresult(res);
// })

// .catch( function(){
//     console.log("The script provided is totally wrong")
// })

// function loadscript(source){
// let p = new Promise((resolve,reject)=>{
//     let scpt = document.createElement("script");
//     scpt.src = source;
//     document.body.appendChild(scpt);

//     scpt.onload = function(){
//         resolve(source);
//     }

//     scpt.onerror = function(){
//         reject();
//     }
// })
// return p ;

// }

// function endresult(res){
// console.log("The script is loaded successfully with SRC = " , res)
// }


// 

// async function hello() {
//     return "Namaste Javascript";
// }

// // let data = hello()
// // console.log(data)

// const promise = hello();
// promise.then( function(value){
//     console.log(value)
// })


// const pro = new Promise ((resolve,reject)=>{


//      resolve("The promise is resolved");
// })

//  async function anything() {
//      pro.then( function (value){
//         // return value;
//         console.log(value);
//         // console.log("broo");
//     })
//     // console.log(another);
// }

// // console.log(anything());
// // anything()

// anything();
// // console.log(another);

// const promise = new Promise((resolve,reject)=>{
//     function ready() {
//         resolve(45);
//     }

//     setTimeout(ready,10000);
// })


//  async  function newtrick(){
// // promise.then( function( ){
//     // console.log("Hurray")
//     // console.log(value)
//    let value =  await promise;
//    console.log(value);
//    console.log("hurray")


// // })
// }

// newtrick();


// let promise = new Promise((resolve,reject)=>{
//     function func(){
//         resolve("Promise is resolved successfully...")
//     }

//     setTimeout(func,2000)
// })

// function randomfunc(){
// promise.then( function( value){ 
// console.log(value)})

// console.log("Namaste javscript")
// }

// randomfunc();




// let pr = new Promise((resolve,reject)=>{
// //     function func(){
// //         resolve("Promise is resolved successfully...")
//     }

//     setTimeout(func,2000)
// })

// function randomfunc(){
// pr.then( function( value){ console.log(value) 
//     console.log("Namaste Javascript")
//   })
// }

// randomfunc();




// let pro = new Promise((resolve,reject)=>{
//     function func(){
//         resolve("Promise is resolved successfully...")
//     }

//     setTimeout(func,2000)
// })

// async function randomfunc(){
//     console.log("function is called")
//     let store = await pro;
//     console.log(store)
// console.log("this will run after the promise is resolved")
// }
// console.log("bhalu")
// randomfunc();
// console.log("yahoo")

// github_API = "https://api.github.com/users/Nishantt07";

// async function githubData(){
//    const value = await fetch(github_API);
//    const data = await value.text();
//    console.log(data)
// }

// githubData()


// let input = document.getElementById("location");
//    navigator      .geolocation.getCurrentPosition(funcforlocation,failedtoget);
// function funcforlocation(currentpos){
//    input.innerHTML = "The longitude is" + currentpos.coords.longitude + "The latitude is " + currentpos.coords.latitude;
//    console.log(currentpos)
// }





// function failedtoget(){
//    input.innerHTML = "failed to get your location"
// }



// let city;
// let temperature = document.getElementById("temperature");
// let wind  = document.getElementById("Wind");
// let Airquality = document.getElementById("airqualityy");
// let Localtime = document.getElementById("localtime");
// let realdata;

// let element = document.getElementById("cityname")
// let element2 = document.getElementById("Searchbutton");

//    element2.addEventListener('click',  function() {
//    city  = element.value;
//    forweatherapi(city);

//    })


//   async function forweatherapi(cityname){ 
//    let WeatherAPI = `http://api.weatherapi.com/v1/current.json?key=577b77d6a9f94e2c90485207251001&q=${cityname}&aqi=yes`;

// let data = await fetch(WeatherAPI);
//  realdata = await data.json();
// // console.log(realdata); 
// // console.log("The temperature is " + realdata.current.temp_c);
// temperature.innerHTML = "The temperature is " + realdata.current.temp_c;
// wind.innerHTML = "The wind rate is " + realdata.current.wind_mph;
// Airquality.innerHTML = "The airquality is " + realdata.current.air_quality.pm10;
// Localtime.innerHTML = "The localtime is " + realdata.location.localtime;


//    }

// try{
//    console.log(nishant)
//    console.log("therr were two errors present")
// }
// catch{
//    console.log(package)
//    console.log("the error is catched")
// }
// finally{
//    console.log("THIS Will run at any cost")
// }


// let hello = document.getElementById("")


// function loadscript(Scriptt){
// return new Promise((resolve,reject)=>{
//    let body = document.getElementById("idforbody")
//    let hello = document.createElement("script");
//    hello.src = Scriptt;
//    body.appendChild(hello);
//    hello.onload = function(){
//       resolve(true);
//    }
//    hello.onerror = function(){
//       reject(false);
//    }

// })
// }



// let promise = loadscript(Scriptt);
// promise 
// .then( function forreturning(value){
// return value;
// })
// .then(function( data){
// })


// let Scriptt;

// async function anything() {
// //  Scriptt ="https://cdn.jsdelivr.net/npm/bootstrap@.3.3/dist/js/bootstrap.bundle.min.js";
//    let p = await loadscript(Scriptt);
//    alert(p);
//    }

//    function loadscript(Scriptt){
//      return new Promise ((resolve,reject)=>{
//       let body = document.getElementById("idforbody")
//       let hello = document.createElement("script");
//       hello.src = Scriptt;
//       body.appendChild(hello);
// try{
//    hello.onload = function (){
//       resolve ("Script loaded successfullly")
//    }
// }
// catch(error){
//    alert("The error is " + error);
// }


//      })
//    }

//    anything();


// async function initialize (){
//    setTimeout(() => {
//       console.log("Initializing hack program...")
//    }, 2000);
// }

// async function hacking (){
//    setTimeout(() => {
//       console.log("hacking ashish username...")
//    }, 4000);
// }


// async function username (){
//    setTimeout(() => {
//       console.log("username found ashish233....")
//    }, 6000);
// }

// async function connecting (){
//    setTimeout(() => {
//       console.log("connecting to facebook....")
//    }, 8000);
// }



// async function hackingsomething() {
//    await initialize();
//    await hacking();
//    await username();
//    await connecting();

// }

// hackingsomething()

// let bodyforpost = {
//     title:'Nishant',
//     body:'Jaat',
//     userid: 96,
// };

// function postrequest(bodyforpost){
//     return {
//         method:"POST",
//         headers:{
//             'Content-type': 'application/json',
//         },
//       body: JSON.stringify(bodyforpost),

//     }

// }

// async function funcforapi(){
//     let api = "https://jsonplaceholder.typicode.com/posts";
//     let configrequest  = postrequest(bodyforpost)
//     let fetching = await fetch(api,configrequest); 

//     let realdata = await fetching.json();
//     console.log(realdata);
//     fetchingdata(realdata.id)

// }


// async function fetchingdata(mineid){
// let idd = `https://jsonplaceholder.typicode.com/posts/96`;
// let minedata = await fetch(idd);
// let convert = await minedata.json();
// console.log(convert);
// }

// funcforapi()
// let prompt = require('prompt-sync')();
// let first = prompt("Enter the key you want to set");
// let second = prompt("Enter the value of the key");
// localStorage.setItem(first,second);

// let con = document.getElementById("summary");
// let ffresult;
// function referit(articles){
// articles.forEach((maincontent)=>{

//     let ele = document.getElementsByClassName("mainbox")[0];
//     ele.innerHTML += `
//        <div class="newsbox">
//      <div class="image"><img src="${maincontent.urlToImage}" alt=""NotFound">  
//      <div class="textoverlay">${maincontent.source.name}</div>
//      </div>
//      <h1 class="dateandtime">${maincontent.publishedAt}</h1>
//      <h1 class="title">${truncateText(maincontent.title)}</h1>
//      <h1 class="summary">${truncatesummary(maincontent.content)}</h1>
//     <h1 class="readmore"><a href="${maincontent.url}"> Read More -> </a></h1>
//     `

//  })
// }


// function truncatesummary(summ){
// if(summ.length>150){
//     summ.substring(0,150);
//     return summ;
// }
// else{
//     return summ;
// }
// }

// function truncateText(text){
//  let textlimit = 60;
//  if(text.length>textlimit)
//     return text.substring(0,textlimit)+ "...";
// else{
//     return text;
// }
// }

// let fresult;
// let url = "https://saurav.tech/NewsAPI/everything/bbc-news.json";


// async function fetchapi(){
//     let result = await fetch(url);
//      fresult = await result.json();
// let maxarticles = 6;
//      if(fresult.articles.length> maxarticles){
//          ffresult =  fresult.articles.slice(0,maxarticles);
//         referit(ffresult)
//      }
//      else{
//         referit(fresult.articles);

//      }
// }



// fetchapi()

// let input = prompt("Enter you node to save in local storage..");
// localStorage.setItem("note", input);
// let get = localStorage.getItem("note");
// alert("your note is " + get);
// let tf = confirm("do you want to delete the node")
// if (tf === true){
//     localStorage.removeItem("node")
// }



// class students{
//     name;
//     total_marks;
//     percenatge;


//     constructor(name , total_marks , percenatge){
//     this.name = name;
//     this.total_marks = total_marks;
//     this.percenatge = percenatge;
//     }

//     display(){
//         console.log(`"The name of the student is ${this.name}and total marks is ${this.total_marks} the percentage was ${this.percenatge}`)
//     }

// }

// let A1 = new students("Nishant" , 34 , 56);
// A1.display();


// class grandfather {
//     skincolor  = "Brown";
//     height  = 6.4;


//     constructor(){
//         console.log(`the height of the grandfather is ${this.height} and the skincolor is ${this.skincolor}`)
//     }
// }


// class father extends grandfather {

//     height  = 6.2;


//     constructor(){
//         super()
//         console.log(`the height of the father is ${this.height} and the skincolor is ${this.skincolor}`)
//     }
// }


// class inherites extends father {
//     constructor(){
//         super()
//         console.log(`${this.skincolor} skin color inherites from grandfather to father`)
//     }
// }

// let Chaman = new inherites();



// class bankaccount {
//     balance;


//     constructor(initialbalance){
//     this.#balance = initialbalance;
//     }

//     getbalance(){
//         console.log(this.#balance);
//     }
//     setbalance(updatedbalance){
//         this.#balance = updatedbalance;
//     }

//     addbalance(newbalance){
//         this.#balance = this.#balance + newbalance;
//     }

//     subbalance(deduct){
//         this.#balance = this.#balance - deduct; 
//     }


// }


// let raman = new bankaccount (500);

// raman.getbalance();
// raman.setbalance(5000);
// raman.subbalance(453);
// raman.addbalance(69);
// raman.getbalance();
// raman.balance = 56;
// console.log(raman.balance)


//  function func (){
//     return new Promise((resolve,reject)=>{
//     function resol (){
//         resolve(445);

//     }

//     setTimeout(resol,2000)
//     })
// }

// (async function(){
//     let a = await func();
//     let b = await func();
//     let c = await func();
//     console.log(a,b,c)
// })()


//  async function idk(){
//     let a = await func();
//     let b = await func();
//     let c = await func();
//     console.log(a,b,c)
// }

// idk();


// console.log(a)
// var a;
// a = 56;



// let object  ={
//     name : "Nishant",
//     SirName : "Gill",
//     collegeName : "Fimt",
//     Semester : "3rd",


//     show : function (){
//         console.log(this)
//         let that = this;
//         setTimeout(function (){
//             console.log(`the name is and ${that.name}the college name is ${that.collegeName} and the current semester is ${that.Semester}`)
// console.log(this)
//         }, 2000);
//     }



// };


// object.show();

// let p =  new Promise((resolve,reject)=>{
// setTimeout(() => {
//      resolve("HEllO world")
// }, 2000);
// })

// p
// .then((value)=>{
//     return(value);

// })

// .then((avalue)=>{
//     console.log(avalue);

// })
// .then((value)=>{
//     return value;

// })

// function sum(a,b,c){
//     return a+b+c;
// }

// function subtract(a,b,c){
//     return a+b-c;
// }

// let z = [3,4,5];
// console.log(sum(...z))
// console.log(subtract(...z))

// (
//  function func(realtime) {
//    return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve('Promise is resolved!!');
//         console.log("Successfully resolved")
//     }, realtime );
// });
// }
// )(6000).then((value)=>{
//     console.log(value)
// })





// let arr = null;
// let capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let small = "abcdefghijklmnopqrstuvwxyz";
// let capitalsmall = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// // let fullmix = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@$%^&*";
// let random = "!@$%^&*";
// let numbers = "1234567890";
// let passwordlength = 8;
// let char = "";


// function WeakPassword(passwordlength) {
//     for (i = 0; i < passwordlength; i++) {
//         let digit = Math.floor(Math.random() * capitalsmall.length)
//         char = char + capitalsmall[digit];
//     }
//     // console.log(char)
//     showthepass(char);

//     char = "";
// }


// function StrongPassword(passwordlength) {

//     if (passwordlength % 2 == 0) {
        
//         let onehalf = passwordlength / 2;
//         let anotherhalf = passwordlength - onehalf;
//         let arr;

//         for (i = 0; i < onehalf; i++) {
//             let digit = Math.floor(Math.random() * capitalsmall.length)
//             char = char + capitalsmall[digit];
//         }

//         for (i = 0; i <  anotherhalf; i++) {
//             let digit = Math.floor(Math.random() *random.length)
//             char = char + random[digit];
//         }
//         arr = char.split('');
//         for(i=arr.length-1;i>0;i--){
//             let j = Math.floor(Math.random()*(i+1));
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//         }
//          arr = arr.join('');
//     // console.log(arr)
//     showthepass(arr);

//     char = "";

        
//     } 

//     else {
//         let onehalf = Math.floor(passwordlength/2);
//         let anotherhalf = passwordlength-onehalf;
//         let arr;
        
//         for (i = 0; i < onehalf; i++) {
//             let digit = Math.floor(Math.random() * capitalsmall.length)
//             char = char + capitalsmall[digit];
//         }

//         for (i = 0; i < anotherhalf; i++) {
//             let digit = Math.floor(Math.random() *random.length)
//             char = char + random[digit];
//         }

//         arr = char.split('');
//         for(i=arr.length-1;i>0;i--){
//             let j = Math.floor(Math.random()*(i+1));
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//         }
//         arr =  arr.join('')
//     // console.log(arr);
//     showthepass(arr);

//     char = ""
//     }
// }

// function SuperStrongPassword(passwordlength) {

//     let onehalf;
//     let half;
//     let anotherhalf;
//     let otherhalf;
    
//    if(passwordlength%2!=0){
//     onehalf = Math.floor(passwordlength / 2);
//     half = passwordlength - onehalf;
//     otherhalf = Math.ceil(half / 2);
//     anotherhalf = Math.floor(half / 2);
//    }

//    else if(passwordlength%2==0){

//     if (passwordlength / 2 === 3 || passwordlength / 2 === 5 || passwordlength / 2 === 7){
//          onehalf = passwordlength/2;
//          half = passwordlength - onehalf;
//          otherhalf = Math.ceil(half/2);
//          anotherhalf = Math.floor(half/2);
//     }
//     else{
//          onehalf = passwordlength/2;
//          half = passwordlength - onehalf;
//          otherhalf = half/2;
//          anotherhalf = half/2;
//     }
// }    

//         for (i = 0; i < onehalf; i++) {
//             let digit = Math.floor(Math.random() * capitalsmall.length)
//             char = char + capitalsmall[digit];
//         }

//         for (i = 0; i < otherhalf; i++) {
//             let digit = Math.floor(Math.random() *random.length)
//             char = char + random[digit];
//         }

        
//         for (i = 0; i < anotherhalf ; i++) {
//             let digit = Math.floor(Math.random() *numbers.length)
//             char = char + numbers[digit];
//         }

//         arr = char.split('');
//         for(i=arr.length-1;i>0;i--){
//             let j = Math.floor(Math.random()*(i+1));
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//         }
//          arr = arr.join('');
//     // console.log(arr)
//     showthepass(arr);
//     char = "";
    

// } 

// let mainelement = document.getElementById('numberInput');
// mainelement.addEventListener("input", function(){
//     const value = this.value;
//     if (parseInt(value)>15){
//         mainelement.value = 15;
//     }
// })


// let mainelement2 = document.getElementById('numberInput');
// mainelement.addEventListener("input", function(){
//     const value = this.value;
//     if (parseInt(value)<6 && parseInt(value)!=1){
//         mainelement.value = 6;
//     }
// })

// let selectedradio = 0;


// let submit = document.getElementsByClassName("classforbutton")[0];
// let numberr = document.getElementById("numberInput");
// submit.addEventListener("click", function(){
//     let radios = document.querySelectorAll('input[type = "radio"]');


//     radios.forEach((radio)=>{
//         if(radio.checked){
//             selectedradio = radio.value;
//             // console.log(selectedradio);
//         } 
//     })
    
//     if(numberr.value && selectedradio!=0){
//       let passlength = numberr.value
//         if (selectedradio == "WeakPassword"){
//             WeakPassword(passlength)
//         }

//         if (selectedradio == "StrongPassword"){
//             StrongPassword(passlength)
//         }

//         if (selectedradio == "SuperStrongPassword"){
//             SuperStrongPassword(passlength)
//         }


//         radios.forEach((radio)=>{
//             radio.checked = false;
//         })
//         selectedradio = 0;
//         numberr.value  = null;
//     }

//     else if(!numberr.value && selectedradio!=0){
//         alert("Please Enter the password length");

//     }

//     else if(selectedradio==0 && numberr.value){
//         alert("Please Select the Password type")
//     }
//     else if( selectedradio==0 && !numberr.value){
//         alert("Please enter the password type and length")
//     }
// })

// function showthepass(arr){
//  let showit = document.getElementById("showthepassword");
//  showit.value = arr;
// }

// let wro = document.getElementsByClassName("wrong")[0];
// wro.addEventListener("click",function(){
// let arr = "";
// showthepass(arr);
// })

// let clipboard = document.getElementsByClassName("copythetext")[0];
// clipboard.addEventListener("click" , function(){
//     let passs = document.getElementById("showthepassword");
//     passs.select();
//     document.execCommand("copy");
// })

// let hours = fulldata.getHours();
// let minutes = fulldata.getMinutes();
// let seconds = fulldata.getSeconds();



// let hours;
// let minuttes;
// let amorpm;
// let divfortime = document.getElementsByClassName("time")[0];
// let ac = new Date();

// let disclaimer = document.getElementById("broo");

// let currentHours = ac.getHours();
// // console.log(typeof currentHours)
// let currentMinutes = ac.getMinutes();
// // console.log(currentMinutes)
//     setInterval(function () {
// let fulldata =  new Date(); 
// let amorpm = fulldata.toLocaleTimeString();
// divfortime.innerHTML = `${amorpm}`;
    
//     }, 1000);

// let elem = document.getElementsByClassName("buttontype")[0];
// elem.addEventListener("click", function() {
//  hours = document.getElementById("hoursofam");
//  minuttes = document.getElementById("minutes");
//  amorpm = document.getElementById("seconds");

//  let alarmhours  = hours.value;
// let alarmminutes = minuttes.value;
// let alarmamorpm = amorpm.value;
// alarmhours = parseInt(alarmhours);
// alarmminutes = parseInt(alarmminutes);
// // console.log(typeof alarmhours)
// // console.log(typeof alarmminutes)

//  if (alarmhours>currentHours && alarmminutes > currentMinutes){
//  let realhours = alarmhours - currentHours;
//  let realminutes = alarmminutes - currentMinutes;
//  let settimeoutsecond = realhours*3600;
//  let settimeoutseconds = realminutes*60;
//  let TherealShit = settimeoutsecond + settimeoutseconds;

// disclaimer.innerHTML = ` The alarm will rang after ${TherealShit/60} minutes later `;
 
//  setTimeout(function () {
//     disclaimer.innerHTML = "";
// }, 2000 );


//  setTimeout(function (){
//     var audio = new Audio('lofi-alarm-clock-243766.mp3');
//     audio.play();
//  }, TherealShit*1000);
//  }

//   else if (alarmhours>currentHours && alarmminutes < currentMinutes){
//     let a = new Date()
//     let currentMinutes = a.getMinutes();
//     let currentseconds = a.getSeconds();
//     let currentHours = a.getHours();

//  let realhours = alarmhours - currentHours;
//  let realminutes = currentMinutes - alarmminutes;

//  let hnm = realhours*60;
//  let newone = hnm - realminutes;

//  let hoursinseconds = realhours*3600;
//  let minutesinseconds = realminutes*60;

//  let timespan = hoursinseconds - minutesinseconds;
//  let mimespan = timespan - currentseconds;

// disclaimer.innerHTML = ` The alarm will rang after ${newone} minutes later `;
// setTimeout(function () {
//     disclaimer.innerHTML = "";
// }, 2000 );
//  setTimeout(function (){
//     var audio = new Audio('lofi-alarm-clock-243766.mp3');
//     console.log("audio ranged succssfully");
//     audio.play();
//  }, mimespan*1000);
//  }

//  else if (alarmhours == currentHours && alarmminutes > currentMinutes){
//     let a = new Date()
//     let currentMinutes = a.getMinutes();
//     let currentHours = a.getHours();
//     let currentseconds = a.getSeconds();

//     let realminutes = alarmminutes - currentMinutes;
//     // console.log(realminutes)
//     let min = realminutes*60;
//     let tin = min - currentseconds;


//     disclaimer.innerHTML = ` The alarm will rang after ${alarmhours - currentHours} hours ${realminutes} minutes later `;

//     setTimeout(function () {
//         disclaimer.innerHTML = "";
//     }, 2000 );


//     setTimeout(function ()  {
//     var audio = new Audio('lofi-alarm-clock-243766.mp3');
//     console.log("Audio played successfullyy.....")
//        audio.play();
//     }, tin*1000);

//  }

//  else if (alarmhours<currentHours && currentMinutes > alarmminutes){
//     let ab = new Date()
//     let currentMinutes = ab.getMinutes();
//     let currentHours = ab.getHours();
//     let currentseconds = ab.getSeconds();

// let a = 24 - currentHours;
// let b = a+alarmhours;
// let c = b*3600;
// let d = currentMinutes - alarmminutes;
// let e = d*60;
// let f = c -e;
// let g = f - currentseconds
// disclaimer.innerHTML = ` The alarm will rang after ${b} hours ${d} minutes later `;

// setTimeout(function () {
//     disclaimer.innerHTML = "";
// }, 2000 );

// setTimeout(function (){
//     var audio = new Audio('lofi-alarm-clock-243766.mp3');
//     // console.log("audio ranged succssfully");
//     audio.play();
//  }, g*1000);

//  }

//  else if (alarmhours<currentHours && currentMinutes < alarmminutes){
//     let ab = new Date()
//     let currentMinutes = ab.getMinutes();
//     let currentseconds = ab.getSeconds();
//     let currentHours = ab.getHours();
// let a = 24 - currentHours;
// let b = a+alarmhours;
// let c = b*3600;
// let d = currentMinutes*60;
// let e = c+d;
// let f = e - currentseconds

// disclaimer.innerHTML = ` The alarm will rang after ${b} hours ${alarmminutes-currentMinutes} minutes later `;

// setTimeout(function (){
//     var audio = new Audio('lofi-alarm-clock-243766.mp3');
//     // console.log("audio ranged succssfully");
//     audio.play();
//  }, f *1000);
//  }

//  else if (alarmhours == currentHours && alarmminutes < currentMinutes){
//     let a = new Date()
//     let currentMinutes = a.getMinutes();
//     let currentHours = a.getHours();
//     let currentseconds = a.getSeconds();

//     let hoursinseconds = 23*3600;
//     let minute = currentMinutes - alarmminutes;
//     let haha = 60-minute;
//     let minn = haha*60;
//     let total = hoursinseconds + minn;
//     let f  = total - currentseconds;



//     disclaimer.innerHTML = ` The alarm will rang after 23 hours ${f} minutes later `;

// setTimeout(function () {
//     disclaimer.innerHTML = "";
// }, 2000 );



//     setTimeout(function ()  {
//     var audio = new Audio('lofi-alarm-clock-243766.mp3');
//     console.log("Audio played successfullyy.....")
//        audio.play();
//     }, f*1000);

//  }


//  else if(currentHours>alarmhours && currentMinutes == alarmminutes){

//     let a = new Date()
//     let currentMinutes = a.getMinutes();
//     let currentHours = a.getHours();
//     let currentseconds = a.getSeconds();
//     let hour = currentHours - alarmhours ;
//     let maxhour  = 24 - hour;
//     let hoursinseconds  = maxhour*3600;

//     let totalseconds = hoursinseconds - currentseconds ;
//     disclaimer.innerHTML = ` The alarm will rang after ${maxhour} hours ${currentHours} minutes later `;

//     setTimeout(function () {

//         disclaimer.innerHTML = "";
//     }, 2000 );    
    
//         setTimeout(function ()  {
//         var audio = new Audio('lofi-alarm-clock-243766.mp3');
//         console.log("Audio played successfullyy.....")
//            audio.play();
//         }, totalseconds*1000);
    
//  }


//  else if(currentHours<alarmhours && currentMinutes == alarmminutes){

//     let a = new Date()
//     let currentMinutes = a.getMinutes();
//     let currentHours = a.getHours();
//     let currentseconds = a.getSeconds();
    
//     let hours = currentHours - alarmhours;
//     let hoursinseconds  = hours*3600;
//     let newhour = hoursinseconds - currentseconds;
//     disclaimer.innerHTML = ` The alarm will rang after ${hours} hours ${currentHours} minutes later `;

//     setTimeout(function () {

//         disclaimer.innerHTML = "";
//     }, 2000 );    
    
//         setTimeout(function ()  {
//         var audio = new Audio('lofi-alarm-clock-243766.mp3');
//         console.log("Audio played successfullyy.....")
//            audio.play();
//         }, newhour*1000);
    

        
//  }


//  else if (currentHours == alarmhours && currentMinutes == alarmminutes){
//     disclaimer.innerHTML = ` The alarm is ranging `;

//     setTimeout(function () {

//         disclaimer.innerHTML = "";
//     }, 2000 );    
    
//         setTimeout(function ()  {
//         var audio = new Audio('lofi-alarm-clock-243766.mp3');
//         console.log("Audio played successfullyy.....")
//            audio.play();
//         }, 100);
    
//  }
// });


// const regularexpression = /still/g
// let text = "I am still learning javscript but still";
// console.log(text.replace(regularexpression,"STILL"));
// let i ;
// let li;
// let button = document.getElementsByClassName("button")[0];
// let input = document.getElementById("text");
// let listitems = document.getElementsByClassName("listitems")[0];
// let isEditMode = false;
// let ii;
// let allTasks = [];
// let realtask;
// let lasteditedtask;
// let innerDetails;
// let newindex;
// // code to add the task listitems//
// function addTask(){
//     if(isEditMode ==  false){
//         if(input.value.trim() === ""){
//             alert("Please enter a task")
//             return;
//         }
//         else if(allTasks.includes(input.value.trim())){
//             alert("Already Exists");
//             input.value =  ""
//         }
//         else{
//             li = document.createElement("li");
//             li.innerHTML = input.value;
//             i = document.createElement("i");
//             i.classList.add("fa-regular",  "fa-pen-to-square","editicon");
//             i.setAttribute("id","Editicon")
//             ii = document.createElement("i");
//             ii.classList.add("fa-solid","fa-xmark");
//             ii.setAttribute("id","Crossicon")
//             listitems.appendChild(li);

//             li.appendChild(i);
//             li.appendChild(ii);
//             allTasks.push(input.value.trim());
//             saveTask();
//             input.value = ""; 
//             }
//     }

// }
// button.addEventListener("click" , addTask )


// // Edit button click code// 
// listitems.addEventListener("click", function (event) {
//     if (event.target.tagName === "I" && event.target.id === "Editicon") {
//         let li = event.target.parentElement; 
//         input.value = li.firstChild.textContent.trim();
//         realtask = input.value;
//         button.innerHTML = "Edit";
//         isEditMode = true;



//         button.onclick = function(){

//             if(isEditMode == true){
//                 if(input.value.trim() === ""){
//                     alert("Enter a task");
//                 }
//                 else {
                   

//                     li.firstChild.textContent= input.value.trim();
//                     lasteditedtask = input.value.trim();
//                     editTask();
//                     input.value = "";
//                     button.innerHTML = "Add";
//                     isEditMode = false;
//                 }

//             }
         
//         }   
//     }
// })


// listitems.addEventListener("click", function(element){
//     if(element.target.tagName === "I" && element.target.id === "Crossicon"){
//         let li  = element.target.parentElement;
//         innerDetails = li.textContent.trim();
//         deleteTask(innerDetails);
//         li.remove();
//     }
// })



// function saveTask(){
// let tasks = [];

//     listitems.querySelectorAll('li').forEach(function(element){
//         let text = element.textContent.trim();
//         if(!tasks.includes(text)){
//             tasks.push(text);
//         }

//     });
//     localStorage.setItem('tasks',JSON.stringify(tasks));


// }


// function editTask(){
//     let index;
//     let alltasks = JSON.parse(localStorage.getItem('tasks'));
//     if(alltasks.includes(realtask)){
//     index = alltasks.indexOf(realtask);
//     alltasks[index] = lasteditedtask;
//     localStorage.setItem('tasks',JSON.stringify(alltasks))
//     }

//     if(allTasks.includes(realtask)){
//         allTasks[index] = lasteditedtask;
//         // console.log(allTasks)
//     }
// }

// function showTask(){
//     allTasks = [];
// let totaltask  = JSON.parse(localStorage.getItem("tasks"));
// totaltask.forEach((value)=>{
//     if(value === ""){
//         return;
//     }
//     else{
//            li = document.createElement("li");
//             li.innerHTML = value;
//             i = document.createElement("i");
//             i.classList.add("fa-regular",  "fa-pen-to-square","editicon");
//             i.setAttribute("id","Editicon")
//             ii = document.createElement("i");
//             ii.classList.add("fa-solid","fa-xmark");
//             ii.setAttribute("id","Crossicon")
//             listitems.appendChild(li);

//             li.appendChild(i);
//             li.appendChild(ii);
//     }
 
// })
// }

// function deleteTask(innerDetails){
// let allthetasks = JSON.parse(localStorage.getItem("tasks"));
// if(allthetasks.includes(innerDetails)){
//     newindex = allthetasks.indexOf(innerDetails);
//     allthetasks.splice(newindex,1);
// }
// localStorage.setItem("tasks",JSON.stringify(allthetasks));

// if(allTasks.includes(innerDetails)){
//     allTasks.splice(newindex,1);
// }
// }

// window.onload = showTask();
// let convert;
// let input = document.getElementsByTagName("input")[0];
// let search = document.getElementsByTagName("button")[0];
// search.addEventListener("click",function (){
// apitrial();

// })

// async function apitrial(){
//    try{
//         let cityname = input.value;
//         let api = `https://api.weatherapi.com/v1/current.json?key=577b77d6a9f94e2c90485207251001&q=${cityname}&aqi=yes`
//         let another = await fetch(api);
//         convert  = await another.json()
//         console.log(convert);
    
//         let temperature = document.getElementsByClassName("temperatureinfo")[0];
//         let humidity = document.getElementsByClassName("humidityinfo")[0];
//         let windinfo = document.getElementsByClassName("windinfo")[0];
//         let realtemperature = document.getElementsByClassName("realtemperature")[0];
//         let realhumidity = document.getElementsByClassName("realhumidity")[0];
//         let realwind = document.getElementsByClassName("realwind")[0];
//     temperature.innerHTML=` 
//        <p id="gap">Temperature is ${convert.current.temp_c}°C</p>
//         <p id="gap">Temperature in F ${convert.current.temp_f}°F</p>
//         <p id="gap">Feels Like ${convert.current.feelslike_c}°C</p>
//     `
//     humidity.innerHTML = 
//     `        <p id="gap">Humidity is ${convert.current.humidity}%</p>
//             <p id="gap">Precipitation is ${convert.current.precip_mm}mm</p>
//             <p id="gap">Pressure is ${convert.current.pressure_mb}mb</p>`;
    
//     windinfo.innerHTML = 
//     `       <p id="gap">Wind is ${convert.current.wind_kph} kph </p>
//             <p id="gap">Heat index is ${convert.current.heatindex_c}°C </p>
//             <p id="gap">Air Quality Index is${convert.current.air_quality.pm10}</p>`
    
//     realtemperature.innerHTML = ` <img src="${convert.current.condition.icon}"  class = "image" alt=""> <h3 class = "tempdecor">  ${convert.current.temp_c}°C </h3>`
//     realhumidity.innerHTML = `<img src="5664993.png"  class = "humidityimage" alt=""> <h3 class = "humidecor">  ${convert.current.humidity}% </h3>`
//     realwind.innerHTML = `<img src="18719304.png"  class = "windimage" alt="">  <h3 class = "windecor">  ${convert.current.wind_kph}% </h3> `
    
//    } catch(error){
//         alert("Enter the valid location");
//    }
// }

// let select = document.querySelectorAll(".chooseone");
// select.forEach(element => {
//     element.addEventListener("click",function(){
//         element.style.backgroundColor = "red";
//     })
// });


let nameInput = document.getElementsByClassName("name")[0];
let amountInput = document.getElementsByClassName("amount")[0];
let dateInput = document.getElementsByClassName("date")[0];
let submitInput = document.getElementsByClassName("itssubmitbutton")[0];
let ul = document.getElementsByClassName("unorder-list")[0];
let chooseone = document.getElementsByClassName("chooseone")[0];
let choosetwo = document.getElementsByClassName("chooseone")[1];
let income = document.getElementsByClassName("income")[0];
let balance = document.getElementsByClassName("balance")[0];
let exposure = document.getElementsByClassName("exposure")[0];
let beforeincome = 0;
let beforebalance = 0;
let beforeexposure = 0;
let forone = false;
let fortwo = false;

chooseone.addEventListener("click" , function (){
         chooseone.style.backgroundColor = "#0D1282";
         choosetwo.style.backgroundColor =  "#A9A9A9";
         forone = true;
         fortwo = false;
         
})
choosetwo.addEventListener("click", function(){
    choosetwo.style.backgroundColor = "#0D1282";
    chooseone.style.backgroundColor = "#A9A9A9";
    fortwo = true;
    forone = false;
})


submitInput.addEventListener("click", function(){

if (forone == false && fortwo == false){
    alert("Choose the type of money");
    return;
}


else if(forone == true && fortwo == false){
    if(nameInput.value ==="" || dateInput.value === "" || amountInput.value ===""){
        alert("Please fill all the values");
        return;
    }

    else if (beforebalance< Number.parseInt(amountInput.value)){
        alert("Insufficient balance to deduct");
        return;
    }

    else if (  beforebalance > Number.parseInt(amountInput.value) || beforebalance == Number.parseInt(amountInput.value) ){
        exp = Number.parseInt(amountInput.value)
        beforeexposure+=exp;
        exposure.innerHTML = ` -$${beforeexposure}`
     beforebalance-=exp;
    balance.innerHTML = `$${beforebalance}`;
        ul.innerHTML += `<li> ${nameInput.value}  <h2 class="Amount" style="color: red;">-$${amountInput.value}</h2><br><h2 class="dateof">${dateInput.value}</h2> </li>`;
        

        let transaction = {
            name: nameInput.value,
            amount: Number.parseInt(amountInput.value),
            date : dateInput.value,
            type: forone? "expense" : "income"
        };

        saveTask(transaction);


    }

}

else if(forone == false && fortwo == true){
    if(nameInput.value ==="" || dateInput.value === "" || amountInput.value ===""){
        alert("Please fill all the values");
        return;
    }

    else if (amountInput.value!== ""  && dateInput.value!=="" && nameInput.value!== ""){
        ul.innerHTML += `<li> ${nameInput.value}  <h2 class="Amount" style="color: green;">+$${amountInput.value}</h2><br><h2 class="dateof">${dateInput.value}</h2> </li>`;

    
    }
inc = Number.parseInt(amountInput.value);
// let secretincome = inc;
beforeincome+=inc;
income.innerHTML = `+$${beforeincome}`
beforebalance+=inc;
balance.innerHTML = `$${beforebalance}`


        

let transaction = {
    name: nameInput.value,
    amount: Number.parseInt(amountInput.value),
    date : dateInput.value,
    type: forone? "expense" : "income"
};

saveTask(transaction);

 } 
})

function saveTask(transaction){
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(transaction);
    localStorage.setItem("tasks", JSON.stringify(tasks))

}

function loadtask(){
    // beforebalance = 0;
    // beforeexposure= 0;
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(transaction => {
        if(transaction.type == "income"){
           beforebalance+=transaction.amount;
           beforeincome+=transaction.amount;
           balance.innerHTML = `$${beforeincome}`;
           income.innerHTML =  `+$${beforebalance}`;
           ul.innerHTML += `<li> ${transaction.name}  <h2 class="Amount" style="color: green;">+$${transaction.amount}</h2><br><h2 class="dateof">${transaction.date}</h2> </li>`;

        }
        else if (transaction.type == "expense"){
           beforeexposure+=transaction.amount;
           beforebalance-=transaction.amount;
           balance.innerHTML = `$${beforebalance}`;
           exposure.innerHTML = `-$${beforeexposure}`;
           ul.innerHTML += `<li> ${transaction.name}  <h2 class="Amount" style="color: red;">-$${transaction.amount}</h2><br><h2 class="dateof">${transaction.date}</h2> </li>`;

        }
        
    });
}



window.onload = loadtask;
