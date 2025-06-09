<?php 

//ESTA ES LA API DE USERS

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

$server = 'localhost';
$database = 'neonnews';
$dsn = "mysql:host=$server;dbname=$database;charset=utf8mb4";
$usuario = 'root';
$contraseña = '';

$imgDir = __DIR__ . '/img/posts/';
if (!is_dir($imgDir)) {
    mkdir($imgDir, 0777, true);
}

try {
    $pdo = new PDO($dsn, $usuario, $contraseña);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Falló la conexión: ' . $e->getMessage()]);
    exit;
}

//SESIÓN
if (isset($_GET['action']) && $_GET['action'] === 'session') {
    session_start();
    if (isset($_SESSION['id_user'])) {
        echo json_encode(['logged' => true, 'id_user' => $_SESSION['id_user']]);
    } else {
        echo json_encode(['logged' => false]);
    }
    exit;
}

$method = $_SERVER['REQUEST_METHOD'];
if (strpos($_SERVER['CONTENT_TYPE'] ?? '', 'multipart/form-data') !== false) {
    $input = $_POST;
} else if (strpos($_SERVER['CONTENT_TYPE'] ?? '', 'application/json') !== false) {
    $input = json_decode(file_get_contents('php://input'), true);
} else {
    $input = $_POST;
}

switch ($method) {
    //GET
    case 'GET':
        $id = $_GET['id'] ?? null;
        if ($id) {
            $stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");
            $stmt->execute([$id]);
            echo json_encode($stmt->fetch(PDO::FETCH_ASSOC));
        } else {
            $stmt = $pdo->query("SELECT * FROM users");
            echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
        }
        break;

    //POST
    case 'POST':
        $required = ['name', 'email', 'password'];
        foreach ($required as $field) {
            if (empty($input[$field])) {
                http_response_code(400);
                echo json_encode(['error' => "Falta el campo $field"]);
                exit;
            }
        }
        //email único
        $stmt = $pdo->prepare("SELECT id FROM users WHERE email = ?");
        $stmt->execute([$input['email']]);
        if ($stmt->fetch()) {
            http_response_code(409);
            echo json_encode(['error' => 'El email ya está registrado']);
            exit;
        }
        $img_profile = 'default_profile.jpg';
        if (!empty($_FILES['img_profile']['name'])) {
            $ext = pathinfo($_FILES['img_profile']['name'], PATHINFO_EXTENSION);
            $img_profile = uniqid('user_') . '.' . $ext;
            $dest = $imgDir . $img_profile;
            if (!move_uploaded_file($_FILES['img_profile']['tmp_name'], $dest)) {
                http_response_code(500);
                echo json_encode(['error' => 'Error al guardar la imagen de perfil']);
                exit;
            }
        } else if (!empty($input['img_profile'])) {
            $img_profile = $input['img_profile'];
        }
        $bio = $input['bio'] ?? null;
        $img_bg = 'default_bg.jpg';
        if (!empty($_FILES['img_bg']['name'])) {
            $ext = pathinfo($_FILES['img_bg']['name'], PATHINFO_EXTENSION);
            $img_bg = uniqid('bg_') . '.' . $ext;
            $dest = $imgDir . $img_bg;
            if (!move_uploaded_file($_FILES['img_bg']['tmp_name'], $dest)) {
                http_response_code(500);
                echo json_encode(['error' => 'Error al guardar la imagen de fondo']);
                exit;
            }
        } else if (!empty($input['img_bg'])) {
            $img_bg = $input['img_bg'];
        }        $stmt = $pdo->prepare("INSERT INTO users (name, email, password, img_profile, bio, img_bg) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->execute([
            $input['name'],
            $input['email'],
            password_hash($input['password'], PASSWORD_DEFAULT),
            $img_profile,
            $bio,
            $img_bg
        ]);
        
        //Iniciar sesión automáticamente después del registro
        $userId = $pdo->lastInsertId();
        session_start();
        $_SESSION['id_user'] = $userId;
        
        echo json_encode(['success' => true, 'id' => $userId, 'img_profile' => $img_profile, 'img_bg' => $img_bg]);
        break;

    //PUT, es la misma movida que la api de node, aunque al tener posibilidades de cagarla el usuario poner muchos ifs y tirando
    case 'PUT':
        $id = $_GET['id'] ?? null;
        if (!$id) {
            http_response_code(400);
            echo json_encode(['error' => 'ID no proporcionado']);
            exit;
        }
        $fields = ['name', 'email', 'bio'];
        $set = [];
        $params = [];
        foreach ($fields as $field) {
            if (isset($input[$field])) {
                $set[] = "$field = ?";
                $params[] = $input[$field];
            }
        }
        //Imagen de perfil nueva
        //ESTO HAZLO SOLO SI DA TIEMPO
        if (!empty($_FILES['img_profile']['name'])) {
            $ext = pathinfo($_FILES['img_profile']['name'], PATHINFO_EXTENSION);
            $img_profile = uniqid('user_') . '.' . $ext;
            $dest = $imgDir . $img_profile;
            if (!move_uploaded_file($_FILES['img_profile']['tmp_name'], $dest)) {
                http_response_code(500);
                echo json_encode(['error' => 'Error al guardar la imagen de perfil']);
                exit;
            }
            $set[] = "img_profile = ?";
            $params[] = $img_profile;
        }
        //Imagen de fondo nueva
        if (!empty($_FILES['img_bg']['name'])) {
            $ext = pathinfo($_FILES['img_bg']['name'], PATHINFO_EXTENSION);
            $img_bg = uniqid('bg_') . '.' . $ext;
            $dest = $imgDir . $img_bg;
            if (!move_uploaded_file($_FILES['img_bg']['tmp_name'], $dest)) {
                http_response_code(500);
                echo json_encode(['error' => 'Error al guardar la imagen de fondo']);
                exit;
            }
            $set[] = "img_bg = ?";
            $params[] = $img_bg;
        }
        //Solo actualizar password si se envía
        if (!empty($input['password'])) {
            $set[] = "password = ?";
            $params[] = password_hash($input['password'], PASSWORD_DEFAULT);
        }
        if (empty($set)) {
            http_response_code(400);
            echo json_encode(['error' => 'No hay campos para actualizar']);
            exit;
        }
        $params[] = $id;
        $sql = "UPDATE users SET ".implode(", ", $set)." WHERE id = ?";
        $stmt = $pdo->prepare($sql);
        $stmt->execute($params);
        echo json_encode(['success' => true]);
        break;

    //DELETE
    case 'DELETE':
        $id = $_GET['id'] ?? null;
        if (!$id) {
            http_response_code(400);
            echo json_encode(['error' => 'ID no proporcionado']);
            exit;
        }
        $stmt = $pdo->prepare("DELETE FROM users WHERE id = ?");
        $stmt->execute([$id]);
        echo json_encode(['success' => true]);
        break;

    default:
        http_response_code(405);
        echo json_encode(['error' => 'Método no permitido']);
}
?>
