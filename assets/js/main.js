$(document).ready(cargarPagina);
// HOISTING
function cargarPagina() {
  obtenerUbicacion();
  $(".restaurant").click(cambiarUbicacion);
}

var obtenerUbicacion = function (e) {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(mostrarPosicion);
	} else {
		alert("Actualice su navegador");
	}
};

var mostrarPosicion = function (posicion) {
	var coordenadas = {
		lat: posicion.coords.latitude,
		lng: posicion.coords.longitude
	};
	mostrarMapa(coordenadas);
};

var mostrarMapa = function (coordenadas) {
	var map = new google.maps.Map($('.map')[0], {
      zoom: 17,
      center: coordenadas
    });
    var marker = new google.maps.Marker({
      position: coordenadas,
      map: map
    });
}

function cambiarUbicacion() {
  var latitud = $(this).data("latitud");
  var longitud = $(this).data("longitud");

  var coordenadas = {
    lat: latitud,
    lng: longitud
  };
  mostrarMapa(coordenadas);
}
var restaurantes = [
 {
    "nombre": "Rosseta",
    "comida": "Internacional",
    "foto" : "http://via.placeholder.com/150x150",
    "latitud": "19.4142776",
    "longitud": "-99.162221"
 },
 {
   "nombre": "Macelleria Roma",
   "comida": "Pizzas y platillos Italianos",
   "foto" : "http://via.placeholder.com/150x150",
   "latitud": "19.4175048",
   "longitud": "-99.1652178"
 },
 {
   "nombre": "Fonda Fina",
   "comida": "Antojitos y comida mexicana",
   "foto" : "http://via.placeholder.com/150x150",
   "latitud": "19.4169671",
   "longitud": "-99.1688995"
 },
 {
   "nombre": "Moshi Moshi",
   "comida": "Sushi",
   "foto" : "http://via.placeholder.com/150x150",
   "latitud": "19.4175046",
   "longitud": "-99.1717839"
 },
];
