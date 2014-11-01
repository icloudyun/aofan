$(function() {
	var content = $("#custom").attr('style');
	$("#custom").attr('style', 'top:284px; margin-top: 0px; height: 98px;border:0; display:none;');

	$("#zzz").attr('style', 'width:1252px;margin: 0 auto; padding:0px 0 0 0;');

	$("#zzz div:first").attr('style', 'width:1252px; height:400px; margin:0px auto 0 auto;');

	$('.thumbsHolder_ThumbOFF').css('margin-left', '50px');
	$('.thumbsHolderVisibleWrapper').css('left', '560px');

	var hoverImg = $('.thumbsHolder_ThumbOFF img');
	hoverImg.css('opacity', '0.7');
	hoverImg.hover(function() {
		$(this).css('opacity', '1');
	}, function() {
		$(this).css('opacity', '0.7');
	});

	$('.outImg a').hover(function() {
		$(this).children('.dataImg').stop().animate({
			left : 0
		}, 300);
	}, function() {
		$(this).children('.dataImg').stop().animate({
			left : '-400px'
		}, 000);
	});

});
