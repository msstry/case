//封装ajax
//参数：请求方式  请求地址   请求内容  是否异步  回调函数
//返回值： 无

function ajax01(method,url,value,isAsycn,func){
	let xhr = new XMLHttpRequest();
	let urls = url;
	if(method.toLowerCase() == "get"){
		urls += "?" + value;
	}
	xhr.open(method,urls,isAsycn);
	xhr.onreadystatechange = function (){
		if(xhr.readyState == 4&& xhr.status == 200){
			func&&func(xhr.responseText);
		}
	}
	if(method.toLowerCase() == "post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(value);
	}else{
		xhr.send();
	}
}

	
//针对get 的ajax封装
function ajaxget(url,value,isAsycn,func){
	ajax01("get",url,value,isAsycn,func);
}

//针对post 的ajax封装
function ajaxget(url,value,isAsycn,func){
	ajax01("post",url,value,isAsycn,func);
}

//进阶一ajax封装
/*传入值示例
ajax1809byJSON({
	"url":"",
	"method":"get",
	"value":"",
	"func":function(str){

	}
});
*/
function ajax02(obj){
	let xhr = new XMLHttpRequest();
	let urls = obj.url;
	if(obj.method.toLowerCase() == "get"){
		urls += "?" + obj.value;
	}
	xhr.open(obj.method,urls,obj.isAsycn);
	xhr.onreadystatechange = function (){
		if(xhr.readyState == 4&& xhr.status == 200){
			obj.func&&obj.func(xhr.responseText);	
			
		}
	}
	if(obj.method.toLowerCase() == "post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(obj.value);
	}else{
		xhr.send();
	}
}

//再进一阶的ajax封装
function ajax03(obj){
	let defalutObj = {
		"url": "##",
		"method" : "get",
		"value" : "",
		"isAsycn" : true,
		"func" : null
	};
	
	for(let key in obj){
		defalutObj[key] = obj[key];
	}
	
	let xhr = new XMLHttpRequest();
	let urls = defalutObj.url;
	if(defalutObj.method.toLowerCase() == "get"){
		urls += "?" + defalutObj.value;
	}
	xhr.open(defalutObj.method,urls,defalutObj.isAsycn);
	xhr.onreadystatechange = function (){
		if(xhr.readyState == 4&& xhr.status == 200){
			defalutObj.func&&defalutObj.func(xhr.responseText);		
		}
	}
	if(defalutObj.method.toLowerCase() == "post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(defalutObj.value);
	}else{
		xhr.send();
	}
}