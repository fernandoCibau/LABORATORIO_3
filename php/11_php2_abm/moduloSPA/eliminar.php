<?php
ini_set('error_log', 'C:\xampp\htdocs\laboratorio3\php\11_php2_abm\errores.log');
date_default_timezone_set('America/Argentina/Buenos_Aires');
include "conexionPDO.php";

try {
    if (isset($_POST["legajo"])) {
        $legajo = $_POST["legajo"]; // Obtener el legajo desde el formulario

        $sql = "DELETE FROM técnicos WHERE legajo = :legajoParam";

        $stmt = $conexion->prepare($sql); // Preparar la consulta

        $stmt->bindParam(':legajoParam', $legajo);

        $resultado = $stmt->execute();


        if ($resultado) {
            echo "Registro eliminado correctamente";
        } else {
            echo "Error al eliminar el registro: " . $stmt->errorInfo()[2];
        }
    } else {
        echo "ERROR, FALTA EL LEGAJO EN LA SOLICITUD...";
    }

    $conexion= null;
} catch (PDOException $e) {
    echo "Error en la consulta: " . $e->getMessage();
    $mensaje = "ERROR, ELIMINAR.PHP LINEA 33 : " . $e->getMessage();
    error_log($mensaje);
}
?>
