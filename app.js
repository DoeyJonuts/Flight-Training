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
    if (formattedMM === "00" && formattedSS === "30" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }
    if (formattedMM === "01" && formattedSS === "00" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }    
    if (formattedMM === "01" && formattedSS === "30" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }    
    if (formattedMM === "02" && formattedSS === "00" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }    
    if (formattedMM === "02" && formattedSS === "30" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }    
    if (formattedMM === "03" && formattedSS === "00" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }    
    if (formattedMM === "03" && formattedSS === "30" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }    
    if (formattedMM === "04" && formattedSS === "00" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }    
    if (formattedMM === "04" && formattedSS === "30" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }    
    if (formattedMM === "05" && formattedSS === "00" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }    
    if (formattedMM === "05" && formattedSS === "30" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }    
    if (formattedMM === "06" && formattedSS === "00" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }    
    if (formattedMM === "06" && formattedSS === "30" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }
    if (formattedMM === "07" && formattedSS === "00" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }    
    if (formattedMM === "07" && formattedSS === "30" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }     if (formattedMM === "08" && formattedSS === "00" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }    
    if (formattedMM === "08" && formattedSS === "30" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }     if (formattedMM === "09" && formattedSS === "00" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }    
    if (formattedMM === "09" && formattedSS === "30" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }     if (formattedMM === "10" && formattedSS === "00" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }    
    if (formattedMM === "10" && formattedSS === "30" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }     if (formattedMM === "11" && formattedSS === "00" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }    
    if (formattedMM === "11" && formattedSS === "30" && formattedMS === "10"){
      changeCurrentTech();
      nextVideo();
    }
    if (formattedMM === "12" && formattedSS === "00" && formattedMS === "10"){
      currentTech.innerHTML = "Practice the Tech you frequently missed for 3 minutes";
      video.pause();
    }
    if (formattedMM === "15" && formattedSS === "00" && formattedMS === "00"){
      currentTech.innerHTML = "Nice work!";
      pause();
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
  ]

  let techVideos= [
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
  "https://thumbs.gfycat.com/MiserableUnfortunateAsianlion-mobile.mp4" 
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
    k = 0;
    for(j = 1; j <= techList.length; j++){
    techList[j-1].style.color = 'white';
    }
    j = 1;
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
  document.getElementById("saveForLater").onclick = function (){
    if(techList[j-1].style.color = 'white'){
    techList[j-1].style.color = 'gold';
    } else if (techList[j-1].style.color = 'gold'){
      techList[j-1].style.color = 'white';
    }
  }