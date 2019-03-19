// 1 功能:冒泡排序(从小到大排序),
// 参数:数组,
// 返回值:数组
function maoPao() {
	for (var i = 0; i < arr.length - 1; i++) {
		for (var j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = arr[j];
			}
		}
	}
	return arr;
}


// 2 功能:数组去重,
// 参数:数组,
// 返回值:无重复的数组
function qc(arr) {
	var newArr = [];
	for (var i in arr) {
		if (newArr.indexOf(arr[i]) == -1) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}


// 3 功能:实现与substring相同的功能,
// 参数:字符串,起始位置,结束位置,
// 返回值:字符串

function jq(str, start, end) {
	if (end == undefined) {
		end = str.length;
	}
	var newStr = "";
	for (var i = start; i < end; i++) {
		newStr += str.charAt(i);
	}
	return newStr;
}



// 4 功能:求两个日期的时间差,
// 参数:日期一,日期二,
// 返回值:天数

function timeCha(d1, d2) {
	var d1 = new Date(d1);
	var d2 = new Date(d2);
	var dateTime = Math.abs(d1.getTime() - d2.getTime());
	return dateTime / (24 * 1000 * 3600);
}


// 5 功能:正则函数的封装
// 参数:需要验证的类型(如email表示邮箱,phone表示手机号,cardID表示身份证号)
// 返回值:true或false

function regexp(types, str) {

	switch (types) {
		case "email":
			var reg = /^\w{3,}@\w{2,}\.(com|cn|net|com\.cn)$/i;
			break;
		case "phone":
			var reg = /^1[3-9]\d{9}$/i;
			break;
		case "cardId":
			var reg = /^[1-9]\d{16}[xX\d]$/i;
			break; ///^[1-9]\d{16}[xX\d]$/i
	}
	return reg.test(str);
}


// 6 功能:显示自定义时间,
// 参数:自定义时间,连接符,
// 返回值:字符串

function dingTime(date1, lian) {
	var str = "";
	if (lian == undefined) {
		return str = buLing(date1.getFullYear()) + "年" + buLing(date1.getMonth()) + "月" + buLing(date1.getDate()) + "日";
	} else {
		return str = buLing(date1.getFullYear()) + lian + buLing(date1.getMonth()) + lian + buLing(date1.getDate()) + lian;
	}
	return str + " " + buLing(date1.getHours()) + ":" + buLing(date1.getMinutes()) + ":" + buLing(date1.getSeconds());
}


// 7 功能:数字补零,
// 参数:数字,
// 返回值:字符串

function buLing(n) {
	if (n < 10) {
		return "0" + n;
	}else{
		return n;
		}
}


// 8 功能:判断星期几,
// 参数:数字(0-6),
// 返回值:字符串

function xingQi(n){
	switch(n){
		case 0:
		return "星期日";
		case 1:
		return "星期一";
		case 2:
		return "星期二";
		case 3:
		return "星期三";
		case 4:
		return "星期四";
		case 5:
		return "星期五";
		case 6:
		return "星期六";
	}
}

// 9 功能:保存cookie,
// 参数:键,值,有效期,
// 返回值：无

function saveCookie(key, value, days) {
	var d = new Date();
	d.setDate(d.getDate() + days);
	document.cookie = key + '=' + escape(value) + ';expires=' + d.toGMTString();
}


// 10 功能:获取cookie(根据键获取值),
// 参数:键,
// 返回值:值
function getCookie(key) {
	var str = unescape(document.cookie); //username=jzm; userpass=1236667
	//1、分割成数组（; ）
	var arr = str.split('; '); //['username=jzm','userpass=1236667']

	//2、从数组查找key=;
	for (var i in arr) {
		if (arr[i].indexOf(key + '=') == 0) {
			return arr[i].split('=')[1];
		}
	}
	return null;
}



// 11.功能:删除cookie,
// 参数:键,
// 返回值:无

function removeCookie(key){
	saveCookie(key,"",-1);
	
}

// 12.功能:获取某个元素的样式属性兼容写法,
// 参数:dom元素,样式属性名,
// 返回值:样式属性的值,
function getStyle(domObj,attr){
	if(domObj.currentStyle){
		return domObj.currentStyle[attr];
	}else{
		return window.getComputedStyle(domObj)[attr];
	}
}

// 13.功能:匀速运动封装,
// 参数:dom对象,
// 样式属性(top,left,width,height,opacity等等)
// 起始位置,结束位置
// 速度:时间间隔,步长,
// 方向
// 返回值:无
function moveObj(domObj,attr,startValue,endValue,timeSpace,step,direction) {
	
	let currValue = startValue;

	let myTimer = setInterval(function(){
		//1、改变数据
		currValue = currValue+direction*step;
		//判断边界
		if(Math.abs(currValue-endValue)<step){
			currValue = endValue;
			window.clearInterval(myTimer);
		}
		//3、改变外观
		if(attr=="opacity"){
			domObj.style[attr] = currValue;
		}else{
			domObj.style[attr] = currValue+"px";
		}

	},timeSpace);
}

// 14功能:封装匀速运动,
// 参数:dom对象,
// 样式属性(top,left,width,height,opacity等等)
// 结束位置
// 时长
// 返回值:无
function moveObj02(domObj,attr,endValue,timeLong,func) {
	let startValue = parseFloat(getStyle(domObj,attr));//??
	let direction= endValue-startValue>0?1:-1;//??	
	let timeSpace = 10;
	let step = Math.abs(endValue-startValue)/(timeLong/timeSpace) // endValue-startValue/步子数;//
	
	let currValue = startValue;
	let myTimer = setInterval(function(){
		//1、改变数据
		currValue = currValue+direction*step;

		//2、判断边界
		if(Math.abs(currValue-endValue)<step){
			currValue = endValue;
			window.clearInterval(myTimer);
			func&&func();
		}
		//3、改变外观
		if(attr=="opacity"){
			domObj.style[attr] = currValue;
		}else{
			domObj.style[attr] = currValue+"px";
		}

	},timeSpace);
}


// 15功能:封装抛物线运动,
// 参数:dom对象,
// 起点,终点,总时长
// 返回值:无
function parabola(domObj,startPoint,endPoint,timeLong,func){
	//一、初始化
	
	let offsetX = endPoint.x-startPoint.x;
	let offsetY = endPoint.y-startPoint.y;
	let p = (offsetY*offsetY)/(2*offsetX);
	let left1 = 0;
	domObj.style.left = startPoint.x+"px";
	domObj.style.top = startPoint.y+"px";
	let timeSpace = 10;
	let step = Math.abs(endPoint.x-startPoint.x)/(timeLong/timeSpace) // endValue-startValue/步子数;//
	
	//二、启动定时器
	let myTimer = setInterval(function(){
		//1、改变数据
		left1=left1+step;
		let top1=Math.sqrt(2*p*left1);

		//2、判断边界
		if(left1>=offsetX){
			left1 = offsetX;
			top1=Math.sqrt(2*p*left1);
			window.clearInterval(myTimer);
			if(func){
				func();
			}
		}

		//3、改变外观			
		domObj.style.left = left1+startPoint.x+"px";
		domObj.style.top = top1+startPoint.y+"px";
		
	},timeSpace);
}


// 16.功能:淡入,
// 参数:dom对象,
// 时长
// 返回值:无

function fadeIn(domObj,timeLong){
	domObj.style.opacity = 0;
	moveObj02(domObj,"opacity",1,timeLong)
}

// 17.功能:淡出,
// 参数:dom对象,
// 时长
// 返回值:无

function faedOut(domObj,timeLong){
	donObj.style.opacity = 1;
	moveObj02(domObj,"opacity",0,timeLong);
}


// 18.功能:淡入淡出
// 参数:domObjIn:淡入的dom对象,
// domObjOut:淡出的dom对象,
// 时长
// 返回值: 无
function fadeInOut(domObjIn,domObjOut,timeLong,func){
	domObjIn.style.opacity = 0;
	domObjOut.style.opacity = 1;

	let startValue = 0;
	let endValue = 1;
	let direction= 1;
	let timeSpace = 10;
	let step = Math.abs(endValue-startValue)/(timeLong/timeSpace) // endValue-startValue/步子数;//
	
	let currValue = startValue;
	let myTimer = setInterval(function(){
		//1、改变数据
		currValue = currValue+direction*step;

		//2、判断边界
		if(Math.abs(currValue-endValue)<step){
			currValue = endValue;
			window.clearInterval(myTimer);
			func&&func();
		}
		//3、改变外观
		domObjIn.style.opacity = currValue;
		domObjOut.style.opacity = 1-currValue;
	},timeSpace);
}

//多属性的运动
//参数：
// 1、dom对象
// 2、每个样式属性的结束值
// 4、时长：
//返回值

//调用示例：
/*
animate($("box"),{
	"width":600,
	"height":400,
	"left":50
},2000)
*/

function animate(domObj,endObj,timeLong,func) {
	// let startValue = parseFloat(getStyle(domObj,attr));//??
	let startObj = {}
	for(let key in endObj){
		startObj[key] = parseFloat(getStyle(domObj,key));
	}

	// let direction= endValue-startValue>0?1:-1;//??	
	let directionObj = {};
	for(let key in endObj){
		directionObj[key] = endObj[key]>startObj[key]?1:-1;
	}

	let timeSpace = 10;
	// let step = Math.abs(endValue-startValue)/(timeLong/timeSpace) // endValue-startValue/步子数;//
	let stepObj = {};	
	for(let key in endObj){
		stepObj[key] = Math.abs(endObj[key]-startObj[key] )/(timeLong/timeSpace);
	}

	//let currValue = startValue;
	let currObj = {};
	for(let key in endObj){
		currObj[key] = startObj[key];
	}

	let myTimer = setInterval(function(){
		//1、改变数据
		//currValue = currValue+direction*step;
		for(let key in endObj){
			currObj[key] = currObj[key]+directionObj[key]*stepObj[key];
		}
		//2、判断边界
		let firstKey = Object.keys(endObj)[0];
		if(Math.abs(currObj[firstKey]-endObj[firstKey])<stepObj[firstKey]){
			for(let key in endObj){
				currObj[key] = endObj[key];
			}
			window.clearInterval(myTimer);
			func&&func();
		}
		//3、改变外观
		for(let key in endObj){
			if(key=="opacity"){
				domObj.style[key] = currObj[key];
			}else{
				domObj.style[key] = currObj[key]+"px";
			}
		}
	},timeSpace);
}



//参数：
// 1、两个dom对象
// 2、样式属性（top，left，width，height，opacity等等）
// 3、结束位置
// 4、两个图片之间的距离
// 4、时长：
//返回值

function slideInOut(domObjOut,domObjIn,attr,endValue,offset,timeLong,func) {
	let startValue = parseFloat(getStyle(domObjOut,attr));//??
	let direction= endValue-startValue>0?1:-1;//??	
	let timeSpace = 10;
	let step = Math.abs(endValue-startValue)/(timeLong/timeSpace) // endValue-startValue/步子数;//
	
	let currValue = startValue;
	let myTimer = setInterval(function(){
		//1、改变数据
		currValue = currValue+direction*step;

		//2、判断边界
		if(Math.abs(currValue-endValue)<step){
			currValue = endValue;
			window.clearInterval(myTimer);
			func&&func();
		}
		//3、改变外观
		domObjOut.style[attr] = currValue+"px";
		domObjIn.style[attr] = (currValue+offset)+"px";

	},timeSpace);
}

// 函数的三要素:参数,功能,返回值
	/* 参数: 已知条件,需要完成一件事情的前提条件,
	返回值: 结果. 函数执行完成后得到的是什么,
	功能: 函数体内的运算代码(方程式) */
	
	/* 19 封装函数:
	功能: 判断某年是否闰年,
	参数: 年份,
	返回值: boolean值 */
	function isRunYear(year){  //形参
		// 判断year是否是闰年
		if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
			return true;
		}else{
			return false;
		}
	}
	
	// 20 封装验证码
	/* 功能: 获得四位随机数,
	参数: 数字(位数),
	返回值: 四位验证码的字符串, */
	function suiji(n) {
		var str = "";  //拼接字符串
		for (var i = 0; i < n; i++) {
			str += parseInt(Math.random() * 10);   // 0 - 9 之间的整数
		}
		// 返回str
		return str;
	}
	
	/* 21 封装: 循环a到b的数,
	功能: 输出a到b的数值
	参数: 两个数字,
	返回值: 字符串 */
	function fn2(a,b){  //形参  6 3
		var str = "";
		// 先判断a 和 b 的大小
		if(a > b){
			var temp = b;
			b = a;
			a = temp;
		}
		for(var i = a; i<= b; i++){
			str += i;
		}
		return str;  //执行函数,得到的结果
	}
	
	/* 22 封装: 计算器,
	功能: 加减乘除,
	参数: num1, num2, 计算符号,
	返回值: 无 */
	function calc(num1,num2,operator){
		var res = document.getElementById("result");  //整个标签
		// 判断operator是什么符号
		switch(operator){
			case "+":
				res.value = num1 + num2;
				break;
			case "-":
				res.value = num1 - num2;
				break;
			case "x":
			case "X":
				res.value = num1 * num2;
				break;
			case "/":
				res.value = num1 / num2;
				break;
			case "%":
				res.value = num1 % num2;
				break;
			default:
				res.value = "您输入的运算符不对";
				break;
		}
	}
	
	/*23 封装:质数
	功能: 判断一个数是否为质数,
	参数: 数字,
	返回值: 无 */
	function isZhi(num){
		var count = 0;
		for(var i=2; i<num; i++){
			if(num % i == 0){
				count++;
				break;
			}
		}
		if(count != 0){
			document.write("合数");
		}else{
			document.write("质数");
		}
	}
	
// 	24.功能:获取id,class,标签名,
// 	参数:字符串,
// 	返回值:字符串

function $(str){
	if(str.charAt(0) == "#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0) == "."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}




//功能：ajax封装
//参数：
//  请求方式
//  请求地址
//  请求参数（前端发给后端的）
//  是否异步 
//  返回数据？？？（后端传给前端的）

//返回值：

function ajax1809(method,url,param,isAsync,func) {
	//1、创建对象
	let xhr = new XMLHttpRequest();

	//2、设置请求参数
	/*
	if(method.toLowerCase()=="get"){
		xhr.open(method,url+"?"+param,isAsync);
	}else{
		xhr.open(method,url,isAsync);
	}
	*/
	let urlAndParam = url;
	if(method.toLowerCase()=="get"){
		urlAndParam+="?"+param;
	}
	xhr.open(method,urlAndParam,isAsync);

	//3、设置回调函数
	xhr.onreadystatechange = function(){
		// alert(xhr.readyState);
		if(xhr.readyState==4 && xhr.status==200){
			func(xhr.responseText);
			// return xhr.responseText; 这样写不行
		}
	}

	//4、发送请求
	if(method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(param);
	}else{
		xhr.send();	
	}		
	//return xhr.responseText;//这样也不行
}

//只针对get

function ajax1809byget(url,param,isAsync,func) {
	//ajax1809("get",url,param,isAsync,func);
//1、创建对象
	let xhr = new XMLHttpRequest();

	//2、设置请求参数
	xhr.open("get",url+"?"+param,isAsync);

	//3、设置回调函数
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			func(xhr.responseText);
		}
	}
	//4、发送请求
	xhr.send();	
}

//只针对post
function ajax1809bypost(url,param,isAsync,func) {
	ajax1809("post",url,param,isAsync,func);
}

/*
ajax1809byJSON({
	"url":"",
	"method":"get",
	"param":"",
	"func":function(str){

	}
});
*/

function ajax1809byJSON(obj) {
	//1、创建对象
	let xhr = new XMLHttpRequest();

	//2、设置请求参数
	let urlAndParam = obj.url;
	if(obj.method.toLowerCase()=="get"){
		urlAndParam+="?"+obj.param;
	}
	xhr.open(obj.method,urlAndParam,obj.isAsync);

	//3、设置回调函数
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			obj.func(xhr.responseText);
		}
	}

	//4、发送请求
	if(obj.method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(obj.param);
	}else{
		xhr.send();	
	}		
}

// ajax1809byJSONandDefault({
// 	"url":"news.php",
// 	"param":"pageindex=1",
// 	"func":function(str){
// 	}
// });

function ajax1809byJSONandDefault(obj) {
	let defaultObj = {
		"url":"#",
		"method":"get",
		"param":"",
		"isAsync":true,
		"func":null
	};
	for(let key in obj){
		defaultObj[key] = obj[key];
	}

	//1、创建对象
	let xhr = new XMLHttpRequest();

	//2、设置请求参数
	let urlAndParam = defaultObj.url;
	if(defaultObj.method.toLowerCase()=="get"){
		urlAndParam+="?"+defaultObj.param;
	}
	xhr.open(defaultObj.method,urlAndParam,defaultObj.isAsync);

	//3、设置回调函数
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			defaultObj.func(xhr.responseText);
		}
	}

	//4、发送请求
	if(defaultObj.method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(defaultObj.param);
	}else{
		xhr.send();	
	}		
}

// ajax封装
// 参数:json,
// ajax1809byJSONandDefault({
// 	"url":"news.php",
// 	"param":"pageindex=1",
// 	"func":function(str){
// 	}
// });

function ajaxTool(obj){
		let defaultobj = {
			"url":"#",
			"method":"get",
			"param":"",
			"isAsync":true,
			"func":null
		};
		for(let key in obj){
			defaultobj[key] = obj[key];
		}
		
		// 1.创建对象
		let xhr = new XMLHttpRequest();
		// 2.设置参数
		let newUrl = defaultobj.url;
		if(defaultobj.method.toLowerCase() == "get"){
			newUrl += "?"+defaultobj.param;
		}
		xhr.open(defaultobj.method,newUrl,defaultobj.isAsync);
		//3.设置回调函数
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				defaultobj.func(xhr.responseText);
			}
		}
		//发送请求
		if(defaultobj.method.toLowerCase() == "post"){
			xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xhr.send(defaultobj.param);
		}else{
			xhr.send();
		}
		
	}

// 封装ajax
function ajax(obj){
		let newObj = {
			"url":"#",
			"method":"get",
			"param":"",
			"isAsync":true,
			"func":null
		};
		
		for(let Key in obj){
			newObj[Key] = obj[Key];
		}
		// 1.创建对象
		let xhr = new XMLHttpRequest();
		// 2.设置参数
		let newUrl = newObj.url;
		if(newObj.method.toLowerCase() == "get"){
			newUrl += "?" + newObj.param;
		}
		xhr.open(newObj.method,newUrl,newObj.isAsync);
		// 3.设置回调函数
		xhr.onreadystatechange = function (){
			if(xhr.readyState == 4 && xhr.status == 200){
				newObj.func(xhr.responseText);
			}
		}
		// 4.响应
		if(newObj.method.toLowerCase() == "post"){
			xhr.setRequesrHeader("Content-type","application/x-www-form-urlencoded");
			xhr.send(newObj.param);
		}else{
			xhr.send()
		}
	}





// 功能:随机十六进制颜色,
// 参数:无,
// 返回值:字符串
function getColor(){
	var str="#";
	for(var i=0;i<6;i++){
		str+=(parseInt(Math.random()*16)).toString(16);
	}
	return str;
}

// 封装ajax
function ajax(obj){
		let newObj = {
			"url":"#",
			"method":"get",
			"param":"",
			"isAsync":true,
			"func":null
		};
		
		for(let Key in obj){
			newObj[Key] = obj[Key];
		}
		// 1.创建对象
		let xhr = new XMLHttpRequest();
		// 2.设置参数
		let newUrl = newObj.url;
		if(newObj.method.toLowerCase() == "get"){
			newUrl += "?" + newObj.param;
		}
		xhr.open(newObj.method,newUrl,newObj.isAsync);
		// 3.设置回调函数
		xhr.onreadystatechange = function (){
			if(xhr.readyState == 4 && xhr.status == 200){
				newObj.func(xhr.responseText);
			}
		}
		// 4.响应
		if(newObj.method.toLowerCase() == "post"){
			xhr.setRequesrHeader("Content-type","application/x-www-form-urlencoded");
			xhr.send(newObj.param);
		}else{
			xhr.send()
		}
	}