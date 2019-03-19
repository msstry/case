<?php
header("Content-type:text/html;charset=utf-8");

$userId = $_POST['userId'];
$userPass = $_POST['userPass'];

$conn = mysql_connect('localhost','root','root');
if(!$conn){
	die("连接失败");
}
mysql_select_db("hq",$conn);

// 执行sql
$sql = "select * from users where userId = '$userId' and userPass = '$userPass'";
$res = mysql_query($sql,$conn);
// 关闭数据库
mysql_close($conn);

// 响应
if(mysql_num_rows($res) > 0){
	echo "1";
}else{
	echo "0";
}


?>