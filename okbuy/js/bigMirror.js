function f(str){
    if(str.charAt(0)=="#"){
        return document.getElementById(str.substring(1));
    }else if(str.charAt(0)=="."){
        return document.getElementsByClassName(str.substring(1));
    }else{
        return document.getElementsByTagName(str);
    }
}
window.onload=function(){
    // 创建放大镜对象
    let b = new BigMirror({
        boxDom:f("#left_box"),
        imgUrl:str,
        muliple:3.2
    });
    b.createUI();
    b.addEvent();
    // 鼠标划上放大镜出现
    $("#left_box").mouseover(function () {
        $(".mirrorBox").css("display","block");
        $(".showBox").css("display","block");
    });
    // 鼠标离开放大镜消失
    $("#left_box").mouseout(function () {
        $(".mirrorBox").css("display","none");
        $(".showBox").css("display","none");
    });
    // 鼠标滑过小图改变大盒子的图片
    $(".min").mouseover(function () {
        str=$(this).attr("src");
        $("#left_box").css("background-image","url("+str+")");
        $(".showBox").css("background-image","url("+str+")");
    });
    // 商品数量减少
    //初始化商品数量
    let count=1;
    $(".dj").click(function () {
        if (count<1){
            return alert("已达到最小数量");
        }else{
            count--;
            $(".count_num").html(count);
        }
    });
    // 商品数量增加
    $(".add").click(function () {
        if (count>=5){
            return alert("不好意思，本商品限购5件，如需大批量购买请分开下单");
        } else{
            count++;
            $(".count_num").html(count);
        }
    });
    //勾选鞋码
    $(".none").click(function () {
        $($(".none")).removeClass("xuanzhong");
        $(this).addClass("xuanzhong");
    });
}

function BigMirror(obj){
	//数据：
	let defaultObj = {
		boxDom:null,
		mirrorBoxDom:null,
		showBoxDom:null,
		imgUrl:"#",//放大效果里图片
		width:180,//镜子的宽
		height:180,
		bgcolor:"rgba(255,255,255,0.5)",
		opacity:0.5,
		left1:0,
		top1:0,
		muliple:2
	}
	for(let key in defaultObj){
		obj[key]?this[key]=obj[key]:this[key]=defaultObj[key];
	}
}

BigMirror.prototype.createUI = function() {
	//1、创建镜子
	this.mirrorBoxDom = document.createElement("div");
    this.mirrorBoxDom.setAttribute("class","mirrorBox");
	this.mirrorBoxDom.style.cssText = `position:absolute;
				left:${this.left1}px;
				top:${this.top1}px;
				width:${this.width}px;
				height:${this.height}px;
				background-color:${this.bgcolor};
				opacity:${this.opacity};
				display:none`;
	this.boxDom.appendChild(this.mirrorBoxDom);

	//2、创建放大效果
	this.showBoxDom = document.createElement("div");
    this.showBoxDom.setAttribute("class","showBox");
	this.showBoxDom.style.cssText = `position:absolute;
				left:${this.boxDom.offsetWidth+10}px;
				top:0px;
				width:${this.width*this.muliple}px;
				height:${this.height*this.muliple}px;
				background-image:url(${this.imgUrl});
				background-size:${this.boxDom.offsetWidth*this.muliple}px ${this.boxDom.offsetHeight*this.muliple}px;
				background-position:${-1*this.left1*this.muliple}px ${-1*this.top1*this.muliple}px;z-index:200;display:none`;

	this.boxDom.appendChild(this.showBoxDom);
};

BigMirror.prototype.addEvent = function(){
	this.boxDom.onmousemove = (event)=>{
		let evt = event || window.event;
		//1、数据
		this.left1 = evt.pageX-this.boxDom.offsetLeft-this.mirrorBoxDom.offsetWidth/2;
		this.top1 = evt.pageY-this.boxDom.offsetTop-this.mirrorBoxDom.offsetHeight/2;

		//2、边界
		if(this.left1<0){
			this.left1=0;
		}else if(this.left1>this.boxDom.offsetWidth-this.mirrorBoxDom.offsetWidth){
			this.left1=this.boxDom.offsetWidth-this.mirrorBoxDom.offsetWidth;
		}

		if(this.top1<0){
			this.top1=0;
		}else if(this.top1>this.boxDom.offsetHeight-this.mirrorBoxDom.offsetHeight){
			this.top1=this.boxDom.offsetHeight-this.mirrorBoxDom.offsetHeight
		}
		//3、外观
		this.mirrorBoxDom.style.left = this.left1+"px";
		this.mirrorBoxDom.style.top = this.top1+"px";
		this.showBoxDom.style.backgroundPosition= -1*this.muliple*this.left1+"px "+ -1*this.muliple*this.top1 +"px";
	}
};

