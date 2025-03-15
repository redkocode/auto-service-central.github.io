    function recalcCart(id, prefix) {
        var prefix = prefix || "";
        var el = $("#"+prefix+"total-"+id);
        if (el.length == 0){
            return;
        }
        var cnt	= parseInt($('#'+prefix+'count_'+id).val());
        var price = parseFloat($('#'+prefix+'count_'+id).data('price'));

        el.html( formatPrice(Math.round(cnt * price*100) /100) );
    }

    function cartPlus(id, prefix){
        var prefix = prefix || '';
        var cnt	= parseInt($('#'+prefix+'count_'+id).val());
        $('#'+prefix+'count_'+id).val(cnt+1);
        return
    }
    function cartMinus(id, prefix){
        var prefix = prefix || '';
        var cnt	= parseInt($('#'+prefix+'count_'+id).val());
        $('#'+prefix+'count_'+id).val( Math.max(1,cnt-1) );
        return
    }

    function addToCart(id){
        var cnt	= parseInt($('#count_'+id).val());
        document.location.href="/catalog/"+id+"/addtocart-"+cnt+".html";
        return;
    }
		
    function addToCartAjax(id){
        var cnt	= parseInt($('#count_'+id).val()) || 1;
        //var cnt = 1;
			
			$.ajax({
			  type: "POST",
			  url: "/components/catalog/ajax/cart.php",
			  data: { item_id: id, qty: cnt },
			  dataType: 'json'
			})
			  .done(function( msg ) {
				
				if (msg['status'] == '1'){
					$('#statusbox').html(LANG_PRODUCT_ADDED_TO  + ' <a href="#" onclick="getCart(); return false;">' + LANG_TO_CART  + '</a>!');
				}else{
					
					$('#statusbox').html( LANG_CANT_ADD_TO_CART  );
				}	
				$('#statusbox').fadeIn('slow');
				setTimeout(function(){$('#statusbox').fadeOut('slow');}, 3000);
				$('#mcart').html('<span>' + msg['cart'] + '</span>').css({'height': '30px', 'width' : '30px'}); /*Author: T.G.*/
               });
			
			return;
		}


        function updateCartOnServer(){
            var json = [];
            $('#orderform .order-row-qty').each(function (index, el) {
                json.push({
                    product_id: el.dataset.productid,
                    qty: el.value
                });

            });

            $.post(
                '/components/catalog/ajax/order.php',
                {act: 'updateCart', data: json},
                function (data) {

                    $('#mcart .content').html( data.cart );
                    if (data.cart == ''){
                        $('#mcart').hide();
                    }else{
                        $('#mcart').show();
                    }


                },
                'json'
            );
        }

function setZeroQty(pid, prefix) {
    var prefix = prefix || '';
    $('#'+ prefix +'count_' + pid).val(0);

}

function changeOrder() {

    var totalsum = 0;
    $('#cartcontentajax .order-row .sum span').map(function(i, el){
        totalsum += parseFloat(  $(el).html().replace(' ','')  );
    });

    var totalcount = 0;
    $('#cartcontentajax .order-row .order-row-qty').each(function(i, el){
        totalcount += parseFloat(  $(el).val() );
    });

    $('.endTable .all-total span').html(  formatPrice(totalsum) + " " + LANG_CURRENCY_SYMBOLS );
    $('.cart-info .cart-total-qty').html(  totalcount + " " + LANG_PRODUCTS_COUNT  );
    $('.cart-info .cart-total-sum').html(  formatPrice(totalsum) );

    $('#mcart span' ).html( totalcount );

    updateCartOnServer();

    $('#cartcontentajax .order-row-qty').each(function (i, el) {
        if ($(el).val() == 0){
            $($(el).closest('.order-row')).remove();
        }

    });


    // var json = [];
    // $('#orderform .order-row-qty').each(function (index, el) {
    //
    //     json.push({
    //         product_id: el.dataset.productid,
    //         qty: el.value
    //     });
    //
    // });
    //
    // $.post(
    //     '/components/catalog/ajax/order.php',
    //     {act: 'updateCart', data: json},
    //     function (data) {
    //
    //         if (data.status == 1) {
    //             $('#cartcontentajax').html(data.cart);
    //
    //         }
    //     },
    //     'json'
    // );

}

function toggleHiddenChars(char_id){
    var linkDiv = $('.char_filter_group_'+char_id+' .show_more_chars a');
    if ($(linkDiv).hasClass('expanded')){
        $('.char_filter_group_'+char_id+' .easyshop_char_value.disabled-expanded').each(function(i,el){

            $(el).animate({height: 0},function(){
                $(this).addClass('disabled');
                $(this).removeClass('disabled-expanded');
                $(el).css('display', 'none');
            } );
        });


        $('.char_filter_group_'+char_id+' .show_more_chars a')
            .removeClass('expanded')
            .html('Еще');
    }else{
        $('.char_filter_group_'+char_id+' .easyshop_char_value.disabled').each(function(i,el){
            $(el).css('height', 'auto');
            var h = $(el).height() + 2;
            $(el).css('height', '0');
            $(el).css('display', 'block');
            $(el).animate({height: h},function(){
                $(this).removeClass('disabled');
                $(this).addClass('disabled-expanded');
            } );
        });
        $('.char_filter_group_'+char_id+' .show_more_chars a').addClass('expanded')
            .html('Свернуть');
    }
}

function getCart() {

    $.get("/catalog/cart.html",
        {},
        function (data) {
            $('#popup_form_window_ajax .ajax-content').html(
                data
            );
            openbox('popup', '#popup_form_window_ajax');
        }
    );

}