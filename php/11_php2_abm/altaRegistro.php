
<?php
    include "conexionPDO.php";

    if( isset( $_POST["alta"] ) ){

        $objTecnico = json_decode( $_POST["alta"] );
        
        $sql = "INSERT INTO técnicos (legajo, nombre, apellido, especialidad, foto, fechaIngreso, descripcion, idEspecialidad ) 
                                            VALUES ( '$objTecnico->legajo',  '$objTecnico->nombre', '$objTecnico->apellido', '$objTecnico->especialidad', '$objTecnico->archivo', '$objTecnico->fecNac', '$objTecnico->descripcion', '$objTecnico->idEspecialidad' ) " ; 
    
        $stmt = $conexion->prepare($sql); // Preparar la consulta
   
        $resultado =  $stmt->execute();
        
        if ($resultado){
            echo "SE CARGO CON EXITO...!";
        }
        else{
            echo "ERROR, NO SE PUDO CARGAR ";
        }
    }


?> 