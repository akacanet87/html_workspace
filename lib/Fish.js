


var Fish = function( stage, width, height, x, y, src){

	this.stage=stage;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.img;
	this.src=src;
	this.targetX;		//	도달해야 할 목표지점
	this.targetY;
	this.a=0.9;				//	남은 거리의 몇 %를 갈지 결정하는 비율계수
	this.velX=0;
	this.velY=0;				// 물체의 속도를 결정

	this.init = function(){

		this.img = document.createElement("img");

		this.img.src=this.src;

		this.img.style.position="absolute";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";

		this.stage.appendChild(this.img);

		this.move();
	
	}

	this.move = function(){

		var me = this;

		//	목표지점에 도달하려는 로직
		var posX=parseInt(this.img.style.left);
		var posY=parseInt(this.img.style.top);

		this.img.style.left = this.targetX - this.a*(this.targetX-posX)+"px";
		this.img.style.top = this.targetY - this.a*(this.targetY-posY)+"px";

		setTimeout(function(){

			me.move();
		
		}, 10);
	
	}

}