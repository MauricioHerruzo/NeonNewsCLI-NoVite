<?php
//sesion.php 
session_start();


if (!isset($_SESSION['id_user']) && isset($_COOKIE['remember_user'])) {
    $_SESSION['id_user'] = $_COOKIE['remember_user'];
}


function isLoggedIn() {
    return isset($_SESSION['id_user']);
}


function getCurrentUser() {
    if (!isLoggedIn()) {
        return null;
    }
    
    $server = 'localhost';
    $database = 'neonnews';
    $dsn = "mysql:host=$server;dbname=$database;charset=utf8mb4";
    $usuario = 'root';
    $contraseña = '';
    
    try {
        $pdo = new PDO($dsn, $usuario, $contraseña);
        $stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");
        $stmt->execute([$_SESSION['id_user']]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        return null;
    }
}


function requireLogin() {
    if (!isLoggedIn()) {
        header('Location: /NeonNewsDefinitivo/pages/login.php');
        exit;
    }
}


$isLoggedIn = isLoggedIn();
$currentUser = getCurrentUser();
?>