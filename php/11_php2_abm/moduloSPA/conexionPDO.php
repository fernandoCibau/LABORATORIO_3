<?php
    $host           = 'localhost';
    $username  = 'root';
    $dbname     = 'servicios técnicos';
    $password   = '';

    // $host           = 'localhost';
    // $username  = 'id22183063_serviciostecnicos';
    // $dbname     = 'id22183063_serviciostecnicos';
    // $password   = 'MArado10!';

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

