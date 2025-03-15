function smoothscrollTo(target){
    target = $(target);
    if (target.length) {
        $('html,body').animate({
            scrollTop: target.offset().top
        }, 1000);
        return false;
    }
}
$(document).ready(function(){
    $(window).resize(function(){
        //adaptate();
    });


    $('#bgmodal').click(function(){
        $('#popup').fadeOut();
        $('#bgmodal').fadeOut();
    });

    $('#popup').click(function(ev){
        $('#popup').fadeOut();
    });

    $('#popup .popup_callback,#popup .popup_question').click(function(ev){
        ev.stopPropagation();
    });


    $('#bgmodal_visible').click(function(){
        $('#popup_visible').fadeOut();
        $('#bgmodal_visible').fadeOut();
    });


    //adapate();

});





$(function(){
    $('#popup').click(function(el){
        if ($(el.target).attr('id') == 'popup'){
            $('#popup').fadeOut();
            $('#popup').removeClass('absolute');
            $('body').css('min-height', 'auto');
        }
    });

    $('.phone-input').mask('+7 (000) 000-00-00');
})