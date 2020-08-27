//set canvas to id variable
var canvas = document.getElementById("draw");

//get canvas 2d context and set it to the correct size
var ctx = canvas.getContext("2d");
resize();

//resize canvas when window is resized
function resize(){
    ctx.canvas.width = window.innerWidth*.75;
    ctx.canvas.height = window.innerHeight;
}
//brush size function
var brush = 20;

function setBrush(type) {
  switch (type) {
    case 'large':
      brush = 55;
      break;
    case 'medium':
      brush = 20;
      break;
    case 'small':
        brush = 3;
        break;
  }
}
//clear canvas button
document.getElementById("clear").addEventListener('click', 
function (){
    ctx.clearRect(0,0,canvas.width, canvas.height);
}, false);

//fill canvas button
document.getElementById("fill").addEventListener('click', 
function (){
    ctx.fillStyle= document.getElementById("hex").value;
    ctx.fillRect(0,0,canvas.width, canvas.height);
}, false);

document.body.style.margin = 0;
canvas.style.position = 'fixed';

//event listeners main
window.addEventListener("resize", resize);

document.addEventListener("mouseenter", setPosition);
document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);

//last known position
var pos = { x: 0, y: 0};

//new pos from mouse events
function setPosition(e){
    pos.x = e.offsetX;
    pos.y = e.offsetY;
}

function draw(e){
    if(e.buttons !== 1) return;
    var color = document.getElementById("hex").value;
    ctx.beginPath();

    //line properties
    
    ctx.lineWidth = brush;
    ctx.lineCap = "round";
    ctx.strokeStyle = color;

    //draw line
    ctx.moveTo(pos.x, pos.y);
    setPosition(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
}

//answer:
var answer = document.getElementById("answer");
var message = document.getElementById("message");

function check(){
    if (message==answer){
        
    }
}