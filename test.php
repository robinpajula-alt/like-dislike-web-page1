<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

try {
    $conn = new PDO("mysql:host=localhost;dbname=ita25pajula_like_dislike", "ita25pajula_testi", "tAbasalu1212");
    echo "Ühendus õnnestus!";
} catch (PDOException $e) {
    echo "Viga: " . $e->getMessage();
}