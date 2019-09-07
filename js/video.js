var myVideo=document.getElementById("myVideo");
function playPause() {
    var ppButton=document.getElementById("playPause");
    if (myVideo.paused) {
        myVideo.play();
        ppButton.innerHTML="‘› Õ£";

    }else {
        myVideo.pause();
        ppButton.innerHTML="≤• ∑≈";
    }
}
function goback(val) {
    myVideo.currentTime+=val;
}
function volume(val) {
    myVideo.volume+=val;
}
function playspeed(val) {
    var slowup=document.getElementById("slowup");
    var slowdown=document.getElementById("slowdown");
    var speed=document.getElementById("playspeed");
    myVideo.playbackRate+=val;
    if (myVideo.playbackRate<=0.5) {
        slowdown.classList.add("disabled");
    }else {
        slowdown.classList.remove("disabled");
    }
    if (myVideo.playbackRate >= 2) {
        slowup.classList.add("disabled");
    }else {
        slowup.classList.remove("disabled");
    }
    speed.innerHTML=myVideo.playbackRate.toFixed(2);
}
function isMuted() {
    var imButton=document.getElementById("isMuted");
    if (myVideo.muted) {
        myVideo.muted=false;
        imButton.innerHTML="æ≤ “Ù";
    }else {
        myVideo.muted=true;
        imButton.innerHTML="…˘ “Ù";
    }
}
function isMenu() {
    var buttonDiv=document.getElementById("buttonDiv");
    if (buttonDiv.style.opacity==="0") {
        buttonDiv.style.zIndex=1;
        opacity(1);
        setTimeout("opacity(0)",3000);
    }else {
        buttonDiv.style.zIndex=-1;
        opacity(0);
    }
}
function opacity(n) {
    var buttonDiv=document.getElementById("buttonDiv");
    buttonDiv.style.opacity=n;
}