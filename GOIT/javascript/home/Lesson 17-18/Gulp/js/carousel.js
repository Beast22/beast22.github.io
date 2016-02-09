$(function(){
	var carousel = $('.jcarousel').jcarousel({
		wrap: 'circular',
		scroll:1,
		auto: 5
	});

 $('.jcarousel-control-prev')
		.on('jcarouselcontrol:active', function() {
			$(this).removeClass('inactive');
		})
		.on('jcarouselcontrol:inactive', function() {
			$(this).addClass('inactive');
		})
		.jcarouselControl({
			target: '-=1'
		});

$('.jcarousel-control-next')
		.on('jcarouselcontrol:active', function() {
			$(this).removeClass('inactive');
		})
		.on('jcarouselcontrol:inactive', function() {
			$(this).addClass('inactive');
		})
		.jcarouselControl({
			target: '+=1'
		});

$('.jcarousel-pagination')
		.on('jcarouselpagination:active', 'a', function() {
			$(this).addClass('active');
		})
		.on('jcarouselpagination:inactive', 'a', function() {
			$(this).removeClass('active');
		})
		.jcarouselPagination();

$('.jcarousel').jcarousel({
    animation: {
        duration: 300,
        easing: 'linear'
        // complete: function() {} 
    } 
});

$('.jcarousel').jcarouselAutoscroll({
          interval: 3000,
          target: '+=1',
          autostart: true
        });
	
});


// Jcusel 

var params = {
        changedEl: "#confession",
        visRows: 8,
    }
    cuSel(params);
    
var params = {
        changedEl: "#zodiac",
        visRows: 5,
        scrollArrows: true
    }
    cuSel(params);

// checkboxes

$(function(){

	$(".niceCheck").mousedown(
	function() {
	     
	     changeCheck($(this));
	});
});

$(".niceCheck").each(
function(){
	changeCheckStart($(this));
});


function changeCheck(el)

{
	var el = el,
	input = el.find("input").eq(0);

	if(!input.attr("checked")){
		el.css("background-position","0 -17px");
		input.attr("checked", true)
		} else{
			el.css("background-position","0 0");
			input.attr("checked", false)
		}

		return true;
	}

	function changeCheckStart(el)

	{
	var el = el,
		input = el.find("input").eq(0);
		if(input.attr("checked")){
		el.css("background-position","0 -17px");
		}	
		return true;
	}