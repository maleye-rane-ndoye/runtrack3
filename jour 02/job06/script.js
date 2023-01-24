

const konami = '38384040373937396665';
let keysPress = '';

function keyDown(e) {
    keysPress = keysPress+e.keyCode;

    if (keysPress === konami) {
        document.getElementById("myDIV").className = "konami";
    }else {
        document.getElementById("myDIV").className = "simple";
      }
}
