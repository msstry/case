let str="images/big1.jpg";
$(function(){
    menu();
    //详情页头部固定
    $(window).scroll(function () {
        var o=$("html,body").scrollTop();
        if (o>100){
           $(".scrollTop").css("display","block");
        } else{
            $(".scrollTop").css("display","none");
        }
        if (o>=890){
            $(".th").css({
                position:"fixed",
                top:0,
                left:112
            });
            $(".money,.bbb").css("display" ,"block")
        }else{
            $(".th").css({
                position:"static",
            });
            $(".money,.bbb").css("display" ,"none")
        }
        if (o>140){
            $(".gddh").css({
                position:"fixed",
                top:0,
                left:0,
                zIndex:200,
                width:1423
            });
        }else{
            $(".gddh").css({
                position:"static",
                top:140

            });
        }
    });
    // 点击增加或删除类名
    $(".mlj").children().click(function () {
        $(this).addClass("dq");
        $(this).siblings().removeClass("dq");
    });

    $(".n").mouseenter(function () {
        $(this).find("i").css("display","inline-block");
        $(this).siblings().find("i").css("display","none")
    })
    $(".n").mouseleave(function () {
        $(this).find("i").css("display","none");
    });

    function initUI(username){
        if(username!=null){
            $(".usernameSpan").html("欢迎您："+username);
            $(".welcome").css("display","block");
            $(".denglu").css("display","none");
            $(".zhuce").css("display","none");
        }else{
            $(".welcome").css("display","none");
            $(".denglu").css("display","block");
            $(".zhuce").css("display","block");
        }
    }
    // 1、读取用户名
    let username = getCookie("usernames");
    // 2、初始化界面
    initUI(username);
    // 3、注销
    $(".btnOut").click(function(){
        removeCookie("usernames");
        location.href="login.html";
    });
});



