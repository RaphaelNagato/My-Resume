<html>
<body>
<?php
if(isset($_POST['submitBtn'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $title = $_POST['title'];
    $message = $_POST['message'];

    $data = "Name: ".$name."\n"."Email: ".$email."\n"."Subject: ".$title."\nmessage: ".$message."\n\n";
    file_put_contents("test.txt",$data,FILE_APPEND);

    echo "Your response have been saved. I will get back to you as soon as possible";
}

?>

</body>
</html>