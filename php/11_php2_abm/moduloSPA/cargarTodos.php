

<?php

    include "conexionPDO.php";   

    if( isset( $_GET["orden"] )  ){
        

        if( $_GET["orden"] == "idEspecialidad" ){
            $sql = "SELECT * FROM técnicos WHERE idEspecialidad = :letra";
            $stmt = $conexion->prepare($sql);
            $stmt->bindParam(':letra', $_GET["letra"] ); // Asignar el valor al parámetro
        }
    
        if( $_GET["orden"] == "descripcion" ){
            $letras = $_GET['letra'];
            $sql = "SELECT * FROM técnicos  WHERE descripcion  LIKE  '$letras%'  ";
            $stmt = $conexion->prepare($sql);
        }


        // //----------------------------------------------------------------------------

        if( $_GET["orden"] == "legajo" ){
            $sql = "SELECT * FROM técnicos ORDER BY legajo ";
            $stmt = $conexion->prepare($sql);
        }
        
        if( $_GET["orden"] == "nombre" ){
            $sql = "SELECT * FROM técnicos ORDER BY nombre ";
            $stmt = $conexion->prepare($sql);
        }

        if( $_GET["orden"] == "apellido" ){
            $sql = "SELECT * FROM técnicos ORDER BY apellido ";
            $stmt = $conexion->prepare($sql);
        }

        if( $_GET["orden"] == "especialidad" ){
            $sql = "SELECT * FROM técnicos ORDER BY especialidad ";
            $stmt = $conexion->prepare($sql);
        }

        if( $_GET["orden"] == "fechaIngreso" ){
            $sql = "SELECT * FROM técnicos ORDER BY fechaIngreso ";
            $stmt = $conexion->prepare($sql);
        }

        // if( $_GET["orden"] == "idEspecialidad" && $_GET["letra"] == "ordenar" ){
        //     $sql = "SELECT * FROM técnicos ORDER BY idEspecialidad ";
        //     $stmt = $conexion->prepare($sql);
        // }

        if( $_GET["orden"] == "TODOS" ){
            $sql = "SELECT * FROM técnicos";
            $stmt = $conexion->prepare($sql);
        }

        // Ejecutar la consulta y procesar los resultados
        $stmt->execute();
        $resultado = $stmt->fetchAll(PDO::FETCH_ASSOC);
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
                $nuevoTecnico->binario               =     $tecnico['foto'] ;  //base64_encode( $tecnico['foto'] );
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