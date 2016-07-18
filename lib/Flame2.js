

var Flame2 = function( stage, width, height, x, y, velX, velY){

	this.stage=stage;
	this.img;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.velX=velX;
	this.velY=velY;
	this.st;

	this.init = function(){

		this.img = document.createElement("img");
		
		this.arr[0]="../images/flame/flame1.png";
		this.arr[1]="../images/flame/flame2.png";
		this.arr[2]="../images/flame/flame3.png";
		this.arr[3]="../images/flame/flame4.png";

		this.img.src=this.arr[this.count];

		//	이미지의 가로세로 크기

		this.img.style.position="absolute";
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";



		//	호출자가 결정하는 영역에 붙인다

		this.stage.appendChild(this.img);

		this.move();

	}

	this.move = function(){

		var me=this;

		this.x=this.x+this.velX;
		this.y=this.y+this.velY;

		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		setTimeout(function(){

			me.move();
		
		}, 10);

	}

}