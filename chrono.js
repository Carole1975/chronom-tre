var startTime = 0;
var start = 0;
var stop = 0;
var diff = 0;
var timerID = 0;

//window.onload = chronoStart;   // Le chronomètre démarre automatiquement.

 function chrono(){
	stop = new Date();
	diff = stop - start;
	diff = new Date(diff);
	var msec = diff.getMilliseconds();
	var sec = diff.getSeconds();
	var min = diff.getMinutes();
	var hr = diff.getHours()-1;
	if (min < 59){
		min = "0" + min;
	}
	if (sec < 59){
		sec = "0" + sec;
	}
	if(msec < 59){
		msec = "00" +msec;
	}
	else if(msec < 100){
		msec = "0" +msec;
	}
	document.getElementById("chronotime").value = hr + ":" + min + ":" + sec + ":" + msec
	timerID = setTimeout("chrono()", 59);
}
 function chronoStart(){
	document.chronoForm.start.value = "start";
	document.chronoForm.start.onClick = chronoStop;
	document.chronoForm.reset.onClick = chronoReset;
	start = new Date();
	chrono();
}
 function chronoContinue(){
	document.chronoForm.start.value = "start";
	document.chronoForm.start.onClick = chronoStop;
	document.chronoForm.reset.onClick = chronoReset;
	start= new Date()-diff;
	start= new Date(start);
	chrono();
}
 function chronoReset(){
	document.getElementById("chronotime").value = "0:00:00:000"
	start = new Date();
}

 function chronoStop(){
	document.chronoForm.stop.value = "stop";
	document.chronoForm.stop.onClick = chronoStop;
	document.chronoForm.reset.onClick = chronoReset;
	
	if(on===true){
		on = false;
		clearTimeOut(timerID);
	}
	
	timerID = clearTimeOut("chrono()", 0);

};