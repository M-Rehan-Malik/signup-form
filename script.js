 const button = document.querySelector('button');
 const firstNameInput = document.querySelector('.first-name');
 const lastNameInput = document.querySelector('.last-name');
 const emailInput = document.querySelector('.email');
 const passwordInput = document.querySelector('.password');
 const inputArr = [firstNameInput, lastNameInput, emailInput, passwordInput]
 const firstNameInputerror = document.querySelector('.first-name-error');
 const lastNameInputerror = document.querySelector('.last-name-error');
 const emailInputerror = document.querySelector('.email-error-empty');
 const passwordInputerror = document.querySelector('.password-error');
 const errorArr = [firstNameInputerror, lastNameInputerror, emailInputerror, passwordInputerror];
 const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

 

 button.onclick = userClick;

 function userClick() {
    let firstName = firstNameInput.value.replaceAll(' ', '');
    let lastName = lastNameInput.value.replaceAll(' ', '');
    let email = emailInput.value.replaceAll(' ', '');
    let password = passwordInput.value.replaceAll(' ', '');
    let dataArr = [firstName, lastName, email, password]
    let counter = 0
    dataArr.forEach(data => {
        if (data==='') {
            if (inputArr[counter].classList.length===1) {
            inputArr[counter].classList.toggle('input')
            errorArr[counter].classList.toggle('p')

        } 
    }else {
        if (inputArr[counter].classList.length===2) {
            inputArr[counter].classList.toggle('input')
            errorArr[counter].classList.toggle('p')
        }
    }counter+=1})
    if (emailInput.classList.length===1) {
        if (!(emailRegex.test(email))) {
            emailInput.classList.toggle('input')
            emailInputerror.classList.toggle('p')
            emailInputerror.textContent = 'Invalid email address'
        }
    }
 }
