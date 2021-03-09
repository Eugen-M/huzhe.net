$( document ).ready(function() {
    // click catalog button more
    $('.catalog__more').click(function(){
        if (!($(this).parent(".catalog__box").hasClass("catalog__box_opened"))) {
            $(this).siblings(".catalog__list_hidden").slideDown();
            $(this).parents(".catalog__box").addClass("catalog__box_opened");
        }
        else {
            $(this).siblings(".catalog__list_hidden").slideUp();
            $(this).parents(".catalog__box").removeClass("catalog__box_opened");
        }
	});
});
