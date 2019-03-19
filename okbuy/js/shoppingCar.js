$(function () {
    if (getCookie("usernames")!=null){
        $(".cartlogin").css("display","none");
    }else{
        $(".cartlogin").css("display","block");
    }
    $(".checkb").click(function () {
        $(this).toggleClass("check-all");
    });
    let goodsId=1;
    let imgAndSize;
    //连接数据库的加入购物车
    $(".btn").click(function () {
        let goodsImg = $(".min").attr("src");
        let goodsPrice = $(".prodPriceAj").html();
        let goodsSize = $(".xuanzhong").find("b").html();
        let goodsCount = $(".count_num").html();
        let goodsName=$(".name").html();
        add();
        if (goodsSize==undefined){
            return alert("请选择一个尺码！");
        }
        let str = `goodsId=${goodsId}&goodsImg=${goodsImg}&goodsName=${goodsName}&goodsSize=${goodsSize}&goodsCount=${goodsCount}&goodsPrice=${goodsPrice}`;
        $.ajax({
            type:"GET",
            url:"php/addShoppingCart.php",
            data:str,
            success:function (str) {
                if (str==1){
                    alert("加入成功！");
                }
                else{
                    alert("加入失败");
                }
            }
        });
        goodsId++;
    });
    $.ajax({
        type:"GET",
        url:"php/getGoodsList.php",
        success:function (str) {
            showData(str);
            imgAndSize=`goodsImg=${$(".goodImg").attr("src")}&goodsSize=${$(".goodSize").html()}`;
            add();
        }
    });
});
//购物车的下拉和隐藏
$(".top_right").hover(function () {
    if ($(".car_top").length==0) {
        return alert("您还没有添加任何商品商品，请先去加购再来查看！");
    }else{
        $(".top_right .carlist").stop();
        $(".top_right .carlist").slideDown(500);
    }
},function (){
    $(".top_right .carlist").stop();
    $(".top_right .carlist").slideUp(500);
});
let list=0;
// 添加购物车的商品
function add() {
    $(".counts").append(`<div class="car_top">
                        <a href="#" class="tupian"><img src="images/color.jpg"></a>
                        <div class="textms">
                            <p>时尚女鞋  大黄靴</p>
                            <span class="price"><b class="dnum">1220 </b> RMB x <b class="con">1</b></span>
                        </div>
                        <a href="#" class="del">x</a>
                    </div>`);
    $(".sl").html("(" + $(".car_top").length + ")");
    list=$(".car_top").length;
    $(".sumMoney").html($(".dnum").html()*$(".car_top").length);
    // 删除购物车的商品
    $(".del").click(function () {
        if(list==1){
            alert("确定要狠心离它而去嘛？");
            $(".carlist").remove();
        }else{
            alert("确定要狠心离它而去嘛？");
            $(this).parent().remove();
        }
    });
}

function showData(str) {
    let objs = JSON.parse(str);
    let sum=0;
    let jijian=0
    if (objs.length>0){
        $(".nullcar").css("display","none");
    }else {
        $(".nullcar").css("display","block");
        return;
    }
    let htmlStr="";
    $.each(objs,function (i) {
        htmlStr+=`<li class="goods  goodsBox">
                <ul>
                    <li class="l110 one">
                        <b class="checkb"></b>
                    </li>
                    <li class="l460">
                        <img class="goodImg" src="${objs[i].goodsImg}">
                        <div class="jieshi">
                            <h5 title="${objs[i].goodsName}">${objs[i].goodsName}</h5>
                            <h5><span>尺码: </span><b class="goodSize">${objs[i].goodsSize}</b></h5>
                        </div>
                    </li>
                    <li class="l110 prices">￥${objs[i].goodsPrice}</li>
                    <li class="shop-con">
                        <button class="jian-">-</button><button class="gmcont">${objs[i].goodsCount}</button><button class="jia+">+</button>
                    </li>
                    <li class="l110 sumprice">￥${objs[i].goodsPrice*objs[i].goodsCount}</li>
                    <li class="sAadDel">
                        <b class="shoucang" title="收藏"></b>
                        <b class="shanchu" title="删除"></b>
                    </li>
                </ul>
            </li>`;
        sum=sum+objs[i].goodsPrice*objs[i].goodsCount;
        jijian=jijian+parseInt(objs[i].goodsCount);

    }) ;
    $(".thead").after(htmlStr);
    $(".pay_money").html("￥"+sum);
    $(".sum-count").html(jijian);
    $(".jine").html(sum+1220);
    $(".sl").html("("+jijian+")");
    // 删除记录(放在获取购物车信息的回调函数里面)
    $.each($(".shanchu"),function () {
        let $this;
        $(this).click(function() {
            $this=$(this);
            $.ajax({
                type:"GET",
                url:"php/deleteGoods.php",
                data:"goodsSize="+$(".goodSize").html(),
                success:function (str) {
                    if (str == "1") {
                        $this.parents(".goods").remove();
                        alert("删除成功");
                    } else {
                        alert("没有删除！");
                    }
                }
            });
        })
    });
}
