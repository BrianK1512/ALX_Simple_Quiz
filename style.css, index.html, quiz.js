// Select the checked radio button with name attribute "quiz"
const checkedRadioButton = document.querySelector('input[name="quiz"]:checked');

// Variable to store the user's answer
let userAnswer;

// Check if a radio button is checked
if (checkedRadioButton) {
    // Access the value property of the checked radio button
    userAnswer = checkedRadioButton.value;
    console.log("User's answer:", userAnswer);
} else {
    console.log("No radio button is checked.");
}
