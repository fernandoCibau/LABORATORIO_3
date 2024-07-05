<?php
session_start(); // Inicia la sesión al principio del script

include "conexionPDO.php"; // Asegúrate de que este archivo contenga la conexión PDO

if (isset($_POST["usuario"]) && isset($_POST["contrasenia"])) {
    $usuario = $_POST['usuario'];
    $contrasenia = $_POST['contrasenia'];

    // Crear la consulta SQL para obtener todos los usuarios con el mismo nombre de usuario
    $sql = "SELECT * FROM usuarios WHERE usuario = :usuario";

    try {
        // Preparar la consulta
        $stmt = $conexion->prepare($sql);
        $stmt->bindParam(':usuario', $usuario);
        // Ejecutar la consulta
        $stmt->execute();
        // Obtener todos los resultados
        $resultados = $stmt->fetchAll(PDO::FETCH_ASSOC);


        if ($resultados) {
            $usuario_encontrado = false;

            // Iterar sobre cada resultado para comparar la contraseña
            foreach ($resultados as $resultado) {
                // password_verify : es una función en PHP que se utiliza para verificar si una contraseña en texto plano coincide con un hash almacenado.
                if (password_verify($contrasenia, $resultado["contrasenia"])) {  
                    // Contraseña correcta, iniciar sesión para el primer usuario encontrado
                    $_SESSION['usuario']['usuario'] = $resultado["usuario"];
                    $_SESSION['usuario']['sesionId'] = session_create_id();
                    $_SESSION['usuario']['contador'] = $resultado["contador"] + 1;
                    $_SESSION['usuario']['contrasenia'] = $contrasenia;

                    // Preparar respuesta JSON
                    $mensaje = new stdClass();
                    $mensaje->mensaje = "BIENVENIDO: " . $resultado['usuario'];
                    $mensaje->resultado = true;
                    $mensaje->sesionId = $_SESSION['usuario']['sesionId'];
                    $mensaje->contador = $_SESSION['usuario']['contador'];
                    echo json_encode($mensaje);

                    $usuario_encontrado = true;
                    break;
                }
            }

            if (!$usuario_encontrado) {
                // Ninguna contraseña coincidió
                $error = new stdClass();
                $error->mensaje = "Contraseña incorrecta para el usuario '$usuario'.";
                echo json_encode($error);
            }
        } else {
            // No se encontró el usuario en la base de datos
            $error = new stdClass();
            $error->mensaje = "Usuario '$usuario' no encontrado.";
            echo json_encode($error);
        }
    } catch (PDOException $e) {
        // Capturar errores de PDO
        $error = new stdClass();
        $error->mensaje = "Error en la consulta SQL: " . $e->getMessage();
        echo json_encode($error);
    }

    // Cerrar la conexión
    $conexion = null;
} else {
    // No se recibieron usuario ni contraseña
    $error = new stdClass();
    $error->mensaje = "No se encontró usuario ni contraseña.";
    echo json_encode($error);
}
?>
