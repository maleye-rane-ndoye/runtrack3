
function myExpression(){

getText("expression.txt");

async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  document.getElementById("contain").innerHTML = myText;
}}