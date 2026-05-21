<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

try {
    $conn = new PDO("mysql:host=localhost;dbname=ita25pajula_like_dislike.db", "ita25pajula_testi", "tAbasalu1212");
    
    $conn->exec("CREATE TABLE IF NOT EXISTS SUVA (
      id INT AUTO_INCREMENT PRIMARY KEY,
      tekst TEXT NOT NULL
    )");

    $tekst = $_POST["tekst"] ?? "test";
    $stmt = $conn->prepare("INSERT INTO SUVA (tekst) VALUES (?)");
    $stmt->execute([$tekst]);

    echo json_encode(["ok" => true]);
} catch (PDOException $e) {
    echo "Viga: " . $e->getMessage();
}