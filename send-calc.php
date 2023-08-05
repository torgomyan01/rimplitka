<?php

$areaForLaying = $_POST['areaForLaying'];
$baseType = $_POST['baseType'];
$name = $_POST['name'];
$number = $_POST['phone'];

if(!isset($areaForLaying) && !isset($baseType) && !isset($name) && !isset($number)){
  echo 0;
} else {
  ini_set("SMTP", "aspmx.l.google.com");
  ini_set("sendmail_from", "YOURMAIL@gmail.com");

  $message = "The mail message was sent with the following mail setting:\r\nSMTP = aspmx.l.google.com\r\nsmtp_port = 25\r\nsendmail_from = YourMail@address.com";

  $headers = "From: YOURMAIL@gmail.com";

  $mail = mail("Sending@provider.com", "Testing", $message, $headers);

  if($mail){
    echo 2;
  } else{
    echo 3;
  }


  echo 1;
}