<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles.css">
    <title>php2 | Ajax</title>
</head>
<body>

<h2>Encriptado  Con Ajax</h2>

    <div class="dContenedor">
        <div class="d1">
            <input type="text" id="texto" name="texto">
        </div>
        <div class="d2">
            <input type="button" id="Encriptar" value="Encriptar">    
        </div>
        <div id="resultado" class="d3">
        
        </div>
        <div class="d3">
            <h3 class='s4'>Estado  :  </h3>
            <p id="estado" ></p>
        </div>
    </div>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="index.js"></script>
</body>
</html>