var navMain = document.querySelector('.header__nav');
var navToggle = document.querySelector('.header__nav-toggle');

navMain.classList.remove('header__nav--nojs');
navToggle.classList.remove('header__nav-toggle--nojs');


navToggle.addEventListener('click', function() {
  if (navToggle.classList.contains('header__nav-toggle--open')) {
    navToggle.classList.remove('header__nav-toggle--open');
    navToggle.classList.add('header__nav-toggle--close');
    navMain.classList.remove('header__nav--closed');
    navMain.classList.add('header__nav--opened');
  } else if (navToggle.classList.contains('header__nav-toggle--close')) {
    navToggle.classList.remove('header__nav-toggle--close');
    navToggle.classList.add('header__nav-toggle--open');
    navMain.classList.add('header__nav--closed');
    navMain.classList.remove('header__nav--opened');
  }
});
