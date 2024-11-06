<?php
// Include the Twilio PHP library
require_once 'path/to/twilio-php/Services/Twilio.php'; // Adjust the path as needed

// Your Twilio account credentials
$account_sid = 'YOUR_TWILIO_ACCOUNT_SID';
$auth_token = 'YOUR_TWILIO_AUTH_TOKEN';

// Your WhatsApp number
$whatsapp_number = 'whatsapp:+14155238886'; // Replace with your WhatsApp number

// Recipient WhatsApp number (your number)
$recipient_number = 'whatsapp:+27717648634'; // Replace with your WhatsApp number

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Message content
$body = "New message from Divine Life Restoration Centre:\n\n";
$body .= "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Phone: $phone\n";
$body .= "Message:\n$message";

// Initialize Twilio client
$client = new Services_Twilio($account_sid, $auth_token);

try {
    // Send WhatsApp message
    $client->account->messages->create([
        'from' => $whatsapp_number,
        'to' => $recipient_number,
        'body' => $body,
    ]);

    // Redirect back to the contact page with success message
    header('Location: contact.html?status=success');
    exit;
} catch (Exception $e) {
    // Redirect back to the contact page with error message
    header('Location: contact.html?status=error');
    exit;
}
?>
