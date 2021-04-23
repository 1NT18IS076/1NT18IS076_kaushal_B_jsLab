// const a1 = document.getElementById("area1");

// const divs = document.querySelectorAll("div");

// divs.forEach((div) => {
//   div.addEventListener("dblclick", (e) => {
//     // If invoked when the cancelable attribute value is true,
//     // and while executing a listener for the event with passive set to false,
//     // signals to the operation that caused event to be dispatched that it needs to be canceled.
//     e.preventDefault();

//     // to stop bubbling from happening
//     e.stopPropagation();

//     console.log(div.className);

//     // const person = document.createElement("img");

//     // person.width = "30px";
//     // person.height = "30px";
//     // person.src = "URL for picture";
//     const btn = document.createElement("button");
//     btn.innerText = "click me";
//     div.append(btn);

//     btn.addEventListener("click", (e) => {
//       div.style.backgroundColor = "black";
//     });
//   });
// });

const btns = document.querySelectorAll(".choice");
const result = document.getElementById("result");
const playerPic = document.getElementById("player");
const compPic = document.getElementById("computer");
const totalScoreboard = document.getElementById("totalScoreboard");

// playerPic.src = `https://k4u5h4l.github.io/RockPaperScissors/images/rock.png`;
// compPic.src = `https://k4u5h4l.github.io/RockPaperScissors/images/rock.png`;

const playerScore = document.getElementById("playerScore");
const compScore = document.getElementById("compScore");

// 1 = rock, 2 = paper, 3 = scissors
const vals = ["rock", "paper", "scissors"];

const scoreLog = JSON.parse(localStorage.getItem("log") || "[]");

totalScoreboard.innerText = JSON.stringify(scoreLog);

if (localStorage.getItem("player")) {
  playerScore.innerText = localStorage.getItem("player");
} else {
  playerScore.innerText = 0;
}

if (localStorage.getItem("comp")) {
  compScore.innerText = localStorage.getItem("comp");
} else {
  compScore.innerText = 0;
}

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // console.log(btn.id);

    doAnimations();

    setTimeout(() => {
      let player = parseInt(btn.id);

      let winner = "";

      const comp = Math.floor(Math.random() * 3) + 1;

      const choice = document.querySelector(".comp-choice");

      choice.innerHTML = `Computer took ${vals[comp - 1]}`;

      playerPic.src = `https://k4u5h4l.github.io/RockPaperScissors/images/${
        vals[player - 1]
      }.png`;
      compPic.src = `https://k4u5h4l.github.io/RockPaperScissors/images/${
        vals[comp - 1]
      }.png`;

      if (player == comp) {
        result.innerHTML = "DRAW";
      } else if (player == 1 && comp == 2) {
        result.innerHTML = "YOU LOST!";
        winner = "comp";
      } else if (player == 2 && comp == 3) {
        result.innerHTML = "YOU LOST!";
        winner = "comp";
      } else if (player == 1 && comp == 3) {
        result.innerHTML = "YOU WON!";
        winner = "player";
      } else if (player == 3 && comp == 2) {
        result.innerHTML = "YOU WON!";
        winner = "player";
      } else {
        result.innerHTML = "YOU WON!";
        winner = "player";
      }

      let flag = true;

      if (winner == "player") {
        localStorage.setItem(
          "player",
          parseInt(localStorage.getItem("player")) + 1 || 1
        );

        scoreLog.forEach((score) => {
          if (score.name == document.getElementById("playerName").innerText) {
            flag = false;
            score.log.push("Player Wins");
          }
        });

        if (flag) {
          let log = {
            name: document.getElementById("playerName").innerText,
            log: ["Player Wins"],
          };
          scoreLog.push(log);
        }
        localStorage.setItem("log", JSON.stringify(scoreLog));
      } else if (winner == "comp") {
        localStorage.setItem(
          "comp",
          parseInt(localStorage.getItem("comp")) + 1 || 1
        );

        scoreLog.forEach((score) => {
          if (score.name == document.getElementById("playerName").innerText) {
            flag = false;
            score.log.push("Computer Wins");
          }
        });

        if (flag) {
          let log = {
            name: document.getElementById("playerName").innerText,
            log: ["Computer Wins"],
          };
          scoreLog.push(log);
        }
        localStorage.setItem("log", JSON.stringify(scoreLog));
      }

      totalScoreboard.innerText = JSON.stringify(scoreLog);

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }, 2000);
  });
});

function doAnimations() {
  playerPic.style.animation = "shakePlayer 2s ease";
  compPic.style.animation = "shakeComputer 2s ease";
}
