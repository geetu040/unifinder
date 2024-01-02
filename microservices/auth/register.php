<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

include ('connect.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if registration form is submitted
    if(isset($_POST['reg_fullname']) && isset($_POST['reg_email']) && isset($_POST['reg_password'])) {
        $reg_fullname = $_POST['reg_fullname'];
        $reg_email = $_POST['reg_email'];
        $reg_password = $_POST['reg_password'];

        // Check if user with the same email already exists
        $check_sql = "SELECT * FROM user WHERE email = '$reg_email'";
        $check_result = $conn->query($check_sql);
        
        if ($check_result->num_rows > 0) {
            // User with the same email already exists
            $data = array(
                'message' => 'User email already exists',
            );
            $jsonString = json_encode($data);
            echo $jsonString;
        } else {
            // Insert new user into the user table
            $insert_sql = "INSERT INTO user (fullname, email, password) VALUES ('$reg_fullname', '$reg_email', '$reg_password')";
            
            if ($conn->query($insert_sql) === TRUE) {
                // Registration successful
                $data = array(
                    'message' => 'Registration successful',
                );
                $jsonString = json_encode($data);
                echo $jsonString;
            } else {
                // Registration failed
                echo "Error: " . $insert_sql . "<br>" . $conn->error;
            }
        }
    }
}

$conn->close();
?>
