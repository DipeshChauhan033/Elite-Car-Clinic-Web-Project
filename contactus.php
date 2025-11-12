<?php

include_once("config.php");

if(isset($_POST['send'])){
    $inquery = $_POST['inquery'];

    $result = mysqli_query($mysqli,"INSERT INTO contactus(inquery) VALUES('$inquery')");

    header("Location:contactus.html");
}


?>