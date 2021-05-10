// Convert time to a format of hours, minutes, seconds, and milliseconds

function timeToString(time) {

    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
  
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
  
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
  
    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);
  
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    //list of techs and their time intervals
    if(formattedMM == 0 && formattedSS == 2){
      currentTech.innerHTML = tech1.innerHTML;
    }
    if (formattedMM == 0 && formattedSS == 4){
      currentTech.innerHTML = tech2.innerHTML;
    }
    if (formattedMM == 0 && formattedSS == 6){
      currentTech.innerHTML = tech3.innerHTML;
    }    
    if (formattedMM == 0 && formattedSS == 8){
      currentTech.innerHTML = tech4.innerHTML;
    }    
    if (formattedMM == 0 && formattedSS == 10){
      currentTech.innerHTML = tech5.innerHTML;
    }    
    if (formattedMM == 0 && formattedSS == 12){
      currentTech.innerHTML = tech6.innerHTML;
    }    
    if (formattedMM == 0 && formattedSS == 14){
      currentTech.innerHTML = tech7.innerHTML;
    }    
    if (formattedMM == 0 && formattedSS == 16){
      currentTech.innerHTML = tech8.innerHTML;
    }    
    if (formattedMM == 0 && formattedSS == 18){
      currentTech.innerHTML = tech9.innerHTML;
    }    
    if (formattedMM == 0 && formattedSS == 20){
      currentTech.innerHTML = tech9.innerHTML;
    }    
    if (formattedMM == 0 && formattedSS == 22){
      currentTech.innerHTML = tech10.innerHTML;
    }    
    if (formattedMM == 0 && formattedSS == 24){
      currentTech.innerHTML = tech11.innerHTML;
    }    
    if (formattedMM == 0 && formattedSS == 26){
      currentTech.innerHTML = tech12.innerHTML;
    }    
    if (formattedMM == 0 && formattedSS == 28){
      currentTech.innerHTML = tech13.innerHTML;
    }    
    if (formattedMM == 0 && formattedSS == 30){
      currentTech.innerHTML = tech14.innerHTML;
    }    

    return `${formattedMM}:${formattedSS}:${formattedMS}`;
      }

  
  // Declare variables to use in our functions below
  
  let startTime;
  let elapsedTime = 0;
  let timerInterval;

  const currentTech =  document.querySelector("#currentTech");
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


  // Create function to modify innerHTML
  
  function print(txt) {
    document.getElementById("display").innerHTML = txt;
  }
  
  // Create "start", "pause" and "reset" functions
  
  function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime;
      print(timeToString(elapsedTime));
    }, 10);
    showButton("PAUSE");
  }
  
  function pause() {
    clearInterval(timerInterval);
    showButton("PLAY");
  }
  
  function reset() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    showButton("PLAY");
    currentTech.innerHTML = "Current Tech";
  }
  
  // Create function to display buttons
  
  function showButton(buttonKey) {
    const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
    const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
  }
  // Create event listeners
  
  let playButton = document.getElementById("playButton");
  let pauseButton = document.getElementById("pauseButton");
  let resetButton = document.getElementById("resetButton");
  
  playButton.addEventListener("click", start);
  pauseButton.addEventListener("click", pause);
  resetButton.addEventListener("click", reset);

  //Testing
