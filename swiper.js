//외부연동

window.onload = function () {
  //딱한번만...제이쿼리 ready는 여러번해도됨
  const swiperMain = new Swiper('#mainBanner .swiper', {
    loop: true,
    effect: 'fade',
    pagination: {
      el: '#mainBanner .swiper-pagination',
    },

    navigation: {
      nextEl: '#mainBanner .swiper-button-next',
      prevEl: '#mainBanner .swiper-button-prev',
    },

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },

  });

}

