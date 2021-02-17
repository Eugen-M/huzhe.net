$( document ).ready(function() {

    $('.header-page__btn').click(function(){
		$(this).toggleClass('header-page__btn_opened');
	});

    $('.header-page__btn').click(function(){
		$('.header-page__mob-dropdown_navi').toggleClass('header-page__mob-dropdown_opened');
        $('body').toggleClass('body-hidden');
	});

    $('.header-page__user-btn').click(function(){
		$('.header-page__mob-dropdown_active').toggleClass('header-page__mob-dropdown_opened');
        $('.header-page__btn').toggleClass('header-page__btn_hidden');
        $('.header-page__user-btn').toggleClass('header-page__user-btn_opened');
        $('body').toggleClass('body-hidden');
	});

    $('.header-page__user-login').click(function(){
		$('.header-page__mob-dropdown_register').toggleClass('header-page__mob-dropdown_opened');
        $('.header-page__btn').toggleClass('header-page__btn_hidden');
        $('.header-page__user-login').toggleClass('header-page__user-login_opened');
        $('body').toggleClass('body-hidden');
	});

    $('.header-page__search-loupe').click(function(){
		$('.header-page__search').toggleClass('header-page__search_opened');
	});

    $('.header-page__search-loupe').click(function(){
		$('.header-page').toggleClass('header-page_active-search');
	});
});

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();
