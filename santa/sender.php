<?php
    $name = $_POST['name'];
	$phone = $_POST['phone'];

	$to = "leoshowdp@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта";

	
	$msg="
    Имя: $name
    Телефон: $phone"; 	
	mail($to, $subject, $msg, "From: $to ");
?>
