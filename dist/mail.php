<?php
//get data from form
$name = $_POST['name'];
$email= $_POST['email'];
$number= $_POST['number'];
$message= $_POST['message'];
$to = "vitaliym58@gmail.com";
$subject = "Mail From website Portfolio";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Number = " . $number . "\r\n Message =" . $message;
$headers = "From: vitaliy.kolesnik@welcome-on.co.ua" . "\r\n" .
"CC: vitaliy.kolesnik@welcome-on.co.ua";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>