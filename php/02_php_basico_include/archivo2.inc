

<hr><br>
        <div>
            <h2>TABLA ENVIADA DESDE EL archivo2.inc</h2>
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

            echo "<p>" ." Longitud del diccionario idiomas : " . count($diccionarioIdiomas ) . "</p>"

            ?>

        </div>