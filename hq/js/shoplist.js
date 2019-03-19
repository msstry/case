$(function(){
	$.get("php/getGoodsList.php",function(date){
		let arr = JSON.parse(date);
		// console.log(arr);
		for(let i in arr){
			$(".shop_a ul").append(`
				<li>
					<div class="shopimg">
						<input class="id" type="text" value="${arr[i].goodsId}" style="display:none;"/>
						<input class="count" type="text" value="${arr[i].goodsCount}" style="display:none;"/>
						<a href="shopxq.html?goodsId=${arr[i].goodsId}"><img src="img/${arr[i].goodsImg}" alt=""></a>
					</div>
					<div class="shoptitle">
						<a href="shopxq.html?goodsId=${arr[i].goodsId}">${arr[i].goodsDesc}</a>
					</div>
					<div class="shopkong1">
						
					</div>
					<div class="shoppicre">
						<p>
							<span>价格：</span>
							￥
							<i>${arr[i].goodsPrice}.0</i>
							<span class="pl">评论(<em>${arr[i].beiyong1}</em>)</span>
						</p>
					</div>
					<div class="shopkong2">
						
					</div>
					<div class="addcar">
						<a class="jrCar" href="goodscar.html">加入购物车</a>
						<span class="gzshop">关注</span>
					</div>
				</li>

			`);
		}
		

		// console.log($(".jrCar"));
		let userId = getCookie("userId");
		if(userId != ""){
			$(".jrCar").each(function(i){
				$(this).click(function(){
					let id = $(this).parent().parent().first().find("input[class*=id]").val();
					let count = $(this).parent().parent().first().find("input[class*=count]").val();
					// console.log($(this).parent().parent().first().find("input[class*=id]").val());
					// console.log($(this).parent().parent().first().find("input[class*=count]").val());
						$.get("php/addShoppingCart.php",{
							vipName:userId,
							goodsId:id,
							goodsCount:count
						},function(date){
							// console.log(date);
							if(date == "1"){
								console.log("成功");
							}else{
								alert("添加失败");
							}
						});
					})
				});
		}else{
			$(".jrCar").each(function(i){
			$(this).click(function(){
				console.log($(this).parent().parent().children().first().children().children().attr("src"));
				let goodsImg = $(this).parent().parent().children().first().children().children().attr("src");
				console.log($(this).parent().parent().children().eq(1).children().html());
				let goodsDesc = $(this).parent().parent().children().eq(1).children().html();
				console.log(parseFloat($(this).parent().parent().children().eq(3).children().children().eq(1).html()));
				// console.log($(this).parent().parent().children().eq(3).children().children().eq(2).children().html());
				saveCookie("goodsImga",goodsImg,1);
				saveCookie("goodsDescs",goodsDesc,1);
				saveCookie("goodsPrice",parseFloat($(this).parent().parent().children().eq(3).children().children().eq(1).html()),1);
				// saveCookie("beiyong1",$(this).parent().parent().children().eq(3).children().children().eq(2).children().html(),1);
				});
			});
		}
		


	//划过样式		
	let lis = $(".shop_a ul").children();
	// console.log(lis);
	lis.each(function(){
		// console.log(this);
		$(this).children().last().children().first().click(function(){
			let a = parseInt($(".header_car_i").html());
			let b = a+1;
			// console.log(b);
			$(".header_car_i").html(b);
		});
		$(this).hover(function(){
			$(this).css({
				"border":"6px solid #eaeaea"
			});
			$(this).children().last().children().first().css({
				"background": "#fb440b",
				"color": "#fff"
			});
			$(this).children().last().children().last().css({
				"background": "url(./img/list_attention.jpg) 0 -24px no-repeat"
			});
		},function(){
			$(this).css({
				"border":"6px solid #FFF"
			});
			$(this).children().last().children().first().css({
				"background": "#fff",
				"color": "#4774bb"
			});
			$(this).children().last().children().last().css({
				"background": "url(./img/list_attention.jpg) 0 0 no-repeat"
			});
		});
	});

	})
})



//更多显示
$(function(){
	let c = $(".chaxun").children();
	let d = c.slice(3,c.length-1)
	// console.log(c.slice(2,c.length-1));
	$(".btn_b").toggle(function(){
		d.css("display","block");
		$(this).children("a").html("收起")
		$(this).css({
			"background":"#f7f7f7 url(./img/search_icon.png) 202px -385px no-repeat"
		});
	},function(){
		d.css("display","none");
		$(this).children("a").html("更多")
		$(this).css({
			"background":"#f7f7f7 url(./img/search_icon.png) 202px -365px no-repeat"
		});
	});

})

// 菜单显示
$(function(){
    $(".nav_li_a").hover(function(){
        $(".nav_li_i_1").css("display","block");
        $(".nav_li_a").css("background-color","rgba(0,0,0,0.7)");
    },function(){
        $(".nav_li_a").css("background-color","#1C84F5");
        // $(".nav_li_i_1").css("display","none");
    });
    $(".nav_li_i_1").hover(function(){
        $(".nav_li_i_1").css("display","block");
        // $(".nav_li_a").css("background-color","rgba(0,0,0,0.7)");
    },function(){
        $(".nav_li_i_1").css("display","none");
        $(".nav_li_a").css("background-color","#1C84F5");
    });
})

$(function(){
	let a = $(".con_l_dl dt").children();
	// console.log(a);
	a.each(function(){
		$(this).toggle(function(){
			$(this).css("background","url(./img/fold.png) no-repeat 0px -16px");
			$(this).parent().next().css("display","block");
			$(this).parent().parent().css({
				"background-color":"rgb(248,248,248)"
			});
			// {background-color: rgb(248,248,248);}
		},function(){
			$(this).css("background","url(./img/fold.png) no-repeat 0px 0px");
			$(this).parent().next().css("display","none");
			$(this).parent().parent().css({
				"background-color":"rgb(255,255,255)"
			});
		});
	});
})


$(function(){
	let b = $(".cx_xq").children();
	// console.log(b);
	$(".more_btn").toggle(function(){
		$(this).html("收起").css("background","url(./img/search_icon.png) -48px -48px no-repeat");
		$(".yc").css("display","block");
	},function(){
		$(this).html("更多").css("background","url(./img/search_icon.png) 16px -48px no-repeat");
		$(".yc").css("display","none");
	});

})

//登录获取cookie
$(function(){
    let userId = getCookie("userId");
    // console.log(userId);
    if(userId != ""){
        $("#toolbar_left_bb").css("display","block");
        $("#toolbar_left_aa").css("display","none");
        $(".toolbar_left_as").html(userId);
        $(".user").html(userId);
        // $("#toolbar_left_aa").css("display","block");
    }else{
        $("#toolbar_left_aa").css("display","block");
        $("#toolbar_left_bb").css("display","none");
        // $(".toolbar_left_as").html(userId);
    }
    $("#tcbtn").click(function(){
        removeCookie("userId");
        history.go(0);
    });
})				