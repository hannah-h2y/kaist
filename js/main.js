/* Popup */
$('#popup').draggable();
$('.btn_popup_close').click(function() {
   $('#popup').hide();
})

/* header language */
$('.lang_wrap button').click(function() {
   $('.lang_wrap button, .lang_wrap ul').toggleClass('open')
})

/* 전체 메뉴 */
$('.btn_allmenu_open').click(function() {
   $('.allmenu_popup').css({'display' : 'flex'})
   $('html, body').css({'overflow':'hidden'})
   $('header .search_popup').hide();
})
$('.btn_allmenu_close').click(function() {
   $('.allmenu_popup').hide()
   $('html, body').css({'overflow':'auto'})
   $('header').removeClass('on')

})

/* header 스타일 추가 */
$('header .btn_search_open').click(function() {
   $('header').toggleClass('on');
   $('header .search_popup').toggle()
})
$(window).scroll(function() {
   if($(window).scrollTop() >= 10) {
      $('header').addClass('on')
   }
   else {
      $('header').removeClass('on')
   }
})
$('#gnb .dep1>li').hover(function() {
   $(this).children('.dep2_wrap').stop().show();
   $('header').addClass('on');
}, function() { //out
   $('#gnb .dep2_wrap').stop().slideUp();
   $('header').removeClass('on');
});

let s = false;
$('.family_wrap>button').click(function() {
   $('.family_wrap>ul').slideToggle()
   console.log(s)
})
const mainSwiper = new Swiper('.main_swiper', {
   effect: 'fade',
   autoplay: {
      delay: 2000,
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   navigation: {
      nextEl: '.button_next',
      prevEl: '.button_prev',
   },
})
$('.auto-stop').click(function() {
   $(this).hide();
   $('.auto-play').show();
   mainSwiper.autoplay.stop();
})
$('.auto-play').click(function() {
   $(this).hide();
   $('.auto-stop').show();
   mainSwiper.autoplay.start();
})
const facultySwiper = new Swiper ('.faculty_swiper', {
   spaceBetween: 40,
   slidesPerView : 'auto',
   autoplay: {
      delay: 0,
   },
   speed: 4000,
   loop: true,
})
$('.news_wrap .tabs li').click(function() {
   $('.news_wrap .tabs li').not(this).removeClass('active')
   $(this).addClass('active');
   const tabName = $(this).attr('data-news');
   $('.news_wrap .content_box').hide();
   $('.news_wrap .content_box').filter('[data-news = ' + tabName + ']').show()
})
$('.sub .lnb_wrap button').click(function() {
   let nextEl = $(this).next()

   if(nextEl.css('display') == 'none') {
      nextEl.css('display', 'flex')
      $('.sub .lnb_wrap ul').not(nextEl).css('display', 'none')
      $()
   } else {
      $('.sub .lnb_wrap ul').css('display', 'none')
   }
})
