<?php
	header("Content-type:text/html;charset=utf-8");
	
	$iphone = $_POST["useriphone"];
	$email = $_POST["useremail"];
	$pass = $_POST["userpass"];
	
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		die("错误".mysql_error);
	}else{
		mysql_select_db("sony",$con);
		
		$sqlstr = "select * from  sonyvip where iphone = '$iphone'";
		
		$reslute = mysql_query($sqlstr,$con);
	
		$sqlrow = mysql_num_rows($reslute);	
			
		if($sqlrow > 0){
			mysql_close($con);	
			
			echo "2";
				
		}else{
			
			$sqlstr = "insert into sonyvip (iphone,email,pass) values ('$iphone','$email','$pass')";
			
			$reslute = mysql_query($sqlstr,$con);
	
//			$sqlrow = mysql_num_rows($reslute);			
			mysql_close($con);	
			
			echo $reslute;			
		}
	}
?>