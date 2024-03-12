document.addEventListener("input", function() {
    var inputElement = document.querySelector("input");
    inputElement.style.color = "#959596";
});


  
  document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const dotsContainer = document.querySelector(".slider-dots");
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
  
    let index = 0;
  
    function updateDots() {
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    }
  
    function goToSlide(slideIndex) {
      index = slideIndex;
      const translateValue = -index * 100 + "%";
      slider.style.transform = "translateX(" + translateValue + ")";
      updateDots();
    }
  
  
    dotsContainer.addEventListener("click", (event) => {
      const dotIndex = Array.from(dots).indexOf(event.target);
      if (dotIndex !== -1) {
        goToSlide(dotIndex);
      }
    });
  
    setInterval(() => {
      index = (index + 1) % slides.length;
      goToSlide(index);
    }, 5000);
  });



  
  let currentIndex = 0;
  const totalSlides = document.querySelectorAll('.video-slide').length;
  const videoSlider = document.getElementById('video-slider');

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  }

  function updateSlider() {
    const translateValue = -currentIndex * 100;
    videoSlider.style.transform = `translateX(${translateValue}%)`;
  }




 