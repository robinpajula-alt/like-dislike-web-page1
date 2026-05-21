<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

$host = "localhost";
$dbname = "ita25pajula_like_dislike.db";
$user = "ita25pajula_testi";
$pass = "tAbasalu1212";

$conn = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);

$conn->exec("CREATE TABLE IF NOT EXISTS SUVA (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tekst TEXT NOT NULL
)");

$tekst = $_POST["tekst"];
$stmt = $conn->prepare("INSERT INTO SUVA (TEKST) VALUES (?)");
$stmt->execute([$tekst]);

echo json_encode(["ok" => true]);
Lae üles ja ava otse brauseris — nüüd peaks täpne viga nähtav olema!


