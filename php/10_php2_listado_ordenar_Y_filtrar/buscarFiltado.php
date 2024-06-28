


<?php

    include "conexionPDO.php";   

    if( isset( $_GET[] )  ){

        $sql = "SELECT * FROM técnicos WHERE id especialidad = 'CLIDOM' ";
        $stmt = $conexion->prepare($sql); // Preparar la consulta
        $stmt->execute();
        
        $resultado = $stmt->fetchAll( PDO::FETCH_ASSOC ); //Devuelve como lista asociativa

        if ( $resultado ) {

            $objTodos = [];
            
            foreach ( $resultado as $tecnico) {
                
                $nuevoTecnico = new stdClass();  //creo un objeto 
            
                $nuevoTecnico->legajo              =  $tecnico['legajo'] ;
                $nuevoTecnico->nombre           =  $tecnico['nombre'];
                $nuevoTecnico->apellido           =  $tecnico['apellido'];
                $nuevoTecnico->especialidad    =  $tecnico['especialidad'];
                // $nuevoTecnico->foto                  =     $tecnico['foto'];
                $nuevoTecnico->fechaIngreso    =  $tecnico['fechaIngreso'];
                $nuevoTecnico->descripcion       =      $tecnico['descripcion'];
                $nuevoTecnico->idEspecialidad  =  $tecnico['id especialidad'];
                array_push( $objTodos, $nuevoTecnico );
            }
            
            echo  json_encode( $objTodos);
            $conexion = null;
        }
        else {
                echo "No se encontraron registros en la tabla 'TECNICOS'.";
        } 
    }
    else{
        echo "No se encontraron registros en la table, PARA ESE REQUERIMIENTO TECNICO...";
    }
?>