$(function() {
	//回到顶部
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
	//下拉菜单
	$('#nav li').hover(function() {
		$('ul', this).stop().slideDown(200);
		$(this).children('a:first').addClass("hov");
	}, function() {
		$('ul', this).stop().slideUp(100);
		$(this).children('a:first').removeClass("hov");
	});
	//显示二维码
	$('#erweimawx').hover(
		function() {
			$('#erweimawx').css("cursor", "pointer");
			$('.erweima_wx').stop().fadeIn();
		},
		function() {
			$('.erweima_wx').stop().fadeOut();
		});
	//轮播图
	var count = 0;
	var t;
	lunbo();
	$(".arrow-right").click(function() {
		clearInterval(t);
		count++;
		if(count == $(".slider>ul>li").length) {
			count = 0;
		}
		yingChan(count);
		lunbo();
	})

	$(".arrow-left").click(function() {
		clearInterval(t);
		count--;
		if(count == -1) {
			count = $(".slider>ul>li").length - 1;
		}
		yingChan(count);
		lunbo();
	})
	$(".round>ul>li").mouseenter(function() {
		clearInterval(t);
		var index = $(this).index();
		yingChan(index);
		count = index;
	})
	$(".round>ul>li").mouseleave(function() {
		lunbo();
	})

	function yingChan(a) {
		$(".slider>ul>li").eq(a).fadeIn().siblings("li").fadeOut();
		$(".round>ul>li").eq(a).addClass("roundLiHover").siblings("li").removeClass("roundLiHover");
	}

	function lunbo() {
		t = setInterval(function() {
			count++;
			if(count == $(".slider>ul>li").length) {
				count = 0;
			}
			yingChan(count);
		}, 3000);
	}
});