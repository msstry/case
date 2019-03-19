$(function(){
	//获取url中的参数
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg); //匹配目标参数
        if (r != null) return unescape(r[2]);
        return null; //返回参数值
    }

    //接收URL中的参数goodsId
    let id = getUrlParam('goodsId');
    // console.log('id:' + id);

	$.get("php/getGoodsInfo.php",{
		goodsId:id
	},function(date){
		var obj = jQuery.parseJSON(date);
		// console.log(obj);
		$(".name").html(obj.goodsDesc);	
		$(".prices").html(obj.goodsPrice+".00");
        $(".beiyong1").html(obj.beiyong1); 	
        $(".phone_img").attr({src:"img/"+obj.goodsImg});
        // console.log($(".box_dj li img"));
        let imgss = $(".box_dj li img");
        imgss.each(function(){
            $(this).attr({src:"img/"+obj.goodsImg});
        })
        // console.log(typeof($(".banben a")));
        // console.log(typeof(obj.beiyong2));

			
	});
		

	//点加入购物车判断登录
	$(".btn_car").click(function(){
			// console.log(goodsCount);
            let userId = getCookie("userId");
			let goodsCount = $(".s").val();
			// console.log(userId);
			if(userId != ""){
				$.get("php/addShoppingCart.php",{
					vipName:userId,
					goodsId:id,
					goodsCount:goodsCount
				},function(date){
					// console.log(date);
					if(date == "1"){
						alert("添加成功");
						location.href = "goodscar.html";
					}else{
						alert("添加失败");
					}
				});
			}else{
				alert("请先登录");
			}
		});

	//点击添加数量
	$(".aa").click(function(){	
		let s = $(".s").val();
		s--;
		if(s<=0){
			return;
		}
		$(".s").val(s);
	});
	$(".ab").click(function(){
		let s = $(".s").val();
		s++;
		$(".s").val(s);
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
        $(".userA").hover(function(){
                $(".form2").css("display","block");
            },function(){
                $(".form2").css("display","none");
        });
        $(".user").html(userId);
        // $("#toolbar_left_aa").css("display","block");
    }else{
        $("#toolbar_left_aa").css("display","block");
        $("#toolbar_left_bb").css("display","none");
        $(".userA").hover(function(){
                $(".form1").css("display","block");
            },function(){
                $(".form1").css("display","none");
        });
        // $(".toolbar_left_as").html(userId);
    }
    $("#tcbtn").click(function(){
        removeCookie("userId");
        history.go(0);
    });
    $(".tcbtn").click(function(){
        removeCookie("userId");
        history.go(0);
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

//右侧登录
$(function(){
    $(".from_item_a").click(function(){
        let from_item = $(".from_item").val();
        let from_item2 = $(".from_item2").val();
         // && us_b ==""
        if(from_item == ""){
            $(".ts").html("请输入您的昵称/邮箱/手机号").css({
                "background":"url(img/cuo.png) no-repeat"
            });
            return false;
        }else if(from_item2 == ""){
            $(".ts").html("密码不能为空").css({
                "background":"url(img/cuo.png) no-repeat"
            });
            return false;
        }else{
            console.log(from_item);
            console.log(from_item2);

            $.post("php/login.php",{

                //参数
                userId:from_item,
                userPass:from_item2
            },function(date){
                console.log(date);
                if(date == "1"){
                    // alert("成功");
                    saveCookie("userId",$(".from_item").val(),7);
                    // let userId = getCookie("userId");
                    // console.log(userId);
                    location.href = "index.html";
                }else{
                    $(".ts").html("用户名或密码错误").css({
                        "background":"url(img/cuo.png) no-repeat"
                    });

                    // location.href = "login.html";
                }
            });
        }
    });
});
$(function(){
    //返回顶部动画
    $(window).scroll(function () {
        // console.log($(document).scrollTop());
        if ($(document).scrollTop() < 200) {
            $("#ding").css({
                "display": "none"
            })
            $("#jingxuan").css({
                "display": "none"
            })
        }else {
            $("#ding").css({
                "display": "block"
            })
            $("#jingxuan").css({
                "display": "block"
            })
        }
    })
    //点击按钮返回顶部
    $("#ding").click(function () {
        $("html,body").animate({
            "scrollTop": 0
        }, 500)
    })
});

			