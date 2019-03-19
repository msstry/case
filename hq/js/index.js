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
    //返回顶部动画
    $(window).scroll(function () {
        // console.log($(document).scrollTop());
        if ($(document).scrollTop() < 625) {
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
        if($(document).scrollTop() >= 625 && $(document).scrollTop() < 1360){
            $(".jingxuan1 span").css({
                "backgroundColor":"#E10808",
                "color":"#fff"
            });
        }else{
            $(".jingxuan1 span").css({
                "backgroundColor":"#fff",
                "color":"#000"
            });
        }
        if($(document).scrollTop() >= 1360 && $(document).scrollTop() < 2300){
            $(".jingxuan2 span").css({
                "backgroundColor":"#E10808",
                "color":"#fff"
            });
        }else{
            $(".jingxuan2 span").css({
                "backgroundColor":"#fff",
                "color":"#000"
            });
        } 
        if($(document).scrollTop() >= 2300){
            $(".jingxuan3 span").css({
                "backgroundColor":"#E10808",
                "color":"#fff"
            });
        }else{
            $(".jingxuan3 span").css({
                "backgroundColor":"#fff",
                "color":"#000"
            });
        }
    })
    //点击按钮返回顶部
    $("#ding").click(function () {
        $("html,body").animate({
            "scrollTop": 0
        }, 500)
    })
    $(".jingxuan5").click(function () {
        $("html,body").animate({
            "scrollTop": 0
        }, 500)
    })
    $(".jingxuan1").click(function () {
        $("html,body").animate({
            "scrollTop": 630
        }, 500)
    })
    $(".jingxuan2").click(function () {
        $("html,body").animate({
            "scrollTop": 1360
        }, 500)
    })
    $(".jingxuan3").click(function () {
        $("html,body").animate({
            "scrollTop": 2300
        }, 500)
    })
});


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
    $(".user_car").click(function(){
        $(".user_list").css("display","block");
    });
    $(".user_list_b").click(function(){
        $(".user_list").css("display","none");
    });
});