// function test(){
//   document.getElementById("box").classList.add("change")

// }

// document.getElementById("themeButton").addEventListener("click", function() {
//   // Toggle the "light-theme" and "dark-theme" classes on the elements you want to change
//   var elements = document.querySelectorAll(".themeable-element");
//   for (var i = 0; i < elements.length; i++) {
//     elements[i].classList.toggle("light-theme");
//     elements[i].classList.toggle("dark-theme");
//   }
// });


// const element = document.getElementById("myElement");
// const changeButton = document.getElementById("changeButton");

// changeButton.addEventListener("click", function() {
//   element.classList.add("animating");
// });

// element.addEventListener("animationend", function() {
//   element.classList.remove("animating");
// });

// document.getElementById("btn").addEventListener("click",function(){
//   const temp = document.getElementById("box")
//   temp.classList.add("ani")
// })
// const moveButton = document.getElementById('moveButton');
// const box1 = document.getElementById('box1');
// const box2 = document.getElementById('box2');
// let isBox1Moved = false;

// moveButton.addEventListener('click', () => {
//   if (isBox1Moved) {
//     box1.style.left = '0';
//     setTimeout(() => {
//       box2.style.left = '0';
//     }, 500); // Delay of 0.5 seconds (500 milliseconds)
//   } else {
//     box1.style.left = '100px';
//     setTimeout(() => {
//       box2.style.left = '120px';
//     }, 500); // Delay of 0.5 seconds (500 milliseconds)
//   }
  
//   isBox1Moved = !isBox1Moved;
// });

const hideButton = document.getElementById('hideButton');
const boxes = document.getElementsByClassName('box');

hideButton.addEventListener('click', () => {

  for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    const transitionDuration = (i + .5) + 's'; // Transition duration: 1s, 2s, 3s
    box.style.transform = "translateX(-100px)";
    box.style.transitionDuration = transitionDuration;
    box.classList.add('hide');
    
  }
});
