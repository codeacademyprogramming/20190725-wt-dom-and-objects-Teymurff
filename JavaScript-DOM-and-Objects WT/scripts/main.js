"use strict";
let studentsArray = [];
let inputStdName = document.querySelector("#name");
let inputStdSurname = document.querySelector("#surname");
let inputStdEmail = document.querySelector("#email");
let inputStdBirthday = document.querySelector("#birthday");
let studentEmail = document.querySelector("#studentemail");
let studentScore = document.querySelector("#studentscore");
let scoreList = document.querySelector("#scoresofstd");
let studentsList = document.querySelector("#students");


function Student(name, surname, email, birthday) {
    this.Name = name;
    this.Surname = surname;
    this.Email = email;
    this.Birthday = birthday;
    this.Scores = [];

    this.AddScore = function (points) {
        this.Scores.push(points);
    };

    this.GetAverageScores = function () {
        let average = 0;

        if (this.Scores.length > 0) {
            for (let i = 0; i < this.Scores.length; i++) {
                average += this.Scores[i];
            }
            average = average / this.Scores.length;
        }
        return average;
    };
}

function addStudent() {
    let student = new Student(inputStdName.value, inputStdSurname.value, inputStdEmail.value, inputStdBirthday.value);
    studentsArray.push(student);
    // showStudents();
    let trElem = document.createElement("tr");
    trElem.innerHTML = `<td>${inputStdName.value}</td><td>${inputStdSurname.value}</td><td>${inputStdEmail.value}</td><td>${inputStdBirthday.value}</td>`;
        studentsList.appendChild(trElem);
        trElem.setAttribute("data-index", (studentsArray.length-1));
        trElem.className = "table-danger";
        trElem.addEventListener("dblclick", function(){
        let stdIndex = this.getAttribute("data-index");
        console.log(studentsArray[stdIndex].GetAverageScores());
    });
    students.appendChild(trElem);
    inputStdName.value = "";
    inputStdSurname.value = "";
    inputStdEmail.value = "";
    inputStdBirthday.value = "";

}

// function showStudents() {
//     let rows = "";
//     for (let i = 0; i < studentsArray.length; i++) {
//         rows += `<tr class="table-danger" id="tablerow">
//         <th class="scope">${i + 1}</th>
//         <td>${studentsArray[i].Name}</td>
//         <td>${studentsArray[i].Surname}</td>
//         <td>${studentsArray[i].Email}</td>
//         <td>${studentsArray[i].Birthday}</td>
//         </tr>`
//     }
//     document.querySelector("#students").innerHTML = rows;
// }

function addScoresToStudents() {
    let inputsEquationIndex = studentsArray.findIndex((val, ind, arr) => {
        if (val.Email.toLowerCase() == studentEmail.value.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    });

    if (inputsEquationIndex != -1) {
        studentsArray[inputsEquationIndex].AddScore(Number(studentScore.value));

        scoreList.innerHTML = "";

        for (let i = 0; i < studentsArray[inputsEquationIndex].Scores.length; i++) {
            let li = document.createElement("li");
            li.innerText = studentsArray[inputsEquationIndex].Scores[i];
            scoreList.appendChild(li);
        }
    }

}

