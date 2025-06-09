<?php
session_start();

//Cerrar sesión 
$_SESSION = array();

//Eliminar cookie de recordar usuario
if (isset($_COOKIE['remember_user'])) {
    setcookie('remember_user', '', time() - 3600, '/');
}

//Eliminar cookies 
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params["path"], $params["domain"],
        $params["secure"], $params["httponly"]
    );
}

session_destroy();

//No acabo de entender el AJAX pero esto es lo que veo en todos lados aunque no creo que rompa nada el quitarlo
//Osea yo nunca voy a recargar por eso me he jodido para hacerlo todo con JS
if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    header('Content-Type: application/json');
    echo json_encode(['success' => true]);
} else {
    header('Location: /NeonNewsDefinitivo/index.php');
}
?>
