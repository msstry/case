//功能：阻止浏览器默认行为
//参数：事件对象
//返回值：无
function preventDe(ev){
	if(ev.preventDefault){
		ev.preventDefault();
	}else{
		ev.returnValue = false;
	}
}

//绑定事件的函数封装
//参数:
	//dom元素
	//事件类型名(不包含on)
	//事件处理函数
	//是否冒泡
//返回值：无

function event(domObj,eventType,func,isBubble){
	if(domObj.addEventListener){ //dom2
		domObj.addEventListener(eventType,func,isBubble);
	}else if(domObj.attachEvent){ //ie
		domObj.attachEvent("on" + eventType,func);
	}else{//dom0
		domObj["on"+eventType] = func;
	}
}
	
	
//功能：阻止冒泡的封装
//参数：事件对象
//返回值：无

function stopPropagation(ev){
	if(document.all){
		ev.cancelBubble = true;    //点版本IE
	}else{
		ev.stopPropagation();      //标准浏览器
	}
}

//功能：获取某个DOM元素的样式属性的兼容性写法
//参数：dom元素，样式属性名
//返回值：样式属性的值

function  getStyle(objDom,attr){
	if(objDom.currentStyle){//如果能够正确获取到，那就真
		return objDom.currentStyle[attr];//当对象的属性名是变量时，用方括号而不是点
	}else{
		return window.getComputedStyle(objDom)[attr];
	}
}
