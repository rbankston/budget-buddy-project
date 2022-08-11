document.getElementById("updateBudgetButton").addEventListener("click", (event) =>{
    event.preventDefault();

    const weeklyBudget = document.getElementById("budgetInput").value;
console.log(weeklyBudget);


//Each category has it's own array
const bills = [];
const foods = [];
const clothes = [];
const entertainments = [];

let billsTotal = 0;
let foodsTotal = 0;
let clothesTotal = 0;
let entertainmentsTotal = 0;

let totalSpent = 0;
function totalSpentCalc(){totalSpent = billsTotal + foodsTotal + clothesTotal + entertainmentsTotal}
let availableBalance = weeklyBudget - totalSpent;
function availableBalanceCalc(){availableBalance = weeklyBudget - totalSpent} 

function billsCalculator(){
    let lastIndex = bills.length-1
    billsTotal += bills[lastIndex].price;
}
console.log(availableBalance);
function foodsCalculator(){
    let lastIndex = foods.length-1
    foodsTotal += foods[lastIndex].price;
}


function clothesCalculator(){
    let lastIndex = clothes.length-1
    clothesTotal += clothes[lastIndex].price;
}


function entertainmentsCalculator(){
    let lastIndex = entertainments.length-1
    entertainmentsTotal += entertainments[lastIndex].price;
}

// below defines the total expenses for the week and how much the user still has available to spend



if (availableBalance <= 0){
    alert("You have no available funds until the start of next week.")
}

function debitFunction(array, nameInput, amountInput, listDiv) {
    if (document.getElementById(nameInput).value === "" ||  document.getElementById(amountInput).value === "") {
        alert("Please enter a value for the name and price")
        } else {

        array.push({"name":document.getElementById(nameInput).value, price:parseInt(document.getElementById(amountInput).value)})
        let div = document.getElementById(listDiv);
        let span = document.createElement("lispan"); 
        span.innerHTML = `Name: ${document.getElementById(nameInput).value} Price: $${document.getElementById(amountInput).value}`;
        div.appendChild(span);
        
       

        document.getElementById(nameInput).value = '';
        document.getElementById(amountInput).value = '';
        
    }
}


// Entertainment items
document.getElementById("entPurchaseButton").addEventListener("click", (event) =>{
    event.preventDefault();
     debitFunction(entertainments, "entNameInput", "entAmountInput", "entertainmentItems");
    
     entertainmentsCalculator();
     totalSpentCalc();
     availableBalanceCalc();
     console.log(availableBalance);
console.log(entertainments);
console.log(entertainmentsTotal);
})

// Food Array

document.getElementById("foodPurchaseButton").addEventListener("click", (event) =>{
    event.preventDefault();
    debitFunction(foods, "foodNameInput", "foodAmountInput", "foodItems");
    foodsCalculator();
    totalSpentCalc();
    availableBalanceCalc();
    console.log(availableBalance);
console.log(foods);
})

// Clothing Array
document.getElementById("clothingPurchaseButton").addEventListener("click", (event) =>{
    event.preventDefault();
    debitFunction(clothes, "clothingNameInput", "clothingAmountInput", "clothingItems");
    clothesCalculator();
    totalSpentCalc();
    availableBalanceCalc();
    console.log(availableBalance);
    console.log(clothes);
})

//Bills Array
document.getElementById("billsPurchaseButton").addEventListener("click", (event) =>{
    event.preventDefault();
    debitFunction(bills, "billsNameInput", "billsAmountInput", "billsItems");
    billsCalculator();
    totalSpentCalc();
    availableBalanceCalc();
    console.log(availableBalance);
    console.log(bills);
})
//this will be used for the user to input new purchases

// const itemName = document.getElementById("nameInput").value;
// const itemPrice = document.getElementById("amountInput").value;
// const dateBought = document.getElementById("date").value;

// function addItem(array, itemName, itemPrice, dateBought) {
//     return array.push({Name: itemName, Price: itemPrice, Date: dateBought});
// }

// addItem(bills, "Gas", 40, "08-02-2022");

//Below allows us to add the total price of each category
});