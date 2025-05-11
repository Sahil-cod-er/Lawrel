var i = 0;
var txt = 'The one and only solution for all your beauty and fashion needs ! '; 
var speed = 50;  

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter()
let left_arrow = document.getElementById('left-arrow');
let right_arrow = document.getElementById('right-arrow');
let scrollContainer = document.querySelector('.cards'); 

let scrollAmount = 350; 

left_arrow.addEventListener('click', function () {
  scrollContainer.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  });
});

right_arrow.addEventListener('click', function () {
  scrollContainer.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
});
