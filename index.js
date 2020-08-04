function randomButton() {
	var button = Math.floor(Math.random() * 4);
	var color = ["green", "red", "yellow", "blue"];
	return color[button];
}
function makeSound(button) {
	var audio = new Audio("./sounds/" + button + ".mp3");
	audio.play();
}
$(document).keydown(function () {
	var button = randomButton();
	$("." + button).addClass("pressed");
	setTimeout(function () {
		$("." + button).removeClass("pressed");
	}, 100);
	// $("." + button).removeClass("pressed");
	makeSound(button);
});
// var started = false;
// var level = 0;
// var generatedPattern = [];
// var userPattern = [];
