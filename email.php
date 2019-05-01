<?php
  $email = $_REQUEST['email'] ;
  $message = $_REQUEST['message'] ;

  // here we use the php mail function
  // to send an email to:
  // you@example.com
  mail("example.com", "Feedback Form Results",$message, "From: $email" );
?>