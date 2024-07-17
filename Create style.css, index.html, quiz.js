 // Select the submit button by its ID
        let submitButton = document.getElementById('submit-answer');

        // Add event listener for click event
        submitButton.addEventListener('click', function() {
            checkAnswer();
        });

        function checkAnswer() {
            let correctAnswer = "4"; // Correct answer is "4"

            // Select the checked radio button by its name attribute
            let selectedOption = document.querySelector('input[name="quiz"]:checked');

            if (selectedOption) {
                let userAnswer = selectedOption.value; // Store the value of the selected radio button

                if (userAnswer === correctAnswer) {
                    // Update the feedback element text content for correct answer
                    let feedbackElement = document.getElementById('feedback');
                    feedbackElement.textContent = "Correct! Well done.";
                } else {
                    // Update the feedback element text content for incorrect answer
                    let feedbackElement = document.getElementById('feedback');
                    feedbackElement.textContent = "That's incorrect. Try again!";
                }
            } else {
                // Update the feedback element text content if no answer is selected
                let feedbackElement = document.getElementById('feedback');
                feedbackElement.textContent = "Please select an answer.";
            }
        }
