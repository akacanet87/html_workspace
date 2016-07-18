//	아래의 코드는 지금 당장 사용할 총알 자체가 아닌
//	장차 총알을 생성해 낼 틀이다.
var Bullet=function(stage, x, y ){

	//	객체의 특징에 대한 값을 담고 있다고 하여 속성이라 한다 (property)
	this.stage=stage;
	this.img;
	this.x=x+20;
	this.y=y+40;
	this.st;						//	나의 셋타임 아웃을 가리킴
	this.velX=10;				//	몇 픽셀씩 움질일지 결정

	
	//	객체안에 들어있는 함수는 메서드(method)라 한다
	//	method(방법) : 객체의 동작 방식을 결정하는 로직이 들어있기 때문에
	this.init=function(){


		this.img =  document.createElement("img");
		this.img.src="../images/bullet.png";
		this.img.style.position="absolute";
		this.img.style.width=20+"px";
		this.img.style.height=10+"px";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		stage.appendChild(this.img);

		this.move();

	}



	this.move=function(){


		var me = this;
		this.x+=this.velX;

		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		//	stage를 벗어나면, 총알의 setTimeout은 멈춰야한다
		console.log( parseInt( this.stage.style.width ) );
		
		this.st=setTimeout(function(){me.move();}, 10);		// setTimeout이 clearTimeout보다 먼저 호출되어야 한다.
		
		//	적군과 부딪히면
		for( var a=0 ; a<enemyArray.length ; a++ ){

			if(enemyArray[a]!=undefined){							//	배열에 존재하는 img에 대해서만 (undefined가 아닌 경우만)
				
				var result = hitTest(this.img, enemyArray[a].img);

				if( result ){

					//	총알 죽이고 총알의 setTimeout도 중지
					this.stage.removeChild(this.img);
					clearTimeout(this.st);

					//	적군 죽이고
					this.stage.removeChild(enemyArray[a].img);			//	이미지를 먼저 없애고 delete를 맨마지막에 쓴다.
					clearTimeout(enemyArray[a].st);
					delete enemyArray[a];				//	배열에서 제거하고 이자리에는 Undefined 가 남음

				}

			}

		}
			
		// 부딪히지 않고 화면 밖으로 나가면
		if( parseInt( this.img.style.left ) > parseInt( this.stage.style.width ) ){

			//	alert("저 자살할게요");

			clearTimeout(this.st);
			this.stage.removeChild(this.img);
			return;

		}

	}

}
