'use strict';

$(document).ready(function(){
	// Create a question object for each question
	function Question(args){
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

	// Returns the result of the users answer
	Question.prototype.getResult = function(){
		return  +this.userCorrect;
	};

	// Reset game
	Question.prototype.reset = function(){
		this.userCorrect = undefined;
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
		} else {
			summary();	
		};
	});

	// Play again
	$("#new-btn").click(function(event){
		// Clear results
		for (var i=0; i < questions.length; i++){
			questions[i].reset();
		};

		// Reset tabs
		$("#tabs .correct").remove();
		$("#tabs .incorrect").remove();

		// Remove summary and Play Again button
		$("#summary").css("display", "none");
		$("#new-button").css("display", "none");

		// Add answer elements back in
		$("#answer-buttons").css("display","block");
		$("#answer p").css("display","block");
		$("#answer").css("display","block");		

		// Load first question for user
		currentQuestion = 1;
		questions[0].newQuestion();

	});

	// Show summary of results
	function summary(){
		// Calculate number of correct answers
		var total = 0;
		for (var i=0; i < questions.length; i++){
			total += questions[i].getResult();
		};

		// Update page
		$("#q"+currentQuestion).attr("class", "unselected-tab");
		$("#answer-buttons").css("display","none");
		$("#answer p").css("display","none");
		$("#answer").css("display","none");		
		$("#content h2").empty().append("Thanks for playing");
		$("#summary").empty().append("<p>You scored " + total +" out of "+ questions.length);
		$("#summary").css("display", "block");
		$("#content img").attr("src", "images/fed.jpg");
		$("#new-button").css("display", "block");
	};

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
		answerText: "The Formula 1 Grand Prix was first held in Melbourne in <b>1996</b>. The Grand Prix is the oldest surviving motor racing competition held in Australia having been held 79 times since it was first run at Phillip Island in 1928. It was held at various locations through to 1985 where it was in Adelaide until 1995.",
		answerChoices: [
			"1928",
			"1985",
			"1990",
			"1996",
			"2015"
		],
		imgUrl: "images/f1-melbourne.jpg"
	}));

	// Question 4 Data
	questions.push(new Question({
		questionNo: 4,
		correctAnsNo: 3,
		questionText: "Where did Australian rules football start?",
		answerText: "In 1857, Tom Wills, one of the founders of Australian Football, returned to Australia after schooling in England where he was football captain of Rugby School and a brilliant cricketer. Initially, he advocated the winter game of football as a way of keeping cricketers fit during off-season. The new game was devised by Wills, his cousin H.C.A. Harrison, W.J. Hammersley and J.B. Thompson. The <b>Melbourne Football Club</b> was formed on August 7, 1858 – the year of the code's first recorded match between Scotch College and Melbourne Grammar School.",
		answerChoices: [
			"Sydney",
			"Adelaide",
			"Melbourne",
			"Brisbane",
			"Hobart"
		],
		imgUrl: "images/early-afl.jpg"
	}));

	// Question 5 Data
	questions.push(new Question({
		questionNo: 5,
		correctAnsNo: 5,
		questionText: "How many years in a row has Melbourne been named the world's most livable city?",
		answerText: "In 2015, Melbourne was named the world’s most liveable city for the fifth year in a row. The world’s five most liveable cities named by The Economist were Melbourne, Vienna, Vancouver, Toronto, Adelaide and Calgary. Melbourne received a near perfect score of 97.5 out of 100.",
		answerChoices: [
			"1",
			"2",
			"3",
			"4",
			"5"
		],
		imgUrl: "images/fed.jpg"
	}));

	// Load first question for user
	questions[0].newQuestion();
});
