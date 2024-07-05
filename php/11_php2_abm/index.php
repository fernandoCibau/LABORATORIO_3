



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>php 2 | ABM Sesion</title>
</head>
<body>
    <header>
        <h1>Inicio Sesion</h1>

    </header>

    <main>

        <section name="secFromulario" class="seccionForm" id="seccionForm">
            <div class="contenedorForm">

                <form  method="post" id="formSesion"  >
                    
                    <div class="contenedores">
                        <label for="usuario">Usuario</label>
                        <input type="text" name="usuario" id="usuario">
                    </div>
                    <div class="contenedores">
                        <label for="contrasenia">Contraseña</label>
                        <input type="text" name="contrasenia" id="contrasenia">
                    </div>
                    
                    <div class="contenedores">
                        <input type="submit" value="Iniciar Sesion" id="btnForm">
                    </div>
                    <div class="contenedores">
                        <input type="button" value="Nuevo Usuario" id="btnNuevoUsuario" >
                    </div>
                </form>
            </div>
        </section>

        <section name="modal"  class="seccionModal " id="seccionModal" >
            
            <div class="modalOff"  id="contenedorModal">    
                
                <div class="contenedorEncabezadoModal">

                    <div class="contenedorH2">
                        <h2>Respuesta  De Autenticacion</h2>
                    </div>
                    
                    <div class="contenedorX">
                        <button type="button" class="x" id="btnX">X</button>
                    </div>
                </div>
                
                <div class="contenedorRespuesta">
                    <div class="respuesta" id="respuesta"  > </div>
                    <div class="btnRespuesta" id="btnRespuesta" > </div>
                </div>

            </div>
        </section>
    </main>
        
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="./index.js"></script>
    <footer>
    <h2>Datos del alumno</h2>
            <ul>
                <li><strong>Nombre y Apellido :</strong> Fernando Cibau</li>
                <li><strong>Legajo :</strong> 28846</li>
                <li><strong>Mail :</strong> fcibau846@alumnos.frh.utn.edu.ar</li>
                <li><strong>GitHub : </strong><a href="https://github.com/fernandoCibau" target="_blank">https://github.com/fernandoCibau</a></li>
            </ul>
    </footer>
</body>
</html>
