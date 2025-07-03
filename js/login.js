const PIN=1234;
const PHONE =122;

document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    let pinValue=getInput('login-pin');
    let phoneValue=getInput('login-phone');
    if(phoneValue==PHONE && pinValue == PIN){
        window.location.replace('/main.html');

    }
    
})