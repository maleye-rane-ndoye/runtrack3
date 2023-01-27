
function shuffle(){
    var grid = document.getElementById("game");
    for(var i = grid.children.length; i >= 0; i--){
        grid.appendChild(grid.children[Math.random() * i | 0]);
    }
}

function loadgame(){
    shuffle();
}

var dragTargetEl;
var prevDragTargetEl;
var nextDragTargetEl;

document.addEventListener("dragstart", function(event) {
    // var grid = document.getElementById("game");
    // var i = grid.children.length;
    // event.dataTransfer.setData(i, event.target.id = "dragTargetEl");

    dragTargetEl = event.target;
    prevDragTargetEl = dragTargetEl.previousElementSibling;
    nextDragTargetEl = dragTargetEl.nextElementSibling;


    // console.log('draggingEl = ', draggingEl);
    console.log('event = ', event);
});

      /* document.addEventListener("drag", function(event) {
           document.getElementById("droptarget").style.color = "red";
  });*/


  
  function dragging(event) {
    document.getElementById("victory").innerHTML = "The p element is being dragged";
  }
  
  function allowDrop(event) {
    event.preventDefault();
  }
  
  function drop(event) {
    var grid = document.getElementById("game");
    // var i = grid.children.length;
    event.preventDefault();
    // const data = event.dataTransfer.getData(i);
    // const dropTargetEl = document.getElementById("droptarget");
    const dropTargetEl = event.currentTarget;

    let nextDropTargetEl = dropTargetEl.nextElementSibling;

    console.log('[drop] dropTargetEl = ', dropTargetEl);
    console.log('[drop] dragTargetEl = ', dragTargetEl);
    console.log('[drop] prevDragTargetEl = ', prevDragTargetEl);
    console.log('[drop] nextDragTargetEl = ', nextDragTargetEl);
    console.log('[drop] nextDropTargetEl = ', nextDropTargetEl);
    console.log('[drop] event = ', event);



    // grid.insertBefore(dragTargetEl, dropTargetEl);
    grid.insertBefore(dropTargetEl, dragTargetEl);

    // grid.insertBefore(nextDragTargetEl, dragTargetEl);
    // grid.insertBefore(dropTargetEl, prevDragTargetEl);

    
    // event.target.appendChild();
    // document.getElementById("victory").innerHTML = "The p element was dropped";
  }






