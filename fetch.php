<html>
<body>
    
<?php

include_once("config.php");

$result = mysqli_query($mysqli, "SELECT * FROM contactus");

?>
<br><br>
<table border="2px solid" align="center" style="width:50%;font-size:25px">
    <tr>
        <th>Inquery</th>
        <th>Operation</th>
    </tr>


    <?php
    while($res = mysqli_fetch_array($result)){
        echo "<tr>";
        echo "<td>".$res['inquery']."</td>";
        echo "<td><a href=\"delete.php?id=$res[id]\">Delete</a></td>";
    }
    ?>
</table>

</body>
</html>