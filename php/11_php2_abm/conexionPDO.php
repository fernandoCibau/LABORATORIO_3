<?php
    $host           = 'localhost';
    $username  = 'root';
    $dbname     = 'servicios técnicos';
    $password   = '';

    try{
        $conexion = new PDO( "mysql:host=$host; dbname=$dbname", $username, $password );
        $conexion->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
        
        // echo "CONEXION EXITOSA...!";
    }
    catch(PDOExecption $e ){
        echo "LA CONEXION A FALLADO : " . $e->getMessage();
        // include "cargaErrores.php";
        // $cargarError( "lghkjgh" );
    }
?>

