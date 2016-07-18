
var DateBox = function( stage, width, height, text ){

	this.stage=stage;
	this.div;					//	날짜가 들어감
	this.title;					//	입력 폼과 내용을 담을 div
	this.content;
	this.width=width;
	this.height=height;
	this.text=text;
	this.ta;				//	undefined
	this.input;
	var me = this;


	this.init = function(){


		this.div=document.createElement("div");

		this.div.style.float="left";

		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.border="1px solid blue";

		this.title=document.createElement("div");
		this.title.style.width=100+"%";
		this.title.style.height=25+"px";
		this.title.innerText=this.text;
		this.div.appendChild(this.title);

		this.content=document.createElement("div");
		this.content.style.width=100+"%";
		this.content.style.height=75+"px";
		this.content.style.overflow="scroll";
		this.content.style.fontSize="9pt";
		this.div.appendChild(this.content);


		this.content.addEventListener("click", function(){

			//alert(me.div.innerText+"일 이네요");
			if( me.ta == undefined ){
			
				me.createForm();
				me.ta.focus();
			
			}

		});


		this.stage.appendChild(this.div);

	}

	//	클릭 시 textarea와 button 등장시키기

	this.createForm = function(){

		this.ta= document.createElement("textarea");

		this.ta.style.width="90%";
		this.ta.style.height=40+"px";

		this.input = document.createElement("input");

		this.input.type="button";
		this.input.value="입력";

		this.input.addEventListener("click", function(){

			me.showContent();
		
		});

		this.content.appendChild(this.ta);
		this.content.appendChild(this.input);

	}

	//	컨텐츠 출력
	this.showContent = function(){

		//	textarea의 값 얻기
		var memo = this.ta.value;

		//	content div의 자식요소들을 제거하고 memo content 출력
		this.content.removeChild(this.ta);
		this.content.removeChild(this.input);

		this.content.innerText=memo;

	}

}