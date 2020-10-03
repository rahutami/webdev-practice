const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm');
const inputs = document.querySelectorAll('.input-set');
const form = document.querySelector('.form');

form.addEventListener('submit', formSubmitted);

function formSubmitted(e){
    e.preventDefault();
    checkUsername();
    checkEmail();
    checkPassword();
    checkConfirm();
}

function checkUsername(){
    let success;
    let errorMessage = inputs[0].lastElementChild;
    if(username.value === ""){
        errorMessage.innerText = "Value cannot be empty";
        username.parentElement.classList.add("error");
        success = false;
    } else if (username.value.length < 4 || username.value.length > 10){
        errorMessage.innerText = "Username should have 4-10 characters"
        username.parentElement.classList.add("error");
        success = false;
    } else{
        username.parentElement.classList.add("success");
        success = true;
    }
    return success;
}

function checkEmail(){
    let errorMessage = inputs[1].lastElementChild;
    let success;
    if(email.value === ""){
        errorMessage.innerText = "Value cannot be empty";
        email.parentElement.classList.add("error");
        success = false;
    } else if (email.value.indexOf('@') === -1 || email.value.indexOf('.com') === -1){
        errorMessage.innerText = "Email invalid";
        email.parentElement.classList.add("error");
        success = false;
    } else {
        email.parentElement.classList.add("success");
        success = true;
    }


    return success;
}

function checkPassword(){
    let errorMessage = inputs[2].lastElementChild;
    let success;
    if(password.value === ""){
        errorMessage.innerText = "Value cannot be empty";
        password.parentElement.classList.add("error");
        success = false;
    } else if (password.value.length < 4){
        errorMessage.innerText = "Password should have minimum 4 characters";
        password.parentElement.classList.add("error");
        success = false;
    } else {
        password.parentElement.classList.add("success");
        success = true;
    }
    return success;
}

function checkConfirm(){
    let success;
    let errorMessage = inputs[3].lastElementChild;
    if(confirmPassword.value === ""){
        errorMessage.textContent = "Value cannot be empty";
        confirmPassword.parentElement.classList.add("error");
        success = false;
    } else if (password.value !== confirmPassword.value){
        errorMessage.textContent = "Password mismatch";
        confirmPassword.parentElement.classList.add("error");
        success = false;
    } else {
        confirmPassword.parentElement.classList.add("success");
        success = true;
    }

    return success;
}
