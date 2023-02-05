<?php
session_start();
include 'User.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>jour 05 job01</title>
    <script src="script.js" defer></script>
</head>
<body>
    <div class="navebare">
        <h1>Jour 5</h1>
        <div class="link"><a href="inscription.php">Inscription</a></div>
        <div class="link"><a href="connexion.php">Connexion</a></div>
    </div>

    <div class="para">
        <?php 
        require 'connexion.php';
        if(isset($_SESSION['email'])){
            $email = $_SESSION['email'];
            echo 'Bonjour '. $prenom;
        }
        ?>
                                     
    </div>
</body>
</html>