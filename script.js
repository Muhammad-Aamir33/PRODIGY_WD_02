window.onload = function(){

    let seconds = 0;
    let milliseconds = 0;

    let interval;

    const addseconds = document.querySelector(".seconds");
    const addmilliseconds = document.querySelector(".milli");

    const startbtn = document.querySelector(".start");
    const stopbtn = document.querySelector(".stop");
    const resetbtn = document.querySelector(".reset");

    startbtn.onclick = function(){
        clearInterval(interval);
        interval = setInterval(start,10);
    }

    stopbtn.onclick = function(){
        clearInterval(interval);


    }

    resetbtn.onclick = function(){
        clearInterval(interval);
        seconds = 0;
        milliseconds = 0;
        addseconds.innerHTML = "00";
        addmilliseconds.innerHTML = "00";
    }

    function start(){
        milliseconds++;

        if(milliseconds < 10 ){
            addmilliseconds.innerHTML = "0" + milliseconds;
        }else{
            addmilliseconds.innerHTML = milliseconds;
        }


        if(milliseconds > 99){
            seconds++;
            addseconds.innerHTML = seconds < 10 ? "0" + seconds: seconds;
            milliseconds = 0;
            addmilliseconds.innerHTML = "00";
        }
    }





















}