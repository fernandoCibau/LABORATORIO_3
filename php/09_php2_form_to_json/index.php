<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Especiales | Ventana Modal</title>
</head>
<body>
    <header>
        <h1>Ventana Modal</h1>
        <div class="contInputHd">
            <input type="button" value="Modal" id="btnModal" >
        </disv>
    </header>

    <main>


        
<section name="modal"  class="seccionModal" >
    <div class="modalOff"  id="contenedorModal">
        <div class="contenedorEncabezadoModal">
            <div class="contenedorH2">
                <h2>Carga De Jugador</h2>
            </div>
            <div class="contenedorX">
                <button type="button" class="x" id="btnX">X</button>
            </div>
        </div>
        <form action="" method="get" id="formFichaje">
            <div class="contenedores">
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre">
            </div>
            <div class="contenedores">
                <label for="fecNac">Fecha De Nacimiento</label>
                <input type="date" name="fecNac" id="fecNac">
            </div>
            <div class="contenedores">
                <label for="posicion">Posicion Del Jugador</label>
                <select name="posicion" id="selectPosicion"></select>
            </div>
            <div class="contenedores">
                <label for="numCamiseta">Numeros De Camisetas</label>
                <select name="numCamiseta"name="numCamiseta" id="numCamiseta"></select>
            </div>
    
            <div class="contenedores">
                <input type="button" id="btnAgregar" value="Agregar">
            </div>
        </form>
        <div id="resultado">

        </div>
    </div>

    </section>

    </main>

    <footer>
        <h2>Pie De Pagina</h2>
    </footer>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="index.js"></script>
</body>
</html>