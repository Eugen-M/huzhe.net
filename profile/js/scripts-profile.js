$( document ).ready(function() {
    // click for Profile line Online
    $('.profile__info-status').click(function(){
		$(this).parent('.profile__info').toggleClass('profile__info_active');
	});

    // change-tabs
    if ($('.profile__tabs').length) {
        $('.profile__tabs-navi .profile__tabs-link').on('click', function() {
          $('.profile__tabs-wrap .profile__tabs-content').removeClass('profile__tabs-content_active').eq($(this).index()).addClass('profile__tabs-content_active');
          $('.profile__tabs-navi .profile__tabs-link').removeClass('profile__tabs-link_active').eq($(this).index()).addClass('profile__tabs-link_active');
          return false;
        });
    }

    // click for comment date
    $('.comment__info').click(function(){
		$(this).toggleClass('comment__info_active');
	});

    // click for text-more
    $('.comment__btn-more').click(function(){
		$(this).parent('.comment__buttons').addClass('comment__buttons_active');
        $(this).parent('.comment__buttons').siblings('.comment__text').addClass('comment__text_active');
	});

    $('.comment__btn-less').click(function(){
		$(this).parent('.comment__buttons').removeClass('comment__buttons_active');
        $(this).parent('.comment__buttons').siblings('.comment__text').removeClass('comment__text_active');
	});

});
