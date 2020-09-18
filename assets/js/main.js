//add an event listener to clear out the disposable gif
document.querySelector('#gif1 button').addEventListener('click', (e) => {
  e.target.parentElement.style.display = 'none';
});

//for the mobile navbar toggle 
const nav = document.querySelector('nav');
document.querySelector('#toggler').addEventListener('click', () =>{
  nav.style.display = 'block';
});

document.querySelector('.nav-close button').addEventListener('click', () =>{
  nav.style.display = 'none';
});

//first slider 
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.querySelectorAll('.slide');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "flex";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}