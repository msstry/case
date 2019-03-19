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