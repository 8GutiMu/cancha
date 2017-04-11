console.log("si se relaciona");

var botonFutbol = document.getElementById('botonFutbol');
var botonBasket = document.getElementById('botonBasket');
var botonTennis = document.getElementById('botonTennis');

botonFutbol.addEventListener("click",mostrarCanchaFutbol);
botonBasket.addEventListener("click",mostrarCanchaBasket);
botonTennis.addEventListener("click",mostrarCanchaTennis);

function mostrarCanchaFutbol() {

    var mostrarFutbol = document.getElementById("futbol");
    var mostrarBasket = document.getElementById("basket");
    var mostrarTennis = document.getElementById("tennis");

    mostrarBasket.style.display = "none";
    mostrarTennis.style.display="none"
    mostrarFutbol.style.display = "block";

}

function mostrarCanchaBasket(){

    var mostrarBasket = document.getElementById("basket");
    var mostrarFutbol = document.getElementById("futbol");
    var mostrarTennis = document.getElementById("tennis");
    mostrarBasket.style.display = "block";
    mostrarFutbol.style.display = "none";
    mostrarTennis.style.display="none"

}

function mostrarCanchaTennis() {
  var mostrarTennis = document.getElementById("tennis");
  var mostrarBasket = document.getElementById("basket");
  var mostrarFutbol = document.getElementById("futbol");
  mostrarBasket.style.display = "none";
  mostrarFutbol.style.display = "none";
  mostrarTennis.style.display="block"
}
