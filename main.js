var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var clear = document.getElementById('clear');

var radius = 10;
//whether mouse button is held down
var dragging = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineWidth = radius*2;



var putPoint = function (e) {
  if (dragging) {
  context.lineTo(e.clientX, e.clientY);
  context.stroke();
  context.beginPath();
  //context.arc(x, y, radius, start, end);
  // context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI*2);
  //clientX cross browser friendly
  context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
  context.fill();
  context.beginPath();
  context.moveTo(e.clientX, e.clientY);
  }
};

var engage = function (e) {
  dragging = true;
  putPoint(e);
};

var disengage = function () {
  dragging = false;
  context.beginPath();
};

function clearCanvas(canvas) {
  canvas.width = canvas.width;
}


canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage );

clear.addEventListener('click', clearCanvas);


