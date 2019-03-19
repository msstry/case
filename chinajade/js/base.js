/// <reference path="../jquery-1.8.2.js" />
$(function () {
    pageInitStart();
});

function pageInitStart() {
    $("a[data-dismiss='shadow-modal']").click(function () {
        $(this).parents(".shadow-modal").closeModal($(this));
    });
    $("button[data-dismiss='shadow-modal']").click(function () {
        $(this).parents(".shadow-modal").closeModal($(this));
    });
    $("input[data-flag='form-submit']").click(function () {
        var $form = $(this).parents("form");
        var url = $form.attr("action");
        var fields = $form.serializeArray();
        var params = "";
        $.each(fields, function (i, field) {
            if (fields.length == i + 1) {
                params += field.name + "=" + encodeURIComponent(field.value);
            } else {
                params += field.name + "=" + encodeURIComponent(field.value) + "&";
            }
        });
        var urlX = url + "?" + params;
        window.location.href = urlX;
    });
    $("form").keypress(function (e) {
        if (e.which == 13) {
            $(this).find("input[data-flag='form-submit']").click();
            if ($(this).find("input[name='key']").length > 0) {
                return false;
            }
        }
    });
}

$.fn.closeModalReset = function () {
    $(this).on("onHidden", function (event, sender) {
        var txt = sender.find("input");
        for (var i = 0; i < txt.length; i++) {
            if (txt[i].type == 'checkbox') {
                txt.attr("checked", false);
            }
            if (txt[i].type == 'submit') {
                continue;
            }
            $(txt[i]).val("");
        }
        sender.find("textarea").val("");
        sender.find("img").attr("src", "");
        var selects = sender.find("select");
        selects.each(function () {
            for (var j = 0; j < this.options.length; j++) {
                this.options[j].selected = false;
            }
            if (this.options[0]) {
                this.options[0].selected = true;
            }
        });
    });
}
$.fn.showModal = function (sender, callback) {
    var width = MyHelper.getDocumentWidth();
    var height = MyHelper.getDocumentHeight();
    var marginLeft = (width - $(this).width()) / 2;
    var marginLeftPercent = (marginLeft / width) * 100;
    var marginTop = 100;
    $(this).css("left", marginLeftPercent + "%");
    $(this).css("top", marginTop);
    $(this).show();
    $(".shadow_mask").show(10, function () {
        $(".shadow_mask").css("height", height);
    });
    if (callback) {
        callback();
    }
};
$.fn.closeModal = function (sender, callback) {
    $(this).hide();
    $(".shadow_mask").hide();
    $(this).trigger("onHidden", [$(this), sender]); //modal,sender
    if (callback) {
        callback();
    }
};
var MyHelper = {
    getDocumentWidth: function () {
        return $(document).width();
    },
    getDocumentHeight: function () {
        return $(document).height();
    },
    getClientWidth: function () {
        return document.body.clientWidth;
    },
    getClientHeight: function () {
        return document.documentElement.clientHeight;
    },
    showTip: function (title, content, callback) {
        if (title) {
            $("#tips-modal").find(".header-shadow-modal").find("span").html(title);
        }
        if (content) {
            $("#tips-modal").find(".body-shadow-modal").html(content);
        }
        $("#tips-modal").showModal();
        if (callback) {
            callback($("#tips-modal"));
        }
    },
    showConfirm: function (title, content, callbackOk, callbackCancel, closeConfirmCallback) {
        var $confirm = $("#confirm-modal");
        if (title) {
            $confirm.find(".header-shadow-modal").find("span").html(title);
        }
        if (content) {
            $confirm.find(".body-shadow-modal").html(content);
        }
        $confirm.showModal();
        $confirm.off("onHidden");
        $confirm.on("onHidden", function (event, $modal, senderTrigger) {
            var flag = senderTrigger.attr("data-flag");
            if (flag == "ok") {
                if (callbackOk) {
                    callbackOk();
                }
            } else {
                if (callbackCancel) {
                    callbackCancel();
                }
            }
            if (closeConfirmCallback) {
                closeConfirmCallback($confirm);
            }
        });
    },
    initForm: function (containerSel, data) {
        var fields = $(containerSel);
        for (var item in data) {
            if (data[item] != undefined) {
                var txt = $(fields).find("input[name='" + item + "']");
                if (txt.length > 0) {
                    if (txt[0].type == 'checkbox') {
                        txt.attr("checked", data[item]);
                    }
                    else {
                        txt.val(data[item]);
                    }
                }
                var select = $(fields).find("select[name='" + item + "']");
                if (select.length > 0) {
                    select.val(data[item].toString());
                }
                var txtArea = $(fields).find("textarea[name='" + item + "']");
                if (txtArea.length > 0) {
                    txtArea.val(data[item]);
                }
                var radios = $(fields).find("input:radio[name='" + item + "']");
                if (radios.length > 0) {
                    radios.each(function (i, sender) {
                        var xx = $(sender).attr("flag");
                        if (xx == data[item].toString()) {
                            $(sender).click();
                        }
                    });
                }
                var img = $(fields).find("img[flag='" + item + "']");
                if (img.length > 0) {
                    img.attr("src", data[item]);
                }
            }
        }
    },
    resetForm: function (containerSel) {
        var txt = containerSel.find("input");
        for (var i = 0; i < txt.length; i++) {
            if (txt[i].type == 'checkbox') {
                txt.attr("checked", false);
            }
            if (txt[i].type == 'submit') {
                continue;
            }
            $(txt[i]).val("");
        }
        containerSel.find("textarea").val("");
        containerSel.find("img").attr("src", "");
        var selects = containerSel.find("select");
        selects.each(function () {
            for (var j = 0; j < this.options.length; j++) {
                this.options[j].selected = false;
            }
            if (this.options[0]) {
                this.options[0].selected = true;
            }
        });
    }
}
var AjaxHelper = {
    post: function (url, params, callback, contentType, errorCallback, fromBtn) {
        if (fromBtn) {
            if ($(fromBtn).attr("data-state") == "ing") {
                return;
            }
            $(fromBtn).attr("data-temp-value", fromBtn.innerText);
            $(fromBtn).html("正在提交...");
            $(fromBtn).attr("data-state", "ing");
            $(fromBtn).addClass("btn_disable");
        }
        var type = "application/json";
        var postParams;
        if (contentType) {
            type = contentType;
        }
        if (params) {
            postParams = JSON.stringify(params);
        } else {
            postParams = {};
        }
        $.ajax(url, {
            type: "post",
            contentType: type,
            data: postParams,
            error: function (a, b, c) {
                if (errorCallback) {
                    errorCallback(a, b, c);
                }
            },
            success: function (rst) {
                if (fromBtn) {
                    $(fromBtn).removeAttr("data-state");
                    $(fromBtn).removeClass("btn_disable");
                    $(fromBtn).html($(fromBtn).attr("data-temp-value"));
                    $(fromBtn).removeAttr("data-temp-value");
                }
                if (callback) {
                    callback(rst);
                }
            }
        });
    },
    asyncPost: function (url, params, callback, contentType) {
        var type = "application/json";
        if (contentType) {
            type = contentType;
        }
        if (params) {
            $.ajax(url, {
                type: "post",
                contentType: type,
                data: JSON.stringify(params),
                async: false,
                success: function (rst) {
                    if (rst) {
                        if (callback) {
                            callback(rst);
                        }
                    }
                }
            });
        } else {
            $.ajax(url, {
                type: "post",
                contentType: type,
                async: false,
                success: function (rst) {
                    if (rst) {
                        if (callback) {
                            callback(rst);
                        }
                    }
                }
            });
        }
    },
    ///Services/UserService.svc/AddUser
    servicePost: function (url, params, callback) {
        $.ajax(url, {
            type: "post",
            contentType: "application/json",
            data: JSON.stringify(params),
            success: function (rst) {
                if (rst.d) {
                    if (callback) {
                        callback(rst.d);
                    }
                }
            }
        });
    },
    serviceAsyncPost: function (url, params, callback) {
        $.ajax(url, {
            type: "post",
            contentType: "application/json",
            data: JSON.stringify(params),
            async: false,
            success: function (rst) {
                if (rst.d) {
                    if (callback) {
                        callback(rst.d);
                    }
                }
            }
        });
    },
    oAjaxPost: function (url, params, callback, isAsync, timeOut) {
        $.ajax({
            type: "POST",
            async: isAsync ? isAsync : false,
            url: url,
            dataType: "jsonp",
            data: params,
            //jsonp: "callback",
            //jsonpCallback: "successJsonpCallback",
            timeout: timeOut ? timeOut : 7200 * 1000,
            success: function (data) {
                if (callback) {
                    callback(data);
                }
            },
            error: function (a, b, c) {
            },
            complete: function (xhr, ts) { xhr = null; }
        });
    }
}

$.fn.serializeObject = function () {
    var o = {};
    var a = this.map(function () {
        return this.elements ? jQuery.makeArray(this.elements) : this;
    })
		.filter(function () {
		    return this.name;
		})
		.map(function (i, elem) {
		    var val = jQuery(this).val();
		    if (this.type === "checkbox") {
		        val = $(elem).is(":checked") ? "true" : "false";
		    }
		    if (this.type === "textarea") {
		        //val = CKEDITOR.instances[$(this).attr("name")].getData();//tinyMCE.get(elem.id).getContent();
		    }
		    return val == null ?
				null :
				jQuery.isArray(val) ?
					jQuery.map(val, function (val, i) {
					    return { name: elem.name, value: val };
					}) :
					{ name: elem.name, value: val };
		}).get();
    var tempStruct = {};
    $.each(a, function () {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            var index = this.name.indexOf("__");
            if (index > 0) {
                var objsname = this.name.substring(0, index);
                var objname = this.name.substring(index + 2, this.name.length);
                if (!o[objsname]) {
                    o[objsname] = {};
                }
                tempStruct[objname] = this.value || '';
                o[objsname] = tempStruct;
            } else {
                o[this.name] = this.value || '';
            }
        }
    });
    return o;
};

var Guid = {
    Empty: function () {
        return "00000000-0000-0000-0000-000000000000";
    }
};

/******************睡眠函数******************/
function sleep(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
            return;
    }
}

function refreshImage(imgId, url) {
    var selectHidden;
    if (imgId.indexOf("#") == 0) {
        imgId = imgId.substring(1);
        var search = "img[flag='" + imgId + "']";
        if (!(url.indexOf("/") == 0)) {
            url = "/" + url;
        }
        var num = Math.random();
        $(search).attr("src", url + "?v=" + num);
        var $link = $(search).parent();
        if ($link.length > 0) {
            $link.attr("href", url);
        }
        selectHidden = "input[name='" + imgId + "']";
        $(selectHidden).val(url);
    } else {
        var searchStr = "img[flag='" + imgId + "']";
        $(searchStr).attr("src", url);
        var $link1 = $(searchStr).parent();
        if ($link1.length > 0) {
            $link1.attr("href", url);
        }
        selectHidden = "input[name='" + imgId + "']";
        $(selectHidden).val(url);
    }
}

function importData(url, targetDom, $guid, customProgressNotification, uploadWay, name) {
    $("#importDataFrame").contents().find("form").attr("action", url);
    var file = $("#importDataFrame").contents().find("input[type='file']");
    file.after(file.clone().val(""));
    file.remove();
    var target = $("#importDataFrame").contents().find("input[name='Target']");
    target.after(target.clone().val(targetDom));
    target.remove();
    if ($guid) {
        var uploadInfoGuid = $("#importDataFrame").contents().find("input[name='UploadInfoGuid']");
        uploadInfoGuid.after(uploadInfoGuid.clone().val($guid));
        uploadInfoGuid.remove();
    }
    if ($guid && customProgressNotification) {
        FileUpload.showProgressNotification = customProgressNotification;
    }
    if (uploadWay) {
        var $uploadWay = $("#importDataFrame").contents().find("input[name='UploadWay']");
        $uploadWay.after($uploadWay.clone().val(uploadWay));
        $uploadWay.remove();
    }
    if (name) {
        var $name = $("#importDataFrame").contents().find("input[name='Name']");
        $name.after($name.clone().val(name));
        $name.remove();
    }
    $("#importDataFrame").contents().find("input[type='file']").click();
}

var FileUpload = {
    uid: null,
    trackTimer: null,
    showProgressNotification: null,
    setTrackTimer: function () {
        FileUpload.trackTimer = setInterval(function () {
            FileUpload.trackUploadProgress("/System/TrackProgress/", FileUpload.uid, FileUpload.showProgressNotification);
        }, 500);
        return FileUpload.trackTimer;
    },
    displayUploadInfoReady: function (uid) {
        FileUpload.uid = uid;
        FileUpload.setTrackTimer();
    },
    trackUploadProgress: function ($url, $guid, customCallback) {
        $.ajax({
            url: $url,
            type: "post",
            data: {
                guid: $guid
            },
            success: function (data) {
                //$notificationObject.showProgressNotification(data, true);
                if (data == "error") {
                    return;
                }
                if (data == -3) {
                    clearTimeout(FileUpload.trackTimer);
                    customCallback(data, "sizeError");
                    return;
                }
                if (data == -2) {
                    clearTimeout(FileUpload.trackTimer);
                    customCallback(data, "error");
                } else {
                    if (customCallback) {
                        if (data == -1) {
                            clearTimeout(FileUpload.trackTimer);
                            customCallback(100, true);
                        } else {
                            customCallback(data, false);
                        }
                    }
                }
            }
        });
    }
};

function sortAction(sender, col, params) {
    var baseAction = $(sender).attr("data-action");
    var goUrl;
    if (!$(sender).hasClass("on_arrow_up") && !$(sender).hasClass("on_arrow_down")) {
        var sortNUll = "sort=" + col + "&order=" + ((col == "Price") ? "asc" : "desc");
        if (params) {
            sortNUll = params + "&" + sortNUll;
        }
        goUrl = baseAction + "?" + sortNUll;
    } else {
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
    }
    if (baseAction) {
        window.location.href = goUrl;
    }
}

$(function () {
    $("a[action-flag='send_msg']").live('click', function (e) {
        var sender = $(this);
        checkIsLogin(function (data) {
            if (data.OnLine) {
                if (data.Username != sender.attr("data-target")) {
                    window.location.href = baseUrl + "/MemberCenter/MsgInfo?group=" + sender.attr("data-target");
                } else {
                    MyHelper.showTip(null, "对不起，您不可以给自己写私信。");
                }
            } else {
                login();
            }
        });
    });
});

$.fn.initPager = function (url, template, skinBox, firstCallBack, callback, attchData) {
    var pageSize = 12;
    var container = $(this);
    container.attr("firstLoad", true);
    function getData(pageIndex, customPageSize, refreshCallback) {
        if (customPageSize) {
            pageSize = customPageSize;
        }
        container.data("refreshPager", function (customPageSize, refreshCallback) {
            getData(pageIndex, customPageSize, refreshCallback);
        });
        var data = {};
        if (attchData) {
            $(attchData).each(function (i) {
                $.each(attchData[i], function (key, value) {
                    if (typeof (value) != 'string' && value.val()) {
                        data[key.toString()] = value.val();
                    } else {
                        var selector = value;
                        if ($(selector).length > 0) {
                            data[key.toString()] = $(selector).val();
                        } else {
                            data[key.toString()] = value;
                        }
                    }
                });
            });
        }
        data.pageIndex = pageIndex;
        data.pageSize = pageSize;
        $.ajax(url, {
            type: "post",
            contentType: "application/json",
            data: JSON.stringify(data),
            error: function (a, b, c) {
            },
            success: function (rst) {
                if (rst && rst.d) {
                    rst = rst.d;
                }
                var flag = container.attr("firstLoad");
                if (firstCallBack && flag == 'true') {
                    firstCallBack(rst);
                    container.attr("firstLoad", false);
                }
                if (rst) {
                    var box = skinBox ? skinBox : "tbody";
                    var tbody = container.find(box);
                    tbody.empty();
                    if ($(template).length > 0) {
                        $(template).tmpl(rst.Data).appendTo(tbody);
                        container.find(".pagination").pager({ pagenumber: pageIndex, pagecount: rst.Count, buttonClickCallback: getData });
                        //container.find(".dataTables_info").html("<span style='font-size:1.2em;text-indent:10px;display:inline-block'>共: " + rst.Count + "页</span>");
                        if (callback) {
                            callback(rst, tbody);
                        }
                        if (refreshCallback) {
                            refreshCallback(rst, tbody);
                        }
                    }
                }
            }
        });
    }
    container.data("gotoPager", getData);
    getData(1, pageSize);
};

$.fn.refreshPager = function (customPageSize, refreshCallback) {
    var fn = $(this).data("refreshPager");
    if (fn && typeof (fn) == "function") {
        fn(customPageSize, refreshCallback);
    }
};

$.fn.gotoPager = function (pageIndex, pageSize) {
    var fn = $(this).data("gotoPager");
    if (fn && typeof (fn) == "function") {
        fn(pageIndex, pageSize);
    }
};
$(function () {
    $("input[name='txtPager']").keyup(function (event) {
        if (event.keyCode == 13) {
            $("#linkPageBtn").click();
            return;
        }
        var c = $(this);
        if (/[^\d]/.test(c.val())) { //替换非数字字符  
            var temp_amount = c.val().replace(/[^\d]/g, '');
            $(this).val(temp_amount);
        }
    });
});

function trimInputValue(sender) {
    var c = $(sender);
    var tempamount = c.val().replace(/\D/g, '');
    $(sender).val(tempamount);
}
function jumpToPage(url, params, max) {
    var goPage = $("input[name='txtPager']").val();
    if (goPage > 0 && goPage <= max) {
        window.location.href = encodeURI(url + goPage + params);
    }
    if (goPage <= 0) {
        window.location.href = encodeURI(url + 1 + params);
    }
    if (goPage > max) {
        window.location.href = encodeURI(url + max + params);
    }
}

function trim(str) { //删除左右两端的空格
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
function ltrim(str) { //删除左边的空格
    return str.replace(/(^\s*)/g, "");
}
function rtrim(str) { //删除右边的空格
    return str.replace(/(\s*$)/g, "");
}
String.prototype.replaceAll = function (reallyDo, replaceWith, ignoreCase) {
    if (!RegExp.prototype.isPrototypeOf(reallyDo)) {
        return this.replace(new RegExp(reallyDo, (ignoreCase ? "gi" : "g")), replaceWith);
    } else {
        return this.replace(reallyDo, replaceWith);
    }
}

function getExtension(filename) {
    //var result = /\.[^\.]+/.exec(file_name);
    //return result;
    var index1 = filename.lastIndexOf(".");
    var index2 = filename.length;
    var postf = filename.substring(index1, index2);
    return postf;
}

function isExtensionOk(ex) {
    var state = false;
    var exLow = ex.toLowerCase();
    switch (exLow) {
        case ".png":
            state = true;
            break;
        case ".jpg": state = true;
            break;
        case ".jpeg": state = true;
            break;
        case ".gif": state = true;
            break;
        case ".bmp": state = true;
            break;
        default: state = false;
    }
    return state;
}