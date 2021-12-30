document.addEventListener('click', function(){
    console.log('a');
    fetch(`https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple`)
    .then(async res => {
        const data = await res.json();
        console.log (data);
        console.log (`Q1's correct answer: ${data.results[0].correct_answer}`);
        console.log (`Q2's incorrect answers: ${data.results[1].incorrect_answers}`);
        console.log (`Q3: ${data.results[2].question}`);
        console.log (`Q4's incorrect answers: ${data.results[3].incorrect_answers}`);
        console.log (`Q5: ${data.results[4].question}`);
    })
});