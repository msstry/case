/// <reference path="../base.js" />
/// <reference path="../../jquery-1.8.2.js" />
/// <reference path="SignWindow.js" />
/// <reference path="../../../Content/Front/js/page.js" />
$(function () {
    //tryAjaxSign(null);
    dropMenu($(".header").find(".member>ul").find("li[data-flag='drop-menu-effect']"));
    // if (Url) {
    //     login();
    // }
});
function login() {
    if ($("#signWindow").attr("data-flag") == "Template") {
        pageInitStart();
        fastLogin();
    } else {
        AjaxHelper.oAjaxPost(baseUrl + "/Member/SingWindow", null, function (rst) {
            $("#signWindow").html(rst);
            pageInitStart();
            fastLogin();
        });
    }
}
function fastLogin() {
    $("#login-modal").showModal(null, function () {
        $("#tips_error").html("");
    });
}
function tryAjaxSign(callback) {
    AjaxHelper.oAjaxPost(baseUrl + "/System/GetUserInfo", null, function (data) {
        if (data.Content) {
            $(".header").find(".member").html(data.Content);
            dropMenu($(".header").find(".member>ul").find("li[data-flag='drop-menu-effect']"));
            if (data.UserId) {
                if (callback) {
                    callback();
                } else {
                    if (data.UserId) {
                        //PoolingHelper.displayInfoReady("notice_" + data.UserId, function (rst) {
                        //    if (rst) {
                        //        $("body").triggerHandler("notice_msg", rst);
                        //    }
                        //});
                    }
                }
            }
        }
    });
}
function quit(returnUrl) {
    AjaxHelper.oAjaxPost(baseUrl + "/Account/Quit/", { id: returnUrl }, function (data) {
        if (data && data.State) {
            if (returnUrl) {
                window.location.href = returnUrl;
                return;
            }
            $(".member").html('<ul><li class="nologin"><a href="javascript:;" onclick="login();">登录</a> <a href="' + baseUrl + '/Reg">注册</a></li></ul>');
            //window.polling.v = 0;
            return;
        }
    });
}
function checkIsLogin(callback) {
    AjaxHelper.oAjaxPost(baseUrl + "/Account/CheckIsLogin/", null, function (data) {
        if (callback) {
            callback(data);
        }
    });
}

$(function () {
    $("body").bind("notice_msg", function (event, lst) {
        event.preventDefault();
        tryAjaxSign(function () {
            //$(lst).each(function (i, msg) {
            // $("#MsgWin").append(msg.Content + "<br/>");
            //});
        });
    });
});
//function initNoticeChat(chatUserId) {
//    window.polling = {
//        ///长连接地址
//        connectionUrl: baseUrl + "/Notice/Connect",
//        ///发送方式 
//        method: "POST",
//        ///事件载体
//        event_host: $("body"),
//        ///连接失败时重连接时间
//        period: 1000 * 20,
//        ///连接超时时间
//        timeOut: 60 * 1000 * 30,
//        v: 0,
//        ///连接ID
//        id: chatUserId,
//        error_num: 0,
//        Reconnect: function () {
//            polling.v++;
//            AjaxHelper.oAjaxPost(polling.connectionUrl, { id: polling.id, version: polling.v }, function (json) {
//                if (json.Version == -1) {
//                    return;
//                }
//                polling.event_host.triggerHandler("notice_msg", json.SecretDataLst);
//                if (json.Version == polling.v)
//                    polling.Reconnect();
//            }, true, polling.timeOut);
//        }
//    };
//    polling.Reconnect();
//}

var PoolingHelper = {
    trackTimer: null,
    callbackAction: null,
    setTrackTimer: function (id) {
        PoolingHelper.trackTimer = setInterval(function () {
            PoolingHelper.trackProgress(baseUrl + "/System/LoadTrackProgress/" + id);
        }, 15000);
        return PoolingHelper.trackTimer;
    },
    displayInfoReady: function (id, callback) {
        if (callback) {
            PoolingHelper.callbackAction = callback;
        }
        PoolingHelper.setTrackTimer(id);
    },
    trackProgress: function (url) {
        AjaxHelper.oAjaxPost(url, {}, function (rst) {
            if (PoolingHelper.callbackAction) {
                PoolingHelper.callbackAction(rst);
            }
        }, true);
    }
}