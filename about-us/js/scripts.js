$( document ).ready(function() {

    $('.page-header__btn').click(function(){
		$(this).toggleClass('page-header__btn_opened');
	});

    $('.page-header__btn').click(function(){
		$('.page-header__mob-dropdown_navi').toggleClass('page-header__mob-dropdown_opened');
        $('body').toggleClass('body-hidden');
	});

    $('.page-header__user-btn').click(function(){
		$('.page-header__mob-dropdown_active').toggleClass('page-header__mob-dropdown_opened');
        $('.page-header__btn').toggleClass('page-header__btn_hidden');
        $('.page-header__user-btn').toggleClass('page-header__user-btn_opened');
        $('body').toggleClass('body-hidden');
	});

    $('.page-header__user-login').click(function(){
		$('.page-header__mob-dropdown_register').toggleClass('page-header__mob-dropdown_opened');
        $('.page-header__btn').toggleClass('page-header__btn_hidden');
        $('.page-header__user-login').toggleClass('page-header__user-login_opened');
        $('body').toggleClass('body-hidden');
	});

    $('.page-header__search-loupe').click(function(){
		$('.page-header__search').toggleClass('page-header__search_opened');
	});

    $('.page-header__search-loupe').click(function(){
		$('.page-header').toggleClass('page-header_active-search');
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
