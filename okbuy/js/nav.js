//菜单下拉封装
function menu() {
    // 导航栏的下拉菜单开始
    // 从这开始到结束都是垃圾
    // 1
    $(".sport").mouseenter(function () {
        $(".sport_list1").css("display","inline-block")
    });
    $(".sport").mouseleave(function () {
        $(".sport_list1").css("display","none")
    });
    $(".sport_list1").mouseenter(function () {
        $(".sport_list1").css("display","inline-block");
    })
    $(".sport_list1").mouseleave(function () {
        $(".sport_list1").css("display","none");
    });
    //2
    $(".xiuXian").mouseenter(function () {
        $(".xiuXian_list").css("display","inline-block")
    });
    $(".xiuXian").mouseleave(function () {
        $(".xiuXian_list").css("display","none")
    });
    $(".xiuXian_list").mouseenter(function () {
        $(".xiuXian_list").css("display","inline-block");
    });
    $(".xiuXian_list").mouseleave(function () {
        $(".xiuXian_list").css("display","none");
    });
    //3
    $(".boyAndGirl").mouseenter(function () {
        $(".boyAndGirl_list").css("display","inline-block")
    });
    $(".boyAndGirl").mouseleave(function () {
        $(".boyAndGirl_list").css("display","none")
    });
    $(".boyAndGirl_list").mouseenter(function () {
        $(".boyAndGirl_list").css("display","inline-block");
    })
    $(".boyAndGirl_list").mouseleave(function () {
        $(".boyAndGirl_list").css("display","none");
    })
    //4
    $(".global").mouseenter(function () {
        $(".global_list").css("display","inline-block")
    });
    $(".global").mouseleave(function () {
        $(".global_list").css("display","none")
    });
    $(".global_list").mouseenter(function () {
        $(".global_list").css("display","inline-block");
    });
    $(".global_list").mouseleave(function () {
        $(".global_list").css("display","none");
    });
    $(".select").focus(function () {
        $(this).val("");
    });
    // 导航栏下拉菜单结束
}
// 搜索框聚焦清空
$(".select").focus(function () {
    $(this).val();
});
//搜索框复原
$(".select").blur(function () {
    $(this).val("Champion");
});
// 回到顶部
$(".scrollTop").click(function () {
    $(window).scrollTop(0);
});
