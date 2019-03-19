//页面载入
$(function(){
	$("#loginbtn").click(function(){
		let us_a = $(".us_a").val();
		let us_b = $(".us_b").val();
		 // && us_b ==""
		if(us_a == ""){
			$(".ts").html("请输入您的昵称/邮箱/手机号").css({
				"background":"url(img/cuo.png) no-repeat"
			});
			return false;
		}else if(us_b == ""){
			$(".ts").html("密码不能为空").css({
				"background":"url(img/cuo.png) no-repeat"
			});
			return false;
		}else{
			// console.log(us_a);
			// console.log(us_b);
            $(".ts").html("正在登陆……").css({
				"background":""
			});
			ajaxs();
			
		}
	});
});


function ajaxs(){
	let us_a = $(".us_a").val();
	let us_b = $(".us_b").val();
	$.post("php/login.php",{
				//参数
				userId:us_a,
				userPass:us_b
			},function(date){
				if(date == "1"){
					// alert("成功");
					saveCookie("userId",$(".us_a").val(),7);
					// let userId = getCookie("userId");
					// console.log(userId);
					location.href = "index.html";
				}else{
					$(".ts").html("用户名或密码错误").css({
						"background":"url(img/cuo.png) no-repeat"
					});
					// location.href = "login.html";
				}
			});
}