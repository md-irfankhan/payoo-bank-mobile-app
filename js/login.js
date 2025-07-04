const PIN = 1234;
const PHONE = 122;

document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    let pinValue = getInput('login-pin');
    let phoneValue = getInput('login-phone');
    if (phoneValue == PHONE && pinValue == PIN) {
        window.location.replace('/main.html');

    }
    else {
        let div = document.createElement('div');
        div.innerHTML = `
        <div role="alert" class="alert alert-error">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>Error! Login Failed.</span>
</div>
        `
       let phoneD= document.getElementById('phone-d');
       phoneD.insertBefore(div,phoneD.firstChild);
    }

})