

<?php
    $puntero = fopen("errores.log", "a" );

    function cargarError( $error ){
        $nuevoError = date( 'Y-m-d H:i:s' ) .$error; 
        fwrite( $puntero, $nuevoError );
    }

?>