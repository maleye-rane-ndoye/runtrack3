
function shuffle(){
    var grid = document.getElementById("game");
    for(var i = grid.children.length; i >= 0; i--){
        grid.appendChild(grid.children[Math.random() * i | 0]);
    }
}

function loadgame(){
    shuffle();
}
