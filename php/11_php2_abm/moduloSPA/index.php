<?php
    session_start();
    if ( !isset(  $_SESSION["usuario"]["sesionId"] ) ){
        header('Location: ../index.php');
        exit; 
    }
    echo "Nombre de sesión: " . $_SESSION["usuario"]["usuario"] . " / ";
    echo "ID de sesión: " . $_SESSION["usuario"]["sesionId"] ;
?>


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
        <h1>Servicio Tecnico F.A.C</h1>
        <div class="contInputHd">
            <input type="text"  class="btnHdT inpHdt" placeholder="Codigo Orden"  id="codOrden" disabled >
            <input type="button" value="Cargar Datos" class="btnHd" id="btnCargarDatos">
            <input type="button" value="Vaciar" class="btnHd" id="vaciar">
            <input type="button" value="Limpiar Filtro" class="btnHd" id="btnLimpiarF">
            <input type="button" value="Alta Registro" class="btnHd" id="btnAlta" >     <!--  FALTA CAMBIAR EL ID O DEJARLO ASI -->     
            <input type="button" value="Cerrar Sesion" class="btnHd" id="btnCerrarSesion" > 
        </div>
    </header>
        
    <main>

        <section id="secArticulos">
            <table >
                <thead >
                    <tr>
                        <th class="th" id="thLegajo"  name="asf">legajo</th>
                        <th class="th" id="thNombre" >nombre</th>
                        <th class="th" id="thApellido" >apellido</th>
                        <th class="th" id="thEspecialidad" >especialidad</th>
                        <th class="th" id="thFechaIngreso" >fecha Ingreso</th>
                        <th class="th" id="thDescripcion" >descripcion</th>
                        <th class="th" id="thIdEspecialidad" >id Especialidad</th>
                        <th class="thBtn" id="thPdf" >pdf</th>
                        <th class="thBtn" id="thModificar" >modificar</th>
                        <th class="thBtn" id="thBorrar" >borrar</th>
                    </tr>
                </thead>
                <thead >
                    <tr class="tr">
                        <th class="th" id="thLegajo"  name="asf"><select name="" id=""></select></th>
                        <th class="th" id="thNombre" ><select name="" id=""></select></th>
                        <th class="th" id="thApellido" ><select name="" id=""></select></th>
                        <th class="th" id="thEspecialidad" ><select name="especialidad" id="especialidad"></select></th>
                        <th class="th" id="thFechaIngreso" ><input type="date" name="" id="fechaIngresoTh"></th>
                        <th class="th" id="thDescripcion" ><input type="text" class="select" id="descripcion" placeholder="ORDEN DESCRIPCION"></th>
                        <th class="th" id="thIdEspecialidad" ><select name="especialidad" id="idEspecialidad" ></select></th>
                        <th class="thBtn" id="thPdf" ></th>
                        <th class="thBtn" id="thModificar" ></th>
                        <th class="thBtn" id="thBorrar" ></th>
                        
                    </tr>
                </thead>
                <tbody >

                </tbody>
            </table>
        </section>

        
        <section name="modal"  class="seccionModal " id="seccionModal" >

            <div class="modalOff"  id="contenedorModal">    

                <div class="contenedorEncabezadoModal">
                    <div class="contenedorH2">
                        <h2>Datos del Tecnico</h2>
                    </div>

                    <div class="contenedorX">
                        <button type="button" class="x" id="btnX">X</button>
                    </div>
                </div>

                <form method="post"  id="formModal"  enctype="multipart/form-data">

                    <div class="contenedores">
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" id="nombreAlta">
                    </div>

                    <div class="contenedores">
                        <label for="apellido">Apellido</label>
                        <input type="text" name="apellido" id="apellidoAlta">
                    </div>

                    <div class="contenedores">
                        <label for="legajo">Legajo</label>
                        <input type="text" name="legajo" id="legajoAlta">
                    </div>

                    <div class="contenedores">
                        <label for="fecNac">Fecha De Nacimiento</label>
                        <input type="date" name="fecNac" id="fecNacAlta">
                    </div>

                    <div class="contenedores">
                        <label for="especialidad">Especialidad</label>
                        <input type="text" name="especialidad" id="especialidadAlta">
                    </div>

                    <div class="contenedores">
                        <label for="idEspecialidad">Id Especialidad</label>
                        <select name="idEspecialidad" id="idEspecialidadAlta"></select>
                    </div>

                    <div class="contenedores">
                        <label for="descripcion">Descripcion</label>
                        <input type="text" name="descripcion" id="descripcionAlta">
                    </div>

                    <div class="contenedores">
                        <label for="pdf">Archivo</label>
                        <input type="file" name="archivo" id="archivoAlta">
                    </div>
            
                    <div class="contenedores">
                        <input type="submit" id="btnEnviarAlta" value="Enviar Alta">
                    </div>
                    
                </form>

                <div id="fotoPdf"  > </div>

            
        
            </div>
        </section>
    </main>

    <footer>
        <h2>Datos del alumno</h2>
        <ul>
            <li><strong>Nombre y Apellido :</strong> Fernando Cibau</li>
            <li><strong>Legajo :</strong> 28846</li>
            <li><strong>Mail :</strong> fcibau846@alumnos.frh.utn.edu.ar</li>
            <li><strong>GitHub : </strong><a href="https://github.com/fernandoCibau" target="_blank">https://github.com/fernandoCibau</a></li>
        </ul>
    </footer>
    
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="./index.js"></script>
</body>
</html>