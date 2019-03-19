<?php
	header("Content-type:text/html;charset=utf-8");
	
	$iphone = $_POST["useriphone"];
	
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		die("错误".mysql_error);
	}else{
		mysql_select_db("sony",$con);
		
		$sqlstr = "select * from  sonyvip where iphone = '$iphone'";

		$reslute = mysql_query($sqlstr,$con);
		
		$sqlrow = mysql_num_rows($reslute);	
			
		mysql_close($con);	
			
		if($sqlrow > 0){
			echo "1";
		}else{
			echo "0";			
		}
	}	
?>