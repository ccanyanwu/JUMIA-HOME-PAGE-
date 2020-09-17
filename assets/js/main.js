/*/add an event listener to clear out the disposable gif
document.querySelector('#gif1 button').addEventListener('click', (e) => {
  e.target.parentElement.style.display = 'none';
});*/

//for the mobile navbar toggle 
const nav = document.querySelector('nav');
document.querySelector('#toggler').addEventListener('click', () =>{
  nav.style.display = 'block';
});

document.querySelector('.nav-close button').addEventListener('click', () =>{
  nav.style.display = 'none';
});