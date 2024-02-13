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