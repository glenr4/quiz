$(document).ready(function(){
	// Store Ryu state
	var ryuPose = "still";

	// Ryu ready pose
	$(".ryu").mouseenter(function(){
		ryuPose = ryuReady();
	});

	// Ryu still pose
	$(".ryu").mouseleave(function(){
		ryuPose = ryuStill();
	});

	// Ryu cool pose
	$(document).keydown(function(event){
		if(event.keyCode === 88){
			ryuCool();
		}
	});

	// Ryu revert cool pose
	$(document).keyup(function(event){
		if(event.keyCode === 88){
			if(ryuPose ==="ready"){
				ryuPose = ryuReady();
			} else {
				ryuPose = ryuStill();
			};
		};
	});

	// Throw hadouken
	$(".ryu").mousedown(function(){
		throwHadouken();
	});

	// Finish hadouken
	$(".ryu").mouseup(function(){
		finishHadouken();
	});
});

// Throw hadouken
function throwHadouken (){
	// Play Hadouken sound and change to throwing image
	playHadouken();
	$(".ryu-ready").hide();
	$(".ryu-throwing").show();
	// Animate hadouken to right extent of main div
	$(".hadouken").finish().show().animate(
		{"left":"1020px"},
		500,
		// Hide hadouken image and reset position
		function () {
			$(this).hide();
			$(this).css("left","520px");
		}
	);
};

// Hadouken sound
function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
};

// Finish hadouken
function finishHadouken(){
	$(".ryu-ready").show();
	$(".ryu-throwing").hide();	
};

// Ryu ready
function ryuReady () {
	$(".ryu-still").hide();
	$(".ryu-ready").show();
	$(".ryu-cool").hide();
	// Update state
	return "ready";
};

// Ryu still
function ryuStill () {
	$(".ryu-still").show();
	$(".ryu-ready").hide();
	$(".ryu-cool").hide();
	// Update state
	ryuPose = "still";
};

// Ryu cool
function ryuCool () {
	$(".ryu-still").hide();
	$(".ryu-ready").hide();
	$(".ryu-cool").show();	
};
