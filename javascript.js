
window.onload = function() {
	var btnAdd = document.getElementById("btnAdd");
	btnAdd.onclick = btnOnClick;
	getMyGeoLocation();
}

function btnOnClick(){
	var txtSong = document.getElementById("txtSong");
	var songname = txtSong.value;
	var li = document.createElement("li");
	li.innerHTML = songname;
	var btnDelete = document.createElement("button");
	btnDelete.innerHTML = "Del";
	btnDelete.onclick = function(){
		li.remove();
	}
	li.appendChild(btnDelete);
	
	var ul = document.getElementById("ulPlaylist");
	ul.appendChild(li);
}
var map;
function showMap(position){
	var latlng =  new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	var mapOptions = {
		zoom: 10,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var mapdiv = document.getElementById("map");
	map = new google.maps.Map(mapdiv, mapOptions);
}

function getMyGeoLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showMap);
	} else {
		alert("Oops, no geolocation support");
	}
}
