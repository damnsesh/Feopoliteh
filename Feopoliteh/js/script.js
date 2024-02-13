document.addEventListener("input", function() {
    var inputElement = document.querySelector("input");
    inputElement.style.color = "#959596";
});

document.addEventListener("DOMContentLoaded", function() {
    const animateButton = document.getElementById("animateButton");
    const closeButton = document.getElementById("closeButton");
    const animatedElement = document.getElementById("animatedElement");

  
    animateButton.addEventListener("click", function() {
      animatedElement.style.display = "flex";
      animatedElement.style.justifyContent="center";

      animatedElement.classList.add("animated-burger-open");
    });
  
    closeButton.addEventListener("click", function() {
      // Заменяем класс "animated" на "closed", чтобы закрыть анимацию
      animatedElement.classList.replace("animated-burger-open", "animated-burger-close");
      
      // Делаем задержку перед скрытием элемента, чтобы анимация завершилась
      setTimeout(function() {
        animatedElement.style.display = "none";
        animatedElement.classList.remove("animated-burger-open", "animated-burger-close");
      }, 1000); // Задержка в 1 секунду (время анимации)

      
    });
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




 