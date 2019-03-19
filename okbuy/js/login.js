$(function () {
    let sign=0;
    let arr=["0042","7589","7059","2275","3183","8573","0490","9015","4701","1207","2115"];
    let index=0;
    $("header span").click(function () {
        $(this).addClass("spanc");
        $(this).siblings().removeClass("spanc");
    });
    $(".span1").click(function () {
        $("form").css("display","block");
        $(".Ma").css("display","none");
    });
    $(".span2").click(function () {
        $(".Ma").css("display","block");
        $("form").css("display","none");
    });
    $(".change").click(function () {
        index=parseInt(Math.random()*11);
        $(this).attr("src",'images/'+index+".gif");
        $(".check").val("");
        $(".ok").css("display","none");
        $(".spanError3").css("display","none");
    });
    //验证验证码是否输入正确
    $(".check").blur(function () {
        if ($(this).val()==arr[index]){
            $(".ok").css("display","block");
            $(".spanError3").css("display","none");
            sign=1;
        } else{
            $(".spanError3").css("display","block");
            $(".ok").css("display","none");
            sign=0;
        }
    });
    $("#btnLogin").click(function () {
        let sendStr="username="+$("#username").val()+"&userpass="+$("#userpass").val();
        $.ajax({
            type:"POST",
            url:"php/login.php",
            data:sendStr,
            success:function (str) {
                if (str=="0") {
                    $(".spanError").css("display","block");
                }
                else{
                    addCookie("usernames",$("#username").val(),7);
                    location.href="index.html";
                }
            }
        });
    });
    $("#btnReg").click(function () {
        let sendStr="username="+$("#username").val()+"&userpass="+$("#userpass").val();
        if($("#username").val()=="" || $("#userpass").val()=="" || $(".check").val()==""){
            return alert("请补全信息再注册！");
        }
        $.ajax({
            type: "POST",
            url: "php/regsave.php",
            data: sendStr,
            success:function (str) {
                if (str=="0"){
                    $(".spanError2").css("display","block");
                }else{
                    if (sign==1){
                        alert("注册成功");
                        location.href="login.html";
                    }else{
                        $(".spanError2").css("display","block");
                    }
                }
            }
        });
    });
    $("#username").blur(function(){
        let reg=/^[1][3-9]\d{9}$/;
        if (reg.test($("#username").val())) {

        }else{
            return alert("请输入正确手机号!");
        }
        let sendStr="username="+$("#username").val();
        $.ajax({
            type:"POST",
            url:"php/reg.php",
            data:sendStr,
            success:function (str) {
                show(str);
            }
        });
    });
});
function show(str){
    if (str=="0") {
        $(".spanError1").css({
            color:"green",
            display:"block"
        });
        $(".spanError1").html("该用户名可以使用");
    }else{
        $(".spanError1").css({
            color:"red",
            display:"block"
        });
        $(".spanError1").html("该用户名已经被使用");
    }
}