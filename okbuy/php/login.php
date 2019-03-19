<?php
	header("Content-type:text/html;charset=utf-8");
	$username = $_POST['username'];
	$userpass = $_POST['userpass'];
	$conn=mysql_connect("localhost","root","root");
	if (!$conn) {
	}else{
		mysql_select_db("mysql1",$conn);
		$sqlstr="select * from user  where username='$username' and userpass='$userpass'";
		$result=mysql_query($sqlstr,$conn);
		mysql_close($conn);
		if (mysql_num_rows($result)==0) {
			echo "0";
		}else{
			echo "1";
		}
	}
?>