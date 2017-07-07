var imgArr=[["../images/img01_1.jpg","../images/img01_2.jpg","../images/img01_3.jpg","../images/img01_4.jpg"],["../images/img02_1.jpg","../images/img02_2.jpg","../images/img02_3.jpg"],["../images/img03_1.jpg","../images/img03_2.jpg","../images/img03_3.jpg","../images/img03_4.jpg","../images/img03_5.jpg"]]

function initEvent(){
	var imgs=document.getElementsByTagName("img");
	var btnPre=document.getElementById("preGroup");
	var btnNext=document.getElementById("nextGroup");
	btnPre.onclick=function(){
		for(var k=0;k<imgArr.length;k++){
			if(imgs[k].imgNum<1){
				imgs[k].imgNum=imgArr[imgs[k].index].length-1;
			}else{
				imgs[k].imgNum--;
			}
			imgs[k].src=imgArr[imgs[k].index][imgs[k].imgNum];
		}
	}
	btnNext.onclick=function(){
		for(var k=0;k<imgArr.length;k++){
			if(imgs[k].imgNum<imgArr[imgs[k].index].length-1){
				imgs[k].imgNum++;
			}else{
				imgs[k].imgNum=0;
			}
			imgs[k].src=imgArr[imgs[k].index][imgs[k].imgNum];
		}
	}
	for(var i=0;i<imgArr.length;i++){
		imgs[i].src=imgArr[i][0];
		imgs[i].index=i;
		imgs[i].imgNum=0;
		imgs[i].onclick=function(){
			if(this.imgNum<imgArr[this.index].length-1){
				this.imgNum++;
			}else{
				this.imgNum=0;
			}
			this.src=imgArr[this.index][this.imgNum];
		}
	}


}
initEvent();
