"use strict";
let studentsList = document.querySelector("#students");
let studentsArray = [];
let inputStdName = document.querySelector("#name");
let inputStdSurname = document.querySelector("#surname");
let inputStdEmail = document.querySelector("#email");
let inputStdBirthday = document.querySelector("#birthday");

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
    studentsList.appendChild(trElem);
}