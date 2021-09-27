var btnSubmit = document.querySelector(".btn-submit")
var initialPrice = document.querySelector("#initial-price")
var currentPrice = document.querySelector("#current-price")

var quantity = document.querySelector("#quantity")

var displayOutput = document.querySelector(".output-display")

function validateInput(){

    if(Number(initialPrice.value !== '') && Number(currentPrice.value !== '') && Number(quantity.value !== '')){
        if(Number(initialPrice.value<=0) || Number(currentPrice.value<=0) || Number(quantity.value<=0)){
            displayOutput.style.color = "white"
            displayOutput.style.display = "block"
            displayOutput.innerText = "Please enter values greater than zero"
        }else{
            calculateProfitLoss()
        }

    }else{
        displayOutput.style.display = "block"
        displayOutput.style.color = "white"
        displayOutput.innerText = "Please fill out all Fields"
    }
       
}

function calculateProfitLoss(){

    var costPrice = Number(initialPrice.value)
    var sellingPrice = Number(currentPrice.value)
    var qty = Number(quantity.value)

    if(sellingPrice > costPrice){
        var profit = sellingPrice - costPrice
        var profitPercentage = (profit/costPrice) * 100
        var totalProfit = (profit * qty).toFixed(2)

        displayOutput.style.color = "green"
        displayOutput.style.display = "block"
        displayOutput.innerText = `🤩Your profit is ${totalProfit} and profit percentage is ${profitPercentage.toFixed(2)}%🤩`

        

    }else if(costPrice > sellingPrice){
        var loss = costPrice - sellingPrice
        var lossPercentage = (loss/costPrice) * 100
        var totalLoss = (loss * qty).toFixed(2)
        displayOutput.style.color = "red"
        displayOutput.style.display = "block"
        displayOutput.innerText = `😪Your loss is ${totalLoss} and loss percentage is ${lossPercentage.toFixed(2)}%😪`

    }else{
        displayOutput.style.color = "white"
        displayOutput.style.display = "block"
        displayOutput.innerText = "😑No Pain No Gain. No Gain No Pain😑"
    }
   
}

function btnSubmitEventHandler(){
    validateInput()
}


btnSubmit.addEventListener("click",btnSubmitEventHandler)