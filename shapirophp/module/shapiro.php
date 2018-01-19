<?php

session_start();
if(isset($_POST['end'])){
	$result = 0;
	foreach($_SESSION['result'] as $step=>$value){
		$result += $value;
	}
	echo $result;
}else{
	$_SESSION['result'][$_POST['step']] = $_POST['puncte'];
	$_SESSION['value'][$_POST['step']] = $_POST['value'];
	print_r($_SESSION);
}
if(isset($_POST['type'])){
	if($_POST['type'] == "DAI"){
		print_r(json_encode($_SESSION));
	}
}

?>