
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

            $sql = " INSERT INTO técnicos (legajo, nombre, apellido, especialidad, fechaIngreso, descripcion, idEspecialidad ) 
                                                VALUES (:legajo, :nombre, :apellido, :especialidad, :fechaIngreso, :descripcion, :idEspecialidad)";
        
            $stmt = $conexion->prepare($sql); // Preparar la consulta

                // Asignar valores a los parámetro            
            $stmt->bindParam(':legajo', $_POST[ 'legajo' ] );
            $stmt->bindParam(':nombre', $_POST[ 'nombre' ]);
            $stmt->bindParam(':apellido',  $_POST[ 'apellido' ]);
            $stmt->bindParam(':especialidad',  $_POST[ 'especialidad' ]);
            $stmt->bindParam(':fechaIngreso',  $_POST[ 'fechaIngreso' ] );
            $stmt->bindParam(':descripcion',  $_POST[ 'descripcion' ] );
            $stmt->bindParam(':idEspecialidad',  $_POST[ 'idEspecialidad' ]);


            $resultado =  $stmt->execute();
            
            $conexion = null;
            if ($resultado){
                echo "REGISTRO INSERTADO CORRECTAMENTE";
            }
            else{   
                echo "ERROR AL INSERTAR EL REGISTRO... ";
            }
        }
    }
    catch (PDOException $e) {
        echo "Error en la consulta: " . $e->getMessage();
        // Registro de un mensaje de error
        $mensaje = " ERROR, ALTAREGISTRO.PHP LINEA 43 : " . $e->getMessage() ;

        error_log($mensaje); // El tercer argumento (3) indica que se debe 

    }

?> 