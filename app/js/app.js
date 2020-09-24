document.addEventListener("DOMContentLoaded", function() {
  // this function runs when the DOM is ready, i.e. when the document has been parsed

  // all js code should go below this line


  // burger menu logic
document.querySelector('.header__burger').onclick = function() {
  document.querySelector('.header__burger').classList.toggle('active');
  document.querySelector('.header__menu').classList.toggle('active');
  document.querySelector('.header__menu-background-mobile').classList.toggle('active');
  document.querySelector('body').classList.toggle('lock');
}
});
