var Fish=function(stage, width, height, x, y){
	this.stage=stage;
	this.div;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.targetX=0;//도달해야 할 X목표 지점
	this.targetY=0;//도달해야 할 Y목표 지점
	this.a=0.9;//남은 거리의 몇%를 가야할지 결정하는 비율계수
	this.velX=0;//물체의 속도를 결정하는 변수
	this.velY=0;

	this.init=function(){
		this.div=document.createElement("div");
		this.div.style.position="absolute";
		this.div.innerText="◇";
		this.div.style.fontSize=this.width+"px";
		this.div.style.fontWeight="bold";

		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";
		
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";

		this.stage.appendChild(this.div);

		this.move();
	}
	this.move=function(){
		var me=this;
		
		//목표지점에 도달하려는 로직
		var posX=parseInt(this.div.style.left);//현재 나의 위치
		var posY=parseInt(this.div.style.top);

		this.div.style.left=this.targetX-this.a*(this.targetX-posX)+"px";
		this.div.style.top=this.targetY-this.a*(this.targetY-posY)+"px";

		setTimeout(function(){
			me.move();
		},10)
	}
}