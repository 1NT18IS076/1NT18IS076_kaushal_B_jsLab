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
        usn: "1nt18is001",
        name: "ramesh",
        branch: "chem",
        cgpa: [3, 4],
    },
    {
        usn: "1nt18is876",
        name: "hari",
        branch: "aero",
        cgpa: [4, 4.5],
    },
];

result.innerText = JSON.stringify(data, null, 2);

const usnRegex = /(1NT)(\d{2})((is)|(me)|(cs)|(ae))(\d{3})/gim;
const nameRegex = /^((([a-z]|[A-Z])|\s)+)$/gim;
const branchRegex = /^((ise{1})|(mech)|(cse{1})|(aero)|(ece{1})|(ele{1}))$/gim;
const cgpaRegex = /^(\d+)(\.(\d+))?$/gim;

const matchCgpa = (cgpas) => {
    cgpas.forEach((cgpa) => {
        if (cgpaRegex.test(cgpa) == false) {
            return false;
        }
    });
    return true;
};

const clearForm = () => {
    usn.value = "";
    studentName.value = "";
    branch.value = "";
    cgpa.value = "";
};

const show = () => {
    showData()
        .then((res) => {
            console.log(res);
            result.innerText = JSON.stringify(data, null, 2);
        })
        .catch((err) => {
            console.error(err);

            alert(arr);
        });
};

function showData() {
    return new Promise((resolve, reject) => {
        console.log("Promise entered");
        setTimeout(() => {
            let flag = true;

            if (flag) {
                console.log("resolved");
                resolve("Data is read");
            } else {
                console.log("rejected");
                reject(new Error("Unable to read database"));
            }
        }, 1000);
    });
}

const append = async () => {
    let temp = cgpa.value;

    temp = temp.replace(" ", "");

    const cgpas = temp.split(",");

    // if (usnRegex.test(usn.value)) {
    //     if (branchRegex.test(branch.value)) {
    //         if (nameRegex.test(studentName.value)) {
    //             if (matchCgpa(cgpas)) {
    //                 flag = true;
    //             } else {
    //                 alert("You have made a mistake while entering CGPA!");
    //                 // clearForm();
    //                 return;
    //             }
    //         } else {
    //             alert("You have made a mistake while entering Name!");
    //             // clearForm();
    //             return;
    //         }
    //     } else {
    //         alert("You have made a mistake while entering Branch");
    //         // clearForm();
    //         return;
    //     }
    // } else {
    //     alert("You have made a mistake while entering USN!");
    //     // clearForm();
    //     return;
    // }

    const deets = {
        usn: usn.value,
        name: studentName.value,
        branch: branch.value,
        cgpa: cgpas.map((cgpa) => Number(cgpa)),
    };

    // clearForm();

    // data.push(deets);

    DBCreate(deets)
        .then((res) => {
            data.push(res);

            console.table(data);

            alert("data has been entered!");

            // result.innerText = JSON.stringify(data, null, 2);

            clearForm();
        })
        .catch((err) => {
            console.error(err);
            alert(err);
        });
};

function DBCreate(deets) {
    return new Promise((resolve, reject) => {
        console.log("Promise entered");
        setTimeout(() => {
            let flag = false;
            let err = "";

            let temp = cgpa.value;

            temp = temp.replace(" ", "");

            const cgpas = temp.split(",");

            if (usnRegex.test(usn.value)) {
                if (branchRegex.test(branch.value)) {
                    if (nameRegex.test(studentName.value)) {
                        if (matchCgpa(cgpas)) {
                            flag = true;
                        } else {
                            err =
                                "You have made a mistake while entering CGPA!";
                        }
                    } else {
                        err = "You have made a mistake while entering Name!";
                    }
                } else {
                    err = "You have made a mistake while entering Branch";
                }
            } else {
                err = "You have made a mistake while entering USN!";
            }

            if (flag) {
                resolve(deets);
                console.log("resolved");
            } else {
                console.log("rejected");
                reject(new Error(err));
            }
        }, 2000);
    });
}

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

        result.innerText = JSON.stringify(data, null, 2);
        cgpaPush.value = "";
    }
};
