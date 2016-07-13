// //start get mouse position function
//     function getMousePos(canvas, event)
// {
//     var mouseX = event.pageX - canvas.offsetLeft;
//     var mouseY = event.pageY - canvas.offsetTop;
//     return {
//         x: mouseX,
//         y: mouseY };
// }

  // window.onload = function() {
  //   var canvas = document.getElementById('canvas');
  //   var context = canvas.getContext('2d');

  //   canvas.addEventListener('mousemove', function(evt) {
  //     var mousePos = getMousePos(canvas, evt);
  //     var message = "Mouse position: " + mousePos.x + "," + mousePos.y; console.log(mousePos.x + mousePos.y)
  //   }, false);
  // };

//end get mouse position function

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var clear = document.getElementById('clear');
clear.addEventListener('click', clearCanvas);

//add event listener to clear button
document.getElementById('clear').addEventListener('click', function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
      }, false);



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

var clearCanvas = function(context) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
}


canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage );



