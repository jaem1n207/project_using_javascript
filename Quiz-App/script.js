const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");

const shuffledQuestions, currentQustionIndex

startButton.addEventListener("click", startGame);

function startGame() {
  startButton.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQustionIndex = 0
  setNextQuestion();
}

function setNextQuestion() {

}

function selectAnswer() {}

const questions = [
  {
    question: "What is 2 + 2",
    answers: [
      {text: "4", correct: true},
      {text: "22", correct: false}
    ]
  }
]