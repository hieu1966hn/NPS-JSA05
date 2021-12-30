//es6
console.log('ES6');
//exe 1
console.log('exe 1');
function student(name, age, address) {
    return {
        name: name,
        age: age,
        address: address,
    }
}
console.log(student('tuanbinh', 12, 'Hanoi'))

//exe 2
console.log('exe 2');
var smartPhones = [
    { name: 'iphone', price: 649 },
    { name: 'Galaxy S6', price: 576 },
    { name: 'Galaxy Note 5', price: 489 }
];
function info(name) {
    for (let i = 0; i < smartPhones.length; i++) {
        if (smartPhones[i].name === name)
            return smartPhones[i].price
    }
}

//exe 3
console.log('exe 3');
const foo = (x, y, z) => {
    console.log(x, y, z);
}
// const foo = () => {
//     alert('Hello')
// }
// const foo = (a, b) => {
//     let m = a + b * 100
//     return m
// }

//api
console.log('API')
//exe 1
console.log('exe 1');
let data
fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple')
    .then(async res => {
        data = await res.json()
        console.log(data);
        console.log('The correct answer for question 1: ' + data.results[0].correct_answer);
        console.log('Incorrect answers for question 2: ' + data.results[1].incorrect_answers);
        console.log('Question 3: ' + data.results[2].question);
        console.log('Incorrect answers for question 4: ' + data.results[3].incorrect_answers || undefined);
        console.log('Question 5: ' + data.results[4].question || undefined);
    })

//quiz
function quiz() {
    document.getElementById('quiz').style.display = 'block'
    let question = data.results[0]
    document.getElementById('question').innerText = question.question
    document.getElementsByClassName('answer')[0].innerText += question.correct_answer
}