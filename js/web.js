$(document).ready(function () {
    // 화면이 준비되면 실행해라.
    var num = 0;

    if ($(".swiper-slide").length > 0) {
        setInterval(fadefun, 3000)
    }
    function fadefun() {
        num++;
        num %= $(".swiper-slide").length; //3을 나누고 나머지
        $(".swiper-slide").eq(num).addClass("act").siblings().removeClass("act")
    }

})


