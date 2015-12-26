function prompting(elem){

	$(elem).each(function(num){
		if( $(this).attr('title') != "" && typeof($(this).attr('title')) != "undefined"){
			$("body").append("<div class = 'tooltip" + elem + num + "''>" + $(this).attr('title') + "</div>");
			$tooltip = $(".tooltip" + elem + num);
			$(this).mouseover (function(){
				$tooltip.fadeIn(300);
			});

			$(this).mouseout(function(){
				$tooltip.fadeOut(300);
			});

			$(this).mousemove(function(cursor){
				$tooltip.css({
					left: cursor.pageX + 20,
					top: cursor.pageY + 10
				});
			});
		}

	});

	$("button").click(function() {
		$tooltipAll = $(".tooltip" + elem);
		$tooltipAll.hide();
		// $("[title]").after("<p>");
		// $("p").addClass("tooltip");
		
	});
}

$(function(){
	prompting("input");
});
