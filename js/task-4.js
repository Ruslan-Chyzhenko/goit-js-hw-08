const loginForm = document.querySelector('.login-form');
const emailInput = loginForm.elements['email'];
const passwordInput = loginForm.elements['password'];

loginForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (!emailValue || !passwordValue) {
        alert('All form fields must be filled in');
        return;
    }

    const formData = {
        email: emailValue,
        password: passwordValue,
    };

    console.log(formData);

    loginForm.reset();
}