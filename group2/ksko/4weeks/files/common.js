//ready
$(function(){
	$('.mOver').hover(function() {
		if($(this).hasClass('selected') == true) return;
		var src = $(this).attr('src');
		var ftype = src.substring(src.lastIndexOf('.') , src.length);
		$(this).attr('src', src.replace(ftype, '_o'+ftype));
	}, function() {
		if($(this).hasClass('selected') == true) return;
		var src = $(this).attr('src');
		var ftype = src.substring(src.lastIndexOf('.') , src.length);
		$(this).attr('src', src.replace('_o'+ftype, ftype));
	});

	$('#header .link > li > a').mouseenter(function(){
		$('#header .link > li > a').removeClass('selected');
		$(this).addClass('selected');
		$('#header .link > li > ul').hide();
		$(this).next().slideDown('fast');
	});
	$('#header .link').mouseleave(function(){
		$('#header .link > li > a').removeClass('selected');
		$('#header .link > li > ul').hide();
	});

	$('#header .searchFrm .input').focus(function(){
		$(this).prev().fadeOut('fast');
	}).blur(function(){
		if($(this).val() == '') $(this).prev().fadeIn('fast');
	});
	$('#header .searchFrm label').click(function(){
		$(this).fadeOut('fast').next().focus();
	});

	$('#header .category > li > a').mouseenter(function(){
		$('#header .category > li > ul').hide();
		$(this).next().slideDown('fast');
	});
	$('#header .category > li > ul').mouseleave(function(){
		$(this).slideUp('fast');
	});
	$('#header .category').mouseleave(function(){
		$('#header .category > li > ul').hide();
	});

	$('#header .category_sub2000000').css('width', ($('#header .category_sub2000000 > li').length * 98) + 'px');

	$('.view_more').mouseenter(function(){
		$('.more').hide();
		$(this).parents('dl').next().fadeIn('fast');
	}).mouseleave(function(){
		$('.more').fadeOut('fast');
	});
	$('.more').mouseleave(function(){
		$(this).fadeOut('fast');
	});

	$('.page_link a').each(function(){
		if(location.href.indexOf($(this).attr('href')) != -1) $(this).addClass('selected');
	});

	$('.frm_input fieldset p label, #find fieldset p label').click(function(){
		$(this).hide().next().focus();
	});
	$('.frm_input fieldset p .input, #find fieldset p .input').focus(function(){
		$(this).prev().hide();
	}).blur(function(){
		if($(this).val() == '') $(this).prev().show();
	});

	$(window).scroll(function() {
		if ($(window).scrollTop() > 5) $('#btn_up_down .round').fadeIn();
		else $('#btn_up_down .round').fadeOut();
	});
	$('#btn_up_down .up').click(function(){
		$('html, body').stop().animate({ scrollTop : 0 }, 500);
	});
	$('#btn_up_down .down').click(function(){
		$('html, body').stop().animate({ scrollTop : $('#footer').offset().top }, 500);
	});
});

// 고객센터 새벽 배송 검색 지역 파라미터 추가 150914 modify by kwonhwan.kim
function searchDirectPossibleArea(search_location){
	if( $.isEmptyObject(search_location) ){ search_location=""; }
	srurl=root_url+'/zipcode/search_direct_possible_area.php?route_path_type=frm&search_location='+search_location;
	window.open(srurl,'zip', ('scrollbars=yes,resizable=no,width=600, height=700,resizable=no'));
}
