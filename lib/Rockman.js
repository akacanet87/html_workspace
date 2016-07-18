
var Rockman = function( stage, width, height, x, y, src){

	this.stage=stage;
	this.div;
	this.img;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.src=src;
	this.velX=0;		// y축의 방향으로 얼만큼 움직일지를 결정하는 변수
	this.velY=0;		// y축의 방향으로 얼만큼 움직일지를 결정하는 변수
	this.gravity=0.2;	// 중력을 표현하는 변수



	this.init = function(){

		this.div=document.createElement("div");
		this.img=document.createElement("img");
		this.img.src=this.src;

		this.div.style.overflow="hidden";
		this.div.style.position="absolute";

		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";

		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";

		//	숨겨진 이미지의 좌표 처리
		this.img.style.position="relative";
		//this.img.style.top=-60+"px";

		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";

		//	이미지를 div에 탑재
		this.div.appendChild(this.img);

		// div를 stage에 탑재
		this.stage.appendChild(this.div);

		this.move();

	}

	this.move = function(){

		var me = this;

		this.gravity=0.2;		


		//	중력 데이터를 velY에 누적하기

		for( var a=0 ; a<blockArr.length ; a++ ){

			var flag = hitTest( this.div, blockArr[a].img );

			if(flag){
				
				console.log("나 부딪혔어");

				this.velY=-(this.velY)/3;

				this.gravity=0;	
				
				break;

			}

		}

		this.velY+=this.gravity;
		
		this.x+=this.velX;
		this.y+=this.velY;

		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";


		setTimeout(function(){

			me.move();
			
		}, 10);

	}

	this.jump = function(){

		var me = this;
		var velY = -2;

		this.velY=-2;
		this.gravity=0.2;
		this.velY+=this.gravity;
		this.y+=this.velY;
		this.div.style.top=this.y+"px";


		setTimeout(function(){

			me.jump();
				
		}, 10);


	}


}