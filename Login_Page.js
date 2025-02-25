const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
})

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
})

iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
})

function validateLoginForm(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const rememberMeCheckbox = document.querySelector('input[type="checkbox"]').checked;

    if (!email || !password) {
        alert("Please fill out all the fields");
    } else if(!rememberMeCheckbox){
        alert("Please check the 'Remember Me' box")
    }else {
        redirectToLoginPage();
    }
}

function validateRegisterForm(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const termsCheckbox = document.querySelector('input[type="checkbox"]').checked;

    if (!username || !email || !password) {
        alert("Please fill out all the fields");
    }
    else {
        redirectToRegisterPage();
    }
}

function redirectToLoginPage() {
    window.location.href = 'Main.html';
}

function redirectToRegisterPage() {
    window.location.href = 'Main.html';
}

document.getElementById('login-form').addEventListener('submit', validateLoginForm);
