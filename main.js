let secret = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

const input = document.getElementById('input');
const message = document.getElementById('message');

function checkNumber() {
    let number = Number(input.value);

    if (input.value === '') {
        message.textContent = 'Введи число';
    } else {
        attempts++;

        if (number === secret) {
            message.textContent = 'Угадал!';
            message.style.color = 'green';
        } else if (number < secret) {
            message.textContent = 'Больше';
            message.style.color = 'red';
        } else {
            message.textContent = 'Меньше';
            message.style.color = 'red';
        }
    }

    document.getElementById('attempts').textContent = 'Попытки: ' + attempts;
}

document.getElementById('check').onclick = checkNumber;

document.getElementById('newGame').onclick = function() {
    secret = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    input.value = '';
    message.textContent = '';
    document.getElementById('attempts').textContent = 'Попытки: 0';
};