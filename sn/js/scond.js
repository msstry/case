
$(function(){
	$(function(){
		$.get("goodsAndShoppingCart/getGoodsList.php",function(data){
			console.log(data);
			let arr = JSON.parse(data);
			for(let i=0; i<arr.length; i++){
				$(".scond-con-shop-uls").append
				(`<li title="${arr[i].goodsId}"><div class="shop-con-img"><a href="##"><img src="images/${arr[i].goodsImg}"/></a></div>
				<div class="shop-con-color"><span id=""></span></div><div class="shop-money">
				<div  class="shop-money-name"><a href="">${arr[i].goodsName}</a></div>
				<div  class="shop-money-s"><p><span class="shop-money-s1"> RMB 
				<span class="shop-money-s2">${arr[i].goodsPrice}</span></span></p></div></div>
				<div class="shop-none">
				<a href="sonythird.html" style="background: url(images/shop-ts2.png) no-repeat; margin-right: 20px;"></a>
				<a href="sonythird.html" style="background: url(images/shop-ts1.png) no-repeat;"></a>
				</div></li>`)
			}
			$(".scond-con-shop-uls>li").hover(function(){
				$(this).children(".shop-none").css("display","block");
				$(this).css("border"," 2px solid #26a8df");
			},
			function(){
				$(this).children(".shop-none").css("display","none");
				$(this).css("border"," 1px solid #e5e5e5");
			});
			$(".scond-con-shop-uls>li").click(function(){
				saveCookie("goodsId",$(this).attr("title"),7)
				location.href = "sonythird.html";
			});
			
		});
		});
	
	$(function () {
		$('.shutter').shutter({
			shutterW: 1423, // 容器宽度
			shutterH: 400, // 容器高度
			isAutoPlay: true, // 是否自动播放
			playInterval: 3000, // 自动播放时间
			curDisplay: 3, // 当前显示页
			fullPage: false // 是否全屏展示
		});
	});
	
})
