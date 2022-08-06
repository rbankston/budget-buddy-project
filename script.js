document.getElementById("submit").addEventListener("click", (event) =>{
    event.preventDefault();

    const weeklyBudget = document.getElementById("budget").value;

//Each category has it's own array
const bills = [];
const foods = [];
const clothes = [];
const entertainments = [];
//this will be used for the user to input new purchases

const itemName = document.getElementById("name-of-purchase").value;
const itemPrice = document.getElementById("cost").value;
const dateBought = document.getElementById("date").value;

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
