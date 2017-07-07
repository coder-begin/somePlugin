var allImgs=[
	[{url:"../images/image_1.jpg",des:"this is a pic"},
	 {url:"../images/image_2.jpg",des:"this is a pic"},
	 {url:"../images/image_3.jpg",des:"this is a pic"},
	 {url:"../images/image_4.jpg",des:"this is a pic"},
	 {url:"../images/image_5.jpg",des:"this is a pic"}],	
    [{url:"../images/image_5.jpg",des:"this is a pic"},
	 {url:"../images/image_1.jpg",des:"this is a pic"},
	 {url:"../images/image_3.jpg",des:"this is a pic"},
	 {url:"../images/image_2.jpg",des:"this is a pic"}],
	[{url:"../images/image_2.jpg",des:"this is a pic"},
	 {url:"../images/image_4.jpg",des:"this is a pic"},
	 {url:"../images/image_3.jpg",des:"this is a pic"},
	 {url:"../images/image_5.jpg",des:"this is a pic"}],
	[{url:"../images/image_4.jpg",des:"this is a pic"},
	 {url:"../images/image_5.jpg",des:"this is a pic"},
	 {url:"../images/image_3.jpg",des:"this is a pic"},
	 {url:"../images/image_2.jpg",des:"this is a pic"}]];

$(function(){
	initBtn(allImgs);
})
function insertHTML(allImgs,$_this){
	var str="";
	var imgIndex=$_this.attr("index");
	for(var i=0;i<allImgs[imgIndex].length;i++){
		str+="<div fatherIndex='"+imgIndex+"' index='"+i+"' onclick='changeImg(this)'>"+allImgs[imgIndex][i].des+"</div>"
	}
	$(".ads_kinds").html(str);
}
function changeImg(_this){
	var imgs=allImgs[$(_this).attr("fatherIndex")];
	$(".ads").css({background:"url("+imgs[$(_this).attr("index")].url+") no-repeat center center",backgroundSize:"100% 100%"});
}
function initBtn(allImgs){
	
	$(".nav>div").each(function(index){
		$(this).attr("index",index);
		var imgIndex=$(this).attr("index");
		
		$(this).click(function(){
			$(".ads").css({background:"url("+allImgs[imgIndex][0].url+") no-repeat center center",backgroundSize:"100% 100%"});
			insertHTML(allImgs,$(this));
			
			$(".ads_kinds>div").css({width:(1/allImgs[imgIndex].length-1/100)*100+"%",marginRight:"1%"});
		});
	});
	insertHTML(allImgs,$(".nav>div:first-child"));
	
	$(".ads_kinds>div").css({width:(1/allImgs[0].length-1/100)*100+"%",marginRight:"1%"});
}
