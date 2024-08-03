// script.js
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.grid-item');

let expression = '';
let result = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        switch (value) {
            case 'C':
                expression = '';
                display.value = '';
                break;
            case '&lt;':
                expression = expression.slice(0, -1);
                display.value = expression;
                break;
            case '=':
                try {
                    result = eval(expression);
                    display.value = result;
                    expression = result.toString();
                } catch (error) {
                    display.value = 'Error';
                    expression = '';
                }
                break;
            default:
                expression += value;
                display.value = expression;
        }
    });
});