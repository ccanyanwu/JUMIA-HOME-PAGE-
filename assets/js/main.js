//select elements from the DOM 
//add an event listener to clear out the disposable gif
document.querySelector('#gif1 button').addEventListener('click', (e) => {
  e.target.parentElement.style.display = 'none';
});