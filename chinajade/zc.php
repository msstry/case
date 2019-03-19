<?php
	header("Content-type:text/html;charset=utf-8");
	// 一 获取用户的输入
	$username = $_POST['username'];
	$userpass = $_POST['userpass'];
	$Nickname = $_POST['Nickname'];
	$Realname = $_POST['Realname'];
	$Mobile = $_POST['Mobile'];
	// 二 处理
	
	// 1.建立连接
	$conn = mysql_connect('localhost','root','root');
	if(!$conn){
		die("连接失败");
	}
	// 2.选择数据库
	mysql_select_db('jade',$conn);
	// 3.执行SQL语句
	$sqlstr = "select * from usera where username = '$username'";
	$result = mysql_query($sqlstr,$conn);
	// 4.关闭数据库
	if(mysql_num_rows($result)>0){
		mysql_close($conn);
		echo "2";
	}else{
		$sqlstr1 = "insert into usera values('$username','$userpass','$Nickname','$Realname','$Mobile')";
		$result = mysql_query($sqlstr1,$conn);

		// 4.关闭数据库
		mysql_close($conn);
			// 三 响应
		if($result>0){
			echo "1";
		}else{
			echo "0";
		}
	}
	

	
?>