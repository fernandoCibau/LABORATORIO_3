<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>php | basico variables del servidor</title>
</head>
<body>
        <header>
            <h1>php basico</h1>
        </header>

        <main>

        <section>
            <div>
                <?php

                    echo "<h2>Variables De Servidor</h2>";
                    
                    echo "<table >";

                        echo "<tbody>";

                            echo "<tr>";
                            echo "<td>SERVER_ADDR</td>";
                            echo "<td>" . $_SERVER[ "SERVER_ADDR"] . "</td>";
                            echo "</tr>";
                            echo "<tr>";
                            echo "<td>SERVER_PORT</td>";
                            echo "<td>" . $_SERVER[ "SERVER_PORT"] . "</td>";
                            echo "</tr>";
                            echo "<tr>";
                            echo "<td>SERVER_NAME</td>";
                            echo "<td>" . $_SERVER[ "SERVER_NAME"] . "</td>";
                            echo "</tr>";
                            echo "<tr>";
                            echo "<td>DOCUMENT_ROOT</td>";
                            echo "<td>" . $_SERVER[ "DOCUMENT_ROOT"]  . "</td>";
                            echo "</tr>";

                        echo "</tbody>";
        
                        echo"</table>";
                ?>
            </div>
        </section>

        <section>
            <div>
                <?php
                    echo "<h2>Variables De Cliente</h2>";

                    echo "<table >";
                        echo "<tbody>";

                            echo "<tr>";
                            echo "<td>REMOTE_PORT</td>";
                            echo "<td>" .$_SERVER[ "REMOTE_PORT"] . "</td>";
                            echo "</tr>";
                            echo "<tr>";
                            echo "<td>REQUEST_URI</td>";
                            echo "<td>" . $_SERVER['REQUEST_URI'] . "</td>";
                            echo "</tr>";

                        echo "</tbody>";
        
                        echo"</table>";
                ?>
            </div>
        </section>


        <section>
            <div>
                <?php
                    echo "<h2>Variables De Requerimiento</h2>";
                    
                    echo "<table >";
                        echo "<tbody>";

                            echo "<tr>";
                            echo "<td>SCRIPT_NAME</td>";
                            echo "<td>" .$_SERVER[ "SCRIPT_NAME"] . "</td>";
                            echo "</tr>";
                            echo "<tr>";
                            echo "<td>REQUEST_METHOD</td>";
                            echo "<td>" . $_SERVER['REQUEST_METHOD'] . "</td>";
                            echo "</tr>";

                        echo "</tbody>";
        
                        echo"</table>";
                ?>
            </div>
        </section>
          
        <section>
            <div class="contenedorTable">
                <?php

                    echo "<h2>Todas Las Variables</h2>";

                    echo "<table >";
                    // echo "<thead>" ;
                    // echo "<tr>";
                    // echo "<th> key </th>";
                    // echo "<th> value</th>";
                    // echo "</tr>";
                    // echo "</thead>";

                    echo "<tbody>";
                    foreach ($_SERVER as $key => $value) {
                        echo "<tr>";
                        echo "<td> $key </td>";
                        echo "<td> $value </td>";
                        echo "</tr>";
                    }
                    echo "</tbody>";

                    echo"</table>";
                ?>
            </div>
        </section>
        </main>
</body>
</html>