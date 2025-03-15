function formatPrice(price, separator){
    var separator = separator || ".";
    var priceTxt = "";
    var price = String(price);
    if ( price.indexOf( separator ) !== -1 ){
        var postfix = price.split( separator )[1];
        postfix = "" + postfix + "00";
        priceTxt = "" + price.split( separator )[0] + separator + postfix.substr(0,2);
    }else{
        priceTxt = "" + price + separator + "00";
    }
    return priceTxt
}

$(document).ready(function(){
    $(window).resize(function(){
        adapate();
    });

    $('.owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        navText: ['<img src="/templates/_default_/images/nav_arrow_left.png" alt="">', '<img src="/templates/_default_/images/nav_arrow_right.png" alt="">'],
        loop: true,
        mouseDrag: false,
        touchDrag: false
    });


    //Открытие меню на мобилке
    $('#burger').click(function () {
       $('.topmenu .menu').slideToggle();
    });

    $('input.icheck').iCheck({
        checkboxClass: 'icheckbox_minimal-orange'
    });

	$('#bgmodal').click(function(){
		$('#popup').fadeOut();
		$('#bgmodal').fadeOut();
	});

	$('#popup').click(function(ev){
		$('#popup').fadeOut();
	});

	$('#popup .popup_form').click(function(ev){
		ev.stopPropagation();
	});


	$('#bgmodal_visible').click(function(){
		$('#popup_visible').fadeOut();
		$('#bgmodal_visible').fadeOut();
	});

	$('.phone-input').mask('+7 (000) 000-00-00');

	$('#mcart').click(function () {
	    getCart();
    });

    $('.searchblock .search-ico').click(function () {
       $('.search-popup').fadeToggle();
    });


    // Grab the current date
    var currentDate = new Date();
    // Set some date in the future. In this case, it's always Jan 1
    var futureDate  =new Date( currentDate.getTime() + 40*60 *1000 );
    // Calculate the difference in seconds between the future and current date
    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
    // Instantiate a coutdown FlipClock


    FlipClock.Lang.Custom = { days:'Дней', hours:'Часов', minutes:'минут', seconds:'секунд' };
    var opts = {
        clockFace: 'MinuteCounter',
        countdown: true,
        language: 'Custom'
    };

    $("#countdown").FlipClock(diff, opts);


    AOS.init({
        duration: 500,
        disable: 'mobile'
    });

    adapate();


    $('.burger').click(function () {
        $('.header .topmenu').slideToggle();
    });
});


function adapate(){

    var bannerWidth = Math.min(1920,$(window).innerWidth());

    $("#slides_89, #slides_89 .slide").width(bannerWidth);
}



function openbox(id, popup_form, formname, formtitle) {
    var div = document.getElementById(id);
    var popup_form = popup_form || '#popup_form_window';
    $(popup_form).find('input.form-name').val(formname);
    $(popup_form).find('input.form-title').val(formtitle);
    $(popup_form).find('.form_title span').html(formtitle);
    // var popup_div = document.getElementById(popup_form);
    //$('#' + id + ' > div').hide();
   /* $(popup_div).show();*/

    if(div.style.display == 'block') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
        fixModalPosition(popup_form, div);
        $(popup_form).fadeIn();
    }
}

function fixModalPosition(form, layer) {
    var wh = $(window).height();
    var ww = $(window).width();
    $(form).show();
    var mh = $(form).outerHeight();

    var body = document.body,
        html = document.documentElement;
    var docheight = Math.max( body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight );
    if ((mh > wh)|| (ww < 600)){
        var marginTop = ( 40 );
        $(form).css('position', 'absolute')
            .css('top', window.pageYOffset)
            .css('margin-top', 40);
        $('body').css('min-height', mh+40);
        $(layer).addClass('absolute');
        $(layer).css('height', Math.max(docheight, mh+40, wh));
    }else{
        var marginTop = ( wh - mh)/2;
        $(form).css('position', 'fixed')
            .css('top', marginTop)
            .css('margin-top', 40);
        //$(layer).removeClass('absolute');
        //$(layer).css('height', '100%');
        $(layer).css('height', Math.max(docheight, mh+40, wh));
    }
    //$(form).css('margin-top', $(document).scrollTop() + marginTop);
}


function toggleFilters() {
    $('.sidebar').slideToggle();
}
