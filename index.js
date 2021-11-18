const shoopingList = ["Milk","Cocoa","Salad","Carrots","Tomatoes","Ready meals"]
const priceOfItems =[1.20, 2.00, 2.00, 2.00, 2.50, 5.00]

let oneProduct
do{
    oneProduct = prompt("Add one item in the list: ")
    if(oneProduct === null){
        alert("Ok, Goodbye!")
    }
    else if(oneProduct === ""){
        alert("You can't add nothing in the list!")
    }
    else if(Number(oneProduct)){
        alert("Please type a string, not a number!")
    }
    else if(oneProduct != null && oneProduct != ""){
        shoopingList.push(oneProduct)

        let priceOfOneItem = 0
        do{
            priceOfOneItem = Number(prompt(`Whats the price of ${oneProduct} ?`))
            if(priceOfOneItem === 0){
                alert("0 is not a price!")
            }
            else if(Number.isNaN(priceOfOneItem)){
                alert("The price need to be a number!")
            }
            else if(!Number.isNaN(priceOfOneItem) || priceOfOneItem !== 0){
                priceOfItems.push(priceOfOneItem)
            }
        }while(Number.isNaN(priceOfOneItem) || priceOfOneItem == 0)
    }
}while(oneProduct != null)


for(let i = 0; i < shoopingList.length; i++){
    console.log(`${shoopingList[i]} costs: $${priceOfItems[i].toFixed(2)}`)
}

let totalPrice = 0;
for(let i = 0; i < priceOfItems.length; i++){
    let onePrice = priceOfItems[i]
    totalPrice += onePrice
}
console.log(`The total of your shopping list is $${totalPrice.toFixed(2)}`)