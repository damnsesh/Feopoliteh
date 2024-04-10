document.addEventListener("DOMContentLoaded", function() {
  const animateButton = document.getElementById("animateButton");
  const closeButton = document.getElementById("closeButton");
  const animatedElement = document.getElementById("animatedElement");
  const body =  document.getElementById('body');


  animateButton.addEventListener("click", function() {
    animatedElement.style.display = "flex";
    body.style.overflow='hidden';
    animatedElement.style.justifyContent="center";
    animatedElement.classList.add("animated-burger-open");
  });

  closeButton.addEventListener("click", function() {
    // Заменяем класс "animated" на "closed", чтобы закрыть анимацию
    animatedElement.classList.replace("animated-burger-open", "animated-burger-close");
    
    // Делаем задержку перед скрытием элемента, чтобы анимация завершилась
    setTimeout(function() {
      animatedElement.style.display = "none";
      body.style.overflow='auto';
      animatedElement.classList.remove("animated-burger-open", "animated-burger-close");
    }, 1000); // Задержка в 1 секунду (время анимации)

    
  });
});



window.addEventListener('DOMContentLoaded', function() {
    var dateElement = document.getElementById('date');
    var weekTypeElement = document.getElementById('week-type');
  
    // Получаем текущую дату
    var today = new Date();
  
    // Определяем номер недели
    var weekNumber = getWeekNumber(today);
  
    // Определяем тип недели (числительная или знаменательная)
    var weekType = (weekNumber % 2 === 0) ? 'Числительная неделя' : 'Знаменательная неделя';
  
    // Форматируем дату в требуемом формате
    var formattedDate = formatDate(today);
  
    // Выводим результат
    dateElement.textContent = formattedDate;
    weekTypeElement.textContent = weekType;
  });
  
  // Функция для определения номера недели
  function getWeekNumber(date) {
    var d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    var dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    return Math.ceil((((d - yearStart) / 86400000) + 1)/7);
  }
  
  // Функция для форматирования даты
  function formatDate(date) {
    var options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('ru-RU', options);
  }



  let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

document.addEventListener('DOMContentLoaded', function() {
  const goTopButton = document.querySelector('[data-action="gotop"]');
  const windowViewPortHeight = window.innerHeight; // browser viewport height
  let isRequestingAnimationFrame = false;

  if (!goTopButton) {
    return;
  }

  goTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('scroll', function() {
    if (!isRequestingAnimationFrame) {
      requestAnimationFrame(filterGoTopButtonVisibility);
      isRequestingAnimationFrame = true;
    }
  });

  function filterGoTopButtonVisibility(timestamp) {
    let windowPageYOffset = window.pageYOffset || document.documentElement.scrollTop;
    if (windowPageYOffset > windowViewPortHeight) {
      goTopButton.classList.add('show');
      isRequestingAnimationFrame = false;
    } else {
      goTopButton.classList.remove('show');
      requestAnimationFrame(filterGoTopButtonVisibility);
    }
  }
})