<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP | Basico</title>
</head>
<body>
    <header>
        <h1>Ejercicios Basico De PHP</h1>
    </header>

    <main>
        
        <hr>

        <div>
            <h2>* Todo lo escrito fuera de las marcas de php es entregado en la respuesta http sin pasar por el procesador php</h2>
        </div>
                
        <hr>

        <div>
            <?php
                echo "<h2>* ¡ Todo texto html <span style = 'color:red' > entregado por el procesador php </span> va usando la sentencia <span style='color:red'>echo</span>!</h2>";
            ?>
        </div>

        <hr>

        <div>
            <?php
                $soyUnaVariable= "valor1";
                echo "* Sin usar concatenador \$soyUnaVariable : valor1 <br>"; 
                echo "* Usando el concatenador  : " . $soyUnaVariable ;
            ?>
        </div>

        <hr>

        <div>
            <?php 
                define( "constVerdadero", true );
                define( "constFalso", false );
                echo "* Variable constante  Verdadera :  " . constVerdadero   . "<br>";
                echo "* Variable constante  Falsa : " .constFalso ."<span style='color:red; font-size: x-large' >(NO MUESTRA EL CERO LA FALSA)</span>";
            ?>
        </div>

        <hr>

        <div>
            <?php 
                define( "otraconstVerdadero", true );
                define( "constCadena", "Hola Mundo" );
                echo "* La  Constante  <span style='color:red; font-size: x-large' >\constanteVerdadera</span>  es de tipo : "  . gettype(otraconstVerdadero) . "<br>";
                echo "* La  Constante  <span style='color:red; font-size: x-large' >\constCadena</span>  es de tipo : "  . gettype(constCadena);
            ?>
        </div>

        <hr>

        <div>
            <?php
                $listIdiomas = [];
                $listIdiomas = [ ["español", "bienvenido"], ["ingles", "welcome"], ["frances", "bienvenue"], ["aleman", "willcommen"] ];
                $tamanio = count( $listIdiomas);
                echo "<h2 style='color:red;'> Lista de Idiomas  \$listIdiomas :</h2>";
                for ($i=0; $i < $tamanio ; $i++) { 
                    $idioma = $listIdiomas[$i][0];
                    $palabra = $listIdiomas[$i][1];
                    echo "<p><span style='color:green; font-size: x-large' > " .$i ." - ".$idioma ." : " .$palabra ."</span></p>";
                }
            ?>
        </div>

        <hr>
        <div>
            <?php
                $diccionarioIdiomas = [ 
                    "hola"        =>  [ "español" => "hola", "ingles" =>"hello", "frances" => "salut", "aleman" => "hallo" ],
                    "bicicleta"  =>  [ "español" => "bicicleta", "ingles" => "bike", "frances" => "velo", "bicicleta" =>"Fahrrad" ],
                    "auto"        =>  [ "español" => "auto", "ingles" =>"car", "frances" => "voiture", "auto" => "auto" ],
                ]; 
                
                echo "<table style='border-collapse: collapse;' ><thead><tr>";

                foreach( $diccionarioIdiomas['hola'] as $idioma => $palabra){
                    echo "<th style='border: solid; padding:1em'>$idioma</th>";
                }
                
                echo "</tr></thead>";
                echo "<tbody>";

                foreach( $diccionarioIdiomas as $palabra => $listaDeTraduccion ){
                    echo "<tr>";
                    foreach( $listaDeTraduccion as $idioma => $palabraTraducida ){
                        echo "<td style='border: solid; padding:2em'>" . $diccionarioIdiomas[ $palabra ][ $idioma]."</td>";
                    }
                    echo "</tr>";
                }

                echo "</tbody></table>";
            ?>

        </div>

        <hr>
        
        <div>
            <?php
                $num1 = 2;
                $num2 = 3;
                echo "\$num1 = 2" . "<br>";
                echo "\$num2 = 3". "<br>";
                echo "Suma de $num1 + $num2 es : " . $num1 + $num2 .  "<br>";
                echo "Resta de $num1 + $num2 es : " . $num1 - $num2 .  "<br>";
                echo "Multiplicacion de $num1 + $num2 es : " . $num1 * $num2 .  "<br>";
                echo "division de $num1 + $num2 es : " . $num1 / $num2 .  "<br>";
                echo "Resto de $num1 + $num2 es : " . $num1 % $num2 .  "<br>";
            ?>
        </div>

    </main>
    
    <hr>

    <footer>
        <h2>Pie De Pagina</h2>
    </footer>

    
</body>
</html>





