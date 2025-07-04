
document.addEventListener("DOMContentLoaded", function () {
  const againButton = document.querySelector(".btn-again");
  const guessButton = document.querySelector(".btn-check");
  const message = document.querySelector(".message");
  const number = document.querySelector(".number");
  const guessInput = document.querySelector(".guess");
  const score = document.querySelector(".score");
  const highscore = document.querySelector(".highscore");

  let randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(randomNumber);
  let currentScore = 20;
  let maxHighscore = 0;

  const displayMessage = (msg) => {
    message.textContent = msg;
  };

  const checkFunc = () => {
    const guess = Number(guessInput.value);
    console.log(guess, typeof guess);
    if (!guess) {
      displayMessage("⛔ No number!");
    } else if (guess === randomNumber) {
      displayMessage("🎉 Correct Number!");
      number.textContent = randomNumber;
      document.body.style.backgroundColor = "#60b347";
      number.style.width = "30rem";
      document.querySelector(".btn-again").style.backgroundColor = "blue";

      if (currentScore > maxHighscore) {
        maxHighscore = currentScore;
        highscore.textContent = maxHighscore;
      }
    } else {
      if (currentScore > 1) {
        displayMessage(guess > randomNumber ? "📈 Too high!" : "📉 Too low!");
        currentScore--;
        score.textContent = currentScore;
      } else {
        displayMessage("💥 You lost the game!");
        score.textContent = 0;
      }
    }
  };

  const againFunc = () => {
    randomNumber = Math.floor(Math.random() * 20) + 1;
    console.log(randomNumber); 
    currentScore = 20;
    score.textContent = currentScore;
    displayMessage("Start guessing...");
    number.textContent = "?";
    guessInput.value = "";
    document.body.style.backgroundColor = "#222";
    number.style.width = "15rem";
  };

  guessButton.addEventListener("click", checkFunc);
  againButton.addEventListener("click", againFunc);

  guessInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      checkFunc();
    }
  });
});
