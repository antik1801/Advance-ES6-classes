const student = {
    name: 'Kaliuddhin',
    age: 15,
    class: 10,
    marks :{
        math: 98,
        physics:95,
        english: 86,
        chemistry: 82,
    },
}
const marks = student.marks;
const math = student.marks.math;

// Way 2
const chemistry = student['marks']['chemistry']
// console.log(marks);
console.log(chemistry);
const subject = 'math';
const subjectMark = student.marks[subject]; // veriable name access properties

