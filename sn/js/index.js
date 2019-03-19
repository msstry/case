//Simg(objDom,width,height,imgs,ulColor,ulHcolor,ulsize,timeL);		
/*	let s1 = new Simg(
		$("#box"),
		500,
		400,
		["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg"],
		"red",
		"black",
		20,
		3000
	);
	s1.autoPlay();
	
	obj . objDom width height objDoml objDomlurl objDomr objDomrurl
	imgs1 imgs2 imgsw imgs1w imgs2w imgs1h imgs2h 
	ulsize isCircle ulColor ulHColor timeL
	*/	
	//面相对象做轮播图 （无缝）
	//需要传入的值   dom  w  h  times ul  imgs  
	
	function Simg(obj){
		this.objDom = obj.objDom; //创建的盒子
		this.width = obj.width; //盒子的宽
		this.height = obj.height; //盒子的高
		
		this.objDoml = obj.objDoml;
		this.objDomlurl = obj.objDomlurl;
		this.objDomr = obj.objDomr;
		this.objDomrurl = obj.objDomrurl;
		
		this.imgs1 = obj.imgs1; //传入的图片集
		this.imgs2 = obj.imgs2; //传入的图片集
		this.imgsw = obj.imgsw;
		this.imgs1w = obj.imgs1w; //传入的图片集
		this.imgs1h = obj.imgs1h; //传入的图片集
		this.imgs2w = obj.imgs2w; //传入的图片集
		this.imgs2h = obj.imgs2h; //传入的图片集
		
		this.ulsize = obj.ulsize;//按钮的大小
		this.isCircle = obj.isCircle;
		this.ulColor = obj.ulColor;//按钮的原始颜色
		this.ulHColor = obj.ulHColor;//按钮的高亮颜色
		
		this.timeL = obj.timeL;//时长
		this.currIndex = 0; //记录图片序号
		this.timeS = 300;
		
		this.timer = null;
		
		//创建轮播图框架
		this.createUI = function(){
//			this.objDom.style.overflow = 'hidden';
//1 创建存放图片的位置
			for(let i=0;i<this.imgs1.length;i++){//循环图片组
				let box1 = document.createElement("img");
				let box2 = document.createElement("img");
				box1.src = this.imgs1[i];
				box2.src = this.imgs2[i];
				
				box1.style.cssText = `position: absolute;top: 0px; left:0px;`;
				box2.style.cssText = `position: absolute;top: 0px; left:${this.imgs1w+this.imgsw+this.imgs2w}px;`;
				
				if(i == 0){
					box1.style.left = "0px";
					box2.style.left = this.imgs1w+this.imgsw+"px";
				}else{
					box1.style.left = this.imgs1w+this.imgsw+this.imgs2w + "px";
					box2.style.left = this.imgs2w + "px";					
				}
				box1.style.width = this.imgs1w + "px";
				box2.style.width = this.imgs2w + "px";
				
				box1.style.height = this.imgs1h + "px";
				box2.style.height = this.imgs2h + "px";
				this.objDom.appendChild(box1); 
				this.objDom.appendChild(box2); 
			}
			
//2 创建按钮的位置
			let uls = document.createElement("ul");
			uls.style.cssText = `position: absolute;list-style: none;z-index: 2;
			right: ${this.width}px;bottom: 0px;`;
			this.objDom.appendChild(uls);
			
			for(let i=0;i<this.imgs1.length;i++){
				let lis = document.createElement("li");
				lis.style.cssText = "margin-right: 10px;float: left;";
				lis.style.width = this.ulsize + "px";
				lis.style.height = this.ulsize + "px";
				if(this.isCircle){
					liDom.style.borderRadius="50%";
				}
				if(i == 0){
					lis.style.backgroundColor = this.ulHColor;
				}else{
					lis.style.backgroundColor = this.ulColor;
				}
				uls.appendChild(lis);
			}
		}
//自动播放
		this.autoPlay = function (){
			if(this.timer != null){
				return;
			}
			//那三步
			this.timer = setInterval(()=>{
				//改变数据 （图片序号）
				let outIndex = this.currIndex;
				this.currIndex = this.currIndex + 1;
				//边界判断
				if( this.currIndex > this.imgs1.length-1 || this.currIndex < 0){
					this.currIndex = 0;
				}
				//样式改变
				this.changeImg(outIndex,this.currIndex);
			},this.timeL)
		}
//停止定时器
		this.stop = function(){
			if(this.timer != null){
				window.clearInterval(this.timer);
				this.timer = null;
			}
		}
//改变样式
		//outIndex 淡出   inIndex  淡入
		this.changeImg = function(outIndex,inIndex){
			if(outIndex==inIndex){
				return;
			}
			//换图片
			let imgs = this.objDom.children;
			imgs[inIndex].style.left = this.width + "px"; 
			
//			move111(objDom,attr,startD,endD,timeLong);
			move111(imgs[inIndex],"left",this.width,0,this.timeS);
			
			move111(imgs[outIndex],"left",0,-1*this.width,this.timeS);
			
//			fadeInOut(domIn,domOut,timeL,func)
//			fadeInOut(imgs[outIndex],imgs[inIndex],this.timeS,null);
			//换按钮
			let lis = this.objDom.lastElementChild.children;
			for(let i=0;i<lis.length;i++){
				lis[i].style.backgroundColor = this.ulColor;
			}
			lis[this.currIndex].style.backgroundColor = this.ulHColor;	
		}
//跳转图片
		this.goImg = function(transIndex){
			let outIndex = this.currIndex;
			this.currIndex = transIndex;
			if(this.currIndex > this.imgs1.length-1 || this.currIndex <0){
				this.currIndex = 0;
			}
			this.changeImg(outIndex,this.currIndex);
		}
//添加事件		
		this.addEvent = function(){
			let that = this;
			//鼠标移入事件
			this.objDom.onmouseover = function(){
				that.stop()
			}
			//鼠标移除事件
			this.objDom.onmouseout = function(){
				that.autoPlay()
			}
			let lis = this.objDom.lastElementChild.children;
			for(let i=0;i<lis.length;i++){
				lis[i].setAttribute("index",i);
				lis[i].onclick = function(){
					that.goImg(parseInt(this.getAttribute("index")));
				}
			}
		}
		this.createUI();
		this.addEvent();
	}
	