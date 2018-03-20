//下拉菜单
$(document).ready(function() {
	$('#nav li').hover(function() {
		$('ul', this).slideDown(200);
		$(this).children('a:first').addClass("hov");
	}, function() {
		$('ul', this).slideUp(100);
		$(this).children('a:first').removeClass("hov");
	});
});


//回到顶部
$(function() {
	$('#goToTop').hide(); 
	$(window).scroll(function() {
		if($(this).scrollTop() > 800) {
			$('#goToTop').fadeIn();
		} else {
			$('#goToTop').fadeOut();
		}
	});
	$('#goToTop a').click(function() {
		$('html ,body').animate({
			scrollTop: 0
		}, 600);
		return false;
	});

});

//显示二维码
$(document).ready(function(){
	$('#erweimawx').hover(
		function (){
			$('#erweimawx').css("cursor","pointer");
			$('.erweima_wx').fadeIn();
	},function (){
		$('.erweima_wx').fadeOut();
	});
});


$(document).ready(function (e) {
	$('#b03').unslider({
		dots: true, //是否显示指示器，取值true / false
		delay:3500, //图片停留的时间，数字，单位为毫秒
		speed:800   //图片切换的速度，数字，单位为毫秒
	});
});
