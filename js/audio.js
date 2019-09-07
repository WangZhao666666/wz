var audio=document.getElementById('audio');
var playpause=document.getElementById('play-pause');
var volume=document.getElementById('volume');
var img=document.getElementById('img');
var i=0;
var timer;
audio.controls=false;
function togglePlayPause() {
    if (audio.paused || audio.ended) {
     playpause.title='暂停';
     playpause.innerHTML='<i class="fa fa-pause fa-3x"></i>';
     audio.play();
     timer=setInterval(rotate,100);
    }else {
        playpause.title='播放';
        playpause.innerHTML='<i class="fa fa-play fa-3x"></i>';
        audio.pause();
        clearInterval(timer);
    }
}
function setVolume() {
    audio.volume=volume.value;
}
function rotate() {
    img.style.transform='rotate('+i+'deg)';
    i++;
}