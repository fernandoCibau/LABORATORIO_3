
<?php
    if( isset( $_POST['jugJson'] ) && $_POST['jugJson'] != "" ) {

        $jug = json_decode($_POST['jugJson'], true); // SE LE PONE TRUE PARA QUE DEVUELVA UN ARRAY ASOCIATIVO
        sleep(2);
        if( $jug['nombre'] != "" && $jug['fecNac'] != ""){
            $texto = $_POST['jugJson'];
            // $claveEncriptadaMd5 = md5($texto);
            // $claveEncriptadaSha1 = sha1($texto);
            echo "<span class='s4'>Mensaje : </span> " . "<p>$texto</p>";
            // echo "<span class='s4'>md5 : </span> " . "<p>$claveEncriptadaMd5</p>";
            // echo "<span class='s4'>sha1 : </span> " . "<p>$claveEncriptadaSha1</p>";
        }


    }
    if( !$_POST['jugJson']  && $_POST['jugJson'] == ""  ||   $jug['nombre'] == "" ||  $jug['fecNac'] == "") {
        echo "<span class='s4'>Mensaje : </span> " . "<p>NO SE ENVIARON LOS DATOS COMPLETOS</p>";
    }
?>