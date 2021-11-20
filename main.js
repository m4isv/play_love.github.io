//video
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = '<i class="material-icons"> videocam </i>';
	
  } else {
    video.pause();
    btn.innerHTML = '<i class="material-icons"> videocam_off </i>';
  }
}



//audio
var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 
