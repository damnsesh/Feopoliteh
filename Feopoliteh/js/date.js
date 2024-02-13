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