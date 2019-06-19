
//get canvas
var canvas=document.querySelector('canvas');

//set canvas size
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

//context variable
var c = canvas.getContext('2d');

//get controls
canvas.addEventListener('keydown',this.check,false);
updateKeys = function(e){
  //set current key
  currentKey = e.keyCode;
  console.log("current key: " + currentKey);
 }

//Keyboard constants
 K_A = 65; K_B = 66; K_C = 67; K_D = 68; K_E = 69; K_F = 70; K_G = 71;
 K_H = 72; K_I = 73; K_J = 74; K_K = 75; K_L = 76; K_M = 77; K_N = 78;
 K_O = 79; K_P = 80; K_Q = 81; K_R = 82; K_S = 83; K_T = 84; K_U = 85;
 K_V = 86; K_W = 87; K_X = 88; K_Y = 89; K_Z = 90;
 K_LEFT = 37; K_RIGHT = 39; K_UP = 38;K_DOWN = 40; K_SPACE = 32;
 K_ESC = 27; K_PGUP = 33; K_PGDOWN = 34; K_HOME = 36; K_END = 35;
 K_0 = 48; K_1 = 49; K_2 = 50; K_3 = 51; K_4 = 52; K_5 = 53;
 K_6 = 54; K_7 = 55; K_8 = 56; K_9 = 57;

//initial variables
var p1_x=30;
var p1_y=30;
var p2_x=innerWidth-60;
var p2_y=30;
var ball_x=innerWidth/2;
var ball_y=innerHeight/2;
//macros
const paddle_width=innerWidth/64;
const paddle_height=innerHeight/3.6;
const paddle_speed=3


//make Paddle object
function Paddle(x,y){
	this.x=x;
	this.y=y;
}
//draw function
Paddle.prototype.draw = function(){
	c.fillRect(this.x,this.y,paddle_width,paddle_height);
}
//move up
Paddle.prototype.moveUp = function(){
	if (this.y>0){
		self.y-=paddle_speed;
	}
}
//move down
Paddle.prototype.moveDown = function(){
	if (this.y<innerHeight-paddle_height){
		self.y-=paddle_speed;
	}
}

//make objects
var Player1= new Paddle(p1_x,p1_y);
var Player2= new Paddle(p2_x,p2_y);

//animate
function animate(){
	//clear screen
	c.clearRect(0,0,innerWidth,innerHeight);
	//get control
	document.onkeydown = updateKeys;
	//controls
	/*
	if(check()=="down"){
		Player2.moveDown();
	}
	*/



	//draw and update
	Player1.draw();
	Player2.draw();
	requestAnimationFrame(animate);
}

animate();