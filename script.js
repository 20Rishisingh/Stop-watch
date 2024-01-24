var timerInMs = 0;
var timer = 0;

let start = document.getElementById("start");
start.addEventListener("click", startTimer);

let pause = document.getElementById("pause");
pause.addEventListener("click", pauseTimer);

let reset = document.getElementById("reset");
reset.addEventListener("click", resetTimer);

function startTimer(){
   timer = setInterval(() => {
      timerInMs += 10;
      updateTimer(timerInMs);
   }, 10);
}

function pauseTimer(){
   clearInterval(timer);
}

function resetTimer(){
   clearInterval(timer);
   timerInMs = 0;
   updateTimer(timerInMs);
}

function updateTimer(timerInMs){
   const sec = Math.floor(timerInMs / 1000);
   const min = Math.floor(timerInMs / 60000);
   const ms = (timerInMs % 1000) / 10;

   document.getElementById("min").innerText = min < 10 ? "0" + min % 60 : min % 60;
   document.getElementById("sec").innerText = sec < 10 ? "0" + sec % 60 : sec % 60;
   document.getElementById("ms").innerText = ms;

}