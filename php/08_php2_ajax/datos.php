<?php

    if( isset( $_POST['texto'] ) && $_POST['texto'] != "" ) {

        sleep(2);
        $texto = $_POST['texto'];
        $claveEncriptadaMd5 = md5($texto);
        $claveEncriptadaSha1 = sha1($texto);
        echo "<span class='s4'>Mensaje : </span> " . "<p>$texto</p>";
        echo "<span class='s4'>md5 : </span> " . "<p>$claveEncriptadaMd5</p>";
        echo "<span class='s4'>sha1 : </span> " . "<p>$claveEncriptadaSha1</p>";
    };

    if($_POST['texto'] == "" ){
        echo "<span class='s4'>Mensaje : </span> " . "<p>NO SE ENVIO NINGUN DATO AL SERVIDOR..!</p>";
    }
?>