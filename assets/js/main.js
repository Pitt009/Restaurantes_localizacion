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

var platillaRestaurantes = '<div class="card-panel grey lighten-5 z-depth-1">' +
	'<div class="row valign-wrapper">' +
		'<div class="col s2">' +
			'<img src="__foto__" alt="" class="circle responsive-img">' +
		'</div>'
		'<div class="col s10">' +
			'<h5 class="black-text  restaurant nombreRestaurantes" data-latitud="19.4172776" data-longitud="-99.1618953">__nombreRestaurante__</h5>' +
			'<p>__tipoComida__</p>' +
			'<p>__direccion__</p>' +
		'</div>' +
	'</div>' +
'</div>';



var reemplazar = function (restaurantes) {
	var plantillaFinal = "";
	restaurantes.forEach(function(restaurant){
		platillaFinal += platillaRestaurantes.replace("__foto__", restaurant.foto).replace("__nombre__", restaurant.nombre)
		.replace("__tipoComida__", restaurant.comida).replace("__direccion__",);
	});
	$(".restaurantes").html(plantillaFinal);
};
  reemplazar(restaurantes);
