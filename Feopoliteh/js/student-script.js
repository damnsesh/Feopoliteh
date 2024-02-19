document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const dotsContainer = document.querySelector('.slider-dots');
    const totalSlides = document.querySelectorAll('.slide').length;
    let currentSlide = 0;
    // Создаем точки переключения
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dotsContainer.appendChild(dot);
  
      // Добавляем обработчик события для каждой точки
      dot.addEventListener('click', () => {
        goToSlide(i);
      });
    }
    // Первая точка активна при загрузке страницы
    dotsContainer.children[0].classList.add('active');
    // Переключение к слайду по индексу
    function goToSlide(slideIndex) {
      currentSlide = slideIndex;
      updateSlider();
    }
    // Обновление положения слайдера
    function updateSlider() {
      const newTransformValue = -currentSlide * 100 + '%';
      slider.style.transform = 'translateX(' + newTransformValue + ')';
  
      // Обновляем активную точку
      const dots = document.querySelectorAll('.dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
      });
    }
    setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlider();
    }, 5000); 
  });
  
  
  document.addEventListener('DOMContentLoaded', function () {
    const phoneNumberInput = document.getElementById('phoneNumberInput');
  
    phoneNumberInput.addEventListener('input', function () {
      formatPhoneNumber();
    });
  
    function formatPhoneNumber() {
      let value = phoneNumberInput.value.replace(/\D/g, '');
      if (value.length > 0) {
        value = `+${value.slice(0, 1)} (${value.slice(1, 4)}) ${value.slice(4, 7)}-${value.slice(7, 11)}`;
      }
      phoneNumberInput.value = value;
    }
  });
  
  
  document.addEventListener('DOMContentLoaded', function () {
    const dobInput = document.getElementById('dobInput');
  
    dobInput.addEventListener('input', function () {
      formatDOB();
    });
  
    function formatDOB() {
      let value = dobInput.value.replace(/\D/g, ''); 
  
      if (value.length > 0) {
        if (value.length <= 2) {
          value = value;
        } else if (value.length <= 4) {
          value = `${value.slice(0, 2)}.${value.slice(2)}`;
        } else {
          value = `${value.slice(0, 2)}.${value.slice(2, 4)}.${value.slice(4, 8)}`;
        }
      }
  
      dobInput.value = value;
    }
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const courseInput = document.getElementById('courseInput');
  
    courseInput.addEventListener('input', function () {
      validateCourse();
    });
  
    function validateCourse() {
      let value = courseInput.value.replace(/\D/g, '');
  
      if (value.length > 0) {
  
        const validValues = ['1', '2', '3', '4'];
        if (!validValues.includes(value)) {
          courseInput.value = '';
        }
      }
    }
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

  function showBlocks(containerId, clickedElement) {
    // Скрываем все контейнеры
    const containers = document.querySelectorAll('.chcourse');
    containers.forEach(container => {
      container.style.opacity = 0;
      container.style.display = 'none';
    });
  
    // Отображаем выбранный контейнер
    const selectedContainer = document.getElementById(containerId);
    selectedContainer.style.display = 'flex';
    setTimeout(() => {
      selectedContainer.style.opacity = 1;
    }, 0);
  
    // Удаляем класс 'active' у всех элементов с классом 'schedule-item'
    document.querySelectorAll('.schedule-item').forEach(element => {
      element.classList.remove('active');
    });
  
    // Добавляем класс 'active' только к нажатому элементу
    clickedElement.classList.add('active');

    
  }
  
  // Добавляем обработчик клика для скрытия блоков при нажатии на сами блоки внутри контейнеров
  document.querySelectorAll('.chcourse a').forEach(link => {
    link.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  });