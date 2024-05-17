<?php
// Set the appropriate headers for CORS (Cross-Origin Resource Sharing)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Define your API response data
$responseData = array(
    "message" => "Hello from PHP API!",
    "timestamp" => time()
);

// Convert the response data to JSON format
$jsonResponse = json_encode($responseData);

// Output the JSON response
echo $jsonResponse;
?>
