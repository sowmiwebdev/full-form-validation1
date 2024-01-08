const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const gender = document.getElementById("gender");
const phone = document.getElementById("phone");
const dateOfBirth = document.getElementById("dateOfBirth");
const qualification = document.getElementById("qualification");
const address = document.getElementById("address");
const state = document.getElementById("state");
const motherTongue = document.getElementById("motherTongue");
const fathername = document.getElementById("fathername");
const mothername = document.getElementById("mothername");
const annualIncome = document.getElementById("annualIncome");
const declarebox = document.getElementById("declarebox");

form.addEventListener('submit' , e => {
    e.preventDefault();
    checkInput();
});

function checkInput(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const genderValue = gender.value.trim();
    const phoneValue = phone.value.trim();
    const dateOfBirthValue = dateOfBirth.value.trim();
    const qualificationValue = qualification.value.trim();
    const addressValue = address.value.trim();
    const stateValue = state.value.trim();
    const motherTongueValue = motherTongue.value.trim();
    const fathernameValue = fathername.value.trim();
    const mothernameValue = mothername.value.trim();
    const annualIncomeValue = annualIncome.value.trim();
    const declareboxValue = declarebox.value.trim();

    if(usernameValue === ''){
        setError(username, 'Username Cannot Be Blank');
    }
    else{
        setSuccess(username);
    }

    if(emailValue === ''){
        setError(email, 'Email Cannot Be Blank');
    }
    else if(!isEmail(emailValue))
    {
        setError(email, 'Not a valid Email');
    }
    else{
        setSuccess(email);
    }

    if(genderValue === ''){
        setError(gender, 'Gender Cannot Be Blank');
    }
    else{
        setSuccess(gender);
    }

    if(phoneValue === ''){
        setError(phone, 'Phone Number Cannot Be Blank');
    }
    else{
        setSuccess(phone);
    }

    if(dateOfBirthValue === ''){
        setError(dateOfBirth, 'Date of Birth Cannot Be Blank');
    }
    else{
        setSuccess(dateOfBirth);
    }

    if(qualificationValue === ''){
        setError(qualification, 'Qualification Cannot Be Blank');
    }
    else{
        setSuccess(qualification);
    }

    if(addressValue === ''){
        setError(address, 'Address Cannot Be Blank');
    }
    else{
        setSuccess(address);
    }

    if(stateValue === ''){
        setError(state, 'State Cannot Be Blank');
    }
    else{
        setSuccess(state);
    }

    if(motherTongueValue === ''){
        setError(motherTongue, 'MotherTongue Cannot Be Blank');
    }
    else{
        setSuccess(motherTongue);
    }

    if(fathernameValue === ''){
        setError(fathername, 'Father Name Cannot Be Blank');
    }
    else{
        setSuccess(fathername);
    }

    if(mothernameValue === ''){
        setError(mothername, 'Mother Name Cannot Be Blank');
    }
    else{
        setSuccess(mothername);
    }

    if(annualIncomeValue === ''){
        setError(annualIncome, 'Annual-Income Cannot Be Blank');
    }
    else{
        setSuccess(annualIncome);
    }

    if(declareboxValue.checked){
        setError(declarebox, 'Declarebox Cannot Be Blank');
    }
    else{
        setSuccess(declarebox);
    }
}

function setError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-Control error';
    small.innerText = message;
}

function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-Control success';
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email); 
}