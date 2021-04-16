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

const btns = document.querySelectorAll("button");
const result = document.getElementById("result");

// 1 = rock, 2 = paper, 3 = scissors
const vals = ["rock", "paper", "scissors"];

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // console.log(btn.id);

    let player = parseInt(btn.id);

    const comp = Math.floor(Math.random() * 3) + 1;

    const choice = document.querySelector(".comp-choice");

    choice.innerHTML = `Computer took ${vals[comp - 1]}`;

    if (player == comp) {
      result.innerHTML = "DRAW";
    } else if (player == 1 && comp == 2) {
      result.innerHTML = "YOU LOST!";
    } else if (player == 2 && comp == 3) {
      result.innerHTML = "YOU LOST!";
    } else if (player == 1 && comp == 3) {
      result.innerHTML = "YOU WON!";
    } else if (player == 3 && comp == 2) {
      result.innerHTML = "YOU WON!";
    } else {
      result.innerHTML = "YOU WON!";
    }
  });
});
