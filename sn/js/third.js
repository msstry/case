window.onscroll = function(){
		var _scroll = document.body.scrollTop || document.documentElement.scrollTop;
//		console.log(_scroll);
		if(_scroll >= 800){
			$(".third-shop-f").css({position:"fixed",top:0,display:"block","z-index":9});
		}else{
			$(".third-shop-f").css("position","relative");
		}	
};