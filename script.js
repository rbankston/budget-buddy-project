document.getElementById("updateBudgetButton").addEventListener("click", (event) =>{
    event.preventDefault();

    const weeklyBudget = document.getElementById("budgetInput").value;


//Each category has it's own array
const bills = [];
const foods = [];
const clothes = [];
const entertainments = [];



// Entertainment items
document.getElementById("entPurchaseButton").addEventListener("click", (event) =>{
    event.preventDefault();

    entertainments.push({"name":document.getElementById("entNameInput").value, "price":document.getElementById("entAmountInput").value})

    document.getElementById("entNameInput").value = '';
    document.getElementById("entAmountInput").value = '';

console.log(entertainments);
})

// Food Array

document.getElementById("foodPurchaseButton").addEventListener("click", (event) =>{
    event.preventDefault();

    foods.push({"name":document.getElementById("foodNameInput").value, "price":document.getElementById("foodAmountInput").value})

    document.getElementById("foodNameInput").value = '';
    document.getElementById("foodAmountInput").value = '';
console.log(foods);
})

// Clothing Array
document.getElementById("clothingPurchaseButton").addEventListener("click", (event) =>{
    event.preventDefault();

    clothes.push({"name":document.getElementById("clothingNameInput").value, "price":document.getElementById("clothingAmountInput").value})

    document.getElementById("clothingNameInput").value = '';
    document.getElementById("clothingAmountInput").value = '';
console.log(clothes);
})

// Bills Array
document.getElementById("billsPurchaseButton").addEventListener("click", (event) =>{
    event.preventDefault();

    bills.push({"name":document.getElementById("billsNameInput").value, "price":document.getElementById("billsAmountInput").value})

console.log(bills);
document.getElementById("billsNameInput").value = '';
document.getElementById("billsAmountInput").value = '';
})
//this will be used for the user to input new purchases

// const itemName = document.getElementById("nameInput").value;
// const itemPrice = document.getElementById("amountInput").value;
// const dateBought = document.getElementById("date").value;

function addItem(array, itemName, itemPrice, dateBought) {
    return array.push({Name: itemName, Price: itemPrice, Date: dateBought});
}

addItem(bills, "Gas", 40, "08-02-2022");

//Below allows us to add the total price of each category
let billsTotal = 0;
for(const bill of bills){
    billsTotal += bill.Price;
}

let foodsTotal = 0;
for(const food of foods){
    foodsTotal += food.Price;
}

let clothesTotal = 0;
for(const clothe of clothes){
    clothesTotal += clothe.Price;
}

let entertainmentsTotal = 0;
for(const entertainment of entertainments){
    entertainmentsTotal += entertainment.Price;
}

// below defines the total expenses for the week and how much the user still has available to spend
const totalSpent = billsTotal + foodsTotal + clothesTotal + entertainmentsTotal;

const availableBalance = weeklyBudget - totalSpent; 

if (availableBalance <= 0){
    alert("You have no available funds until the start of next week.")
}

console.log(weeklyBudget);
console.log(billsTotal);
console.log(totalSpent);
console.log(availableBalance);



});


