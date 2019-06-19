
// Get a reference to the canvas DOM element
var canvas = document.getElementById('canvas');
// Get the canvas drawing context
var ctx = canvas.getContext('2d');

//on start
function init()
{
	var x=10;
	window.requestAnimationFrame(draw);
}


//main loop
function draw()
{
	ctx.fillStyle = 'green';
	ctx.fillRect(x, 10, 150, 100);
	x+=1;
}




//start
init()