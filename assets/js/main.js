const form = document.getElementById('form');
const email = document.getElementById('email');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const emailValue = email.value.trim();

    if(emailValue === '') {
        setErrorFor(email, 'Please provide a valid email address');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
            setSuccessFor(email)
        }
    }

function setErrorFor(input, message) {
    const formEr = input.parentElement;
    const small = formEr.querySelector('small');


    small.innerText =message;

    formEr.className = 'form error'
}

function setSuccessFor(input) {
    const formEr = input.parentElement
    formEr.className = 'form success';
}


function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}