// Bài 1
function student(name, age, address){
    return {
        name: name,
        age: age,
        address: address,
    }
}
const profile = student("Giang", 16, "Vietnam");
console.log(profile);

// Bài 2
var smartPhones = [ 
    { name: 'iphone', price: 649 }, 
    { name: 'Galaxy S6', price: 576 }, 
    { name: 'Galaxy Note 5', price: 489 } 
];
const Smartphonesprice = smartPhones.map(function price(smartPhones){
    return smartPhones.price;
});
console.log(Smartphonesprice);

// Bài 3
// function foo(x,y,z) {
// 	console.log( x, y, z );
// }
// function foo () {
// 	alert(‘Hello’)
// }
// function foo (a,b){
// 	let m = a+b*100
// 	return m
// }
(x,y,z) => {console.log (x,y,z)};
console.log(1,2,3);

() => {alert ('Hello');}

(a,b) => {
    let m = a+b*100
    return m};

