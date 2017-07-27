var TIMEOUT_IN_SECS = 15*60
var TEMPLATE = '<h1 id="timer"><span id="timer-minutes">00</span>:<span id="timer-seconds">00</span></h1>'

// adds HTML tag to current page
var timerContainer = document.createElement('div')
timerContainer.setAttribute("style", "position: fixed; z-index: 1000; background-color: black; opacity: 0.6;")
var bodyTag = document.body
bodyTag.insertBefore(timerContainer, bodyTag.firstChild)
timerContainer.innerHTML = TEMPLATE
document.getElementById('timer').setAttribute("style", "color: white; font-size: 50px; background-color: black;")


function getTimestampInSecs(){
  var timestampInMilliseconds = new Date().getTime()
  return Math.round(timestampInMilliseconds/1000)
}

function padZero(number){
  return ("00" + String(number)).slice(-2);
}

var timestampOnStart = getTimestampInSecs()

function displayTimer(){
  var currentTimestamp = getTimestampInSecs()
  var secsGone = currentTimestamp - timestampOnStart
  var secsLeft = Math.max(TIMEOUT_IN_SECS - secsGone, 0)

  var minutes = Math.floor(secsLeft / 60);
  var seconds = secsLeft - minutes * 60;

  document.getElementById('timer-minutes').innerHTML = padZero(minutes)
  document.getElementById('timer-seconds').innerHTML = padZero(seconds)
}

function timeOutAlert(){
  setInterval(function() {alert( "Хватит в интернетах своих сидеть! Иди делом займись!" );}, 30*1000);      
}

setInterval(displayTimer, 300)
setTimeout(timeOutAlert, TIMEOUT_IN_SECS*1000)
