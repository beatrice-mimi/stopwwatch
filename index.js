let secondsElapesd = 0;
let interval = null;
const time = document.getElementById("time")


 function padStart(value) {
    return String(value) .padStart(2,"0")
 }

function setTime() {
    const  minutes =    Math.floor(secondsElapesd /60)  
    const seconds = secondsElapesd % 60
      time.innerHTML = `${padStart(minutes)}: ${padStart(seconds)}`;
}

function timer(){
    secondsElapesd ++;
    setTime() 
}
function startClock(){
      if (interval) stopClock()
    interval = setInterval(timer, 1000)
}

function stopClock(){
    clearInterval(interval)
}

function resetClock() {
    stopClock()
    secondsElapesd = 0;
    setTime
}