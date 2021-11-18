// chữa bài 1:
// function student(name, age, address) {
//   return {
//     "name": name,
//     "age": age,
//     "address": address
//   }
// }


// console.log(student("Hiếu", 24, "Hà Nội"));



// Chữa bài 2:
// VD map:
// let arr = [1, 2, 3];

// in ra mang arr với toàn bộ phần tử được nhân với 2;
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i] * 2
// }
// console.log(arr);

// let arr2 = arr.map(function (item) {
//   return item * 2;
// })
// console.log(arr2);

// kq trả về: 2, 4, 6


// let smartPhones = [
//   { name: 'iphone', price: 649 },
//   { name: 'Galaxy S6', price: 576 },
//   { name: 'Galaxy Note 5', price: 489 }
// ];

// // // Viết hàm để trả về giá sản phẩm
// const smartPhonePrice = smartPhones.map(function (smartPhone) {
//   return smartPhone.price
// })
// console.log(smartPhonePrice);// 649, 576, 489


// Bài 3:
// function foo(x,y,z) {
// 	console.log( x, y, z );
// }

// dạng ES6;
// const foo = (x, y, z) => {
//   console.log(x, y, z);
// }

// function  foo() {
//   alert('Hello')
// }

// =>>>
// const foo = () => {
//   alert('Hello')
// }

// function foo(a, b) {
//   let m = a + b * 100
//   return m
// }

// =>>>>
// const foo = (a, b) => a + b * 100;

// console.log(foo(1, 2));


