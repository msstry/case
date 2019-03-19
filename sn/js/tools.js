//功能 两个数字相加
//参数 数字1 数字2
//返回值 相加数值
function add(num1,num2){
	return num1+num2;
}

//功能 两个数字运算运算符
//参数 数值1 数值2 
//返回值  运算结果数值
function operNum(num1,num2,oper){
	let num = 0;
	switch (oper){
		case "+":
			num = num1+num2;
			break;
		case "-":
			num = num1-num2;
			break;
		case "*":
		case "x":
		case "X":
			num = num1*num2;
			break;
		case "/":
			num = num1/num2;
			break;
		case "%":
			num = num1%num2;
			break;
		default:
			alert('报错，请正常输入');
			break;
	}
	return num;
}
//功能 判断是否为闰年
//参数 年份
//返回值 是否为闰年
function isRunYear(year){
	if( (year % 4==0 && year % 100 ==0) || year % 400 == 0){
		return true;
	}else{
		return false;
	}
}

//功能 判断某天是某年的第几天
//参数 年，月，日
//返回值 天数
function isDay(year,mouth,day){
	var num = 0;
	if(isRunYear(year)){
		num += 1;
	}
	switch(mouth){
		case 12:num += 30;
		case 11:num += 31;
		case 10:num += 30;
		case 9:num += 31;
		case 8:num += 31;
		case 7:num += 30;
		case 6:num += 31;
		case 5:num += 30;
		case 4:num += 31;
		case 3:num += 28;
		case 2:num += 31;
		case 1:num += day;break;
	}
	return num;
}

//功能 随机六位颜色值
//参数 
//返回值 一个随机的颜色值
function getColor(){
	let str = ""; 
	str += '#'+Math.floor(Math.random()*0xffffff).toString(16);
	return str;
}


//功能:各种方法获取节点
//参数:选择器
//返回值:节点
function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}

//功能:阶乘的和
//参数:数字
//返回值:数值
function factor(n){
	let sum = 0;
	for(var j=1;j<=n;j++){
		let num = 1;
		for(var i=1;i<=j;i++){
			num *= i;
		}
		sum += num;
	}
	return sum;
}

//功能：数组去重
//参数：数组
//返回值：去重后的数组
function isSet(arr){
	var newArr = [];
	for(var i in arr){
		var has = true;
		for(var j in newArr){
			if(arr[i] == newArr[j]){
				has = false;
				break;
			}
		}
		if(has == true){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}
//功能：数组冒泡排序
//参数：数组
//返回值：排序后数组
function isSort(arr){
	for(var i = 0 ;i<arr.length-1;i++){
		for(var j =0;j<arr.length-1-i;j++){
			if(arr[j]>arr[j+1]){
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp; 
			}
		}
	}
	return arr;
}
	
//功能：数组选择
//参数：数组
//返回值：排序后的数组
function norepeat(arr){
	for(var i = 0;i<arr.length;i++){
		var minIndex = i;
		for(var j =i+1; j<arr.length;j++){
			if(arr[j]<arr[minIndex]){
				minIndex = j;
			}
		}
		var temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp;
	}
	return arr;
}

//功能：n位数字字母混合验证码(需要配合random)
//参数：n位数
//返回值：n位数字字母混合验证码
function hhYzm(n){
	var str = "";
	for(var i =0;i<10;i++){
		var a =  String.fromCharCode(random(48,57));
		var b =  String.fromCharCode(random(65,90));
		var c =	 String.fromCharCode(random(97,122));
		str += a + b + c;
	}
	var yam = "";
	for(var j=0;j<n;j++){
		var index = parseInt(Math.random()*str.length);
		yam += str[index];
	}
	return yam;
}
//功能:两个数间的随机数
//参数:两个数
//返回值:随机的数
function random(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

//功能: 输入数字,显示汉字的日期,
//参数: 数字,
//返回值: 汉字的星期表示 
function days(num){
	switch(num){
		case 0 :
			return "星期日";
		case 1 :
			return "星期一";
		case 2 :
			return "星期二";
		case 3 :
			return "星期三";
		case 4 :
			return "星期四";
		case 5 :
			return "星期五";
		case 6 :
			return "星期六";
	}
}

//功能: 不足10的补零,
//参数: 数字,
//返回值: 字符串 
function buZero(num){
	if(num<10){
		return "0"+num;
	}else{
		return num;
	}
}

//功能: 计算两个日期的时间差
//参数: 两个日期对象
//返回值: 天数 
function dateRed(date1,date2){
	var dateRed  = Math.abs(Date.parse(date1)-Date.parse(date2));
	var dateReda = Math.ceil(dateRed/(1000*3600*24));
	if(dateReda<=1){
		return 1;
	}else{
		return dateReda;		
	}
}

//功能: 显示自定义的日期+时分秒,
//参数 : 日期对象,分隔符
//返回值: 日期字符串 

function diyDate(d,sp){
	var str = "";
	if(sp == undefined){
		str = d.getFullYear() + "年" + (d.getMonth()+1) + "月" + d.getDate();
	}else{
		str = d.getFullYear() + sp + (d.getMonth()+1) + sp + d.getDate();
	}
	return str +"  "+ d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
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


//功能：保存cookie
//参数：键 值 失效日期
//返回值：无
function saveCookie(key,value,dayCount){
	var d = new Date();
	d.setDate(d.getDate()+dayCount);
	document.cookie = key + "=" + escape(value) +";expires=" + d.GMTString;
}


//功能：获取cookie
//参数：键
//返回值：值
function getCookie(key){
	var str = unescape(document.cookie);
	var arr = str.split("; ");
	for(var i in arr){
		if(arr[i].indexOf( key + "=") == 0){
			return arr[i].split("=")[1];
		}
	}
	return null;
}

//功能：删除cookie
//参数：键
//返回值：无
function removeCookie(key){
	saveCookie(key,"",-1);
}

