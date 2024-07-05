<?php    
    session_start();

    include "conexionPDO.php";  
    ini_set('error_log', 'C:\xampp\htdocs\laboratorio3\php\11_php2_abm\moduloSPA\errores.log');
    date_default_timezone_set('America/Argentina/Buenos_Aires');

    try {
        $usuario = $_SESSION['usuario']['usuario'];  
        $contador = $_SESSION['usuario']['contador'];

        // Consulta SQL con sentencia preparada
        $sql = "UPDATE usuarios SET contador = :contador WHERE usuario = :usuario";

        $stmt = $conexion->prepare($sql);

        $stmt->bindParam(':contador', $contador);
        $stmt->bindParam(':usuario', $usuario);

        $resultado = $stmt->execute();

        if ($resultado) {
            $mensaje = "<p>Datos de sesión guardados correctamente</p>";
            session_destroy();
            header( "Location: finSesion/index.php?mensaje=" . $mensaje);
            exit;
        } else {
            echo "Error al guardar los datos de sesión: " . $stmt->errorInfo()[2];
        }
        
        $conexion = null;

        // session_unset();
        // setcookie();

    } catch (PDOException $e) {
        echo "Error en la consulta: " . $e->getMessage();
        $mensaje = "ERROR, CERRAR SESION.PHP LINEA 38 : " . $e->getMessage();
        error_log($mensaje);
    }
?>



