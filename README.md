# quiz-with-code-wiz
Here is a small quiz created for the purposes of testing code knowledge. This will feature topics such as HTML, CSS, bootstrap and JavaScript.


# Summary
This project is a simple web-based coding quiz challenge. Users are presented with a series of questions related to coding and web development. They must answer the questions within a time limit, and their score is based on the number of correct answers and the time remaining. The project includes functionality for tracking time, displaying questions and choices, checking answers, and saving high scores.

# Functions Used
questionClick(event): This function handles user's choice selection and checks if the chosen answer is correct. It updates the score and feedback accordingly.

getQuestion(): This function displays the current question and answer choices. It also sets up event listeners for answer choices.

startQuiz(): When the user clicks "Start Quiz," this function initiates the quiz. It hides the start screen, starts the timer, and displays the first question.

quizEnd(): This function is called when the quiz ends, either due to time running out or all questions answered. It displays the user's final score and initials input field.

clockTick(): This function updates the timer every second, and if the timer runs out, it ends the quiz.

saveHighScore(): This function allows users to save their high scores, initials, and display the high scores in descending order.

checkForEnter(event): Not fully implemented but can be used to handle pressing "Enter" to submit the high score.

# What I Learned
Working with HTML and CSS: I learned how to structure a web page and apply CSS styles to create a user-friendly interface.

JavaScript Programming: I improved my JavaScript skills by implementing quiz logic, handling user interactions, and manipulating the DOM.

Local Storage: I learned how to use local storage to save and retrieve user data, like high scores, and display it on the page.

# What Went Well
Quiz Logic: The core quiz functionality works as expected, including tracking time, displaying questions, and checking answers.

User Interface: The project has an attractive and user-friendly interface, making it engaging for users.

High Score Storage: High scores are saved and displayed in descending order, providing a competitive element to the quiz.

Error Handling: Basic error handling is implemented to handle empty initials and prevent the timer from going negative.

This project has provided valuable experience in web development, JavaScript programming, and using local storage to store and display data.


# Links:

Deployed page:


Repo Link: 