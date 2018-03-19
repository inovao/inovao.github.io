<?php

session_start();
if(isset($_POST['end'])){
	$result = 0;
	foreach($_SESSION['result'] as $step=>$value){
		$result += $value;
	}
	switch((int)$result){
	  case 100: $grade = "A+";break;
	  case 99: $grade = "A+";break;
	  case 98: $grade = "A+";break;
	  case 97: $grade = "A+";break;
	  case 96: $grade = "A+";break;
	  case 95: $grade = "A";break;
	  case 94: $grade = "A";break;
	  case 93: $grade = "A";break;
	  case 92: $grade = "A";break;
	  case 91: $grade = "A-";break;
	  case 90: $grade = "A-";break;
	  case 89: $grade = "B+";break;
	  case 88: $grade = "B+";break;
	  case 87: $grade = "B+";break;
	  case 86: $grade = "B+";break;
	  case 85: $grade = "B+";break;
	  case 84: $grade = "B";break;
	  case 83: $grade = "B";break;
	  case 82: $grade = "B";break;
	  case 81: $grade = "B-";break;
	  case 80: $grade = "B-";break;
	  case 79: $grade = "C+";break;
	  case 78: $grade = "C+";break;
	  case 77: $grade = "C+";break;
	  case 76: $grade = "C+";break;
	  default: $grade = "C";
	}
	$json = (object) array(
		"grade" => $grade,
		"result" => $result
	);
	print_r(json_encode($json));
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