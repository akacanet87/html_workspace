/*
		점점 다가오는 적군을 정의

*/


var EUnit = function( stage, width, height, x, y, velX, velY, src){

	this.stage=stage;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.img;
	this.src=src;
	this.velX=velX;					//	x축으로 몇 정도로 다가올지 결정
	this.velY=velY;					//	y축으로 몇 정도로 다가올지 결정
	this.st;

	this.init = function(){

		this.img=document.createElement("img");
		this.img.src=this.src;
		this.img.style.position="absolute";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		this.img.style.width=width+"px";
		this.img.style.height=height+"px";

		this.stage.appendChild(this.img);

		this.move();

	}

	this.move = function(){

		var me = this;

		//	x축 , y축 설정
		this.x+=this.velX;
		this.y+=this.velY;

		//	움직임 설정
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		this.st=setTimeout(function(){

			me.move();
		
		}, 10);

		//	멈추는 조건은 아래에서

	}

}