<?php 

$firsname = (!empty($_POST['firs_name'])) ? htmlspecialchars($_POST['firs_name']) : '';
$lastname = (!empty($_POST['last_name'])) ? htmlspecialchars($_POST['last_name']) : '';
$company = (!empty($_POST['company'])) ? htmlspecialchars($_POST['company']) : '';
$email = (!empty($_POST['email'])) ? htmlspecialchars($_POST['email']) : '';
$mess = (!empty($_POST['message'])) ? htmlspecialchars($_POST['message']) : '';
$title = 'Feedback';  
$name = $firsname . ' ' . $lastname;

$to = 'info@numberonestaging.com';
$subject = $title;

$message = '<html>
    <head>
        <title>' . $title . '</title>
    </head>
    <body>';

if ($title) $message .= "<h3>{$title}</h3>";
if ($name) $message .= "<p><strong>{$name}</strong></p>";
if ($company) $message .= "<p>Company: <strong>{$company}</strong></p>";
if ($email) $message .= "<p>E-mail: <strong>{$email}</strong></p>";
if ($mess) $message .= "<p>Message: <strong>{$mess}</strong></p>";


$message .= '</body></html>';

$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=utf-8';

$result = mail($to, $subject, $message, implode("\r\n", $headers));

if ($result) {
    echo "Thanks for the request";
} else {
    echo "Error!";
}

?>