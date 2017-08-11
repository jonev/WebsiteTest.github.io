
window.onload = function() {
	var btnAdd = document.getElementById("btnAdd");
	btnAdd.onclick = btnOnClick;
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

