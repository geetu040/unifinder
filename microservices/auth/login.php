<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

include('connect.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Check if user exists in the user table
    $sql = "SELECT * FROM user WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // User exists
        $row = $result->fetch_assoc();
        if ($password == $row['password']) {
            // Correct password
        $data = array(
            'name' => $row['fullname'],
            'message' => 'Login Successful',
        );
        $jsonString = json_encode($data);
        echo $jsonString;

        } else {
            // Incorrect password
            $data = array(
                'message' => 'Incorrect Password',
            );
            $jsonString = json_encode($data);
            echo $jsonString;
        }
    } else {
        // User not found in the user table
        $data = array(
            'message' => 'User not found',
        );
        $jsonString = json_encode($data);
        echo $jsonString;
    }
}

$conn->close();
?>
