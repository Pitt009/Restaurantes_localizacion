
var map;
  function initMap(){
    var laboratoriaMexico = {lat: 19.4175048, lng: -99.1652178,};

    var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 18,
    center:laboratoriaMexico

    });
    var marker = new google.maps.Marker({
    position:laboratoriaMexico,
    map: map
  });

}

var restaurantes = [
 {
    "nombre": "Rosseta",
    "comida": "Internacional",
    "latitud": "19.4175048",
    "longitud": "-99.1652178",
 },
 {
   "nombre": "Macelleria Roma",
   "comida": "Pizzas y platillos Italianos",
   "latitud": "19.4175048",
   "longitud": "-99.1652178",
 },
 {
   "nombre": "Fonda Fina",
   "comida": "Antojitos y comida mexicana",
   "latitud": "19.4175048",
   "longitud": "-99.1652178",
 },
 {
   "nombre": "Moshi Moshi",
   "comida": "Sushi",
   "latitud": "19.4175046",
   "longitud": "-99.1717839",
 },
];
