$(function(){
	let userId = getCookie("userId");
	// console.log(userId);
	if(userId != ""){
		$(".loginreg").css("display","none");
		$(".loginreg1").css("display","block");
		$(".loginreg1 :nth-child(1)").html(userId);
		$.get("php/getShoppingCart.php",{
			vipName:userId
		},function(date){
			console.log(date);
			if(date == ""){
				$(".sum").css("display","none");
				$(".cons").append(`
					<a class="car_null_a" href="index.html"></a>
				`).css({
						background: "url(img/cart_null.jpg) no-repeat center",
						width: "470px",
						height: "150px",
						margin: "0 auto",
						position: "relative"
					});
				return;
			}
			$(".sum").css("display","block");
			for(let i in date){
				console.log(i);
				$(".cons").append(`
					<div class="con">
					<div class="check">
						<p><input type="checkbox"></p>
						<p>
							<img src="img/${date[i].goodsImg}" alt="">
						</p>
						<p>
							<a href="##">${date[i].goodsDesc}</a>
							<span>6GB+128GB 蓝楹紫</span>
						</p>
					</div> 
					<div class="shopimg">
						￥<em>${date[i].goodsPrice}</em>.00
						<span>特价</span>
					</div>
					<div class="shopdesc">
						<div class="shopcount">
							 <a class="aa" href="javascript:;">-</a>
							 <i class="s">${date[i].goodsCount}</i>
							 <a class="ab" href="javascript:;">+</a>
						 </div>
					</div>
					<div class="xiaoji">
						￥<em>${parseFloat(date[i].goodsCount)*parseFloat(date[i].goodsPrice)}</em>.00
					</div>
					<div class="shopa">
						<a class="remove" href="javascript:;"></a>
					</div>
				</div>
				`);

		}

		//加
		// console.log($(".ab"));
		$(".ab").each(function(z){
			$(this).click(function(){
				let goodsCount = parseFloat($(this).prev().html());
				let goodsPrice = parseFloat($(this).parent().parent().prev().children().first().html());
				$(this).prev().html(goodsCount+1);
				// console.log($(this).prev().html());
				$(this).parent().parent().next().children().html($(this).prev().html()*goodsPrice);
				$.get("php/updateGoodsCount.php",{
		 			vipName:userId,
		 			goodsId:date[z].goodsId,
		 			goodsCount:$(this).prev().html()
		 		},function(date){
		 			console.log("成功");
		 		});
			});
		})
		// 减
		$(".aa").each(function(z){
			$(this).click(function(){
				if($(this).next().html() <= 1){
					return;
				}
				let goodsCount = parseFloat($(this).next().html());
				let goodsPrice = parseFloat($(this).parent().parent().prev().children().first().html());
				$(this).next().html(goodsCount-1);
				$(this).parent().parent().next().children().html($(this).next().html()*goodsPrice);
				$.get("php/updateGoodsCount.php",{
		 			vipName:userId,
		 			goodsId:date[z].goodsId,
		 			goodsCount:$(this).next().html()
		 		},function(date){
		 			console.log("成功");
		 		});
			});
		})


		//点击触发删除
		$(".remove").each(function(j){
			$(this).click(function(){
				if(confirm("真的要删除我吗") != true){
					return;
				}
				console.log(date[j].goodsId);
				$.get("php/deleteGoods.php",{
					vipName:userId,
					goodsId:date[j].goodsId
				},function(date){
					if(date == "1"){
						history.go(0);
						// console.log("成功");
					}else{
						alert("删除失败");
					}
				});
			});
		})


			
		    
			//点击改变数量
			// 减少



			// let goodsCount = $("s").html();
		 // 	$(".shopcount").children(".aa").click(function(){
		 // 		goodsCount--;
		 // 		$.get("php/updateGoodsCount.php",{
		 // 			vipName:userId,
		 // 			goodsId:date[index].goodsId,
		 // 			goodsCount:goodsCount
		 // 		},function(date){
		 // 			history.go(0);
		 // 		});
		 // 	});
		 	// 加法
		 	
		},"json");
	}else{
		$(".cons").append(`
			<a class="car_null_a" href="index.html"></a>			
		`).css({
			background: "url(img/cart_null.jpg) no-repeat center",
			width: "470px",
			height: "150px",
			margin: "0 auto",
			position: "relative"
		});

		// saveCookie("goodsImg",$(this).parent().parent().children().first().children().children().attr("src"),1);
		// saveCookie("goodsDesc",$(this).parent().parent().children().eq(1).children().html(),1);
		// saveCookie("goodsPrice",$(this).parent().parent().children().eq(1).children().html(),1);
		// saveCookie("beiyong1",$(this).parent().parent().children().eq(3).children().children().eq(2).children().html(),1);
		let goodsDescs = getCookie("goodsDesc");
		let goodsPrice = getCookie("goodsPrice");
		let goodsImga = getCookie("goodsImg");
		console.log(goodsPrice);
		console.log(goodsDescs);
		console.log(goodsImga);
	}
});


$(function(){
		//点击退出登录状态
	$(".loginreg1 :nth-child(2)").click(function(){
		removeCookie("userId");
		history.go(0);
	});
})