var oDiv=document.getElementById("imgDiv");
var pTop=document.querySelector(".pTop");
var pBottom=document.querySelector(".pBottom");
var imgArr=[["../images/image_1.jpg","第1张图片"],["../images/image_2.jpg","第2张图片"],["../images/image_3.jpg","第3张图片"],["../images/image_4.jpg","第4张图片"]];
pTop.innerHTML="1/"+imgArr.length;
pBottom.innerHTML="第1张图片";
function changeImg(_this){
		var oBtn=document.querySelectorAll(".btnGroup>input");
		for(var j=0;j<oBtn.length;j++){
			oBtn[j].style.backgroundColor="rgba(0,0,0,0.2)";
		}
		_this.style.backgroundColor="blue";
		oDiv.style.background="url("+_this.attributes._src.value+") no-repeat center center";
		oDiv.style.backgroundSize="100% 100%";
		pTop.innerHTML=(parseInt(_this.attributes.index.value)+1)+"/"+imgArr.length;
		pBottom.innerHTML=imgArr[_this.attributes.index.value][1];
}
function insertButton(imgArr){
	var str="";	
	var obtnGroup=document.querySelector(".btnGroup");
	for(var i=0;i<imgArr.length;i++){
		str+="<input type='button' index="+i+" _src="+imgArr[i][0]+" onclick='changeImg(this)' value='"+(i+1)+"'/>";
	}
	obtnGroup.innerHTML=str;
}
insertButton(imgArr);

