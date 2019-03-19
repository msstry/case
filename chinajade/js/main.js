//function yzkf() { window.open("http://chat10.live800.com/live800/chatClient/chatbox.jsp?companyID=195883&jid=8366062202&skillId=9918", "", "toolbar=0,top=0,left=0,resizable=no,scrollbars=no,status=no,toolbar=no,menubar=no,location=no,width=570,height=425"); }
//function bjkf() { window.open("http://chat10.live800.com/live800/chatClient/chatbox.jsp?companyID=195883&jid=8366062202&skillId=9917", "", "toolbar=0,top=0,left=0,resizable=no,scrollbars=no,status=no,toolbar=no,menubar=no,location=no,width=570,height=425"); }
function bjkf() {
    _MEIQIA._SHOWPANEL();
}
function yzkf() {
    _MEIQIA._SHOWPANEL();
}

//-----导航下拉菜单-------------------
function dropMenu(obj) {
    $(obj).each(function () {
        var theSpan = $(this);
        var theMenu = theSpan.find(".submenu");
        var tarHeight = theMenu.height();
        theMenu.css({ height: 0, opacity: 0 });
        theSpan.hover(
			function () {
			    $(this).addClass("selected");
			    theMenu.stop().show().animate({ height: tarHeight, opacity: 1.0 }, 400);
			},
			function () {
			    $(this).removeClass("selected");
			    theMenu.stop().animate({ height: 0, opacity: 0 }, 400, function () {
			        $(this).css({ display: "none" });
			    });
			}
		);
    });
}


$(document).ready(function () {
    dropMenu(".drop-menu-effect");
});


// 商品列表li addhover
$(".piclist ul li,.jingpin_list ul li,.mingjia_list ul li").on("mouseenter", function () {
    $(this).addClass("hover");
}).on("mouseleave", function () {
    $(this).removeClass("hover");
});

//-----返回顶部按钮-------------------
var scrolltotop = {
    setting: {
        startline: 100, //起始行
        scrollto: 0, //滚动到指定位置
        scrollduration: 400, //滚动过渡时间
        fadeduration: [500, 100] //淡出淡现消失
    },
    controlHTML: '<img src="/images/topback.gif" style="width:54px; height:54px; border:0;" />', //返回顶部按钮
    controlattrs: { offsetx: 20, offsety: 120 },//返回按钮固定位置
    anchorkeyword: "#top",
    state: {
        isvisible: false,
        shouldvisible: false
    }, scrollup: function () {
        if (!this.cssfixedsupport) {
            this.$control.css({ opacity: 0 });
        }
        var dest = isNaN(this.setting.scrollto) ? this.setting.scrollto : parseInt(this.setting.scrollto);
        if (typeof dest == "string" && jQuery("#" + dest).length == 1) {
            dest = jQuery("#" + dest).offset().top;
        } else {
            dest = 0;
        }
        this.$body.animate({ scrollTop: dest }, this.setting.scrollduration);
    }, keepfixed: function () {
        var $window = jQuery(window);
        var controlx = $window.scrollLeft() + $window.width() - this.$control.width() - this.controlattrs.offsetx;
        var controly = $window.scrollTop() + $window.height() - this.$control.height() - this.controlattrs.offsety;
        this.$control.css({ left: controlx + "px", top: controly + "px" });
    }, togglecontrol: function () {
        var scrolltop = jQuery(window).scrollTop();
        if (!this.cssfixedsupport) {
            this.keepfixed();
        }
        this.state.shouldvisible = (scrolltop >= this.setting.startline) ? true : false;
        if (this.state.shouldvisible && !this.state.isvisible) {
            this.$control.stop().animate({ opacity: 1 }, this.setting.fadeduration[0]);
            this.state.isvisible = true;
        } else {
            if (this.state.shouldvisible == false && this.state.isvisible) {
                this.$control.stop().animate({ opacity: 0 }, this.setting.fadeduration[1]);
                this.state.isvisible = false;
            }
        }
    }, init: function () {
        jQuery(document).ready(function ($) {
            var mainobj = scrolltotop;
            var iebrws = document.all;
            mainobj.cssfixedsupport = !iebrws || iebrws && document.compatMode == "CSS1Compat" && window.XMLHttpRequest;
            mainobj.$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $("html") : $("body")) : $("html,body");
            mainobj.$control = $('<div id="topcontrol">' + mainobj.controlHTML + "</div>").css({ position: mainobj.cssfixedsupport ? "fixed" : "absolute", bottom: mainobj.controlattrs.offsety, right: mainobj.controlattrs.offsetx, opacity: 0, cursor: "pointer" }).attr({ title: "返回顶部" }).click(function () { mainobj.scrollup(); return false; }).appendTo("body"); if (document.all && !window.XMLHttpRequest && mainobj.$control.text() != "") { mainobj.$control.css({ width: mainobj.$control.width() }); } mainobj.togglecontrol();
            $('a[href="' + mainobj.anchorkeyword + '"]').click(function () { mainobj.scrollup(); return false; });
            $(window).bind("scroll resize", function (e) { mainobj.togglecontrol(); });
        });
    }
};
scrolltotop.init();

//-----列表页下拉跳转-------------------
function MM_jumpMenu(targ, selObj, restore) { //v3.0
    eval(targ + ".location='" + selObj.options[selObj.selectedIndex].value + "'");
    if (restore) selObj.selectedIndex = 0;
}

//-----jquery 提示框插件 loading-------------------
(function ($) {
    $.popup = {
        ID: null, title: "", top: 0, left: 0, width: 0, height: 0, popType: "", repositionOnResize: false, okButton: '确 定', cancelButton: '取 消', isButtonRow: false, isPopup: false, autoClose: 0, tip: function (msg, top, left, autoClose) { this.ID = 'tip'; this.popType = 'tip'; this.title = ''; this.isPopup = false; this.autoClose = autoClose || 0; this.width = 120; this.height = 30; this.top = top || ($(document).height() - this.height) / 2; this.left = left || ($(document).width() - this.width) / 2; $.popup._show(null, msg, null); }, _show: function (elem, msg, callback) {
            if ($("#_Popup_" + this.ID).length < 1) {
                var html = '<div class="popup_' + this.popType + '" id="_Popup_' + this.ID + '" style="width:' + this.width + 'px">\
                  <div class="popup_header" id="_Title_"><h1>'+ this.title + '</h1><div class="h_r"></div></div>\
                  <div class="popup_content">\
                    <div id="_Container_'+ this.ID + (this.height == 0 ? '">' : '" style="height:' + this.height + 'px">') + msg + '</div></div>' +
                (this.isButtonRow ? '<div class="buttonRow" id="_ButtonRow_' + this.ID + '"></div>' : '') + '<div class="popup_bottom"><div class="b_r"></div>\
                </div>'; $("BODY").append(html); $("#_Popup_" + this.ID).css({ position: 'absolute', zIndex: 100, padding: 0, margin: 0 }); $("#_Popup_" + this.ID).css({ minWidth: $("#_Popup_" + this.ID).outerWidth(), maxWidth: $("#_Popup_" + this.ID).outerWidth() }); $.popup._reposition(); $.popup._maintainPosition(true); $.popup._bindType(); if (this.isPopup) { $(elem).click(function (e) { e ? e.stopPropagation() : event.cancelBubble = true; }); $("#_Popup_" + this.ID).click(function (e) { e ? e.stopPropagation() : event.cancelBubble = true; }); $(document).click(function () { $.popup._hide(); }); }
                if (this.autoClose > 0) { $.popup._autoClose(); }
            }
            else { $("#_Container_" + this.ID).html(msg); $.popup._bindType(callback); $.popup._reposition(); $.popup._maintainPosition(true); $("#_Popup_" + this.ID).show(); if (this.autoClose > 0) { $.popup._autoClose(); } }
        }, _bindType: function (callback) {
            switch (this.popType) {
                case 'help': if (this.isButtonRow) { $("#_ButtonRow_" + this.ID).after('<input type="button" value="' + $.popup.okButton + '" id="_ButtonOK_' + this.ID + '" />'); $("#_ButtonOK_" + this.ID).click(function () { $.popup._hide(); callback(true); }); $("#_ButtonOK_" + this.ID).keypress(function (e) { if (e.keyCode == 13 || e.keyCode == 27) $("#_ButtonOK_" + this.ID).trigger('click'); }); }
                    break; case 'prompt': if (this.isButtonRow) {
                        $("#_ButtonRow_" + this.ID).html('<input type="hidden" id="hid_' + this.ID + '" />\
                        <input type="button" value="'+ $.popup.okButton + '" id="_ButtonOK_' + this.ID + '"/>\
                        <input type="button" value="'+ $.popup.cancelButton + '" id="_ButtonCancel_' + this.ID + '"/>'); $("#_ButtonOK_" + this.ID).click(function () { var val = $("#hid_" + this.ID).val(); $.popup._hide(); if (callback) callback(val); }); $("#_ButtonCancel_" + this.ID).click(function () { $.popup._hide(); if (callback) callback(null); }); $("#_ButtonOK_" + this.ID + ", #_ButtonCancel_" + this.ID).keypress(function (e) { if (e.keyCode == 13) $("#_ButtonOK_" + this.ID).trigger('click'); if (e.keyCode == 27) $("#_ButtonCancel_" + this.ID).trigger('click'); });
                    }
                        break; case 'tip': break; default: break;
            }
        }, _hide: function () {
            if ($("#_Popup_" + this.ID).length > 0) {
                if (this.popType == "tip") { $("#_Popup_" + this.ID).fadeOut(500); }
                else { $("#_Popup_" + this.ID).remove(); }
                $.popup._maintainPosition(false);
            }
        }, _autoClose: function () { setTimeout("$.popup._hide()", this.autoClose * 1000); }, _reposition: function () { var top = this.top || (($(document).height() / 2) - ($("#popup_container").outerHeight() / 2)); var left = this.left || (($(document).width() / 2) - ($("#popup_container").outerWidth() / 2)); if (top < 0) top = 0; if (left < 0) left = 0; $("#_Popup_" + this.ID).css({ top: top + 'px', left: left + 'px' }); }, _maintainPosition: function (status) { if ($.popup.repositionOnResize) { switch (status) { case true: $(window).bind('resize', $.popup._reposition); break; case false: $(window).unbind('resize', $.popup._reposition); break; } } }
    }
    showLoading = function (msg, elem) { var loadingMsg = msg || '正在加载数据，请稍候...'; if (elem == null) { $.popup.tip('<table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0"><tr>' + '<td align="center"><img src="/images/loadingAnimation.gif" /> ' + loadingMsg + '</td></tr></table>', null, null, 0); } else { var middle = ($(elem).height() - 30) / 2; var top = $(elem).offset().top + (middle > 0 ? middle : 0); $.popup.tip('<table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0"><tr>' + '<td align="center"><img src="/images/loadingAnimation.gif" /> ' + loadingMsg + '</td></tr></table>', top, null, 0); } }
    hideTip = function () { $("#_Popup_tip").fadeOut(500); }
    showTip = function (msg, elem, autoClose) { if (elem == null) { $.popup.tip('<table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0"><tr>' + '<td align="center">' + msg + '</td></tr></table>', null, null, autoClose); } else { var middle = ($("#" + elem).height() - 50) / 2; var top = $("#" + elem).offset().top + (middle > 0 ? middle : 0); $.popup.tip('<table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0"><tr>' + '<td align="center">' + msg + '</td></tr></table>', top, null, autoClose); } }
    showHelper = function (elem, title, msg, height) { $.popup.help(elem, title, msg, height); }
    showPrompt = function (elem, title, msg, isButtonRow, isPopup, callback, top, left, width, height) { $.popup.prompt(elem, title, msg, isButtonRow, isPopup, callback, top, left, width, height); }
})(jQuery);

//-----手机报订阅ajax提交提示-------------------
var partten = /^(13|15|18)[0-9]{9}$/;
function sendMessage() {
    if (!partten.test($("#z_mobile").val())) {
        $("#yzm_tip").html("请输入正确的手机号码");
        return true;
    }
    if ($("#yzm").val() == "短信验证码") {
        $("#yzm_tip").html("请输入短信验证码");
        return true;
    }
    showLoading('正在提交...', '#z_mobile');
    $.ajax({
        url: "/Ajax/RssRead",
        type: "Post",
        data: "mobile=" + $("#z_mobile").val() + "&yzm=" + $("#yzm").val(),
        success: function (msg) {
            if (msg && msg.state) {
                $("#yzm_tip").html("订阅成功！感谢您订阅玉界臻品手机报");
                hideTip();
            } else {
                $("#yzm_tip").html(msg.msg);
                hideTip();
            }
        }
    });
}

function tuiding() {
    if (!partten.test($("#z_mobile").val())) {
        $("#yzm_tip").html("请输入正确的手机号码");
        return true;
    }
    if ($("#yzm").val() == "短信验证码") {
        $("#yzm_tip").html("请输入短信验证码");
        return true;
    }
    showLoading('正在提交...', '#z_mobile');
    $.ajax({
        url: "/ajax/Tuiding",
        type: "Post",
        data: "mobile=" + $("#z_mobile").val() + "&yzm=" + $("#yzm").val(),
        success: function (msg) {
            if (msg && msg.Msg) {
                $("#yzm_tip").html(msg.Msg);
                hideTip();
            }
        }
    });
}

function sendcode() {
    debugger;
    if (!partten.test($("#z_mobile").val())) {
        $("#yzm_tip").html("请输入正确的手机号码");
        return true;
    }
    showLoading('正在发送验证码', '#z_mobile');
    $.ajax({
        url: "/Ajax/GetRssReadCode",
        type: "Post",
        data: "mobile=" + $("#z_mobile").val(),
        success: function (msg) {
            if (msg == "200") {
                $("#yzm_tip").html(msg.msg);
                hideTip();
            } else {
                $("#yzm_tip").html(msg.msg);
                hideTip();
            }
        }
    });
}

function sortAction(sender, col, params) {
    var baseAction = $(sender).attr("data-action");
    var goUrl;
    if ($(sender).hasClass("on_arrow_up")) {
        var sortDesc = "sort=" + col + "&order=" + "desc";
        if (params) {
            sortDesc = params + "&" + sortDesc;
        }
        goUrl = baseAction + "?" + sortDesc;
    } else {
        var sortAsc = "sort=" + col + "&order=" + "asc";
        if (params) {
            sortAsc = params + "&" + sortAsc;
        }
        goUrl = baseAction + "?" + sortAsc;
    }
    if (baseAction) {
        window.location.href = goUrl;
    }
}

$(function () {
    $("#search").find(".inp_srh").keypress(function (e) {
        if (e.which == 13) {
            search(this);
        }
    });
});
function search(sender) {
    var key = $(sender).parents("form").find("input[name='key']").val();
    if (key && key != "请输入相关玉器名称或编号") {
        window.location.href = "/shop.html?key=" + key;
    }
}

function addJadeVipAttention() {
    checkIsLogin(function (data) {
        if (data.OnLine) {
            AjaxHelper.post("/Account/AddJadeVipAttention", { username: data.Username }, function (rst) {
                alert(rst.Result);
            });
        } else {
            window.location.href = BaseNet + "/login?returnUrl=" + window.location.href;
        }
    });
}