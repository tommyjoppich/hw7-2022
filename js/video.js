//entire video variable to be used always
var vid = document.querySelector('.video');

window.addEventListener("load", function() {
	//confidence booster
	console.log("Good job opening the window")
	//load up video and make sure it's not looping or playing
	vid.load();
	vid.loop = false;
	vid.autoplay = false;
});

document.querySelector("#play").addEventListener("click", function() {
	//print out when we play it
	console.log("Play Video");
	//play the video
	vid.play();
	//create a variable for the volume based on the slider value
	var vol = document.getElementById("slider").value;
	document.getElementById("volume").innerHTML = vol + "%";
});

document.querySelector('#skip').addEventListener("click", function () {
	//print out current time
	console.log("Original location " + vid.currentTime)
	if ((vid.duration - vid.currentTime) <= 10) {
		//if the video is within 10 seconds of ending restart it
		vid.currentTime = 0;
	} else {
		//otherwis skip ahead 10 seconds
		vid.currentTime += 10;
	}
	//print out location plus 10 secs
	console.log("New location " + vid.currentTime)
});

document.querySelector('#pause').addEventListener("click", function () {
	//pauses the video
	vid.pause();
});

document.querySelector('#slower').addEventListener("click", function () {
	//removing 10%
	vid.playbackRate -= 0.1;
	//print speed to console
	console.log("New speed " + vid.playbackRate);
});

document.querySelector('#faster').addEventListener("click", function () {
	//adding 10%
	vid.playbackRate += 0.1;
	//print speed to console
	console.log("New speed " + vid.playbackRate);
});

document.querySelector('#mute').addEventListener("click", function () {
	if (!(vid.muted)) { 
		//check if the video isn't already muted
		vid.muted = true;
		document.querySelector('#mute').textContent = "Unmute";
		//output unmuted
		console.log("Unmuted");
	} else {
		//if it is already muted, unmute
		vid.muted = false;
		document.querySelector('#mute').textContent = "Mute"; 
		//output mute
		console.log("Muted");
	}
});

document.querySelector('#slider').addEventListener("input", function () {
	//set the volume based on the slider value
	vid.volume = document.querySelector('#slider').value / 100;
	document.getElementById("volume").textContent = (vid.volume * 100) + "%";
	//then print it to the console
	console.log(vid.vol);
});

document.querySelector('#vintage').addEventListener("click", function() {
	//output the style has been edited
	console.log("Document style has been edited");
	//add the style when clicked
	document.querySelector("#player1").classList.add("oldSchool");
});

document.querySelector('#orig').addEventListener("click", function() {
	//output the style has been edited
	console.log("Document style has been edited")
	//remove the style when clicked
	document.querySelector("#player1").classList.remove("oldSchool");
});
