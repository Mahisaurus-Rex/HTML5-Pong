
//get canvas
var canvas=document.querySelector('canvas');

//set canvas size
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

//context variable
var c = canvas.getContext('2d');

//initial variables
var p1_x=30;
var p1_y=30;
var p2_x=innerWidth-60;
var p2_y=30;
var ball_x=innerWidth/2;
var ball_y=innerHeight/2;

var paddle_width=innerWidth/64;
var paddle_height=innerHeight/3.6;


//make Paddle object
function Paddle(x,y){
	this.x=x;
	this.y=y;
}
//draw function
Paddle.prototype.draw = function(){
	c.fillRect(this.x,this.y,paddle_width,paddle_height);
}

var Player1= new Paddle(p1_x,p1_y);

//animate
function animate(){
	//clear screen
	c.clearRect(0,0,innerWidth,innerHeight);
	//draw and update
	Player1.draw();
	requestAnimationFrame(animate);
}

animate();