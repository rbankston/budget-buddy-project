document.getElementById("updateBudgetButton").addEventListener("click", (event) =>{
    event.preventDefault();

    const weeklyBudget = document.getElementById("budgetInput").value;


//Each category has it's own array
const bills = [];
const foods = [];
const clothes = [];
const entertainments = [];

function debitFunction(array, nameInput, amountInput) {
    if (document.getElementById(nameInput).value === "" ||  document.getElementById(amountInput).value === "") {
        alert("Please enter a value for the name and price")
        } else {

        array.push({"name":document.getElementById(nameInput).value, "price":document.getElementById(amountInput).value})

        document.getElementById(nameInput).value = '';
        document.getElementById(amountInput).value = '';
    }
}


// Entertainment items
document.getElementById("entPurchaseButton").addEventListener("click", (event) =>{
    event.preventDefault();
     debitFunction(entertainments, "entNameInput", "entAmountInput");
console.log(entertainments);
})

// Food Array

document.getElementById("foodPurchaseButton").addEventListener("click", (event) =>{
    event.preventDefault();
    debitFunction(foods, "foodNameInput", "foodAmountInput");
console.log(foods);
})

// Clothing Array
document.getElementById("clothingPurchaseButton").addEventListener("click", (event) =>{
    event.preventDefault();
    debitFunction(clothes, "clothingNameInput", "clothingAmountInput");
console.log(clothes);
})

// Bills Array
document.getElementById("billsPurchaseButton").addEventListener("click", (event) =>{
    event.preventDefault();
    debitFunction(bills, "billsNameInput", "billsAmountInput");
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


