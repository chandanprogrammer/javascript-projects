const startButtonElement = document.getElementById("startButton");
const timeInputElement = document.getElementById("timeInput");
const displayTimeElement = document.getElementById("displayTime");
const resumePauseButtonElement = document.getElementById("resumePauseButton");

function startTimer() {
  let valueInSeconds = Number(timeInputElement.value);
  //   console.log(valueInSeconds, typeof valueInSeconds);

  if (isNaN(valueInSeconds)) {
    displayTimeElement.innerText = "Please enter a valid number";
    return;
  }

  if (valueInSeconds <= 0) {
    displayTimeElement.innerText = "Please enter second > 0";
    return;
  }

  displayTimeElement.innerText = `Time remaining: ${valueInSeconds} seconds`;

  function pauseTimer() {
    const pauseButton = document.createElement("button");
    const timer = setInterval(() => {
      valueInSeconds--;
      displayTimeElement.innerText = `Time remaining: ${valueInSeconds} seconds`;
      if (valueInSeconds <= 0) {
        clearInterval(timer);
        displayTimeElement.innerText = "Time up ⏰";
        timeInputElement.value = "";
        pauseButton.remove();
      }
    }, 1000);

    // pause and resume button
    pauseButton.innerText = "Pause";
    resumePauseButtonElement.appendChild(pauseButton);

    pauseButton.addEventListener("click", () => {
      if (pauseButton.innerText === "Pause") {
        pauseButton.innerText = "Resume";
        clearInterval(timer);
      } else {
        pauseButton.remove();
        pauseTimer();
      }
    });
  }
  pauseTimer();
}

startButtonElement.addEventListener("click", startTimer);
