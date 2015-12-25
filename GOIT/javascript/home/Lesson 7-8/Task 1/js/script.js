		$('.menu_item:first').addClass ('active');
    	$('#cont_tab1').addClass ('cont_active');
    	
    	$(".menu_item").mouseover(function () {
		$(this).addClass("hover");
		});
		$(".menu_item").mouseout(function () {
		$(this).removeClass("hover");
		});


   		$('.menu_item').on('click', function(){
		$(this).addClass('active').siblings().removeClass('active')
         .parents('.container').find('.cont').hide().eq($(this).index()).fadeIn(150);

	});

