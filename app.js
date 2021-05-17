let techVideos = [
  'techVideos/DashDanceWaveDash.mp4',
  'techVideos/Waveshine.mp4',
  'techVideos/WavedashOOS.mp4',
  'techVideos/SpacedAerials.mp4',
  'techVideos/FastSHL.mp4',
  'techVideos/LowLaserHighLaser.mp4',
  'techVideos/FullhopLasers.mp4',
  'techVideos/DropThroughLasers.mp4',
  'techVideos/PlatLasers.mp4',
  'techVideos/SHFFLs.mp4',
  'techVideos/WestballzShines.mp4',
  'techVideos/ShineOOS.mp4',
  'techVideos/LaserJumpShine.mp4',
  'techVideos/PlatMovement.mp4',
  'techVideos/ShineWaveland.mp4',
  'techVideos/ShielddropShine.mp4',
  'techVideos/Side-BShorten.mp4',
  'techVideos/Side-BSweetspot.mp4',
  'techVideos/Up-BAngles.mp4',
  'techVideos/LedgeRefresh.mp4',
  'techVideos/Ledgedash.mp4',
  'techVideos/DoubleLasers.mp4',
  'techVideos/LedgehopWaveland.mp4',
  'techVideos/ShineTurnaroundWavedashBacktoLedge.mp4',
]

let conditon = [
  { mmm: 00, sss: 00},
  { mmm: 00, sss: 30},
  { mmm: 01, sss: 00},
  { mmm: 01, sss: 30},
  { mmm: 02, sss: 00},
  { mmm: 02, sss: 30},
  { mmm: 03, sss: 00},
  { mmm: 03, sss: 30},
  { mmm: 04, sss: 00},
  { mmm: 04, sss: 30},
  { mmm: 05, sss: 00},
  { mmm: 05, sss: 30},
  { mmm: 06, sss: 00},
  { mmm: 06, sss: 30},
  { mmm: 07, sss: 00},
  { mmm: 07, sss: 30},
  { mmm: 08, sss: 00},
  { mmm: 08, sss: 30},
  { mmm: 09, sss: 00},
  { mmm: 09, sss: 30},
  { mmm: 10, sss: 00},
  { mmm: 10, sss: 30},
  { mmm: 11, sss: 00},
  { mmm: 11, sss: 30},
  { mmm: 12, sss: 00},
  { mmm: 15, sss: 00},
]

const tech1 = document.querySelector("#tech1");
const tech2 = document.querySelector("#tech2");
const tech3 = document.querySelector("#tech3");
const tech4 = document.querySelector("#tech4");
const tech5 = document.querySelector("#tech5");
const tech6 = document.querySelector("#tech6");
const tech7 = document.querySelector("#tech7");
const tech8 = document.querySelector("#tech8");
const tech9 = document.querySelector("#tech9");
const tech10 = document.querySelector("#tech10");
const tech11 = document.querySelector("#tech11");
const tech12 = document.querySelector("#tech12");
const tech13 = document.querySelector("#tech13");
const tech14 = document.querySelector("#tech14");
const tech15 = document.querySelector("#tech15");
const tech16 = document.querySelector("#tech16");
const tech17 = document.querySelector("#tech17");
const tech18 = document.querySelector("#tech18");
const tech19 = document.querySelector("#tech19");
const tech20 = document.querySelector("#tech20");
const tech21 = document.querySelector("#tech21");
const tech22 = document.querySelector("#tech22");
const tech23 = document.querySelector("#tech23");
const tech24 = document.querySelector("#tech24");
const tech25 = document.querySelector("#tech25");

let techList = [
  tech1, 
  tech2, 
  tech3, 
  tech4, 
  tech5, 
  tech6,  
  tech7, 
  tech8, 
  tech9, 
  tech10, 
  tech11, 
  tech12, 
  tech13, 
  tech14, 
  tech15, 
  tech16,
  tech17,
  tech18,
  tech19,
  tech20,
  tech21,
  tech22,
  tech23,    
  tech24,
  tech25,    
]


const currentTech = document.querySelector('#currentTech')
const tech = document.querySelectorAll('#tech')
let conditonInt = 0

// Convert time to a format of hours, minutes, seconds, and milliseconds
let j = 1
function timeToString(time) {
  let { mmm, sss, mss } = conditon[conditonInt]

  let diffInHrs = time / 3600000
  let hh = Math.floor(diffInHrs)

  let diffInMin = (diffInHrs - hh) * 60
  let mm = Math.floor(diffInMin)

  let diffInSec = (diffInMin - mm) * 60
  let ss = Math.floor(diffInSec)

  let diffInMs = (diffInSec - ss) * 100
  let ms = Math.floor(diffInMs)

  var formattedMM = mm.toString().padStart(2, '0')
  var formattedSS = ss.toString().padStart(2, '0')
  var formattedMS = ms.toString().padStart(2, '0')

  if (mm === mmm && ss === sss) {
    changeCurrentTech();
    console.log(`mmm ${mmm}, sss ${sss}`);
    conditonInt++
  }

  if (mm === 15 && ss === 0) {
    console.log("End");
    pause();
  }

  return `${formattedMM}:${formattedSS}:${formattedMS}`
}

var source = document.getElementById('source')
////////////// change the current tech by each time incremenet
let current_state = 0
function changeCurrentTech() {

  let link = techVideos[current_state]
  currentTech.innerHTML = techList[current_state].innerHTML
  source.setAttribute('src', link)
  video.load()

  current_state++
}

// Declare variables to use in our functions below

let startTime
let elapsedTime = 0
let timerInterval

// Create function to modify innerHTML
function print(txt) {
  document.getElementById('display').innerHTML = txt
}

// Create "start", "pause" and "reset" functions
function start() {
  startTime = Date.now() - elapsedTime
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime
    print(timeToString(elapsedTime))
    if(elapsedTime === 1500000){
      pause();
      return console.log("15 minutes have passed.");
    }
  }, 10)
  showButton('PAUSE')
}

function pause() {
  clearInterval(timerInterval)
  showButton('PLAY')
}

function reset() {
  // clearInterval(timerInterval)
  // print('00:00:00')
  // elapsedTime = 0
  // showButton('PLAY')
  // current_state = 0
  // conditonInt = 0
  // tech.forEach((e) => e.classList.remove('goldText'))
  location.reload();
}

// Create function to display buttons
function showButton(buttonKey) {
  const buttonToShow = buttonKey === 'PLAY' ? playButton : pauseButton
  const buttonToHide = buttonKey === 'PLAY' ? pauseButton : playButton
  buttonToShow.style.display = 'block'
  buttonToHide.style.display = 'none'
}

// Create event listeners
let playButton = document.getElementById('playButton')
let pauseButton = document.getElementById('pauseButton')
let resetButton = document.getElementById('resetButton')

playButton.addEventListener('click', start)
pauseButton.addEventListener('click', pause)
resetButton.addEventListener('click', reset)

//Testing
document.getElementById('saveForLater').onclick = function () {
  if (techList[current_state - 1].classList.contains('whiteText')) {
    techList[current_state - 1].classList.remove('whiteText')
    techList[current_state - 1].classList.add('goldText')
  } else if (techList[current_state - 1].classList.contains('goldText')) {
    techList[current_state - 1].classList.remove('goldText')
    techList[current_state - 1].classList.add('whiteText')
  }
}

let
