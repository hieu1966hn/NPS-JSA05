//////// code jQuery
// $(function () {
//   $("p").css("background-color", "cyan");
// })


/////// code js
// function changeColor() {
//   const p = document.getElementsByTagName('p');
//   for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = "cyan"
//   }
// }
// changeColor();


// seclect tag name
// console.log($('p'));


// select ID trong Jquery
$('#title')
console.log($('#title'));

// select class trong Jquery
// $('.h2')
// console.log($('.h2'));


// // style toàn bộ thẻ p với background color: pink
// $(function () {
//   $('p').css("background-color", "pink");
// })


$("button.continue").html("Next Step...");

// lập trình khi click vào button -> thẻ div biến mất (jquery)
$("button.continue").on("click", function () {
  $('#banner-message').css("display", "none");

})

// với js
// document.querySelector(".continue").addEventListener("click",function(){
//   console.log("đã bấm vào đây");
// })