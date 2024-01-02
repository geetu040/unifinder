<?php

    $servername = "farooq-mysql.mysql.database.azure.com";
	$username = "imfarooq";
    $password = getenv('UF_AUTH_MYSQL_PASS');
    $dbname = "cc";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Failed to connect to MySQL: " . $conn->connect_error);
    }
?>