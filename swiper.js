//외부연동

$(document).ready(function () {
  const swiperMain = new Swiper('#mainBanner .swiper', {
    loop: true,
    effect: 'fade',
    pagination: {
      el: '#mainBanner .swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '#mainBanner .swiper-button-next',
      prevEl: '#mainBanner .swiper-button-prev',
    },

    observer: true,   // 추가
    observeParents: true,   // 추가

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    on: { //on : ~할때마다
      realIndexChange: function () { //event
        console.log('realIndexChange', this.realIndex);
        //슬라이드가 바뀔때마다
        document.body.classList = "realIndex" + this.realIndex;

      }
    },

  });

  //toggle 실행하기 

  var toggle = true;

  $(".toggle").click(function () { //이벤트이기떄문에 function을 사용함
    $(this).toggleClass("on");

    if (toggle) {
      swiperMain.autoplay.stop(); //무조건 첫번째 클릭
      toggle = false; //다음클릭시 else 실행하게 하도록 설계

    } else {
      swiperMain.autoplay.start();
      toggle = true; //다음클릭 if 실행되게 처리해둔다.
    }

  })

})




