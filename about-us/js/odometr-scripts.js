$( document ).ready(function() {

    // window.odometerOptions = {
    //
    //     format: '( ddd)',
    //
    // };

    var el1 = document.querySelector('.odometr-1');
    od1 = new Odometer({
      el: el1,
      format: '( ddd)',
      value: 12500,
      auto: false,
      duration: 1000,
      animation: 'odometer-animating-up'
    });

    var el2 = document.querySelector('.odometr-2');
    od2 = new Odometer({
      el: el2,
      format: '( ddd)',
      value: 797000,
      auto: false,
      duration: 2000,
      animation: 'odometer-animating-up'
    });

    var el3 = document.querySelector('.odometr-3');
    od3 = new Odometer({
      el: el3,
      format: '( ddd)',
      value: 2000,
      auto: false,
      duration: 2000,
      animation: 'odometer-animating-up'
    });

    var el4 = document.querySelector('.odometr-4');
    od4 = new Odometer({
      el: el4,
      format: '( ddd)',
      value: 937000,
      auto: false,
      duration: 3000,
      animation: 'odometer-animating-up'
    });

    var el5 = document.querySelector('.odometr-5');
    od5 = new Odometer({
      el: el5,
      format: '( ddd)',
      value: 447000,
      auto: false,
      duration: 3000,
      animation: 'odometer-animating-up'
    });

    $.fn.isInViewport = function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();

      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();

      return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(window).on('resize scroll', function() {
      $('.odometr').each(function() {
        if ($(this).isInViewport()) {

          setTimeout(function(){
              od1.update(125374);
              od2.update(797426);
              od3.update(2700);
          }, 0);

          setTimeout(function(){
              od4.update(937255);
              od5.update(447823);
          }, 500);
        } else {
        }
      });

      $('.odometr-s').each(function() {
        if ($(this).isInViewport()) {
          setTimeout(function(){
              od4.update(937255);
              od5.update(447823);
          }, 300);
        } else {
        }
      });
    });
});
