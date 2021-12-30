//BAI 1:
var studentInfo = {};
function student(name, age, address) {
    studentInfo = {
        "name": name,
        "age": age,
        "address": address,
    };
    console.log(studentInfo);
}
student("Luke", 17, "Hanoi");

//BAI 2:
var smartPhones = [
    { name: 'iphone', price: 649 },
    { name: 'Galaxy S6', price: 576 },
    { name: 'Galaxy Note 5', price: 489 }
];

function takePrice() {
    var prices = [];
    for (let i = 0; i < smartPhones.length; i++) {
        prices[i] = smartPhones[i].price;
    }
    console.log(prices);
}

takePrice();


//BAI 3:
var foo = (x, y, z) => {
    console.log(x, y, z);
}
var foo = () => {
    alert('Hello');
}
var foo = (a, b) => {
    var m = a + b * 100;
    console.log(m);
};
