document.addEventListener("keypress", function(e) {
    var key = e.key;
    var textarea = document.getElementById("keylogger");
    var currentFocus = document.activeElement.id;
    if (key.match(/[a-z]/i)) {
      if (currentFocus === "keylogger") {
        textarea.value += key + key;
      } else {
        textarea.value += key;
      }
    }
  });
  