var income= document.getElementById('income').value
var totalIncome= 0;
var totalExpense = 0;


function addIncome(){
    var income= document.getElementById('income').value
    var target = document.getElementById('showIncome')
    showIncome.innerHTML= ""
    totalIncome = Number(totalIncome) + Number(income)
    var div = document.createElement('div')
    var p = document.createElement('p')
    p.textContent= "Rs."+ totalIncome
    
    
    div.append(p)
    target.append(div)
    getBalance()
    var income = document.getElementById('income')
    income.value = ""
    
}

function getBalance(){
    var bal = document.getElementById('bal')
    bal.innerHTML= ""
    var balance = 0;
    balance = totalIncome - totalExpense
    var h3= document.createElement('h3')
    h3.textContent= "Rs." + balance
    var p = document.createElement('p')
    p.textContent= ""
    if(balance<5000){
        h3.style.color= "red"
        p.textContent = "Balance is low!"
        p.style.color = "red"
        p.style.fontSize = "20px"
    }
    else{
        h3.style.color= "green"
    }
    bal.append(h3, p)
}

btn= document.getElementById('submit')
btn.addEventListener('click', addIncome)


//  for expense
function addExpense(){
    var expense= document.getElementById('expense').value
    var target = document.getElementById('showExpense')
    target.innerHTML= ""
    totalExpense = Number(totalExpense) + Number(expense)
    var div = document.createElement('div')
    var p = document.createElement('p')
    p.textContent= "Rs." + totalExpense


    div.append(p)
    target.append(div)
    getBalance()

    var expense = document.getElementById('expense')
    expense.value = ""

}

btn= document.getElementById('add')
btn.addEventListener('click', addExpense)