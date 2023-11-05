<?php
$count = json_decode(file_get_contents("php://input"), true)["count"];
$file = fopen("visitor_count.txt", "w");
fwrite($file, $count);
fclose($file);
?>
