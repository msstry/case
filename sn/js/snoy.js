$(function(){
	var option = {
		prev:"#banner_prev", //上一张按钮，默认为null
		next:"#banner_next",//下一张按钮，默认为null
		nav:'.scroll_nav',//轮播导航，默认为null,当为null时，自动生成导航。
		auto:true//是否自动轮显，默认为true
	};
	$("#lun1").baisonSlider(option);
	//banner轮显按钮特效
	$("#banner_prev,#banner_next").find('img').hover(
		function(){
			$(this).stop(false,true).fadeTo(800,0);	
		},
		function(){
			$(this).stop(false,true).fadeTo(500,1);
		}
	);
})
	$(function(){
		//回调函数计数
		var callbackIndex = 0;
		$('.silder-box-1').mySilder({
			width:1210, //容器的宽度 必选参数!!!!!!
			height:300, //容器的高度 必选参数!!!!!!
			auto:true,//是否自动滚动
			autoTime:5, //自动滚动时，时间间隙，即多长滚动一次,单位(秒)
			direction:'x',//滚动方向,默认X方向
			autoType:'left', //滚动方向，auto为true时生效
			few:2,//一次滚动几个，默认滚动1张
			showFew:2, //显示几个,就不用调css了,默认显示一个
			clearance:15, //容器之间的间隙，默认为 0
			silderMode:'linear' ,//滚动方式
			timeGap:700,//动画间隙，完成一次动画需要多长时间，默认700ms
			buttonPre:'.silder-button.btl',//上一个，按钮
			buttonNext:'.silder-button.btr',//下一个，按钮
			jz:true, //点击时，是否等待动画完成
			runEnd:function(){//回调函数
				callbackIndex ++ ;
				$('.cj em').text(callbackIndex);
			}
		});
	});
	
window.onscroll = function(){
		var _scroll = document.body.scrollTop || document.documentElement.scrollTop;
//		console.log(_scroll);
		if(_scroll >= 330){
			$("#header-scroll").css({position:"fixed",top:0,display:"block"});
		}else{
			$("#header-scroll").css("display","none");
		}
		if(_scroll >= 1600){
			$("#nav-fixed").css("display","block");
			$(".nav-fixed-r").css("display","none");
			$(".r1").css("display","block");
		}else{
			$("#nav-fixed").css("display","none");
		}
		if(_scroll >= 3200 ){
			$(".nav-fixed-r").css("display","none");
			$(".r1").css("display","none");
			$(".r2").css("display","block");
		}
		if(_scroll >= 4800 ){
			$(".nav-fixed-r").css("display","none");
			$(".r2").css("display","none");
			$(".r3").css("display","block");
		}
		if(_scroll >= 6200 ){
			$(".nav-fixed-r").css("display","none");
			$(".r3").css("display","none");
			$(".r4").css("display","block");
		}
};