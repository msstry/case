//翻页器
$(".listJump .but").hover(function () {
    $(this).addClass("hover")
}, function () {
    $(this).removeClass("hover")
});
$(".listJump .goI").focus(function () {
    $(this).addClass("goF").next("a").show();
}).blur(function () {
    if (!$(this).next("a").hasClass("hover")) {
        $(this).removeClass("goF").next("a").hide()
    }
})
//-----导航下拉菜单-------------------
function dropMenu(obj) {
    $(obj).each(function () {
        var theSpan = $(this);
        var theMenu = theSpan.find(".dropmenu");
        var tarHeight = theMenu.height();
        theMenu.css({ height: 0, opacity: 0 });
        theSpan.hover(
            function () {
                $(this).addClass("current");
                theMenu.stop().show().animate({ height: tarHeight, opacity: 1 }, 400);
            },
            function () {
                $(this).removeClass("current");
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
$(".outList > li,.piclist li,.goods_shop li,.shop_recommend li").on("mouseenter", function () {
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
    controlHTML: '<img src="'  + '/imgs/topback.gif" style="width:54px; height:54px; border:0;" />', //返回顶部按钮
    controlattrs: { offsetx: 10, offsety: 120 },//返回按钮固定位置
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

if (!AFed) {
    var AFed = {};
}
$.extend(AFed, {
    SearchInit: function (element, info, tags, color) {
        var $self = $(element),
            $inputObj = $self.find(".sInput"),
            inputVal = $inputObj.val(),
            alertInfo = info || "",
            tags = tags || false
        borderColor = color || "#0F820C";
        if (!inputVal || alertInfo == inputVal) {
            $inputObj.addClass("sGray").val(alertInfo);
        }
        /*if("" != inputVal||inputVal==alertInfo){
            $inputObj.addClass("sGray").val(alertInfo);
        }*/
        $self.find(".sRadius").on("mouseenter", function () {
            var sInputVal = $.trim($inputObj.val());
            if (sInputVal && alertInfo != sInputVal) {
                return;
            }
            $(this).stop().css("border-color", "#D4D4D4").animate({
                "borderColor": borderColor
            }, 200, function () {
                $(this).closest("#sForm").addClass("on");
                $(this).css("border-color", borderColor);
            });
        }).on("mouseleave", function () {
            var sInputVal = $.trim($inputObj.val());
            if (!sInputVal || (alertInfo == sInputVal)) {
                $(this).stop().css("border-color", borderColor).animate({
                    "borderColor": "#D4D4D4"
                }, 200, function () {
                    $(this).closest("#sForm").removeClass("on");
                    $(this).css("border-color", "");
                });
            }
        });
        $inputObj.on("focus", function () {
            var $sForm = $(this).closest("#sForm");
            if (alertInfo == $(this).val()) {
                $(this).addClass("sFocus");
            }
        }).blur(function () {
            var $sForm = $(this).closest("#sForm"),
                val = $.trim($(this).val());
            if ("" == val) {
                $(this).addClass("sGray").val(alertInfo);
                $(this).parent().stop().css("border-color", borderColor).animate({
                    "borderColor": "#D4D4D4"
                }, 200, function () {
                    $(this).css("border-color", "#D4D4D4");
                });
                $sForm.removeClass("on");
                $(this).parent().stop().css("border-color", borderColor).animate({
                    "borderColor": "#D4D4D4"
                }, 200, function () {
                    $(this).css("border-color", "");
                });
            }
            if (tags) {

            }
        });
        if (tags) {

        }
        else {
            var classHeight = parseInt($self.find(".classify").height());
            $self.find(".class").on("mouseenter", function () {
                $(this).addClass("hover").children(".classify").css({
                    "height": "0",
                    "visibility": "visible"
                }).stop().animate({
                    "height": classHeight
                },
                        200);
            }).on("mouseleave", function () {
                $(this).removeClass("hover").children(".classify").stop().animate({
                    "height": 0
                },
                    200,
                    function () {
                        $(this).css("visibility", "hidden")
                    });
            });

            $self.find("li").on("mouseover", function () {
                $(this).addClass("hover");
            }).on("mouseleave", function () {
                $(this).removeClass("hover");
            });
            $self.find(".classify").children("li").click(function () {
                $(this).closest(".class").find("em").html($(this).html());
                $(this).closest(".classify").animate({
                    "height": 0
                },
                200,
                function () {
                    $(this).css("visibility", "hidden");
                });
            });
        }
    }

});

$(function () {
    AFed.SearchInit("#minSearch", "请输入关键词");

    $("#keyword").focus(function () {
        var value = $(this).val();
        if (value == "请输入关键词") {
            $(this).val("");
        }
    }).blur(function () {
        if ($(this).val() == "") {
            $(this).val("请输入关键词").addClass("sGray");
        }
    });

});
function formartsosubmit() {
    var name = $('#sorts').text();
    var num = 0;
    var link = new Array(
        baseUrl + '/news?key=',
        baseUrl+'/Product?key=',
        baseUrl+'/yudiao?key=',
        baseUrl+'/jianding/qlist-1.html?key=',
        baseUrl+'/ask?key=',
        baseUrl+'/yuliao?key=');
    switch (name) {
        case '资讯':
            num = 0;
            break;
        case '商城':
            num = 1;
            break;
        case '玉雕':
            num = 2;
            break;
        case '鉴定':
            num = 3;
            break;
        case '问答':
            num = 4;
            break;
        case '玉料':
            num = 5;
            break;
    }
    if (trim($('#keyword').val()) == "" || "请输入关键词" == trim($('#keyword').val())) {
        alert('请输入搜索关键词！');
    } else {
        window.open(link[num] + encodeURI(trim($('#keyword').val())), '_blank');
    }
}