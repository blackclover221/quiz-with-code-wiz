function displayHighScores() {
    // Retrieve high scores from local storage
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    let highScoresList = "";
    highScores.forEach((score, index) => {
        highScoresList += `${index + 1}. ${score.initials}: ${score.score}<br>`;
    });

    document.getElementById("high-scores").innerHTML = highScoresList;
}
