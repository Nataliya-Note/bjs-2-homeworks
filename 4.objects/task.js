'use strict';

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  if (!this.marks) {
    return;
  }

  this.marks.push(...marksToAdd);
}

Student.prototype.getAverage = function () {
  if (!this.marks || !this.marks.length) {
    return 0;
  }

  const averageMark = this.marks.reduce((acc, mark) => {
    return acc + mark;
  }, 0);

  return averageMark / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
}

