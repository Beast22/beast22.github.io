var date1 = new Date();
var buttons = document.querySelector(".buttons_group");
buttons.classList.add('column-group', 'push-center');

var display = document.querySelector("#display");
display.classList.add('ink-flex');
// display.style.position = "relative";
// display.style.top = "2em";
display.style.marginLeft = "1em";
display.style.width = "130px";

var start = document.querySelector("#start");
start.classList.add('ink-button', 'green');
start.addEventListener('click', startTimer );

var stop  = document.querySelector("#stop");
stop.classList.add('ink-button', 'blue');
stop.addEventListener('click', pauseTimer );

var reset = document.querySelector("#clear");
reset.classList.add('ink-button', 'red');
var intervalId;

var counter_title = document.querySelector('.counter_title');
counter_title.classList.add('fw-500', 'ink-flex', 'push-center');







function displayTime(){
  var date2 = new Date();
	var timeDiff = Math.abs(date2.getTime() - date1.getTime());
	var diffDate = new Date(timeDiff);  
	
  display.innerHTML = diffDate.toUTCString().replace(/.*([0-9][0-9]:[0-9][0-9]:[0-9][0-9]).*/,'$1') + ":" + diffDate.getMilliseconds();

  var time = diffDate.toUTCString().replace(/.*([0-9][0-9]:[0-9][0-9]:[0-9][0-9]).*/,'$1') + ":" + diffDate.getMilliseconds();
}

reset.addEventListener("click", function(){
display.innerHTML = '00:00:00:000';
clearInterval(intervalId);
start.style.display = "inline-block";
stop.style.display = "none";
	var diffDate = new Date(0); 
	seconds = 0;
	minutes = 0;
	hours = 0;
});

function startTimer(){
	intervalId = setInterval(displayTime, 4);
	start.addEventListener("click", pauseTimer);
}

function pauseTimer(){
	start.innerHTML = 'Continue';
	clearInterval(intervalId);
	displayTime.innerHTML = diffDate.toUTCString().replace(/.*([0-9][0-9]:[0-9][0-9]:[0-9][0-9]).*/,'$1') + ":" + diffDate.getMilliseconds(); 
	start.removeEventListener("click", pauseTimer);
	start.addEventListener("click", startTimer);
}



