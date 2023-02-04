
    
   


   
        fetch ("pokemon.json" + Identifiant.value + nom.value)
        .then(reponse => (reponse.json()))
        .then(data =>  data.type)
        document.getElementById("output").innerHTML =data;
  

        