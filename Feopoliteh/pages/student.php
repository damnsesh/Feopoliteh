<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/student-styles.css">
    <link rel="stylesheet" href="header/header-style.css">
    <link rel="stylesheet" href="footer/footer-style.css">
    <title>Студенту</title>
</head>
<body>
<?php include('header/header.html'); ?>

<section class='slider-section'>
<div class="slider-top-title wrap">
    <div class="container">
    <h1><span>#</span>СТУДЕНЧЕСКАЯЖИЗНЬ</h1>
    </div>
</div>
<div class="wrap">
<div class="slider-container container">
    <div class="slider">
      <div class="slide"><img src="../images/st-slide1.jpg" alt="Slide 1"></div>
      <div class="slide"><img src="../images/st-slide2.jpg" alt="Slide 2"></div>
      <div class="slide"><img src="../images/st-slide3.jpg" alt="Slide 3"></div>
    </div>
    <div class="slider-dots"></div>
  </div>
  </div>


  <div class="wrap">
    <div class="filter-student container">
        <ul class="list-filter">
            <li class="item-filter">
                <a href="#timetable">Расписание</a>
            </li>
            <li class="item-filter">
            <a href="http://feopoliteh.ru/studentu/zameny">Замены занятий</a>
            </li>
            <li class="item-filter">
            <a href="#docs">Заказать справку</a>
            </li>
            <li class="item-filter">
            <a href="#info">Дополнительная информация</a>
            </li>
        </ul>
        </div>
    </div>
 </section>


<section class='schedule-section'>
    <div class="schedule-title wrap">
    <div class="container" id='timetable'>
    <h1>РАСПИСАНИЕ</h1>
    </div>
</div>

<div class="wrap">
  <div class="schedule-flex container">

  <div class="schedule-item first">
  <div class="shape"></div>
  <div class="centered-text">
    <p>1 КУРС</p>
  </div>
  </div>
  <div class="schedule-item second">
  <div class="shape"></div>
  <div class="centered-text">
    <p>2 КУРС</p>
  </div>
  </div>
  <div class="schedule-item third">
  <div class="shape"></div>
  <div class="centered-text">
    <p>3 КУРС</p>
  </div>
  </div>
  <div class="schedule-item fourth">
    <div class="shape"></div>
  <div class="centered-text">
    <p>4 КУРС</p>
  </div>
  </div>
</div>
</div>
    </section>



<section class='reference-section'>
<div class="wrap">
    <div class="reference-title container" id='docs'>
    <h1>ХОЧУ СПРАВКУ</h1>
    <p>ДЛЯ ЗАКАЗА СПРАВКИ ОБ ОБУЧЕНИИ ЗАПОЛНИТЕ ФОРМУ</p>
    </div>
</div>

<div class="wrap">
<div class="reference-block container">
<div class="shape-reference"></div>
<div class="button-block">
  <button>ОТПРАВИТЬ</button>
  </div>
  <div class="container-reference">
    <div class="input__reference">
      <p>ФИО</p>
      <input type="text" placeholder="" class="inputs">
      <p>ГРУППА</p>
      <input type="text" placeholder="" class="inputs">
      <p>НОМЕР ТЕЛЕФОНА</p>
      <input type="text" placeholder=""  id="phoneNumberInput" class="inputs">
      </div>
      <div class="input__reference">
      <p>ДАТА РОЖДЕНИЯ</p>
      <input type="text" placeholder="" id="dobInput" class="inputs">
      <p>КУРС</p>
      <input type="text" placeholder=""  id="courseInput" class="inputs">
      <div class="radiobuttons">
      <input type="radio" name="group1">
      <p>Мокрая печать</p>
      </div>
      <div class="radiobuttons">
      <input type="radio" name="group1">
      <p>Электронная печать</p>
      </div>
      </div>
  </div>
</div>
</div>
</section>



<section class='information-section wrap'>
<div class="ad-information container" id='info'>
  <h1>ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ</h1>
<div class="ag-courses_box">
    <div class="ag-courses_item">
      <a href="http://feopoliteh.ru/studentu/raspisanie-zvonkov-na-2023-2024-uchebnyj-god" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>
        <div class="ag-courses-item_title">
        РАСПИСАНИЕ ЗВОНКОВ 2023-2024 УЧЕБНЫЙ ГОД
        </div>
      </a>
    </div>
    <div class="ag-courses_item">
      <a href="http://feopoliteh.ru/assets/uploads/d855a35c2351a57f1ff69f7ef24a86de.pdf" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>
        <div class="ag-courses-item_title">
        ГРАФИК КОНСУЛЬТАЦИЙ
        </div>
      </a>
    </div>
    <div class="ag-courses_item">
      <a href="http://feopoliteh.ru/assets/uploads/d88dd2d4c60f1163e9c0530c439950cc.pdf" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>
        <div class="ag-courses-item_title">
        СПИСОК КЛАССНЫХ РУКОВОДИТЕЛЕЙ 
        </div>
      </a>
    </div>
    <div class="ag-courses_item">
      <a href="http://feopoliteh.ru/svedeniya-ob-obrazovatel-noj-organizacii/finansovo-hozyajstvennaya-deyatel-nost/rekvizity-dlya-oplaty-za-obuchenie-za-prozhivanie-v-obshezhitii" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>
        <div class="ag-courses-item_title">
        РЕКВИЗИТЫ ДЛЯ ОПЛАТЫ ЗА ОБУЧЕНИЕ, ЗА ПРОЖИВАНИЕ В ОБЩЕЖИТИИ
        </div>
      </a>
    </div>
    <div class="ag-courses_item">
      <a href="http://feopoliteh.ru/studentu/bazy-praktik" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>
        <div class="ag-courses-item_title">
        БАЗЫ ПРАКТИК
        </div>
      </a>
    </div>
    <div class="ag-courses_item">
      <a href="http://feopoliteh.ru/studentu/chasto-zadavaemye-voprosy-ot-studentov" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>
        <div class="ag-courses-item_title">
        ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ ОТ СТУДЕНТОВ
        </div>
      </a>
    </div>
</div>
  <div class="links-blocks">
    <div class="item-links mb-links">
      <img src="../images/link.svg">
      <a href="http://feopoliteh.ru/studentu/centr-sodejstviya-trudoustrojstvu-vypusknikov">Центр содействия трудоустройству выпускников</a>
    </div>
    <div class="item-links mb-links">
      <img src="../images/link.svg">
      <a href="http://feopoliteh.ru/studentu/nastavnichestvo">Наставничество</a>
    </div>
    <div class="item-links mb-links">
      <img src="../images/link.svg">
      <a href="http://feopoliteh.ru/vospitatel-naya-rabota/social-no-psihologicheskaya-sluzhba">Социально-психологическая служба</a>
    </div>
    <div class="item-links mb-links">
      <img src="../images/link.svg">
      <a href="http://feopoliteh.ru/studentu/metodicheskie-rekomendacii-dlya-studentov">Методические рекомендации для студентов</a>
    </div>
    <div class="item-links mb-links">
      <img src="../images/link.svg">
      <a href="http://feopoliteh.ru/studentu/nezavisimaya-ocenka-kachestva-osushestvleniya-obrazovatel-noj-deyatel-nosti">Независимая оценка качества осуществления образовательной деятельности</a>
    </div>
    <div class="item-links mb-links">
      <img src="../images/link.svg">
      <a href="http://feopoliteh.ru/studentu/informaciya-o-gto">Информация о ГТО</a>
    </div>
    <div class="item-links mb-links">
      <img src="../images/link.svg">
      <a href="http://feopoliteh.ru/studentu/rekomendacii-dlya-studentov-v-period-distancionnogo-obucheniya">Рекомендации для студентов в период дистанционного обучения</a>
    </div>
    <div class="item-links mb-links">
      <img src="../images/link.svg">
      <a href="http://feopoliteh.ru/studentu/dostizheniya-uchrezhdeniya">Достижения учреждения</a>
    </div>
    <div class="item-links mb-links">
      <img src="../images/link.svg">
      <a href="http://feopoliteh.ru/studentu/deyatel-nost-obuchayushihsya">Деятельность обучающихся</a>
    </div>
    <div class="item-links mb-links">
      <img src="../images/link.svg">
      <a href="http://feopoliteh.ru/studentu/biblioteka">Библиотека</a>
    </div>
    <div class="item-links">
      <img src="../images/link.svg">
      <a href="http://feopoliteh.ru/vospitatel-naya-rabota/obshezhitie">Общежитие</a>
    </div>
  </div>
</div>
</section>



<?php include('footer/footer.html'); ?> 

  <script src="../js/student-script.js">
    </script>
</body>
</html>