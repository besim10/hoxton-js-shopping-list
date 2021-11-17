const shoopingList = ["Milk","Cocoa","Salad","Carrots","Tomatoes","Ready meals"]
const priceOfItems =[1.20, 2.00, 2.00, 2.00, 2.50, 5.00]


const userListInput = prompt("Add something in the list: ")
shoopingList.push(userListInput)
const priceOfItem = Number(prompt(`Add the price of ${userListInput}`))
priceOfItems.push(priceOfItem)

for(let i = 0; i < shoopingList.length; i++){
    console.log(`${shoopingList[i]} costs: $${priceOfItems[i].toFixed(2)}`)
}

let totalPrice = 0;
for(let i = 0; i < priceOfItems.length; i++){
    let onePrice = priceOfItems[i]
    totalPrice += onePrice
}
console.log(`The total of your shopping list is ${totalPrice.toFixed(2)}`)