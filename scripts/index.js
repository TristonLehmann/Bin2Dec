const form = document.querySelector('form');
const input = document.querySelector('input');
const output = document.querySelector('output');

const convertBinaryToDecimal = () => {
    const binary = input.value;

    let decimal = 0;
    let power = 0;

    for (let i = binary.length - 1; i >= 0; i--) {
        decimal += Number(binary[i]) * (2 ** power);
        power++;
    }

    output.textContent = decimal;
}

form.addEventListener('submit', event => {
    event.preventDefault();
    convertBinaryToDecimal();
});

input.addEventListener('invalid', () => {
    if (input.validity.valueMissing) {
        input.setCustomValidity("Please enter a binary number.");
    }
    else if (input.validity.tooLong || input.validity.tooShort) {
        input.setCustomValidity("Please enter between 1-8 digits.");
    }
    else if (input.validity.patternMismatch) {
        input.setCustomValidity("Please enter only 0's and 1's.");
    }
});
