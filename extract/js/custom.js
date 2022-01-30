var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;

function playPause(){
	if(count == 0){
		count = 1;
		audio.play();
		playPauseBTN.innerHTML = "Pause &#9208;";
	}else{
		count = 0;
		audio.pause();
		playPauseBTN.innerHTML = "Play &#9658;";
	}

}

function stop(){
	playPause()
	audio.pause();
	audio.currentTime = 0;
	playPauseBTN.innerHTML = "Play &#9658;";
}



var video = document.getElementById('video');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;

function playPause(){
	if(count == 0){
		count = 1;
		audio.play();
		playPauseBTN.innerHTML = "Pause &#9208;";
	}else{
		count = 0;
		audio.pause();
		playPauseBTN.innerHTML = "Play &#9658;";
	}

}

function stop(){
	playPause()
	audio.pause();
	audio.currentTime = 0;
	playPauseBTN.innerHTML = "Play &#9658;";
}

function swap(){
	var leftId=document.getElementById('playPauseBTN');
	rightId=document.getElementById('playPauseBTN');
	leftSRC=leftId.src;
	rightSRC=rightId.src;
	leftId.src=rightSRC;
	rightId.src=leftSRC;

}
function reDom(){
	let v = document.getElementById("audio");
	let p = document.getElementById("2");
	p.removeChild(v);
}

function AddDom(){
	let v3 = document.createElement("new");
	let v4 =document.createTextNode("exam");
	v3.appendChild(v4);
	var p = document.getElementById("audio");
	p.appendChild(v3);
	 
		let v5 = document.createElement("p");
		let v6 =document.createTextNode("exam2");
		v5.appendChild(v6);
		let v7 = document.getElementById("audio")
		var p1 = document.getElementById("btn1");
		v7.insertBefore(v5,p1);
		}
	 