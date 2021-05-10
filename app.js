// Convert time to a format of hours, minutes, seconds, and milliseconds
let j = 1;
let k = 0;

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

    function changeCurrentTech(){
      currentTech.innerHTML = techList[k].innerHTML;
      k++;
    }

    function nextVideo(){
      video.removeChild(source);
      source.setAttribute('src', techVideos[j]);
      video.appendChild(source);
      video.load();
      j++;
      console.log(j);
    }

    if(formattedMM === "00" && formattedSS === "00" && formattedMS === "10"){
      changeCurrentTech();
      source.setAttribute('src', techVideos[0]);
      video.appendChild(source);
      video.load();
      console.log(j);
    }
    if (formattedMM === "00" && formattedSS === "01" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }
    if (formattedMM === "00" && formattedSS === "02" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }    
    if (formattedMM === "00" && formattedSS === "03" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }    
    if (formattedMM === "00" && formattedSS === "04" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }    
    if (formattedMM === "00" && formattedSS === "05" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }    
    if (formattedMM === "00" && formattedSS === "06" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }    
    if (formattedMM === "00" && formattedSS === "07" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }    
    if (formattedMM === "00" && formattedSS === "08" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }    
    if (formattedMM === "00" && formattedSS === "09" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }    
    if (formattedMM === "00" && formattedSS === "10" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }    
    if (formattedMM === "00" && formattedSS === "11" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }    
    if (formattedMM === "00" && formattedSS === "12" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }    
    if (formattedMM === "00" && formattedSS === "13" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
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

  let techList = [tech1, tech2, tech3, tech4, tech5, tech6,  tech7, tech8, tech9, tech10, tech11, tech12, tech13, tech14]

  let techVideos= ["https://thumbs.gfycat.com/YawningReflectingDuiker-mobile.mp4", 
  "https://thumbs.gfycat.com/EcstaticRedHedgehog-mobile.mp4", 
  "https://thumbs.gfycat.com/MiserableUnfortunateAsianlion-mobile.mp4",
  "https://thumbs.gfycat.com/YawningReflectingDuiker-mobile.mp4", 
  "https://thumbs.gfycat.com/EcstaticRedHedgehog-mobile.mp4", 
  "https://thumbs.gfycat.com/MiserableUnfortunateAsianlion-mobile.mp4",
  "https://thumbs.gfycat.com/YawningReflectingDuiker-mobile.mp4", 
  "https://thumbs.gfycat.com/EcstaticRedHedgehog-mobile.mp4", 
  "https://thumbs.gfycat.com/MiserableUnfortunateAsianlion-mobile.mp4",
  "https://thumbs.gfycat.com/YawningReflectingDuiker-mobile.mp4", 
  "https://thumbs.gfycat.com/EcstaticRedHedgehog-mobile.mp4", 
  "https://thumbs.gfycat.com/MiserableUnfortunateAsianlion-mobile.mp4",
  "https://thumbs.gfycat.com/YawningReflectingDuiker-mobile.mp4", 
  "https://thumbs.gfycat.com/EcstaticRedHedgehog-mobile.mp4", 
  ]

  var video = document.getElementById('video');
  var source = document.createElement('source');




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
    currentTech.innerHTML = "Press Play to Start";
    video.pause();
    j = 1;
    k = 0;
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