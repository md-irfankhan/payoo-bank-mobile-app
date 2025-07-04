document.getElementById('cash-out-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    let pinValue = getInput('cash-out-money-pin');
    let amountValue = getInput('cash-out-money-amount');
    console.log(pinValue, amountValue);
    if (pinValue == 1234) {
        let balance = Number(getText('balance'));

        // console.log(typeof balance);
        // let newBalance = balance - Number(amountValue);
        // document.getElementById('balance').innerText = newBalance;
        let newBalance = balance - Number(amountValue);
        if (balance < Number(amountValue) || Number(amountValue) < 0) {
            alert("You have insufficient balance")
        }
        else {

            document.getElementById('balance').innerText = newBalance;
            let history = document.createElement('li');
            history.setAttribute('class', 'list-row');
            history.innerHTML = `
        <div class="text-4xl font-thin opacity-30 tabular-nums">${count}</div>
                            
           <div class="list-col-grow">
               <div>Cash Out</div>
               <div class="text-xl uppercase font-semibold opacity-60">$ ${amountValue} </div>
            </div>
        
        `
            document.getElementById('transiction').appendChild(history);
            count = count + 1
        }
    }

})

document.getElementById("cash-out-money-open").addEventListener('click', function () {

    showElement("cash-out-money")



})