/*
	불꽃을 정의하기
	a : 어떤 div에 붙을지
	w : 가로 크기
	h : 높이
	posX : 초기 x좌표 위치
	posY : 초기 y좌표 위치


*/



var Flame=function(stage, width, height, x, y){

	/*
	현실의 모든 사물은 객체지향 언어에서 클래스로 표현되고,
	해당 사물이 보유한 상태는 변수인 속성으로 표현하며,
	해당 사물이 보유한 동작은 함수인 메서드로 표현한다.
	
	하지만, 변수와 함수가 객체의 소유가 될 때는 명칭이 바뀐다.
	변수 : 객체가 보유한 상태를 표현한다고 해서 속성(property)
	함수 : 객체가 보유한 동작방식을 표현한다고 해서 메서드(method)
	*/

	//	가로, 세로, 크기, 위치

	this.width=width;
	this.height=height;
	this.x=x-50;					//	left
	this.y=y+15;					// top
	this.img;
	this.arr=new Array();
	this.stage=stage;
	this.count=0;					//	이미지를 교체하면서 보여줄 index
	this.st;


	//	이 객체가 태어날 때(메모리에 올라올 때) 하고 싶은 초기 작업
	this.init=function(){

		this.img=document.createElement("img");

		this.arr[0]="../images/flame/flame1.png";
		this.arr[1]="../images/flame/flame2.png";
		this.arr[2]="../images/flame/flame3.png";
		this.arr[3]="../images/flame/flame4.png";

		this.img.src=this.arr[this.count];

		//	이미지의 가로세로 크기

		this.img.style.position="absolute";
		this.img.style.width=50+"px";
		this.img.style.height=30+"px";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";



		//	호출자가 결정하는 영역에 붙인다

		this.stage.appendChild(this.img);

		this.move();


	}




	//	동작 방식 표현
	this.move=function(){

		var me=this;

		//	이미지를 계속 교체해서 보여주기
		//	src값을 변경

		this.count++;

		if(this.count >= this.arr.length){

			this.count=0;

		}
		
		this.img.src=this.arr[this.count];

		st=setTimeout(function(){
			
			me.move();

		}, 20 );

	}

	this.follow=function(x, y){

		// clearTimeout(st);

		this.stage.removeChild(this.img);

		this.img.style.left=x-50+"px";
		this.img.style.top=y+15+"px";

		this.stage.appendChild(this.img);

	}

}
