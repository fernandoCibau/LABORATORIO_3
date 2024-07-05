<?php
ini_set('error_log', 'C:\xampp\htdocs\laboratorio3\php\11_php2_abm\errores.log');
date_default_timezone_set('America/Argentina/Buenos_Aires');
include "../conexionPDO.php";

if (isset($_POST["usuario"]) && isset($_POST["contrasenia"])) {
    $usuario = $_POST['usuario'];
    $contrasenia = $_POST['contrasenia'];

    try {
        // Consulta para verificar si ya existe un usuario con el mismo nombre
        $sql = "SELECT * FROM usuarios WHERE usuario = :usuario";
        $stmt = $conexion->prepare($sql);
        $stmt->bindParam(':usuario', $usuario);
        $stmt->execute();
        $resultados = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $usuario_encontrado = false;

        if ($resultados) {

            foreach ($resultados as $resultado) {
                if (password_verify($contrasenia, $resultado["contrasenia"])) {
                    
                    $usuario_encontrado = true;
                    $mensaje = new stdClass();
                    $mensaje->mensaje = "El usuario y contraseña  ya existe " . $resultado['usuario'] . ".";
                    $mensaje->resultado = false;
                    echo json_encode($mensaje);
                    break; 
                }
            }
        } 
        
        if( !$usuario_encontrado ){
            
            $hashContrasenia = password_hash($contrasenia, PASSWORD_DEFAULT);
            $contador = 0;
            $sql_insert = "INSERT INTO usuarios (usuario, contrasenia, contador) VALUES (:usuario, :contrasenia, :contador)";

            $stmt_insert = $conexion->prepare($sql_insert);

            $stmt_insert->bindParam(":usuario", $usuario);
            $stmt_insert->bindParam(":contrasenia", $hashContrasenia);
            $stmt_insert->bindParam(":contador", $contador);

            $resultado_insert = $stmt_insert->execute();

            if ($resultado_insert) {
                // Usuario insertado correctamente
                $insert = new stdClass();
                $insert->mensaje = "Usuario " . $usuario . "  insertado correctamente.";
                $insert->resultado = true;
                echo json_encode($insert);
            } else {
                // Error al insertar el usuario
                $error = new stdClass();
                $error->mensaje = "Error al insertar el usuario " . "$usuario";
                $error->resultado = false;
                echo json_encode($error);
            }
        }


    } catch (PDOException $e) {
        // Capturar errores de PDO
        $error = new stdClass();
        $error->mensaje = "Error en la consulta SQL: " . $e->getMessage();
        $error->resultado = false;
        echo json_encode($error);
        error_log($error->mensaje);
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
