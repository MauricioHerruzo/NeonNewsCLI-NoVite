<?php
// login.php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

session_start();

$server = 'localhost';
$database = 'neonnews';
$dsn = "mysql:host=$server;dbname=$database;charset=utf8mb4";
$usuario = 'root';
$contraseña = '';

try {
    $pdo = new PDO($dsn, $usuario, $contraseña);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Falló la conexión: ' . $e->getMessage()]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
$email = $input['email'] ?? '';
$password = $input['password'] ?? '';
$remember = $input['remember'] ?? false;

if (!$email || !$password) {
    http_response_code(400);
    echo json_encode(['error' => 'Email y contraseña requeridos']);
    exit;
}

$stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
$stmt->execute([$email]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user && password_verify($password, $user['password'])) {
    $_SESSION['id_user'] = $user['id'];
    
    // Si el usuario marcó "Recordarme", crear cookie
    if ($remember) {
        setcookie('remember_user', $user['id'], time() + (30 * 24 * 60 * 60), '/'); // 30 días
    }
    
    echo json_encode([
        'success' => true, 
        'id_user' => $user['id'], 
        'name' => $user['name'], 
        'img_profile' => $user['img_profile']
    ]);
} else {
    http_response_code(401);
    echo json_encode(['error' => 'Credenciales incorrectas']);
}
?>
