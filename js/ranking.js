var everyDayRanking=[{
		des:"嚓嚓轻武器去轻武器完cacaascacscacacsc全下次",
		url:"../images/image_1.jpg"
	},{
		des:"嚓嚓轻武器去轻武器完cacaascacscacacsc全下次",
		url:"../images/image_1.jpg"
	},{
		des:"嚓嚓轻武器去轻武器完cacaascacscacacsc全下次",
		url:"../images/image_1.jpg"
	},{
		des:"嚓嚓轻武器去轻武器完cacaascacscacacsc全下次",
		url:"../images/image_1.jpg"
	},{
		des:"嚓嚓轻武器去轻武器完cacaascacscacacsc全下次",
		url:"../images/image_1.jpg"
	},{
		des:"嚓嚓轻武器去轻武器完cacaascacscacacsc全下次",
		url:"../images/image_1.jpg"
	},{
		des:"嚓嚓轻武器去轻武器完cacaascacscacacsc全下次",
		url:"../images/image_1.jpg"
	},{
		des:"嚓嚓轻武器去轻武器完cacaascacscacacsc全下次",
		url:"../images/image_1.jpg"
	},{
		des:"嚓嚓轻武器去轻武器完cacaascacscacacsc全下次",
		url:"../images/image_1.jpg"
	},{
		des:"嚓嚓轻武器去轻武器完cacaascacscacacsc全下次",
		url:"../images/image_1.jpg"
	}];
var everyWeekRanking=[{
		des:"嚓嚓轻武器去轻武器完cacaascacscacacsc全下次",
		url:"../images/image_1.jpg"
	},{
		des:"嚓嚓轻武器去轻武器完cacaascacscacacsc全下次",
		url:"../images/image_1.jpg"
	},{
		des:"嚓嚓轻武器去轻武器完cacaascacscacacsc全下次",
		url:"../images/image_1.jpg"
	},{
		des:"嚓嚓轻武器去轻武器完cacaascacscacacsc全下次",
		url:"../images/image_1.jpg"
	},{
		des:"嚓嚓轻武器去轻武器完cacaascacscacacsc全下次",
		url:"../images/image_1.jpg"
	},{
		des:"嚓嚓轻武器去轻武器完cacaascacscacacsc全下次",
		url:"../images/image_1.jpg"
	},{
		des:"嚓嚓轻武器去轻武器完cacaascacscacacsc全下次",
		url:"../images/image_1.jpg"
	},{
		des:"嚓嚓轻武器去轻武器完cacaascacscacacsc全下次",
		url:"../images/image_1.jpg"
	}];
var allRanking=[{
		des:"嚓嚓轻武器去轻武器完cacaascacscacacsc全下次",
		url:"../images/image_1.jpg"
	},{
		des:"嚓嚓轻武器去轻武器完cacaascacscacacsc全下次",
		url:"../images/image_1.jpg"
	},{
		des:"嚓嚓轻武器去轻武器完cacaascacscacacsc全下次",
		url:"../images/image_1.jpg"
	},{
		des:"嚓嚓轻武器去轻武器完cacaascacscacacsc全下次",
		url:"../images/image_1.jpg"
	},{
		des:"嚓嚓轻武器去轻武器完cacaascacscacacsc全下次",
		url:"../images/image_1.jpg"
	},{
		des:"嚓嚓轻武器去轻武器完cacaascacscacacsc全下次",
		url:"../images/image_1.jpg"
	},{
		des:"嚓嚓轻武器去轻武器完cacaascacscacacsc全下次",
		url:"../images/image_1.jpg"
	},{
		des:"嚓嚓轻武器去轻武器完cacaascacscacacsc全下次",
		url:"../images/image_1.jpg"
	},{
		des:"嚓嚓轻武器去轻武器完cacaascacscacacsc全下次",
		url:"../images/image_1.jpg"
	}];
$(function(){
	chooseRanking(everyDayRanking,everyWeekRanking,allRanking);
	
})
function mouseOver(_this){
	var str="<img src='"+$(_this).attr("hoverImg")+"'/><a>播放</a>"
	$(_this).children("span").replaceWith(str);			
}
function mouseOut(_this){
	var str="<span>"+$(_this).attr("content")+"</span>";
	$(_this).children("img").replaceWith(str);	
	$(_this).children("a").remove();		
}

function chooseRanking(everyDayRanking,everyWeekRanking,allRanking){
	$("#erery_day").mouseover(function(){
		insertContent(everyDayRanking,"day");
	});
	$("#erery_day").trigger("mouseover");
	$("#erery_week").mouseover(function(){
		insertContent(everyWeekRanking,"week");
	});
	$("#all").mouseover(function(){
		insertContent(allRanking,"all");
	});
}
function insertContent(contentArr,rankFlag){
	var str="";	
	str+="<ul rankFlag='"+rankFlag+"'>";
	for(var i=0;i<contentArr.length;i++){
		str+="<li onmouseout='mouseOut(this)' onmouseover='mouseOver(this)' content='"+contentArr[i].des+"' hoverImg='"+contentArr[i].url+"'><button>"+(i+1)+"</button><span>"+contentArr[i].des+"</spsn></li>";
	}
	str+="</ul>";
	$(".content").html(str);
}
