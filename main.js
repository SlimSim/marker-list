
document.getElementById('addSongMarker').addEventListener('click', function(){

  var markerList = document.querySelector('#ml');

  var marker = document.createElement("song-marker");
  marker.setAttribute('time',160);
  marker.setAttribute('name',"Super Duper End");
  markerList.appendChild(marker)

//   jag kan ju faktiskt lägga till song-markers med hjälp av devellopertoolsen ...
});

document.getElementById('recalcDist').addEventListener('click', function(){

  document.querySelector('#ml').recalculateDistanse();

});

