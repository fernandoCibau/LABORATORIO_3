

<?php
    require "conexionPDO.php";

    
    if( isset( $_GET['especialidad'])){
        $sql = "SELECT * FROM especialidad";
        $stmt = $conexion->prepare($sql); // Preparar la consulta
        $stmt->execute();

        $resultado = $stmt->fetchAll( PDO::FETCH_ASSOC ); //Devuelve como lista asociativa
    
        if( $resultado ){

            $listaEspecialidad = [];

            foreach( $resultado as $especialidad ){
                $datos = new stdClass();
                $datos->idEspecialidad = $especialidad['idEspecialidad'];
                $datos->especialidad    = $especialidad['especialidad'];

                array_push( $listaEspecialidad, $datos );
            }

            echo  json_encode( $listaEspecialidad );


            $conexion = null;
        }
        else{
            echo "No se encontraron registros en la table, PARA ESE REQUERIMIENTO...";
        }

    }
    else{
        echo "No se encontraron registros en la table, PARA ESE REQUERIMIENTO ESPECIALIDAD...";
    }
    

?>