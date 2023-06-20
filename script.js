const slides = document.querySelectorAll(".slide");
let counter = 0;

function goPrev() {
  counter = (counter - 1 + slides.length) % slides.length;
  showSlide();
}

function goNext() {
  counter = (counter + 1) % slides.length;
  showSlide();
}

function showSlide() {
  slides.forEach((slide, index) => {
    if (index === counter) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

showSlide(); // Show the first slide initially
