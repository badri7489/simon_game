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
$("#start_button").click(function () {
	if (!started) {
		nextSequence();
		started = true;
	}
});
$(".buton").click(function () {
	var chosen = $(this).attr("id");
	userPattern.push(chosen);
	changeColor(chosen);
	makeSound(chosen);
	checkSequence(userPattern.length - 1);
});
function checkSequence(level) {
	if (userPattern[level] === generatedPattern[level]) {
		if (userPattern.length === generatedPattern.length) {
			setTimeout(function () {
				nextSequence();
			}, 1000);
		}
	} else {
		makeSound("wrong");
		$("h1").text("Game Over press button to restart!");
		$("body").addClass("game-over");
		setTimeout(function () {
			$("body").removeClass("game-over");
		}, 100);
		game_over();
	}
}
function nextSequence() {
	userPattern = [];
	level++;
	$("h1").text("Level " + level);
	var button = randomButton();
	generatedPattern.push(button);
	changeColor(button);
	makeSound(button);
}
function game_over() {
	level = 0;
	started = false;
	generatedPattern = [];
}
