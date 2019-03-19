/// <reference path="../../jquery-1.8.2.js" />
/// <reference path="../../../Content/Front/js/Validform.js" />
/// <reference path="../base.js" />
var loginForm;
$(function () {
    loginForm = $("#login_form").Validform({
        tiptype: function (msg, o, cssctl) {
            if (!o.obj.is("form")) {
                var objtip = o.obj.siblings(".Validform_checktip");
                cssctl(objtip, o.type);
                objtip.text(msg);
            }
        }
    });
    // 输入框文字提示操作
    jQuery(".inputs").each(function () {
        var $this = jQuery(this),
            $label = $this.find("label"),
            $input = $this.find("input");
        if ($input.val() && $input.val().length) {
            $label.addClass("hide");
        }
        $input.focus(function () {
            $label.addClass("hide");
        }).blur(function () {
            if ($input.val() && $input.val().length) {
                $label.addClass("hide");
            } else {
                $label.removeClass("hide");
            }
        });
        $label.click(function () {
            $input.focus();
        });
    });
    // 复选框点击样式操作
    $('.fCheck').click(function () {
        if ($(this).hasClass('fChecked')) {
            $(this).removeClass('fChecked');
            $("input[name='SavePassword']").val(false);
        } else {
            $(this).addClass('fChecked');
            $("input[name='SavePassword']").val(true);
        }
    });
    $(".login").find("a").click(function () {
        loginStart();
    });
    $("#Password").keypress(function (e) {
        if (e.which == 13) {
            loginStart();
        }
    });
});

function loginStart() {
    if (loginForm.check()) {
        if (loginForm.forms.find(".Validform_error").length > 0) return;
        var username = $("#login_form").find("input[name='Username']").val();
        var password = $("#login_form").find("input[name='Password']").val();
        var savePassword = $("#login_form").find("input[name='SavePassword']").val();
        var dto = {};
        dto.Username = username;
        dto.Password = password;
        dto.SavePassword = savePassword;
        AjaxHelper.post("/Member/Validate", dto, function (rst) {
            if (rst.Result) {
                var from = $("#UrlReferrer").val();
                if (from) {
                    window.location.href = from;
                } else {
                    window.location.href = "/";
                }
                return;
            }
            $("#tips_error").show();
        });
    }
}