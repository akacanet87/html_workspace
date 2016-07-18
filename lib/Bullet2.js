/*

	총알이 위로 날아가는 유형의 게임에 적절함

*/

var Bullet2 = function( stage, width, height, x, y ){

	this.stage=stage;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.img;
	this.velY=0;			//	y축의 방향으로 몇씩 움직일지 결정하는 변수
	this.st;


	this.init = function(){

		this.img=document.createElement("img");
		this.img.src="../images/gallerxy/bullet.png";
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";
		
		this.img.style.position="absolute";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";
		
		this.stage.appendChild(this.img);

		this.move();

	}

	this.move = function(){

		var me=this;

		this.y=this.y-this.velY;
		this.img.style.top=this.y+"px";

		//	적군과 충돌 시 총알 제거
		//	대왕파리와 내가 마주쳤는지 판단하기


		for( var a=0 ; a<kingArray.length ; a++ ){

			var result = hitTest(this.img, kingArray[a].img);

			if(result){

				console.log("킹과 마주쳤어");

				//	왕죽고
				this.stage.removeChild(kingArray[a].img);
				kingArray[a].flag=false;

				//	나죽고
				this.stage.removeChild(this.img);
				clearTimeout(this.st);

				break;
				

			}

		}

		for( var a=0 ; a<enemyArray.length ; a++ ){

			var result = hitTest(this.img, enemyArray[a].img);

			if(result){

				console.log("똥파리와 마주쳤어");

				//	똥파리죽고
				this.stage.removeChild(enemyArray[a].img);
				enemyArray[a].flag=false;

				//	나죽고
				this.stage.removeChild(this.img);
				clearTimeout(this.st);

				break;
				

			}

		}


//		console.log("대왕파리의 갯수는 "+kingArray.length);


		//	총알이 시야에서 사라지면 setTimeout 종료

		this.st=setTimeout(function(){

			me.move();
		
		}, 10 );

	}

}