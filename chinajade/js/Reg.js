/// <reference path="../../../Content/Front/js/Validform.js" />
/// <reference path="../base.js" />
/// <reference path="../../jquery-1.8.2.js" />
var $reg_form;
$(function () {
    $reg_form = $("#reg_form").Validform({
        tiptype: function (msg, o, cssctl) {
            if (!o.obj.is("form")) {
                var objtip = o.obj.siblings(".Validform_checktip");
                cssctl(objtip, o.type);
                objtip.text(msg);
            }
        }
    });
    // 复选框点击样式操作
    $('.fCheck').click(function () {
        if ($(this).hasClass('fChecked')) {
            $(this).removeClass('fChecked');
            $("#reg_form").find("input[name='Read']").val(false);
        } else {
            $(this).addClass('fChecked');
            $("#reg_form").find("input[name='Read']").val(true);
        }
    });
    $("#Mobile").blur(function () {
        var ajaxUrl = $("#btnSendCode").attr("data-url");
        $("#yzm").attr("ajaxurl", ajaxUrl + "?mobile=" + $("#Mobile").val());
    });
    $(".reg a").click(function () {
        regSubmit(this);
    });
});

/*-------------------------------------------*/
var InterValObj; //timer变量，控制时间
var count = 70; //间隔函数，1秒执行
var curCount;//当前剩余秒数
var is_checked = false;
function sendMessage(sender) {
    //if (!$reg_form.check()) {
    //   return 0;
    //}
    if (!$("#Mobile").val() || $("#Mobile").parents("li").find(".Validform_wrong").length > 0) {
        $("#yzm_tip").html("<span style='color:red'>您需要首先输入正确的手机号接受验证码</span>");
        return 0;
    }
    var ajaxUrl = $(sender).attr("data-url");
    $("#yzm").attr("ajaxurl", ajaxUrl + "?mobile=" + $("#Mobile").val());
    curCount = count;
    //设置button效果，开始计时
    $("#btnSendCode").attr("disabled", "true");
    $("#btnSendCode").val("" + curCount + "秒后重新获取");
    if (is_checked === true) {
        return true;
    }
    else {
        InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
        is_checked = true;
        //var address = "";
        //$.each(check_obj.check_address, function (i) {
        //    address += check_obj.check_address[i] + ",";
        //});
        //, check_key: check_obj.check_key, check_address: address 
        AjaxHelper.oAjaxPost(baseUrl + "/Member/SendRegCodeBackDoor", { mobile: $("#Mobile").val()}, function (msg) {
            if (msg.state == "200") {
                $("#yzm_tip").html("<span style='color:#71B83D'>验证码短信已发送! 请注意查收短信。</span>");
            }
            if (msg.state == "100" || msg == "500") {
                $("#yzm_tip").html(msg.msg);
            }
        });
        //window.TouClick.Start({
        //    website_key: 'e7245d17-f634-4ddd-89c4-213f8bcd6455',
        //    position_code: 50,//位置标记(范围：10<position_code<100 ,如不在此范围内,则为0)
        //    args: { 'sender': sender },//事件onInit、onLoading、onLoaded、onSuccess、onFail、onError 的共有第一参数
        //    captcha_style: { 'margin-left': '-200px', 'margin-top': '-150px' },//设置验证码外框的css样式
        //    onSuccess: function (args, check_obj) {
        //        //check_obj = {'check_key':'','check_address':''} 二次验证口令check_key与二次验证地址check_address
               
        //    },
        //    onError: function (args) {
        //    }
        //});
        return false;
    }
}

//timer处理函数
function SetRemainTime() {
    if (curCount == 0) {
        window.clearInterval(InterValObj);//停止计时器
        $("#btnSendCode").removeAttr("disabled");//启用按钮
        $("#btnSendCode").val("重新发送验证码");
    }
    else {
        curCount--;
        $("#btnSendCode").val("" + curCount + "秒后重新获取");
    }
}

function regSubmit(sender) {
    if ((!$("#cboxAgree").hasClass("fChecked") && $("#cboxAgree").hasClass("fCheck")) || ($("#cboxAgree").hasClass("login_fCheck") && !$("#cboxAgree").hasClass("login_fChecked"))) {
        alert("您需要同意中国和田玉网用户注册协议");
        return;
    }
    if ($reg_form.check()) {
        if ($reg_form.forms.find(".Validform_error").length > 0) return;
        var dto = $("form[name='reg_form']").serializeObject();
        AjaxHelper.post("/Member/Register/", dto, function (rst) {
            if (rst) {
                if (rst.State == "200") {
                    if (rst.Url == "0") {
                        testAjaxSign();
                        $("#login-modal").closeModal();
                        return;
                    }
                    if (rst.Url) {
                        window.location.href = rst.Url;
                    } else {
                        window.location.href = baseUrl + "/MemberCenter/Setup";
                    }
                    return;
                }
                if (rst.State == "500") {
                    alert(rst.Msg);
                }
            }
        }, null, null, sender);
    }
}