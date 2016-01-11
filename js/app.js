'use strict';

$(document).ready(function(){
	// Create a question object for each question
	function Question(args){

		// var question = {};
		this.questionNo = args.questionNo;
		this.correctAnsNo = args.correctAnsNo;
		this.questionText = args.questionText;
		this.answerButtons = args.answerChoices;
		this.answerText = args.answerText;
		this.imgUrl = args.imgUrl;
		var userCorrect;
	};

	// Display a new question
	Question.prototype.newQuestion = function(){
		// Update tabs
		if(this.questionNo > 1){
			$("#q"+(this.questionNo-1)).attr("class", "unselected-tab");	
		}
		$("#q"+this.questionNo).attr("class", "selected-tab");

		// Update question
		$("#content h2").empty().append(this.questionText);

		// Update image
		$("#content img").attr("src", this.imgUrl);

		// Update answer buttons
		$("#answer1-btn").empty().append(this.answerButtons[0]);
		$("#answer2-btn").empty().append(this.answerButtons[1]);
		$("#answer3-btn").empty().append(this.answerButtons[2]);
		$("#answer4-btn").empty().append(this.answerButtons[3]);
		$("#answer5-btn").empty().append(this.answerButtons[4]);

		// Hide the answer
		$("#answer").css("visibility", "hidden");
		$("#answer p").css("visibility", "hidden");

		// Update answer answerText
		$("#answer p").empty().append(this.answerText);
	};

	// Check if the user selected the correct answer
	Question.prototype.chkAns = function(userAnsNo){
		if(userAnsNo === this.correctAnsNo){
			// Correct
			$("#answer h3").empty().append("Correct!");
			$("#answer p").css("visibility", "visible");
			$("#answer").css("visibility", "visible");
			if(this.userCorrect === undefined){
				this.userCorrect = true;
				$("#q" + this.questionNo).append("<span class='correct'>");
			};	
		} else {
			// Incorrect
			$("#answer h3").empty().append("Incorrect, try again");
			$("#answer p").css("visibility", "hidden");
			$("#answer").css("visibility", "visible");
			if(this.userCorrect === undefined){
				this.userCorrect = false;
				$("#q" + this.questionNo).append("<span class='incorrect'>");
			};	

		};
	};

	// Process user answer
	$("#answer-buttons").click(function(event){
		switch(event.target.id){
			case "answer1-btn":
				questions[currentQuestion-1].chkAns(1);
				break;
			case "answer2-btn":
				questions[currentQuestion-1].chkAns(2);
				break;
			case "answer3-btn":
				questions[currentQuestion-1].chkAns(3);
				break;
			case "answer4-btn":
				questions[currentQuestion-1].chkAns(4);
				break;
			case "answer5-btn":
				questions[currentQuestion-1].chkAns(5);
				break;
		};
	});

	// Load next question
	$("#next-btn").click(function(event){
		if(currentQuestion < questions.length){
			currentQuestion++;
			questions[currentQuestion - 1].newQuestion();
		};
	});

	// Global variables
	var questions = [];
	var currentQuestion = 1;

	// Question 1 Data
	questions.push(new Question({
		questionNo: 1,
		correctAnsNo: 1,
		questionText: "Who is Melbourne named after?",
		answerText: "It was named \"Melbourne\" in 1837 by the Governor of New South Wales, Sir Richard Bourke, in honour of the British Prime Minister of the day, <b>William Lamb</b>, 2nd Viscount Melbourne, who resided in the village of Melbourne in Derbyshire.",
		answerChoices: [
			"William Lamb",
			"William Shatner",
			"William Shakespeare",
			"Will.i.am",
			"Prince William"
		],
		imgUrl: "images/william-lamb.jpg"
	}));

	// Question 2 Data
	questions.push(new Question({
		questionNo: 2,
		correctAnsNo: 3,
		questionText: "Who is one of Melbourne's founders?",
		answerText: "As a leading member of the Port Phillip Association, in 1835 <b>John Batman</b> led an expedition which explored the Port Phillip Bay area on the Australian mainland with a view to establishing a new settlement there. Batman is best known for his role in the founding of the settlement on the Yarra River which became the city of Melbourne, eventual capital of the new Colony of Victoria, and one of Australia's largest and most important cities.",
		answerChoices: [
			"Superman",
			"Spiderman",
			"Batman",
			"Robin",
			"The Green Lantern"
		],
		imgUrl: "images/john-batman.jpg"
	}));

	// Question 3 Data
	questions.push(new Question({
		questionNo: 3,
		correctAnsNo: 4,
		questionText: "When was the Formula 1 Grand Prix first held in Melbourne?",
		answerText: "The Formula 1 Grand Prix was first held in Melbourne in <span class='bold'>1996</span>. The Grand Prix is the oldest surviving motor racing competition held in Australia having been held 79 times since it was first run at Phillip Island in 1928. It was held at various locations through to 1985 where it was in Adelaide until 1995.",
		answerChoices: [
			"1928",
			"1985",
			"1990",
			"1996",
			"2015"
		],
		imgUrl: "images/f1-melbourne.jpg"
	}));

	// Load first question for user
	questions[0].newQuestion();
});
