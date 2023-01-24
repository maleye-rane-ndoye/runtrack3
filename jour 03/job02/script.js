function mouveA(){
   
        const element = document.getElementById("container2");
        if (element.className == "animation3") {
          element.className = "animation3flex";
        } else {
          element.className = "animation3";
        }
}
  


function mouveB(){
    const element = document.getElementById("container1");
        if (element.className == "animation2") {
          element.className = "animation2flex";
        } else {
          element.className = "animation2";
        }
}

