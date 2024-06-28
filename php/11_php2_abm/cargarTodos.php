

<?php

    include "conexionPDO.php";   

    if( isset( $_GET["orden"] )  ){

        if( $_GET["orden"] == "TODOS" ){
            $sql = "SELECT * FROM técnicos";
        }
        
        if( $_GET["orden"] == "CLIDOM" ){
            $sql = "SELECT * FROM técnicos WHERE idEspecialidad = 'CLIDOM'";
        }

        if( $_GET["orden"] == "ELEDOM" ){
            $sql = "SELECT * FROM técnicos WHERE idEspecialidad = 'ELEDOM'";
        }

        //----------------------------------------------------------------------------

        if( $_GET["orden"] == "legajo" ){
            $sql = "SELECT * FROM técnicos ORDER BY legajo ";
        }
        
        if( $_GET["orden"] == "nombre" ){
            $sql = "SELECT * FROM técnicos ORDER BY nombre ";
        }

        if( $_GET["orden"] == "apellido" ){
            $sql = "SELECT * FROM técnicos ORDER BY apellido ";
        }

        if( $_GET["orden"] == "especialidad" ){
            $sql = "SELECT * FROM técnicos ORDER BY especialidad ";
        }

        if( $_GET["orden"] == "fechaIngreso" ){
            $sql = "SELECT * FROM técnicos ORDER BY fechaIngreso ";
        }
            
        if( $_GET["orden"] == "descripcion" ){
            $letras = $_GET['letra'];
            $sql = "SELECT * FROM técnicos  WHERE descripcion  LIKE  '$letras%'  ";
        }

        if( $_GET["orden"] == "idEspecialidad" ){
            $sql = "SELECT * FROM técnicos ORDER BY idEspecialidad ";
        }
        
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
                $nuevoTecnico->fechaIngreso    =  $tecnico['fechaIngreso'];
                $nuevoTecnico->descripcion       =      $tecnico['descripcion'];
                $nuevoTecnico->idEspecialidad  =  $tecnico['idEspecialidad'];
                $nuevoTecnico->binario               =    base64_encode( $tecnico['foto'] );
                array_push( $objTodos, $nuevoTecnico );
            }
            
            echo  json_encode( $objTodos);
            $conexion = null;
        }
        else {
                $error = new stdClass();
                $error->mensaje = "NO SE ENCONTRO REGISTO EN LA  TABLA  TECNICOS  CON LOS VALORES INGRESADOS...!";
                echo json_encode( $error);
        } 
    }
    else{
        $error = new stdClass();
        $error->mensaje =  "NO SE ENCONTRO REGISTO EN LA  TABLA   PARA ESE REQUERIMIENTO TECNICO...";
        echo json_encode( $error);
    }
?>