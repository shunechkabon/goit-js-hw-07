'use strict';

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (event) => {
    nameOutput.textContent = event.currentTarget.value;
    const trimmedValue = nameInput.value.trim();
    if (trimmedValue === '') {
        nameOutput.textContent = "Anonymous";
    }
});