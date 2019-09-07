window.onload=function () {
    var myDivs=document.getElementsByTagName("div");
    var myAudios=document.getElementsByTagName("audio");
    for (var i=0;i<36;i++){
        myDivs[i].index=i;
        myDivs[i].onclick=function () {
            myAudios[this.index].load();
            myAudios[this.index].play();
        }
    }
}