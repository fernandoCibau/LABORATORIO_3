<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>php | basico variables objetos</title>
</head>
<body>
    <header>
        <h1>Variables Tipo Objeto En PHP (Objeto Renglon De Pedido)</h1>
    </header>

    <main>
        <?php
            $objPedido = new stdclass;

            $objPedido->codigoArticulo = "cp001";
            $objPedido->descripcion = "chocolate 70%";
            $objPedido->precio = 150;
            $objPedido->cantidad = 4;
            
            var_dump($objPedido);

            
            echo "<p> \$objPedido </p>";

            echo "<table >";
            echo "<tbody>";
            
            foreach ($objPedido as $key => $value) {
                echo "<tr >";
                echo "<td style='border: solid ;'>$key</td>";
                echo "<td style='border: solid ;'>$value</td>";
                echo "</tr>";
            }
            echo "</tbody>";
            echo"</table>";


        
        ?>
    </main>
</body>
</html>