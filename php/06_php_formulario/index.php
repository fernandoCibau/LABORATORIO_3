<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>php | formulario</title>
</head>
<body>

    <form method="POST" action="">
        <input type="text" name="nombre" placeholder="Nombre">
        <input type="text" name="correo" placeholder="Correo">
        <input type="submit" value="Enviar">
    </form>

    
        
    <?php
        $nombre="";
        $correo="";
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $nombre = $_POST["nombre"];
            $correo = $_POST["correo"];
            // realizar cualquier acción con el valor capturado, como guardarlo en una base de datos o mostrarlo en pantalla.
        }
    ?>
    <p>Nombre ingresado: <?php echo $nombre; ?></p>
    <p>Correo ingresado: <?php echo $correo; ?></p>


    
    </body>
</html>