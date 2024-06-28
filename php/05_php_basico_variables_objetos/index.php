<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>php | basico variables objetos</title>
</head>
<body>
    <header>
        <h1>Variables Tipo Objeto En PHP (Objeto Renglon De Pedido)</h1>
    </header>

    <main   >
        <?php
            $arregloProductos = [];
            $producto   = new stdclass;
            $producto2 = new stdclass;

            $producto->codigoArticulo = "12001";
            $producto->descripcion = "chocolate 70%";
            $producto->precio = 150;
            $producto->cantidad = 4;
            
            var_dump($producto);

            echo "<p class='pObj';>Variable Objeto :  \$producto </p>";
            foreach( $producto as $key => $value ){
                echo "<p>$key : $value</p>";
            }


            echo "<p class='pObj';> Tipo De Variable : ". gettype($producto) ."</p>";

            $producto2->codigoArticulo = "15023";
            $producto2->descripcion = "alfajor de chocolate";
            $producto2->precio = 200;
            $producto2->cantidad = 10;

            echo "<p> Declaracion De Arreglo : </p>";

            echo "<p class='pObj';>\$arregloProductos</p>";
            array_push($arregloProductos, $producto);
            array_push($arregloProductos, $producto2);
        ?>

        <hr>

        <p>Tabula  <span class='pObj';>$arregloProductos.</span> Recorrer el arreglo de renglones y tabularlos con htm </p>

        <table>
            <thead>
                <tr>
                    <?php
                        foreach( $arregloProductos[ 0 ] as $key => $value ){                          
                            echo "<th class='th'; >$key</th>";
                        }
                    ?>
                </tr>
            </thead>
            <tbody>
                    <?php
                        for ($i=0; $i < count( $arregloProductos) ; $i++) { 
                            echo "<tr>";
                            foreach( $arregloProductos[ $i ] as $key => $value ){
                                echo "<td class='th';>$value</td>";
                            }
                            echo "</tr>";
                        }
                    ?>
            </tbody>
        </table>
        
        <p>Cantidad De Renglones <?php echo count($arregloProductos) ?></p>

        <hr>

        <p>Produccion de un objeto <span class='pObj'><?php echo "\$renglonesProducto" ?></span> Con dos Atributos array renglones y cantidad de renglones</p>
                            
        <?php
            $objRenglonesProducto = new stdclass;
            $objRenglonesProducto -> arregloDeProductos = $arregloProductos;
            $objRenglonesProducto -> cantidad = count( $arregloProductos);

            echo "<p>Cantidad de renglones : " . count($objRenglonesProducto -> arregloDeProductos) ."</p>";
        ?>
        
        <hr>

        <p>Produccion de un JSON jsonRenglones :</p>

        <p class='pp'><?php 
            $objJson = json_encode( $objRenglonesProducto );
            echo $objJson;
        ?></p>
    </main>
</body>
</html>