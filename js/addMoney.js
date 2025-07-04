let isAdded = false;
document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    let pinValue = getInput('add-money-pin');
    let amountValue = getInput('add-money-amount');
    console.log(pinValue, amountValue);

    if (pinValue == 1234) {
        let balance = Number(getText('balance'));
        isAdded = true;
        console.log(typeof balance);
        let newBalance = balance + Number(amountValue);
        document.getElementById('balance').innerText = newBalance;


        
            let history = document.createElement('li');
            history.setAttribute('class', 'list-row');
            history.innerHTML = `
        <div class="text-4xl font-thin opacity-30 tabular-nums">${count}</div>
                            
           <div class="list-col-grow">
               <div>Added Money</div>
               <div class="text-xl uppercase font-semibold opacity-60">$ ${amountValue} </div>
            </div>
        
        `
            document.getElementById('transiction').appendChild(history);
            count=count+1
        
    }
    else {
        isAdded = false;
        alert("Payment Failed.Something Went Wrong")
    }

})

document.getElementById("add-money-open").addEventListener('click', function () {

    showElement("add-money")
    

})