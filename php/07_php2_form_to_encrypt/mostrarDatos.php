<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>php2 | Infor del formulario</title>
</head>
<body>
    <h1>Informacion del formulario</h1>
    <?php
        $clave = "";
        $claveEncriptadaMd5 ="";
        $claveEncriptadaSha1 ="";
        if( isset($_POST["clave"])){
            $clave = $_POST["clave"];
            $claveEncriptadaMd5 = md5($clave);

            $claveEncriptadaSha1 = sha1($clave);
        }
    ?>
    <div  style='border:solid;' >
        <p><span style='color:red; font-weight: bold;    ' >Clave Encriptada en MD5 (128 bis 0 16 pares hexadecimal)</p>
        <p><span style='color:red; font-weight: bold;    ' >Clave Ingresada : </span> <?php echo $clave?></p>
        <p><span style='color:red; font-weight: bold;    '>Clave  Encriptada : </span> <?php echo $claveEncriptadaMd5?></p>
    </div>
    <div style='border:solid;' >
        <p><span style='color:red; font-weight: bold;    ' >Clave Encriptada en SHA1 (160 bis 0 20 pares hexadecimal)</p>
        <p><span style='color:red; font-weight: bold;    ' >Clave Ingresada : </span> <?php echo $clave?></p>
        <p><span style='color:red; font-weight: bold;    '>Clave  Encriptada : </span> <?php echo $claveEncriptadaSha1?></p>
    </div>
</body>
</html>  