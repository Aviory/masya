<?php
    $name = $_POST["name"];
    $phone = $_POST["phone"];

    $message = "имя:".$name."\r\nтел:".$phone;

    $to = 'nobody@example.com';
    $subject = 'Leo web';
    $headers = 'From:Leo web';

    mail($to, $subject, $message, $headers);

    echo "fire ".$name;
?>