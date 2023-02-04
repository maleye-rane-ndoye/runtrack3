<?php 





?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>jour 05 job01</title>
    <script defer src="script.js"></script>
</head>
<body>
      <div class="containe">
           <form id="form" class="form-containe" method="post">
                <input type="text" name="nom" id="lastname" placeholder="Entrer votre Nom" class="box">
                <p class="check" id="error1"></p>

                <input type="text" name="prenom" id="firstname" placeholder="Entrer votre Prenom" class="box">
                <p class="check" id="error2"></p>

                <input type="email" name="email" id="email" placeholder="Entrer votre email" class="box">
                <p class="check" id="error"></p>

               
                <input type="password" name="password" id="password" placeholder="Entrer votre mot de passe" class="box">
                <p class="check" id="error3"></p>

                <input type="password" name="cpassword" id="cpassword" placeholder="confirmer votre mot de passe" class="box">
                <p class="check" id="error4"></p>
                <button type="submit" class="button">Envoyer</button>
           </form>
      </div>
</body>
</html>