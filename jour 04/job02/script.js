


     function jsonValueKey(){
        const starter = '{"Status":"Etudiant","School":"la plateforme","Annee":"2022", "Specialisation":"Web", "Langage":"Javascript", "Jour":4 }';
        const myObj = JSON.parse(starter);
        document.getElementById("starte").innerHTML = myObj.Status;
        document.getElementById("school").innerHTML = myObj.School;
        document.getElementById("year").innerHTML = myObj.Annee;
        document.getElementById("spe").innerHTML = myObj.Specialisation;
        document.getElementById("langage").innerHTML = myObj.Langage;
        document.getElementById("day").innerHTML = myObj.Jour;


            }
