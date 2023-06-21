// Testimonial slideshow
function showSlides2() {
    let i;
    let slides2 = document.getElementsByClassName("myTestimonial");
    // let dots = document.getElementsByClassName("dott");
    for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides2.length) {slideIndex2 = 1}
    // for (i = 0; i < dots.length; i++) {
    //   dots[i].className = dots[i].className.replace(" active2", "");
    // }
    slides2[slideIndex2-1].style.display = "block";
    // dots[slideIndex2-1].className += " active2";
    setTimeout(showSlides2, 20000);
  }
  
  let slideIndex2 = 0;
  showSlides2();
  
  // button slideshow 
  var slideIndex3 = 1;
  showDivs(slideIndex3);
  
  function plusDivs(n) {
    showDivs(slideIndex3 += n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("myTestimonial");
    if (n > x.length) {slideIndex3 = 1}
    if (n < 1) {slideIndex3 = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex3-1].style.display = "block";  
  }
  
  
  // Toggle navbar
const menuBar = document.getElementById('menu-bars');
const navLinks = document.getElementById('nav-links');
const body = document.querySelector('body');

function toggleNav() {
  navLinks.classList.toggle('active-2');
  menuBar.classList.toggle('change');
}

function closeNav(event) {
  if (!navLinks.contains(event.target) && !menuBar.contains(event.target)) {
    navLinks.classList.remove('active-2');
    menuBar.classList.remove('change');
  }
}

menuBar.addEventListener('click', toggleNav);
body.addEventListener('click', closeNav);
  
  