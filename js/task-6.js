'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');
const controls = document.querySelector('#controls');
const input = document.querySelector('input');

function createBoxes(amount) { 
  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    let size = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.append(box);
      size += 10;
    }
  }
  input.value = '';
  return;
}

function destroyBoxes() { 
  boxes.innerHTML = '';
}

createBtn.addEventListener('click', () => createBoxes(input.value));
destroyBtn.addEventListener('click', destroyBoxes);