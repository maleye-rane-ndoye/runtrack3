<?php
    session_start();
         include 'User.php'; 
         $user = new User();
         
         if(isset($_POST['authentification'])){
          $email = $_POST['email'];
          $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
          $message[] = "";
            $user->login($email, $password);
        }

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
        <form id="login" class="form-containe" >
            <input type="email" name="email" id="loginemail" placeholder="Entrer votre email" class="box">
            <p class="check" id="error5"></p>
            <input type="password" name="password" id="loginpass" placeholder="Entrer votre mot de passe" class="box">
            <p class="check" id="error6"></p>
            <button type="submit" name="authentification" onclick= 'checkLogin()' class="button">valider</button>
            
        </form>
    </div>
</body>
</html>