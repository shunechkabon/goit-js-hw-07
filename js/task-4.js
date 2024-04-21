'use strict';

const loginForm = document.querySelector('.login-form');

const handleSubmit = (event) => { 
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
        alert('All form fields must be filled in');
        return;
    }

    const account = {
        Email: email.trim(),
        Password: password.trim(),
    };
    console.log(account);
    form.reset();
}; 

loginForm.addEventListener('submit', handleSubmit);