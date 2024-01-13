const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

if (nameOutput) {
    nameInput.addEventListener('input', handleInputChange);
}

function handleInputChange() {
    const inputValue = nameInput.value.trim();

    nameOutput.textContent = inputValue || 'Anonymous';
}