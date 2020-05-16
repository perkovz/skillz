const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernameCondition = /^[a-zA-Z]{6,}$/;
const passwordCondition = /^[a-zA-Z0-9]{8,}$/;

feedback.style.display = 'none';

form.addEventListener('submit', e => {
    e.preventDefault();

    let username = form.username.value;
    let password = form.password.value;
    if (usernameCondition.test(username)) {
        feedback.style.display = 'none';
    }
    else {
        feedback.style.display = 'block';
        feedback.textContent = 'Username must be made of letters and at least 6 characters long.';
    }

    if (passwordCondition.test(password)) {
        console.log('good password');
    }
    else {
        console.log('bad password');
    }
});

form.username.addEventListener('keyup', e => {
    if (usernameCondition.test(e.target.value)) {
        form.username.setAttribute('class', 'success');
    }
    else {
        form.username.setAttribute('class', 'error');
    }
});

form.password.addEventListener('keyup', e => {
    if (passwordCondition.test(e.target.value)) {
        form.password.setAttribute('class', 'success');
    }
    else {
        form.password.setAttribute('class', 'error');
    }
});