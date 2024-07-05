

<?php
    ini_set('error_log', 'C:\xampp\htdocs\laboratorio3\php\11_php2_abm\errores.log');
    date_default_timezone_set('America/Argentina/Buenos_Aires');
    include "conexionPDO.php";
    include "cargarJpeg.php";
    
    try {
        if( isset( $_POST['legajo'] ) ){

            //ARCHIVO A PARTE DE CARGA DE IMAGEN
            if( isset($_FILES['imagen'])  ){
                $imagen =  base64_encode( file_get_contents($_FILES['imagen']['tmp_name'] ) ) ;
                cargarImagen( $imagen, $_POST['legajo' ] );
            }

            // Consulta SQL con sentencia preparada
            $sql = "UPDATE técnicos SET 
            -- legajo = :legajo,
            nombre = :nombre,
            apellido = :apellido,
            especialidad = :especialidad,
            fechaIngreso = :fechaIngreso,
            descripcion = :descripcion,
            idEspecialidad = :idEspecialidad
            WHERE legajo = :legajoParam";

            $stmt = $conexion->prepare($sql);

            // $stmt->bindParam(':legajo', $objTecnico->legajo);
            $stmt->bindParam(':nombre', $_POST[ 'nombre' ]);
            $stmt->bindParam(':apellido',  $_POST[ 'apellido' ]);
            $stmt->bindParam(':especialidad',  $_POST[ 'especialidad' ]);
            
            $stmt->bindParam(':fechaIngreso',  $_POST[ 'fechaIngreso' ] );
            $stmt->bindParam(':descripcion',  $_POST[ 'descripcion' ] );
            $stmt->bindParam(':idEspecialidad',  $_POST[ 'idEspecialidad' ]);
            $stmt->bindParam(':legajoParam', $_POST[ 'legajo' ] );
            
            $resultado = $stmt->execute();
            
            $conexion = null;
            if ($resultado) {
                echo "Registro actualizado correctamente";
            } else {
                echo "Error al actualizar el registro: " . $stmt->errorInfo()[2];
            }
        }else{
            echo "ERROR, FALTA EL LEGAJO EN LA SOLICITUD...";
        }
    }
    catch (PDOException $e) {
        echo "Error en la consulta: " . $e->getMessage();
        // Ejemplo de registro de un mensaje de error

        $mensaje = " ERROR, MODIFICAR.PHP LINEA 59 : " . $e->getMessage() ;
        error_log($mensaje);

    }

?>
