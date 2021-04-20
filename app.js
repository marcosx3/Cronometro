
var h = 0;
var m = 0;
var s = 0;

var tempo = 100;// milesimo de segundo
var crono;

//function for start the timer
function start() {
  crono = setInterval(() => {timer();}, tempo);

}

function pause() {
  clearInterval(crono);
  
}

function stop() {
  clearInterval(crono);
  h = 0;
  m = 0;
  s = 0;
  document.getElementById('contador').innerText ='00:00:00'
}

function timer() {
  s++;
  if (s == 59) {
    s = 0;
    m++;
    if (m == 59) {
      m = 0;
      h++;


    }
  }
  var format = (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
  document.getElementById('contador').innerText = format;
}