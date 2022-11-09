// problem n2
const numberGrade = 69;
let letterGrade;
if (97 <= numberGrade && numberGrade <= 100) {
  letterGrade = 'A+';
} else if (93 <= numberGrade && numberGrade <= 96) {
  letterGrade = 'A';
} else if (90 <= numberGrade && numberGrade <= 92) {
  letterGrade = 'A-';
} else if (87 <= numberGrade && numberGrade <= 89) {
  letterGrade = 'B+';
} else if (83 <= numberGrade && numberGrade <= 86) {
  letterGrade = 'B';
} else if (80 <= numberGrade && numberGrade <= 82) {
  letterGrade = 'B-';
} else if (77 <= numberGrade && numberGrade <= 79) {
  letterGrade = 'C+';
} else if (73 <= numberGrade && numberGrade <= 76) {
  letterGrade = 'C';
} else if (70 <= numberGrade && numberGrade <= 72) {
  letterGrade = 'C-';
} else if (67 <= numberGrade && numberGrade <= 69) {
  letterGrade = 'D+';
} else if (63 <= numberGrade && numberGrade <= 66) {
  letterGrade = 'D';
} else if (60 <= numberGrade && numberGrade <= 62) {
  letterGrade = 'D-';
} else {
  letterGrade = 'F';
}

if (numberGrade >= 70) {
  console.log('Your grade is ' + numberGrade + ' which corresponds to ' + letterGrade + '. You passed!');
} else {
  console.log('Your grade is ' + numberGrade + ' which corresponds to ' + letterGrade + '. You failed!');
}
