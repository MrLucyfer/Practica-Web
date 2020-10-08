const registerButton = document.getElementById('register');
const loginButton = document.getElementById('login')

function allFilled() {
    
    const email = document.getElementById('email');
    const form = [email, password];
    for (let elem of form) {
        if(elem.value == '') {
            return false;
        }
    }
    return true;
}

document.addEventListener('keyup', () => {
    const allEntered = allFilled();
    const sumbitButton = document.querySelector('.button-submit');
    if(allEntered) {
        sumbitButton.disabled = false;
        sumbitButton.className = 'button-submit button-ready';
    } else {
        sumbitButton.disabled = true;
        sumbitButton.className = 'button-submit unclickable';
    }
})

registerButton.addEventListener('click', () => {
    location.href = 'register.html';
})