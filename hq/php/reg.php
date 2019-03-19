<?php
header('Content-type:text/html;charset=utf-8');

//获取数据
$userId = $_POST['userId'];
$userPass = $_POST['userPass'];

// 建立数据库连接
$conn =mysql_connect('localhost','root','root');
if(!$conn){
	die("连接失败");
}

//选择数据库
mysql_select_db("hq",$conn);
//执行sql语句
$sql = "insert into users values ('$userId','$userPass')";
$res = mysql_query($sql,$conn);
//关闭数据库
// echo $rel;
mysql_close($conn);

if($res>0){
	echo "1";
}else{
	echo "0";
}

?>