// variables to keep track of the state
let currentQuestionIndex = 0;
let time = questions.length * 10;
let timerID;

// HTML elements
let questionsElement = document.getElementById("questions");
let timerElement = document.getElementById("time");
let choicesElement = document.getElementById("choices");
let submitButton = document.getElementById("submit");
let startButton = document.getElementById("start");
let initialElement = document.getElementById("initials");
let feedbackElement = document.getElementById("feedback");

let sfxCorrect = new Audio("assets/sfx/correct.wav");

function questionClick(event) {
    if (this.value !== questions[currentQuestionIndex].correctAnswer) {
        time -= 15;

        if (time < 0) {
            time = 0;
        }
        timerElement.textContent = time;
        feedbackElement.textContent = "Wrong";
    } else {
        sfxCorrect.play();
        feedbackElement.textContent = "Correct!";
    }

    // Increment the currentQuestionIndex here
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        getQuestion(); // Load the next question
    } else {
        quizEnd();
    }
}


function getQuestion() {
    let currentQuestion = questions[currentQuestionIndex];

    let titleElement = document.getElementById("question-title"); // Use "question-title" instead of "questions"
    titleElement.textContent = currentQuestion.question;

    choicesElement.innerHTML = "";

    currentQuestion.options.forEach(function (choice, index) {
        let choiceButton = document.createElement("button");

        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", choice);

        choiceButton.textContent = `${index + 1}. ${choice}`;

        choiceButton.addEventListener("click", questionClick);

        choicesElement.appendChild(choiceButton);
    });
}

function startQuiz() {
    let startScreenElement = document.getElementById("start-screen");
    startScreenElement.setAttribute("class", "hide");

    questionsElement.removeAttribute("class");

    timerID = setInterval(clockTick, 1000);

    timerElement.textContent = time;

    getQuestion();
}
function quizEnd() {
    clearInterval(timerID);
    let endScreenElement = document.getElementById("end-screen");
    endScreenElement.removeAttribute("class");

    let finalScoreElement = document.getElementById("final-score");
    finalScoreElement.textContent = time;

    questionsElement.setAttribute("class", "hide");
}

function clockTick() {
    time--;
    timerElement.textContent = time;
    if (time <= 0) {
        quizEnd();
    }
}


function saveHighScore() {
    function saveHighScore() {
        const initials = initialElement.value.trim();
        if (!initials) {
            alert("Please enter your initials.");
            return;
        }

        // Create an object to represent the score
        const score = {
            initials: initials,
            score: time,
        };
    }
}
function displayHighScores() {
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    let highScoresList = "";
    highScores.forEach((score, index) => {
        highScoresList += `${index + 1}. ${score.initials}: ${score.score}<br>`;
    });

    document.getElementById("high-scores").innerHTML = highScoresList;
}

function checkForEnter(event) {
    if (event.key === "Enter") {

    }
}

startButton.addEventListener("click", startQuiz);
submitButton.addEventListener("click", saveHighScore);
initialElement.addEventListener("keyup", checkForEnter);