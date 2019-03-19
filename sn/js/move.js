


//功能： 简单的匀速运动封装(正向)
//参数： 	dom元素 
//		属性
//		起始位置
//		终止位置
//		步长
//		时间
//返回值： 无

function move1(objDom,attr,startD,endD,step,timeS){
//	window.clearInterval(timer);
	var timer = null;
	let currD = startD ;
	timer = setInterval(function(){
		currD += step;
		if(currD >= endD){
			currD == endD
			window.clearInterval(timer);
		}
		objDom.style[attr] = currD + "px";
	},timeS)
}

//功能：简单的匀速运动封装--进阶
//参数：	dom元素
//		属性
//		起始位置
//		终止位置
//		时长
//返回值：无
//  时长/时间间隔 = 总路程/步长 = 速度

function move11(objDom,attr,startD,endD,timeLong){
	//自定一个时间间隔
	let	timeS = 10;
	//根据公式计算公式
	let step = (endD - startD)/(timeLong/timeS);
	//用一个变量定义起始变量
	let currD = startD;
	//启动定时器
	let timer = setInterval(function(){
		//运动
		currD += step;
		//判断
		if(currD >= endD){
			currD = endD;
			window.clearInterval(timer);
		}
		//改变
		objDom.style[attr] = currD + "px";
	},timeS)	
}

//功能：简单的匀速运动封装--二进阶（适应封装轮播图）
//参数：	dom元素
//		属性
//		起始位置
//		终止位置
//		时长
//返回值：无
//  时长/时间间隔 = 总路程/步长 = 速度

function move111(objDom,attr,startD,endD,timeLong){
	//自定一个时间间隔
	let	timeS = 10;
	//根据公式计算公式
	let step = Math.abs(endD - startD)/(timeLong/timeS);
	//用一个变量定义起始变量
	let currD = startD;
	//方向
	let driection = startD<endD ? 1 : -1;
	//启动定时器
	let timer = setInterval(function(){
		//运动
		currD = currD + driection * step;
		//判断
		if(Math.abs(currD - endD)<step){
			currD = endD;
			window.clearInterval(timer);
		}
		//改变
		if(attr == 'opacity'){
			objDom.style[attr] = currD;		
		}else{
			objDom.style[attr] = currD + "px";		
		}

	},timeS)	
}

//功能：封装运动函数---最终版（+兼容+停止+op+回调）
//参数：dom 属性  结束位置   时长
//返回值：无
function move2(objDom,attr,endD,timeL,func){
	clearInterval(objDom.timer);
	objDom.timer = null;
	let timeS = 10;
	let startD;
	if(attr == "opacity"){
		startD = parseFloat(getStyle(objDom,"opacity")*100);
	}else{
		startD = parseFloat(getStyle(objDom,attr));
	}
	let step = Math.abs(endD - startD)/(timeL/timeS);
	let driection = endD > startD ? 1 : -1 ;
	let currD = startD;

	objDom.timer = setInterval(function(){
		currD = currD + driection*step;
		
		if(Math.abs(currD-endD) < step){
			currD = endD;
			window.clearInterval(objDom.timer);
			func && func();
		}
		
		if(attr == "opacity"){
			objDom.style.filter = "alpha(opacity:" + currD + ")";
			objDom.style.opacity = currD /100; 
		}else{
			objDom.style[attr] = currD + "px"; 
		}
	},timeS)
}


//功能：运动封装(正反+透明度) 
//参数：dom元素  属性  结束位置  时长 
//返回值：无

function move3(objDom,attr,endD,timeLong){
	let startD = parseFloat(getStyle(objDom,attr)); 
	let dircation = startD<endD ? 1 : -1;
	let timeS = 10;
	let step = Math.abs(endD - startD)/(timeLong/timeS);
	let currD = startD;
	let timer = setInterval(function(){
		currD = currD + dircation * step;
		
		if(Math.abs(endD - currD)<=step){
				currD = endD;
				window.clearInterval(timer);
		}
		
		if(attr == "opacity"){
			objDom.style[attr] = currD;
		}else{
			objDom.style[attr] = currD + "px";
		}
	},timeS);
}


//获取
function getStyle(domObj,attr){
	if(domObj.currentStyle){
		return domObj.currentStyle[attr];
	}else{
		return window.getComputedStyle(domObj)[attr];
	}
}


//功能：运动的封装（加回调函数）（简单链式运动）
//参数：dom元素  属性  终止位置  时长 回调函数
//返回值：无

function move4(objDom,attr,endD,timeLong,func){
	
	let startD = parseFloat(getStyle(objDom,attr));
	let dircation = startD<endD ? 1 : -1;
	let timeS = 10;
	let step = Math.abs(endD - startD)/(timeLong/timeS);
	let currD = startD;
	let timer = setInterval(function(){
		currD = currD + dircation * step;
		
		if(Math.abs(endD - currD)<=step){
				currD = endD;
				window.clearInterval(timer);
				func && func();
		}
		
		if(attr == "opacity"){
			objDom.style[attr] = currD;
//			objDom.style.filter = "alpha(opacity="+currD*100")";
			
		}else{
			objDom.style[attr] = currD + "px";
		}
	},timeS);

}


//功能：抛物线运动 （购物车右开口向）
//参数：dom  起始点    结束点    时长   
//返回值：无

function move5(objDom,startD,endD,timeL,func){
	let x = endD.x - startD.x;
	let y = endD.y - startD.y;
	let timeS = 10;
	let p = (y*y)/(2*x);
	let dircetion = 1;
	let step = Math.abs(endD.x-startD.x)/(timeL-timeS);
	let left1 = 0;
	let top1 = 0;
	objDom.style.left = startD.x + "px";
	objDom.style.top = startD.y + "px";
	var timer = setInterval(function(){
		left1 = left1 + dircetion*step;
		top1 = Math.sqrt(2*p*left1);
		
		if(left1>=endD.x-startD.x){
			left1 = endD.x-startD.x;
			window.clearInterval(timer);
			func && func();
		}
		
		objDom.style.left = left1 + startD.x + "px";
		objDom.style.top = top1 + startD.y + "px";
		
	},timeS)
}


//功能 ： 淡入
//参数：dom  timeL
//返回值：无

function fadeIn(objDom,timeL){
	domObj.style.opacity = 0;	
	move3(objDom,"opacity",1,timeL);
}


//功能 ： 淡出
//参数：dom  timeL
//返回值：无

function fadeOut(objDom,timeL){
	domObj.style.opacity = 1;	
	move3(objDom,"opacity",0,timeL);
}

//功能：两张图淡入淡出
//参数：dom    
//返回值：无

function fadeInOut(domIn,domOut,timeL,func){
	domIn.style.opacity = 0;
	domOut.style.opacity = 1;
	
	let startV = 0;
	let endV = 1;
	let timeS = 10;
	let step = Math.abs(endV-startV)/(timeL/timeS);
	let currV = startV;
	
	var timer = setInterval(function(){
		currV = currV + step;
		
		if(Math.abs(currV-endV)<=step){
			currV = endV;
			window.clearInterval(timer);
			func && func();
		}
		
		domIn.style.opacity = currV;
		domOut.style.opacity = 1-currV;
	},timeS);
	
}


//功能：多属性运动封装
//参数：dom  属性对象 {属性 ： 结束参数}  时长
//返回值：无

//对象实例  obj={ "width":200,  “left" : 200 }
function attrs(objDom,attrD,timeL){
	let startObj = {};
	for(let key in attrD){
		startObj[key] = parseFloat(getStyle(objDom,key));
	}
	let timeS = 10;
	let step = {};
	for(let key in attrD){
		step[key] = Math.abs(startObj[key] - attrD[key])/(timeL/timeS);
	}
	let currD = {};
	for(let key in attrD){
		currD[key] = startObj[key];
	}
	
	let direction = {};
	for(let key in attrD){
		direction[key] = startObj[key]>attrD[key]?-1:1;
	}
	let timer = setInterval(function(){
		for(let key in attrD){
			currD[key] = currD[key] + direction[key]*step[key];
		}
		let isOver = false;
		for(let key in attrD){
			if(Math.abs(currD[key] - attrD[key])< step[key]){
				currD[key] = attrD[key];
				isOver = true;
			}
		}
		if(isOver){
			window.clearInterval(timer);
		}
		
		for(let key in attrD){
			if(key == 'opacity'){
				objDom.style[key] = currD[key];
			}else{
				objDom.style[key] = currD[key] + "px";	
			}
			
		}
	},timeS);
	
}



//功能：两个对象位置变化
//参数：
// 1、两个dom对象
// 2、样式属性（top，left，width，height，opacity等等）
// 3、结束位置
// 4、两个图片之间的距离
// 4、时长
//返回值
function moveInOut(domOut,domIn,attr,endD,offset,timerL,func){
	let startD = parseFloat(getStyle(domOut,attr));
	let timeS = 10;
	let direction = endD - startD>0?1:-1;
	let step = Math.abs(endD-startD)/(timerL/timeS);
	let timer = null;
	let currD = startD;
	
	timer = setInterval(function(){
		currD = currD + direction*step;
		
		if(Math.abs(endD-currD)<step){
			currD = endD;
			window.clearInterval(timer);
			func && func();
		}
		
	domOut.style[attr] = currD + "px";
	domIn.style[attr] = (currD + offset) + "px";
	
	},timeS)
}


//娱乐：     无惨
function move233(domObj,openP,dirC,timeS,func){
//		let timeS = 10;
	let left1 = 500;
	let top1 = 500;
	let step = 1;
//		let p = 50;
	let direction = -1;
	let timer = null;
	
	timer = setInterval(function(){
		left1 = left1 + direction*step;
		top1 = direction*Math.sqrt(2*openP*left1);
		if(left1<=0){
			left1 = 0;
			direction *= -1;
//				func&&func();
		}else if(left1>=500){
			left1 = 500;
			window.clearInterval(timer);
		}
		switch(dirC){
			case "上":
				domObj.style.left = top1 +500+ "px";
				domObj.style.top =  -1*left1+ 500+"px";
				break;
			case "下":
				domObj.style.left = top1 +500+ "px";
				domObj.style.top =  left1+"px";
				break;
			case "左":
				domObj.style.left = -1*left1 +500+ "px";
				domObj.style.top = top1 + 300+"px";
				break;
			case "右":
				domObj.style.left = left1 + "px";
				domObj.style.top = top1 + 300+"px";
				break;
				
		}
		/*domObj.style.left = -1*left1 +500+ "px";
		domObj.style.top = top1 + 300+"px";*/
	},timeS)
}