		$('.menu_item:first').addClass ('active');
    	$('#cont_tab1').addClass ('cont_active');

    $('.menu_item').on('click', function(){
    	$('.menu_item').removeClass('active');
    	$(this).addClass('active');
    	var id = $(this).data('toggle');
 		$('#' + id).addClass('cont_active');
    	$('#' + $(this).data('toggle')).addClass('cont_active');

  //   	var num_active = $('.menu_item').find('.active').index();
  //   	$('#cont_tab').removeClass('cont_active');
		// $('#cont_tab').eq(num_active).addClass('cont_active');
	});

