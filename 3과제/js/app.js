$(document).ready(function(){
	var modal = $('.modal');
	modal.css({
		'display':'none',
		'z-index':'3',
		'width':'100%',
		'height':'100%',
		'background-color':'rgba(0,0,0,0.8)',
		'position':'absolute',
		'top':'0'
	});

})



//이미지 hover 애니메이션
$(".img").hover(
	function(){
		$(this).css({ 'opacity' : '0.9' });
		$(this).css({ 'transform' : 'scale(1.01)' });
	},
	function(){
		$(this).css({ 'opacity' : '1'})
		$(this).css({ 'transform' : 'scale(1)' });
	}
);

//메뉴 클릭시 메뉴 슬라이딩 
$menuicon = $(".menuicon");
$menu = $(".menu");
console.log($menu);
$menu.css ({
	'width': '200px',
	'height' : '100vh',
	'z-index' : '999',
	'border-left' : '1px solid #dddddd',
	'position' : 'absolute',
	'right' : '-200px',
	'background-color':'#e0e0e0',
	'overflow' : 'hidden',
	'visibility':'hidden'
});

$menucl = $(".menu > div:first-child");

var clicknum = 0;

$menuicon.on("click", function(){
	clicknum++;

	if(clicknum%2==1){
		$menu.animate({right: 0}, 1000);
		$menu.css({"visibility":"visible"});
	}else if(clicknum%2==0){
		$menu.animate({right: -200}, 1000);
	}
});

//x 클릭시 슬라이딩
$menucl.on("click", function(){
	$menu.animate({right: -200}, 1000);
	clicknum--;
})

$(".img > img").click(function(){
	modalPop($(this));
})

function modalPop(object){
	var total = $(".img").length;
	var src = object.attr("src");
	var modal = $('.modal');
	modal.css("display","block");
	var imgNum = total - ($($(object).parent()).nextAll()).length -1;
	//버튼 생성
	$clbtn = "<span class='modalcl'>&times;</span>";
	modal.append($clbtn);
	$(".modalcl").css({
		'float':'right',
		'color':'#fff',
		'font-size':'45px',
		'margin':'20px'
	});
	
	$prev = "<button class='prev'>&lt;</button>";
	$next = "<button class='next'>&gt;</button>";
	modal.append($prev);
	modal.append($next);
	$(".prev").css({
		"border":"0",
		"background-color":"rgba(0,0,0,0)",
		"color":"#fff",
		"font-size":"30px",
		"position":"relative",
		"top":"40%",
		"left":"23%"
	});
	$(".next").css({
		"border":"0",
		"background-color":"rgba(0,0,0,0)",
		"color":"#fff",
		"font-size":"30px",
		"position":"relative",
		"top":"40%",
		"left":"72%"
	});

	imgPop(src,imgNum);;
}


function imgPop(src,imgNum){
	var total = $(".img > img").length;
	var imgArray = new Array();
	imgArray = $('.img > img');

	$(".modalcl").click(function(){
		$(".modal").empty();
		$(".modal").hide();
	});

	var img = new Image(800,600);
	img.style.margin = "5% 23%";
	img.style.position = "absolute";
	img.style.top = "0";
	img.src = src;

	$(".modal").append(img);

	$(".prev").click(function(){
		if(imgNum<0){ imgNum = total; }
		src = $(imgArray[--imgNum]).attr("src");
		countPrint(imgNum);
	});

	$(".next").click(function(){
		if(imgNum > total){ imgNum = 0; }
		src = $(imgArray[++imgNum]).attr("src");
		countPrint(imgNum);
	});

	console.log(imgNum);

	function countPrint(imgNum) {
		$(".modal > p").remove();
		var ccount = (parseInt(imgNum)+1)+"/"+total;
		var str = "<p style='color:white'>" + ccount + "</p>";
		$(".modal").append("<p style='color:white' id='modalPage'></p>");
		var modalPage = document.getElementById('modalPage');
		modalPage.innerHTML = str;
		
		imgPop(src);
	}



}


$(window).scroll(function() {
  var $el = $('.img');
  
  if($(this).scrollTop() >= 600) $el.css('visibility','visible');
  else $el.css('visibility','hidden');


});

 $(window).on("scroll",function(){
 	var scroll = $(document).scrollTop();
	console.log(scroll);
	console.log(1);
 })

 $("html, body").scroll(function(){
 	var a = $(document).scrollTop();
 	console.log(a);
 });