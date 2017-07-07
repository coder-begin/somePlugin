function setStyle(){
	var btnSet=document.getElementById("btnSet");
	btnSet.onclick=function(){
		document.getElementById("alert").style.display="block";
	}
}
var color="";
var width="";
var height="";
function getStyles(){
	var changeDiv=document.getElementById("changeDiv");
	var redBtn=document.getElementById("redBtn");    	//获取红色按钮
	var yellowBtn=document.getElementById("yellowBtn");	//获取黄色按钮
	var blueBtn=document.getElementById("blueBtn");		//获取蓝色按钮
	var W200=document.getElementById("W200");	
	var W300=document.getElementById("W300");
	var W400=document.getElementById("W400");
	var H200=document.getElementById("H200");
	var H300=document.getElementById("H300");
	var H400=document.getElementById("H400");
	
		redBtn.onclick=function(){
			
			color="red";
			changeDiv.style.backgroundColor=color;
		}
		yellowBtn.onclick=function(){
			
			color="yellow";
			changeDiv.style.backgroundColor=color;
		}
	
		blueBtn.onclick=function(){
			color="blue";
			changeDiv.style.backgroundColor=color;
		}

		W200.onclick=function(){
		
			width="200px";
			changeDiv.style.width=width;
		}
		W300.onclick=function(){
		
			width="300px";
			changeDiv.style.width=width;

		}
		W400.onclick=function(){
	
			width="400px";
			changeDiv.style.width=width;

		}
		H200.onclick=function(){
		
			height="200px";
			changeDiv.style.height=height;
		}
		H300.onclick=function(){
		
			height="300px";
			changeDiv.style.height=height;
		}
		H400.onclick=function(){
		
			height="400px";
			changeDiv.style.height=height;
		}
	

}
	
function initEvent(){
	
	var btnOk=document.getElementById("ok");
	btnOk.onclick=function(){
		document.getElementById("alert").style.display="none";	
	}	
	document.getElementById("reset").onclick=function(){
		var changeDiv=document.getElementById("changeDiv")
		changeDiv.style.backgroundColor="#fff";
		changeDiv.style.width="150px";
		changeDiv.style.height="150px";
		document.getElementById("alert").style.display="none";	
	};
	getStyles();
	setStyle();

}
initEvent();


