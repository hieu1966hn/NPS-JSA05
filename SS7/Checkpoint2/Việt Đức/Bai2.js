var content = fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple');

content.then((response) => response.json()).then((json) => {
    console.log(json);
    var results = json;
    process(results);
});
// console.log ra các thông tin đề bài yêu cầu
function process(result) {
    var res = result.results;
    console.log(res[0].correct_answer);
    console.log(res[1].incorrect_answers);
    console.log(JSON.stringify(res[2].question));
    let string = "";
    var take = res[3].incorrect_answers
    for (let x in take) {
        string = string + take[x] + " ";
    }
    console.log(string);
    console.log(JSON.stringify(res[4].question));

}



