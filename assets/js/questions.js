function generateQuestions() {
    const questions = [
        {
            question: "What is JavaScript?",
            options: [
                "A type of coffee",
                "A programming language",
                "A web browser",
                "A movie genre",
            ],
            correctAnswer: "A programming language",
        },
        {
            question: "What does the CSS property 'margin' control?",
            options: [
                "Font size",
                "Text color",
                "Element spacing",
                "Background image",
            ],
            correctAnswer: "Element spacing",
        },
        {
            question: "What is responsive web design?",
            options: [
                "A programming language for web development",
                "A design approach for print media",
                "An approach to making web pages adapt to different devices",
                "A method for creating 3D graphics on the web",
            ],
            correctAnswer: "An approach to making web pages adapt to different devices",
        },
        {
            question: "What is the purpose of the HTML '<meta>' tag?",
            options: [
                "To play audio on the web page",
                "To provide metadata about the web page",
                "To create interactive forms",
                "To add external CSS styles",
            ],
            correctAnswer: "To provide metadata about the web page",
        },
        {
            question: "What is the Document Object Model (DOM) in web development?",
            options: [
                "A framework for server-side scripting",
                "A data storage format for web content",
                "A programming interface to interact with web documents",
                "A markup language for structuring web pages",
            ],
            correctAnswer: "A programming interface to interact with web documents",
        },
    ];

    return questions;
}

// Example usage:
const quizQuestions = generateQuestions();
console.log(quizQuestions);
