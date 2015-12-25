function prompting(elem){

	$(elem).each(function(num){
		if( $(this).attr('title') != "" && typeof($(this).attr('title')) != "undefined"){
			$("body").append("<div class = 'tooltip" + elem + num + "''>" + $(this).attr('title') + "</div>");

			$(this).mouseover (function(){
				tooltip.fadeIn(300);
			});

			$(this).mouseout (function(){
				tooltip.fadeOut(300);
			});

			$(this).mousemove(function(cursor){
				tooltip.css({
					left: cursor.pageX + 10,
					top: cursor.pageY + 10
				});
			});
		}

	});
}

			var $tooltip = $(".tooltip" + element + num);
$(function(){
	prompting("input");
});