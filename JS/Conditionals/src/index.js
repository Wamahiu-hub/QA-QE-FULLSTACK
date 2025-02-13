// conditions are basically an if statement that evalutes to tru
let showering = true;
if(showering){
    console.log('you are a good boy')
}
// If the condition was not satisfied there is a fall back IF
let heShowered = false;
if(heShowered){
    console.log('you are a good boy')
}
else{
    console.log('you are a bad boy')
}
// in some situations you can have multiple fall backs.You can have else- if
//else if, else if, else if until you have else.
let marks = 0
let grade = ''

function myGrade(mark) {
    if(mark > 89) {
        grade = 'A'
    }
    else if(mark > 70) {
        grade = 'B'
    }
    else if(mark > 50) {
        grade = 'c'
    }
    else if(mark > 30){
        grade = 'D'
    }
    else {
        grade = 'E'
    }
    return grade
}

console.log(`your grade is : ${myGrade(78)}`)
//Later ES6 WE WILL LEARN
//let functionName = condition ? executeThis1: (else) executedThis2
const myGrade1 = (mark) => {
    return mark >100 ? 'Too high'://this is the else if block
        mark >=80 ? 'A'://this is the else if block
        mark >=70 ? 'B'://this is the else if block
        mark >=50 ? 'C'://this is the else if block
        mark >=50 ? 'D'://this is the else if block
        mark <=30 ? 'E':

        'Invalid input' //this is the else block
}
console.log(myGrade1(934))//Invalid input marks
console.log(myGrade1(64))//Invalid input marks ///ALSO CORRECT THIS
console.log(myGrade1(78*7/8))