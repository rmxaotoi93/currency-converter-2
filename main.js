const currencyRatio = 23400;
let from = document.getElementById("from")
let to = document.getElementById("to")
let amount = document.getElementById("amountInput")
let result = document.getElementById("result");
let convertedAmout = 0;
let format = '';
let button = document.getElementById("convertButton")

function vndToUsd(){
    
    return amount.value / currencyRatio

}
function usdToVnd(){
    
    return amount.value * currencyRatio
} 

function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
      currency: type,
      style: "currency"
    });
    return formatter.format(value);
  }
function convert(){
   
    if(from.value === 'VND'  && to.value === 'USD'){
        convertedAmout = vndToUsd()
        format = formatCurrency(to.value,convertedAmout)
        
    }
    else if(from.value === 'USD' && to.value === 'VND'){
        convertedAmout = usdToVnd()
        format = formatCurrency(to.value,convertedAmout)
        
    }
    else{
        alert("You type wrong currency")
        return; 
    } 
    result.innerHTML = `result is ${format}`
}


