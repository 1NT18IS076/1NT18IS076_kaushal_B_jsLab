let usn = document.getElementById("usn");
let studentName = document.getElementById("name");
let branch = document.getElementById("branch");
let cgpa = document.getElementById("cgpa");
let result = document.getElementById("result");

let search = document.getElementById("search");
let searchResult = document.getElementById("searchResult");

let modifyUsn = document.getElementById("modifyUsn");
let cgpaPush = document.getElementById("cgpaPush");
let modifyResult = document.getElementById("modifyResult");

// let data = []

let data = [
  {
    usn: "10",
    name: "ramesh",
    branch: "chem",
    cgpa: [3, 4],
  },
  {
    usn: "11",
    name: "hari",
    branch: "aero",
    cgpa: [4, 4.5],
  },
];

result.innerText = JSON.stringify(data, null, 5);

const append = () => {
  let temp = cgpa.value;

  temp = temp.replace(" ", "");

  const cgpas = temp.split(",");

  const deets = {
    usn: usn.value,
    name: studentName.value,
    branch: branch.value,
    cgpa: cgpas.map((cgpa) => Number(cgpa)),
  };

  usn.value = "";
  studentName.value = "";
  branch.value = "";
  cgpa.value = "";

  data.push(deets);

  console.table(data);

  result.innerText = JSON.stringify(data, null, 5);
};

const searchStudent = () => {
  const stud = data.find((student) => student.usn == search.value);
  search.value = "";

  if (stud == undefined) {
    searchResult.innerText = "Student not found";
  } else {
    console.log(stud);
    searchResult.innerText = JSON.stringify(stud, null, 5);
  }
};

const modify = () => {
  const index = data.findIndex((student) => student.usn == modifyUsn.value);
  modifyUsn.value = "";

  if (index == -1) {
    modifyResult.innerText = "Student not found";
  } else {
    data[index].cgpa.push(Number(cgpaPush.value));

    console.log(data[index]);

    modifyResult.innerText = "DONE";

    result.innerText = JSON.stringify(data, null, 5);
    cgpaPush.value = "";
  }
};
