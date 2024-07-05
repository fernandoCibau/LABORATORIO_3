

<?php

function cargarImagen($imagen, $legajo) {
        include "conexionPDO.php";
        try {
            $sql = "UPDATE técnicos SET foto = :foto WHERE legajo = :legajoParam";
        
            $stmt = $conexion->prepare($sql);
        
            $stmt->bindParam(':foto', $imagen);
            $stmt->bindParam(':legajoParam', $legajo);
        
            $resultado = $stmt->execute();
        
            if ($resultado) {
                echo "Archivo actualizado correctamente";
            } else {
                echo "Error al actualizar el registro: " . $stmt->errorInfo()[2];
            }
        } catch (PDOException $e) {
            echo "Error en la consulta: " . $e->getMessage();
        }

        $conexion = null;
    }
?>
