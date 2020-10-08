const registerButton = document.getElementById('register');
const loginButton = document.getElementById('login')

function allFilled() {
    const nom = document.getElementById('nom');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const dir = document.getElementById('dir');
    const city = document.getElementById('city');
    const zip = document.getElementById('zip');

    const form = [nom, email, password, dir, city, zip];
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

loginButton.addEventListener('click', () => {
    location.href = 'login.html';
})