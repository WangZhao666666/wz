var canvas=document.getElementById("mycanvas");
var context=canvas.getContext("2d");
canvas.width=877;
canvas.height=672;
var img=new Image();
var radius=50;
img.src="img/akl.jpg";
img.onload=function (e) {
    initCanvas();
};
function initCanvas() {
    Region=
        {x:Math.random()*(canvas.width-2*radius)+radius,
            y:Math.random()*(canvas.height-2*radius)+radius,
            r:radius};
            draw(Region);
}
function setRegion(Region) {
    context.beginPath();
    context.arc(Region.x,Region.y,Region.r,0,Math.PI*2,false);
    context.clip();
}
function draw() {
    context.clearRect(0,0,canvas.width,canvas.height);
    context.save();
    setRegion(Region);
    context.drawImage(img,0,0,canvas.width,canvas.height);
    context.restore();
}
function reset() {
    initCanvas();
}
function show() {
    Region.r=2*Math.max(canvas.width,canvas.height);
    draw(img,Region);
}