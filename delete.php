<?php

include("config.php");
$id = $_GET['id'];

$result = mysqli_query($mysqli,"DELETE FROM contactus WHERE id=$id");

header("Location:fetch.php");

?>