$(function(){
	
	$("#com").mouseenter(function(){
		$(".comm-uls").css("display","block");
		$("#comm1-1").css("color","#10a0d5");
		$("#comm1-2").css("border-top-color","#10a0d5");
		$("#header").css("overflow","visible");
	});
	$("#com li").mouseenter(function(){
		$(".comm-uls-uls").css("display","block");
		$(".comm-uls").css("background","#FFFFFF");
	});
	$(".comm-uls li").mouseleave(function(){
		$(".comm-uls-uls").css("display","none");
		$(".comm-uls").css("background","");
	});
	$("#com").mouseleave(function(){
		$(".comm-uls").css("display","none");
		$("#comm1-1").css("color","#FFFFFF");
		$("#comm1-2").css("border-top-color","#FFFFFF");
	});
	$("#nav").mouseenter(function(){
		$(".nav-uls").css("display","block");
		$("#comm2-1").css("color","#10a0d5");
		$("#comm2-2").css("border-top-color","#10a0d5");
	});
	$("#nav").mouseleave(function(){
		$(".nav-uls").css("display","none");
		$("#comm2-1").css("color","#FFFFFF");
		$("#comm2-2").css("border-top-color","");
	});
	$("#mysony").hover(function(){
		$("#mysony-uls-box").css("display","block");
		$("#comm3-1").css("color","#10A0D5");
		$("#comm3-2").css("border-top-color","#10A0D5");
	},function(){
		$("#mysony-uls-box").css("display","none");
		$("#comm3-1").css("color","#FFFFFF");
		$("#comm3-2").css("border-top-color","");
	});
	$("#serve").hover(function(){
		$("#serve-uls-box").css("display","block");
		$("#comm4-1").css("color","#10A0D5");
		$("#comm4-2").css("border-top-color","#10A0D5");
	},function(){
		$("#serve-uls-box").css("display","none");
		$("#comm4-1").css("color","#FFFFFF");
		$("#comm4-2").css("border-top-color","");
	});
	$(".shop").hover(function(){
		$(".shop-shopping").css("display","block");
	},function(){
		$(".shop-shopping").css("display","none");
	});
	
	$(".con-foot-fh").click(function(){
		$("html,body").animate({scrollTop:0},300);
	});
	
	$(".third-toshopping").click(function(){
		location.href = "sonyfour.html";
		
	})
	
	function ajaxs(useriphone,useremail,userpass){
		$.post("php/index.php", { "useriphone": useriphone,"useremail":useremail,"userpass":userpass},
   			function(data){
    			if(data==1){
    				alert("注册成功");
    				$("#zzc").css("display","none");
					$("#register2").css("display","none");
					$("#login").css("display","none");
					$(".register-header").css("display","none");
					$(".register-foot").css("display","block");
    			}else if(data==0){
    				alert("注册失败");
    			}
  			}, "json");
	}
	function logins(useriphone,userpass){
		$.post("php/login.php", {"useriphone": useriphone,"userpass":userpass},
   			function(data){
    			if(data==1){
    				alert("登录成功");
    				$("#zzc").css("display","none");
					$("#register2").css("display","none");
					$("#login").css("display","none");
					$(".register-header").css("display","none");
					$(".register-foot").css("display","block");
    			}else if(data==0){
    				alert("登录失败");
    			}
  			}, "json");
	}
	$("#login-dl").click(function(){
		$("#zzc").css("display","block");
		$("#login").css("display","block");
	})
	$("#register-zc").click(function(){
		$("#zzc").css("display","block");
		$("#register2").css("display","block");
	})
	$(".login-x").click(function(){
		$("#zzc").css("display","none");
		$("#register2").css("display","none");
		$("#login").css("display","none");
	})
	$(".togglo").click(function(){
		$("#register2").css("display","block"); 
		$("#login").css("display","none");
	 });
	$(".toggre").click(function(){
		$("#login").css("display","block");	
		$("#register2").css("display","none");
	});
	$(".cookie-remove").click(function(){
		$(".register-header").css("display","block");
		$(".register-foot").css("display","none");
		removeCookie("username");
	});
	
	$("#registers").click(function(){
		if($(".input-check[type='checkbox']").prop('checked')!=true
		||$("#useriphone").val()==""||$("#useremail").val()==""||$("#userepaw").val()==""
		||$("#userepaws").val()==""){
			$(".register-dj .register-error").css("display","block");
			$(".register-dj .register-error").html("请同意用户协议");
		}else{
			ajaxs($("#useriphone").val(),$("#useremail").val(),$("#userepaw").val());
			saveCookie("username",$("#useriphone").val(),7);
			$("#uservip").text(getCookie("username"));
		}
	});
	$(".input-check").click(function(){
		if($(".input-check[type='checkbox']").prop('checked')!=true){
			$(".register-dj .register-error").css("display","block");
			$(".register-dj .register-error").html("请同意用户协议");
		}else{
			$(".register-dj .register-error").css("display","none");
		}
	})
	
	$("#logins").click(function(){
		logins($("#username").val(),$("#userpass").val());
		if($("#login-cookie[type='checkbox']").prop('checked')==true){
			saveCookie("username",$("#username").val(),7);
			$("#uservip").text(getCookie("username"));
		}
	});
		$("#useriphone").blur(function(){
			$.post("php/iphone.php", {"useriphone":$("#useriphone").val()},
	   			function(data){
	    			if(data==1){
	    				$(".register-user .register-error").css("display","block");	
						$(".register-user .register-error").html("该手机号已注册，请核对后重新输入");	
						$(".register-user .login-ture").css("display","none");
	    			}else{ 
	    				if(regs("iphone",$("#useriphone").val())){
							$(".register-user .register-error").css("display","block");
							$(".register-user .login-ture").css("display","block");
							$(".register-user .register-error").css("display","none");				
						}else{
							$(".register-user .register-error").css("display","block");	
							$(".register-user .register-error").html("请输入正确手机号");	
					}}
	  			}, "text");
	  	});		
	$("#useremail").blur(function(){
		if(regs("email",$("#useremail").val())){
			$(".register-email .register-error").css("display","block");
			$(".register-email .login-ture").css("display","block");
			$(".register-email .register-error").css("display","none");
		}else{
			$(".register-email .register-error").css("display","block");	
			$(".register-email .register-error").html("请输入正确邮箱");}
	})
	$("#userepaw").blur(function(){
		if(regs("pass",$("#userepaw").val())){
			$(".register-pass1 .register-error").css("display","block");
			$(".register-pass1 .login-ture").css("display","block");
			$(".register-pass1 .register-error").css("display","none");
		}else{
			$(".register-pass1 .register-error").css("display","block");	
			$(".register-pass1 .register-error").html("密码由8-16个字符组成，须含大小字母和数字");}
	})
	$("#userepaws").blur(function(){
		if($("#userepaws").val()===$("#userepaw").val()&&$("#userepaws").val()!=""){
			$(".register-pass2 .register-error").css("display","block");
			$(".register-pass2 .login-ture").css("display","block");
			$(".register-pass2 .register-error").css("display","none");
		}else{
			$(".register-pass2 .register-error").css("display","block");	
			$(".register-pass2 .register-error").html("请保持密码一致");}
	})
		$(".header-ulss>li").each(function(){	
			$(this).hover(function(){
				$(this).children().last().css("display","block");
			},function(){
				$(this).children().last().css("display","none");
			})
		})
});