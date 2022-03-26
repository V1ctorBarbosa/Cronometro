window.onload = function(){

    var minutes = 00;
    var seconds = 00;
    var tens = 00;
    var appendMinutes = document.getElementById("minutes");
    var appendSeconds = document.getElementById("seconds");
    var appendTens = document.getElementById("tens");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset"); 
    var interval;

    buttonStart.onclick = function() {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function(){
        clearInterval(interval);
    }

    buttonReset.onclick = function() {
        clearInterval(interval);
        minutes = "00";
        tens = "00";
        seconds = "00";

        appendMinutes.innerHTML = minutes;
        appendSeconds.innerHTML = seconds;
        appendTens.innerHTML = tens;
    }

    function startTimer() {
        tens++;

        if(tens <= 9){
            appendTens.innerHTML = "0" + tens; 
        }

        if(tens > 9){
            appendTens.innerHTML = tens;
        }

        if(tens > 99){
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0; 
        }
        if(seconds > 59) {
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0;
        }
        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
        if(minutes > 9) {
            appendMinutes.innerHTML = minutes;
        }
    }
}