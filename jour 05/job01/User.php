<?php


    class User {


        public $password;
        public $email;
        public $nom;
        public $prenom;
        public $message ="";
   
        private $dns = 'mysql:host=localhost;dbname=utilisateurs';
        private $username = 'root';
        private $passeword = '';
        public  $connect='';


        public function __construct(){
        
            try{
                $this->connect = new PDO($this->dns,$this->username,$this->passeword);
                $this->connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                echo 'connecxion établis!';
             }
             catch(PDOException $e){
                echo "Echec de connexion : " . $e->getMessage();
             }
             }


             public function register($nom, $prenom, $email, $password){
                $insert = "INSERT INTO utilisateurs(nom, prenom, email, password)
                VALUES(?, ?, ?, ?)";
                $statement = $this->connect->prepare($insert);
                if($statement->execute([$nom, $prenom, $email, $password])){
                       $message[]= 'Inscription validée';
                        header('location:connexion.php');
                 }
                 }



             public function login ($email, $password){
                    $select = $this->connect->prepare("SELECT * FROM `utilisateurs` WHERE email = '$email'");
                    $select->execute(array("$email"));
                    $row = $select->rowCount();
                    $tab = $select->fetchAll(PDO::FETCH_ASSOC);
                    if($row > 0){
                        $pass_db = $tab[0]["password"];
                        if(password_verify($password,$pass_db)){
                            $_SESSION['email'] = $email;
                            header("location:index.php");
                        }
                    }
                    else{
                        echo $message[] = 'Identifiant ou mot de passe incorrecte';
                    }
                }

                
            }
    
?>