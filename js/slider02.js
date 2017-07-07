var leftBtn=document.querySelector(".left");
var rightBtn=document.querySelector(".right");
var bottomBtn=document.querySelector(".bottom");
var imgFrame=document.querySelector(".imgFrame");
var oLi=document.getElementsByTagName("li");
var imgArr=["../images/image_1.jpg","../images/image_2.jpg","../images/image_3.jpg","../images/image_4.jpg","../images/image_5.jpg"];
function inserLi(){
	for(var i=0;i<imgArr.length;i++){
		bottomBtn.innerHTML+="<li><div class='alert'><img src=''/></div></li>";
	}
	
}
function initEvent(){
	imgFrame.index=0;
	oLi[0].style.background="url('../images/active_li.png') no-repeat center center";
	for(var i=0;i<imgArr.length;i++){
		oLi[i].index=i;
		oLi[i].querySelector(".alert>img").src=imgArr[i];
		oLi[i].onclick=function(){
			for(var j=0;j<imgArr.length;j++){
				oLi[j].style.background="url('../images/li_bg.png') no-repeat center center";
			}
			imgFrame.style.background="url("+imgArr[this.index]+") no-repeat center center";
			imgFrame.style.backgroundSize="100% 100%";
			imgFrame.index=this.index;
			this.style.background="url('../images/active_li.png') no-repeat center center";
		}
		oLi[i].onmouseover=function(){
			var alertFrame=this.querySelector(".alert");
			alertFrame.style.display="block";
			
		}
		oLi[i].onmouseout=function(){
			this.querySelector(".alert").style.display="none";
			
		}
	}
	leftBtn.onclick=function(){
		imgFrame.index++;
		if(parseInt(imgFrame.index)>4){
			imgFrame.index=0;
		}
		for(var j=0;j<imgArr.length;j++){
				oLi[j].style.background="url('../images/li_bg.png') no-repeat center center";
		}
		imgFrame.style.background="url("+imgArr[imgFrame.index]+") no-repeat center center";
		imgFrame.style.backgroundSize="100% 100%";
		oLi[imgFrame.index].style.background="url('../images/active_li.png') no-repeat center center";
	}
	rightBtn.onclick=function(){
		imgFrame.index--;
		if(parseInt(imgFrame.index)<0){
			imgFrame.index=4;
		}
		for(var j=0;j<imgArr.length;j++){
				oLi[j].style.background="url('../images/li_bg.png') no-repeat center center";
		}
		imgFrame.style.background="url("+imgArr[imgFrame.index]+") no-repeat center center";
		imgFrame.style.backgroundSize="100% 100%";
		oLi[imgFrame.index].style.background="url('../images/active_li.png') no-repeat center center";
	}
	
}

inserLi();
initEvent();
