console.log("si se relaciona")
var botonFutbol = document.getElementById('botonFutbol');

botonFutbol.addEventListener("click",mostrarCanchaFutbol);

function mostrarCanchaFutbol() {
  var mostrarFutbol = document.getElementById("futbol");
  mostrarFutbol.style.display = "block";

}
