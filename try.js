

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
