<?php 
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

$method = $_SERVER['REQUEST_METHOD'];

//override
if ($method === 'POST' && isset($_POST['_method']) && $_POST['_method'] === 'PUT') {
    $method = 'PUT';
}

// Para POST/PUT con multipart/form-data (imágenes), usar $_POST y $_FILES, si no, json_decode, de hecho vamos a hacer posts override porque el put no acaba de funcionar
if (strpos($_SERVER['CONTENT_TYPE'] ?? '', 'multipart/form-data') !== false) {
    if ($method === 'PUT') {
 
        $input = $_POST; 

    } else {
        $input = $_POST;
    }
} else if (strpos($_SERVER['CONTENT_TYPE'] ?? '', 'application/json') !== false) {
    $input = json_decode(file_get_contents('php://input'), true);
} else {
    $input = $_POST;
}

switch ($method) {
    //GET
    case 'GET':
        $category = $_GET['category'] ?? null;
        $id = $_GET['id'] ?? null;
        if ($id) {
            $stmt = $pdo->prepare("SELECT * FROM posts WHERE id = ?");
            $stmt->execute([$id]);
            echo json_encode($stmt->fetch(PDO::FETCH_ASSOC));
        } else if ($category) {
            $stmt = $pdo->prepare("SELECT * FROM posts WHERE category = ?");
            $stmt->execute([$category]);
            echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
        } else {
            $stmt = $pdo->query("SELECT * FROM posts");
            echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
        }
        break;   
         //POST
        case 'POST':
        $required = ['title', 'content', 'category'];
        foreach ($required as $field) {
            if (empty($input[$field])) {
                http_response_code(400);
                echo json_encode(['error' => "Falta el campo $field"]);
                exit;
            }
        }
        // Obtener id_user de la sesión
        session_start();
        if (!isset($_SESSION['id_user'])) {
            http_response_code(401);
            echo json_encode(['error' => 'No autenticado']);
            exit;
        }
        $id_user = $_SESSION['id_user'];
        
        $imgName = null;
        
        //Manejar imagen 
        if (!empty($_FILES['img']['name'])) {
            $ext = pathinfo($_FILES['img']['name'], PATHINFO_EXTENSION);
            $imgName = uniqid('post_') . '.' . $ext;
            $dest = $imgDir . $imgName;
            if (!move_uploaded_file($_FILES['img']['tmp_name'], $dest)) {
                http_response_code(500);
                echo json_encode(['error' => 'Error al guardar la imagen']);
                exit;
            }
        }
        //Manejar imagen 
        else if (!empty($input['img'])) {
            $imgName = $input['img'];
        }
        
        $stmt = $pdo->prepare("INSERT INTO posts (id_user, title, img, content, category) VALUES (?, ?, ?, ?, ?)");
        $stmt->execute([
            $id_user,
            $input['title'],
            $imgName,
            $input['content'],
            $input['category']
        ]);
        echo json_encode(['success' => true, 'id' => $pdo->lastInsertId(), 'img' => $imgName]);
        break;   
         //PUT: actualizar post por id
        case 'PUT':
        // Verificar autenticación
        session_start();
        if (!isset($_SESSION['id_user'])) {
            http_response_code(401);
            echo json_encode(['error' => 'No autenticado']);
            exit;
        }
        
        $id = $_GET['id'] ?? null;
        if (!$id) {
            http_response_code(400);
            echo json_encode(['error' => 'ID no proporcionado']);
            exit;
        }
        
        $fields = ['title', 'content', 'category'];
        $set = [];
        $params = [];
        foreach ($fields as $field) {
            if (isset($input[$field])) {
                $set[] = "$field = ?";
                $params[] = $input[$field];
            }
        }
        
        //PUT NO ME PERMITE ACTUALIZAR IMG PONGO UN POST CON OVERRRIDE
        if (!empty($_FILES['img']['name'])) {
            $ext = pathinfo($_FILES['img']['name'], PATHINFO_EXTENSION);
            $imgName = uniqid('post_') . '.' . $ext;
            $dest = $imgDir . $imgName;
            if (!move_uploaded_file($_FILES['img']['tmp_name'], $dest)) {
                http_response_code(500);
                echo json_encode(['error' => 'Error al guardar la imagen']);
                exit;
            }
            $set[] = "img = ?";
            $params[] = $imgName;
        }
        
        if (empty($set)) {
            http_response_code(400);
            echo json_encode(['error' => 'No hay campos para actualizar']);
            exit;
        }
        
        $params[] = $id;
        $sql = "UPDATE posts SET ".implode(", ", $set)." WHERE id = ?";
        $stmt = $pdo->prepare($sql);
        $stmt->execute($params);
        echo json_encode(['success' => true]);
        break;

    //DELETE:
    case 'DELETE':
        $id = $_GET['id'] ?? null;
        if (!$id) {
            http_response_code(400);
            echo json_encode(['error' => 'ID no proporcionado']);
            exit;
        }
        $stmt = $pdo->prepare("DELETE FROM posts WHERE id = ?");
        $stmt->execute([$id]);
        echo json_encode(['success' => true]);
        break;

    default:
        http_response_code(405);
        echo json_encode(['error' => 'Método no permitido']);
}
?>