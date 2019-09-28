/* 
 Created on : 23-sep-2019, 9:07:19
 Author     : Raul Vela
 */

var slideIndex = 1;

showSlides(slideIndex);

/**
 * Next/previous controls
 *
 * @param {number} n - num of slides
 * @return {undefined}
 */
function plusSlides(n) {
  showSlides(slideIndex += n);
}

/**
 * Thumbnail image controls
 *  
 * @param {number} n - num of slides
 * @return {undefined}
 */
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/**
 * 
 * @param {number} n - num of slides
 * @return {undefined} nothing
 */
function showSlides() {
  var i;
  var slides = document.getElementsByClassName('slides--show');
  var dots = document.getElementsByClassName('dot');

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  setTimeout(showSlides, 10000);
}