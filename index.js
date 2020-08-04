var started = false;
var level = 0;
var generatedPattern = [];
var userPattern = [];
var button;

function randomButton() {
	var button = Math.floor(Math.random() * 4);
	var color = ["green", "red", "yellow", "blue"];
	return color[button];
}
function makeSound(button) {
	var audio = new Audio("./sounds/" + button + ".mp3");
	audio.play();
}
function changeColor(button) {
	$("." + button).addClass("pressed");
	setTimeout(function () {
		$("." + button).removeClass("pressed");
	}, 100);
}
$(document).keydown(function () {
	if (!started) {
		button = randomButton();
		generatedPattern.push(button);
		changeColor(button);
		makeSound(button);
		started = true;
	}
});
$(".btn").click(function () {
	var chosen = $(this).attr("id");
	userPattern.push(chosen);
	changeColor(chosen);
	makeSound(chosen);
	checkSequence(userPattern.length - 1);
});
function checkSequence(level) {
	if (userPattern === generatedPattern) {
		if (userPattern.length === generatedPattern.length) {
		}
	}
}
