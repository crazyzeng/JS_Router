$("#title .t span").click(function(){
   var t=".sec"+$(this).attr("data").slice(1);
   //console.log(t);
    $(t).css("display",'block').siblings().css("display","none");
    $(this).attr("class","p1").siblings().attr("class","p2");
});
//设置部分a的href属性为JavaScript：void(0)，使之不再触发返回
$(".more ul li a").attr('href','JavaScript:void(0)');
/*nav下拉菜单*/
	
$("#nav_footer>ul>li").hover(function () {
	$(this).children('span').addClass('drapdown')//.css('display','block');
	$('.drapdown_ul>li').css('display','block')
	$(this).siblings('li').children('span').removeClass('drapdown');
})
//$('.allGoods').blur(function(){
//	$(this).children('span').removeClass('allGoods_drapdown')
//})
