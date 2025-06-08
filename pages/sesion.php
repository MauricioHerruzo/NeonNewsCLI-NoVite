<?php
// sesion.php - Verificación global de sesión para todas las páginas
session_start();

// Verificar cookie de "Recordarme" si no hay sesión activa
if (!isset($_SESSION['id_user']) && isset($_COOKIE['remember_user'])) {
    $_SESSION['id_user'] = $_COOKIE['remember_user'];
}

// Función para verificar si el usuario está loggeado
function isLoggedIn() {
    return isset($_SESSION['id_user']);
}

// Función para obtener datos del usuario loggeado
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

// Función para requerir login (redirige si no está loggeado)
function requireLogin() {
    if (!isLoggedIn()) {
        header('Location: /NeonNewsDefinitivo/pages/login.php');
        exit;
    }
}

// Variables globales para usar en las páginas
$isLoggedIn = isLoggedIn();
$currentUser = getCurrentUser();
?>