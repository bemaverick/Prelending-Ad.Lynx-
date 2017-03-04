$(document).ready(function(){$('.spoil').click(function(){var spoil=$(this).next('.content-foto');
	if(spoil.css('display')=='block'){spoil.hide();
	$(this).find('.tire').text('+');
$(this).find('.disp-text').text('Показать фото');
}else{spoil.show();
	$(this).find('.tire').text('–');
$(this).find('.disp-text').text('Скрыть фото');
}});
function getRandom(min,max){var res=Math.floor(Math.random()*(max-min+1)+min);
	if(res<10){return'0'+res;
}else{return res;
}}

var peoplePerDay=8800;
var date=new Date();
var totalPeople=Math.round((peoplePerDay/1440)*(date.getHours()*60+date.getMinutes()));
var zakazPeople=Math.round(totalPeople*0.1564);
var nowPeople=getRandom(10,50);
$('.totalPeople').text(totalPeople);
$('.zakazPeople').text(zakazPeople);
$('.nowPeople').text(nowPeople);
});


// (Пункт 6)pop up для комента с вк
/*добавить скрипт; функционал: при скролинге, в момент, 
когда юзер доходит до блока комментариев - 
в левом нижнем углу экрана появляется поп-ап -  
новый комментарий, который визуально в точности
 идентичен остальным комментариям на прелендинге. 
 В тексте комментария должно быть написано “я тебя люблю”.*/
var popupComent=document.querySelector(".popup-coment");
var body=document.querySelector("body");
var vkContainer=document.querySelector(".vk-container");

  window.onscroll = function() {
    var scrolledValue=body.scrollTop;
    var scrolledValueVkContainer=vkContainer.offsetTop;

    if (scrolledValue>4225) {
      popupComent.style.display="block";
      popupComent.classList.add("comment-show");
    } else {
      popupComent.style.display="none";
      popupComent.classList.remove("comment-show");
    }
  };

/*window.onbeforeunload = function() {
	window.open("http://youtube.com");
  return "Данные не сохранены. Точно перейти?";
};
*/
/*
  window.onunload = function() {
    window.open("http://youtube.com");
  }
*/


//(Пункт 3) реализаци задания с поп апом
/*добавить поп-ап; функционал: спустя 30 секунд пребывания юзера на
 прокле открывается поп-ап размером 600х300 пикселей, в центре экрана.
  На нем должно быть изображения Виктора Павлика слева,
   а справа текст “Привет, мой концерт в городе “город” 
   (вместо “город” должен быть установлен скрипт, который 
   	автоматически подставляет название города, в зависимости 
   	от айпи юзера, который зашел на преленд) состоится “дата”
   	 (вместо “дата” должен быть установлен скрипт даты, который
   	  автоматически подставляет дату “сегодняшняя + 7 дней”, то
   	   есть неделю вперед)”; на попапе есть кнопка закрывания; 
   	 плюс должна быть возможность закрыть поп-ап, если кликнуть 
   	 за его пределами. Фон поп-апа должен быть ярко зеленого цвета, 
   	 а фото Виктора Павлика обведено красной рамочкой ;)*/

var popUpAdvert=document.querySelector(".pop-up");
var popUpClose=document.querySelector(".close");
var popUpBackground=document.querySelector(".pop-up-background");

function showPopup () {
  popUpAdvert.style.display="block";
  popUpBackground.style.display="block";
}

popUpClose.addEventListener("click", function(event) {
  event.preventDefault();
  popUpAdvert.style.display="none";
  popUpBackground.style.display="none";
});

window.onload = function () {
  setTimeout(showPopup, 30000);
  $(".city").text(ymaps.geolocation.city);
  var d = new Date(); 
  var today=formatDate(d);
  $(".date").text(today);
}

// закрытие по клику вне области 
$("body").click(function(e) {
    if($(e.target).closest(".pop-up").length==0) $(".pop-up").css("display","none");
    $(".pop-up-background").css("display","none");
});

// функция для отображения дати в формате день + 7 месяц год
function formatDate(date) {
  var dd = date.getDate();
  if (dd < 10) dd = '0' + dd;
  var mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;
  var yy = date.getFullYear() % 100;
  if (yy < 10) yy = '0' + yy;
  return +dd + 7 + '.' + mm + '.' + yy;
}

// закрыие поп апа клавишей esc
window.addEventListener("keydown", function(event) {
    if (event.keyCode===27) {
    	if ((popUpAdvert.style.display="block") || (popUpBackground.style.display="block")) {
    		popUpAdvert.style.display="none";
    		popUpBackground.style.display="none";
    		}
    	}
    });






$(window).load(function(){var obj=$('.content-right-recommend-container');
	var offset=obj.offset();
var topOffset=offset.top;
var leftOffset=offset.left;
var marginTop=obj.css("marginTop");
var marginLeft=obj.css("marginLeft");
$(window).scroll(function(){var scrollTop=$(window).scrollTop();
	if(scrollTop>=topOffset){obj.css({marginTop:0,left:leftOffset,top:0,position:'fixed',});
}if(scrollTop<topOffset){obj.css({marginTop:marginTop,left:0,position:'relative',});
}if(scrollTop>=10000){obj.css({marginTop:0,left:leftOffset,bottom:0,position:'fixed',});
}});
});