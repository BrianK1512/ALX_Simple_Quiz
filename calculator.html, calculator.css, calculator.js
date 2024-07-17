// Function to add two numbers
function add(number1, number2) {
    return number1 + number2;
}

// Function to subtract two numbers
function subtract(number1, number2) {
    return number1 - number2;
}

// Function to multiply two numbers
function multiply(number1, number2) {
    return number1 * number2;
}

// Function to divide two numbers
function divide(number1, number2) {
    if (number2 === 0) {
        throw new Error("Cannot divide by zero!");
    }
    return number1 / number2;
}

// Function to get input values and perform operation
function performOperation(operation) {
    let number1 = parseFloat(document.getElementById("number1").value) || 0;
    let number2 = parseFloat(document.getElementById("number2").value) || 0;

    let result;
    switch (operation) {
        case 'add':
            result = add(number1, number2);
            break;
        case 'subtract':
            result = subtract(number1, number2);
            break;
        case 'multiply':
            result = multiply(number1, number2);
            break;
        case 'divide':
            try {
                result = divide(number1, number2);
            } catch (error) {
                result = error.message;
            }
            break;
        default:
            result = "Operation not supported";
    }

    document.getElementById("calculation-result").textContent = `Result: ${result}`;
}

// Event listeners for operation buttons
document.getElementById("add").addEventListener("click", function() {
    performOperation('add');
});

document.getElementById("subtract").addEventListener("click", function() {
    performOperation('subtract');
});

document.getElementById("multiply").addEventListener("click", function() {
    performOperation('multiply');
});

document.getElementById("divide").addEventListener("click", function() {
    performOperation('divide');
});
