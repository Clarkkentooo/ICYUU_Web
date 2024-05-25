const numberOfQuestionsToAnswer = 20;
let questions = [];

for (let i = 0; i < numberOfQuestionsToAnswer; i++) {
  const randomIndex = Math.floor(Math.random() * allQuestions.length);
  questions.push(allQuestions[randomIndex]);
  allQuestions.splice(randomIndex, 1); // Remove selected question from allQuestions array to avoid repetition
}

let currentQuestion = 0;
let score = 0;
let originalBackgroundColor;

function displayQuestion() {
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const containerElement = document.querySelector('.back-container');

  questionElement.textContent = questions[currentQuestion].question;
  choicesElement.innerHTML = "";

  questions[currentQuestion].choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener("click", () => {
      if (index === questions[currentQuestion].correctAnswer) {
        score++;
        containerElement.style.backgroundColor = "#14CD3C";
      } else {
          containerElement.style.backgroundColor = "#F12525";
      }
      // Disable all buttons after user's answer
      choicesElement.querySelectorAll("button").forEach((button) => {
        button.disabled = true;
      });
    });
    choicesElement.appendChild(button);
  });
}

function nextQuestion() {
  const containerElement = document.querySelector('.back-container');
  containerElement.style.backgroundColor = originalBackgroundColor;
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    displayScore();
  }
}

function displayScore() {
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = `Your score: ${score} / ${questions.length}`;
}

// Shuffle the questions array to randomize the order of questions
questions.sort(() => Math.random() - 0.5);
document.addEventListener('DOMContentLoaded', () => {
  const containerElement = document.querySelector('.back-container');
  originalBackgroundColor = getComputedStyle(containerElement).backgroundColor;
});
displayQuestion();
document
  .getElementById("nextButton")
  .addEventListener("click", nextQuestion);
