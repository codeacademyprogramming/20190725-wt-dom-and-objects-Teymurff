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
    let trElem = document.createElement("tr");
    trElem.innerHTML = `<td>${inputStdName.value}</td><td>${inputStdSurname.value}</td><td>${inputStdEmail.value}</td><td>${inputStdBirthday.value}</td>`;
        trElem.setAttribute("data-index", (studentsArray.length-1));
        trElem.className = "table-danger";
        trElem.id = "tablerow";
        trElem.addEventListener("dblclick", function(){
        let stdIndex = this.getAttribute("data-index");
        let averagePointsOfStd = studentsArray[stdIndex].GetAverageScores()
        alert("Average score of the student is:" + " " + averagePointsOfStd);
    });
    validate();
    studentsList.appendChild(trElem);
    inputStdName.value = "";
    inputStdSurname.value = "";
    inputStdEmail.value = "";
    inputStdBirthday.value = "";

}

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

function validateEmail(messaging) {
    let forEmail  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return forEmail.test(messaging);
  }
  
  function validate() {
      let message = document.getElementById("errormessage")
      let messaging = document.getElementById("email").value;
      message.innerHTML = "";
  
    if (validateEmail(messaging)) {
        message.innerHTML= messaging + " is correct";
        message.style.color = "green";
    } else {
        message.innerHTML = messaging + " is not correct";
        message.style.color = "red";
        let buttonSave = document.getElementById("buto")[0];
        buttonSave.removeAttribute("onclick"); 
    }
    return false;
  }


  
