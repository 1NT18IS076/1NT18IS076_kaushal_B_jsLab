// document.getElementById("area1").addEventListener("click", (e) => {
//   console.log(e.target.id);
// });

const CHANGE_COLOUR = "grey";

const a1 = document.getElementById("area1");
const a2 = document.getElementById("area2");
const a3 = document.getElementById("area3");
const a4 = document.getElementById("area4");

const result = document.getElementById("result");

let flag = "";

a1.addEventListener("mouseenter", (e) => {
  //   a1.style.backgroundColor = CHANGE_COLOUR;

  console.log("area1");
});

a2.addEventListener("mouseenter", (e) => {
  //   a1.style.backgroundColor = CHANGE_COLOUR;
  console.log("area2");
});

a3.addEventListener("mouseenter", (e) => {
  //   a1.style.backgroundColor = CHANGE_COLOUR;
  console.log("area3");
});

a4.addEventListener("mouseenter", (e) => {
  //   a1.style.backgroundColor = CHANGE_COLOUR;
  console.log("area4");
});

a1.addEventListener("click", (e) => {
  if (e.target.id == "area1") {
    result.innerHTML = "enter into area 2";
    flag = "area1";
  } else if (e.target.id == "area2") {
    result.innerHTML = "enter into area 3";
    if (flag != "area1") {
      result.innerHTML = "You failed";
      window.location.reload();
    }
    flag = "area2";
  } else if (e.target.id == "area3") {
    result.innerHTML = "enter into area 4";
    if (flag != "area2") {
      result.innerHTML = "You failed";
      window.location.reload();
    }
    flag = "area3";
  } else if (e.target.id == "area4") {
    result.innerHTML = "You have completed it.";
    if (flag != "area3") {
      result.innerHTML = "You failed";
      window.location.reload();
    }
    flag = "Done";
  }
});
