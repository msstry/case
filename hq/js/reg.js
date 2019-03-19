$(function(){

		//手机号码框获得焦点
		$(".inputPhone").focus(function(){
			$(".spanPhone").html("请输入正确的手机号并验证").css({
					"background":"",
					"padding-left":"10px"
				});;
			$(".inputPhone").css({
					"border":"1px solid #c9c8c8"
				});
		})
		//手机号码框失去焦点
		$(".inputPhone").blur(function(){
			let reg = /^1[3-9]\d{9}$/i;
				if(reg.test($(".inputPhone").val())){

				let inputPhone = $(".inputPhone").val();
				$.post("php/text.php",{
					userId:inputPhone
				},function(date){
					console.log(date);
					if(date == "1"){
						$(".spanPhone").html("用户已存在").css({
						"background":"url(img/cuo.png) no-repeat 4px 8px",
						"padding-left":"35px"
						});
					}else{
						$(".spanPhone").html("").css({
						"background":"url(img/zhenque.png) no-repeat 8px 9px",
						"padding-left":"35px"
						});
					}
				})

				if($(".inputPhone").val() == ""){
					$(".spanPhone").html("").css({
							"background":""
					});
				}

			}else{
				if($(".inputPhone").val() == ""){
					$(".spanPhone").html("").css({
						"background":""
					});
				}else{
				$(".spanPhone").html("手机号格式错误，请重新输入").css({
					"background":"url(img/cuo.png) no-repeat 4px 8px",
					"padding-left":"30px"
				});
				$(".inputPhone").css({
					"border":"1px solid red"
				});}
			}
		})

		//点击按钮
		$("#regbtn").click(function(){
			// 判断文本框值
			 // && $(".reg_left_input").val() == "" && $(".yzInput").val() == "" && $(".pwInput").val() == "" && $(".qzInput").val() == ""
			if($(".inputPhone").val() == "" && $(".reg_left_input").val() == "" && $(".yzInput").val() == "" && $(".pwInput").val() == "" && $(".qzInput").val() == ""){
				//为空
				$(".spanPhone").html("请填写你的手机号码").css({
					"background":"url(img/cuo.png) no-repeat 7px 9px",
					"padding-left":"35px"
				});
				$(".inputPhone").css({
					"border":"1px solid red"
				});
				return false;
			}else if($(".yzInput").val() == ""){
				$(".yzSpan").html("请填写手机验证").css({
					"background":"url(img/cuo.png) no-repeat 7px 9px",
					"padding-left":"35px"
				});
				$(".yzInput").css({
					"border":"1px solid red"
				});
				return false;
			}else if($(".pwInput").val() == ""){
				$(".loginPw").html("请填写登录密码").css({
					"background":"url(img/cuo.png) no-repeat 7px 9px",
					"padding-left":"35px"
				});
				$(".pwInput").css({
					"border":"1px solid red"
				});
				return false;
			}else if($(".qzInput").val() == ""){
				$(".loginQz").html("请填写登录密码").css({
					"background":"url(img/cuo.png) no-repeat 7px 9px",
					"padding-left":"35px"
				});
				$(".qzInput").css({
					"border":"1px solid red"
				});
				return false;
			}else if($(".checked").attr("checked") != "checked"){
				$(".xy").html("请接受服务条款").css({
					"background":"url(img/cuo.png) no-repeat",
					"padding-left":"30px"
				});
				return false;
			}

		//发送ajax
			let inputPhone = $(".inputPhone").val();
			let pwInput = $(".pwInput").val();
			$.post("php/reg.php",{
				userId:inputPhone,
				userPass:pwInput
			},function(date){
				console.log(date);
				if(date == "1"){
					// alert("成功");
					location.href = "login.html";
				}else{
					alert("注册失败");
				}
			})
		})

		//手机验证码获得焦点
		$(".yzInput").focus(function(){
			$(".yzSpan").html("请输入接收到的手机验证").css({
					"padding-left":"10px",
					"background":""
				});;
			$(".yzInput").css({
				"border":"1px solid #c9c8c8"
			});
		})
		//手机验证码失去焦点
		$(".yzInput").blur(function(){
			$(".yzSpan").html("");
		})

		//登录密码获得焦点
		$(".pwInput").focus(function(){
			$(".loginPw").html("6-16位字符，推荐使用数字、字母和符号的组合密码").css({
					"padding-left":"10px",
					"background":""
				});;
			$(".pwInput").css({
				"border":"1px solid #c9c8c8"
			});
		})
		//登录密码失去焦点
		$(".pwInput").blur(function(){
			let reg = /^[a-z0-9_-]{6,16}$/i;
			if(reg.test($(".pwInput").val())){
				//判断强度
				// let regs = /^\d$/;
				// let regss = /\d[a-z]/;
				if(reg.test($(".pwInput").val())){
					$(".loginPw").html("推荐数字、字母和符号组合的密码").css({
						"background":"url(img/aj_03.jpg) no-repeat 0 5px",
						"padding-left":"90px"
					})
				}
				// else if(regss.test($(".pwInput").val())){
				// 	$(".loginPw").html("推荐数字、字母和符号组合的密码").css({
				// 		"background":"url(img/aj_05.jpg) no-repeat 0 5px",
				// 		"padding-left":"90px"
				// 	})
				// }
			}else{
				if($(".pwInput").val() == ""){
					$(".loginPw").html("");
				}else{
					$(".loginPw").html("密码长度应为6-16个字符").css({
					"background":"url(img/cuo.png) no-repeat 4px 8px",
					"padding-left":"30px"
					});
					$(".pwInput").css({
						"border":"1px solid red"
					});
				}
			}
		})

		//确认密码获得焦点
		$(".qzInput").focus(function(){
			$(".loginQz").html("请再次输入密码").css({
					"padding-left":"10px",
					"background":""
				});
			$(".qzInput").css({
				"border":"1px solid #c9c8c8"
			});
		})
		//确认密码失去焦点
		$(".qzInput").blur(function(){
			if($(".qzInput").val() == ""){
				$(".loginQz").html("");
			}else if($(".qzInput").val() == $(".pwInput").val()){
				$(".loginQz").html("").css({
					"background":"url(img/zhenque.png) no-repeat 4px 8px",
					"padding-left":"30px"
					});
			}else{
				$(".loginQz").html("两次输入密码不一致，请重新输入").css({
					"background":"url(img/cuo.png) no-repeat 4px 8px",
					"padding-left":"30px"
					});
					$(".qzInput").css({
						"border":"1px solid red"
					});
			}	
		})
})

	// 随机生成四位数字验证码
$(function(){
	yzm();
	// 判断验证码
	let reg =/^[a-z0-9]{4}$/i;
	$(".reg_left_input").on("input",(function(){
		if(reg.test($(".reg_left_input").val().toLowerCase())){
		// console.log("已经走到这了");
			if($(".reg_left_input").val().toLowerCase() == $(".reg_left_span").html().toLowerCase()){
				// console.log("已经走到这了");
				$(".xsyzm").html("").css({
					"background":"url(img/zhenque.png) no-repeat 4px 8px"
				})
				$(".reg_left_input").css({
					"border":"1px solid #c9c8c8"
				})
			}else{
				$(".xsyzm").html("验证码不正确").css({
					"background":"url(img/cuo.png) no-repeat 4px 8px"
					})
				// $(".reg_left_input").css({
				// 	"border":"1px solid red"
				// })
				}
		}

	// console.log("已经走到这了");
	

	}));
	// 失去焦点
	$(".reg_left_input").blur(function(){
		if($(".reg_left_input").val() == ""){
			$(".xsyzm").html("").css({
				"background":""
			})
			// $(".reg_left_input").css({
			// 	"border":"1px solid #c9c8c8"
			// })
		}
	})



	
	// $("#yanzheng").onchange = function(){
	// 	console.log("已经走到这了");
	// }
	function yzm(){
	let str = "";
	for(let i = 0;i<6;i++){
		let a =String.fromCharCode(random(48,57));
		let b = String.fromCharCode(random(65,90));
		let c = String.fromCharCode(random(97,122));
		
		str += a + b + c;
	}
		console.log(str);
	let newStr = "";
	for(let j = 0;j<4;j++){
		newStr += str.charAt(random(0,str.length-1));
	}
	$(".reg_left_span").html(newStr);
	}


	function random(x,y){
		return Math.random()*(y-x)+x;
	}	
	$("#yzm").click(function(){
		yzm();
	})
	$(".reg_left_span").click(function(){
		yzm();
	})

})

$(function(){
	$(".checked").click(function(){
		if($(".checked").attr("checked") != "checked"){
		$(".xy").html("请接受服务条款").css({
			"background":"url(img/cuo.png) no-repeat",
			"padding-left":"30px"
		});
		}else{
			$(".xy").html("");
		}
	})
})
// $(function(){
// 	console.log($(".reg_left_b input"));
// 	$(".reg_left_b input").each(function(){
// 		console.log(this);
// 		this.focus(function(){
// 			$(".spanPhone").show();
// 		}).blur(function(){
// 			$(".spanPhone").hide();
// 		}).trigger("blur");
// 	});
// })