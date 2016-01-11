'use strict';

$(document).ready(function(){
	// Create a question object for each question
	// function new Question(questionNo, correctAnsNo, questionText, answerButtons, answerText, imgUrl){
	function Question(questionNo, correctAnsNo, questionText, answerButtonsArr, answerText, imgUrl){

		// var question = {};
		this.questionNo = questionNo;
		this.correctAnsNo = correctAnsNo;
		this.questionText = questionText;

		// var answerButtons = new Array();
		this.answerButtons = answerButtonsArr;
		this.answerText = answerText;
		this.imgUrl = imgUrl;
		var userCorrect;
	};

	// Display a new question
	Question.prototype.newQuestion = function(){
		// Set this question to be the current one
		// currentQuestion = questionNo;

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
				switch(this.questionNo){
					case 1:
						$("#q1").append("<span class='correct'>");
						break;
					case 2:
						$("#q2").append("<span class='correct'>");
						break;
					case 3:
						$("#q3").append("<span class='correct'>");
						break;
					case 4:
						$("#q4").append("<span class='correct'>");
						break;
					case 5:
						$("#q5").append("<span class='correct'>");
						break;
					};
			};	
		} else {
			// Incorrect
			$("#answer h3").empty().append("Incorrect, try again");
			$("#answer p").css("visibility", "hidden");
			$("#answer").css("visibility", "visible");
			if(this.userCorrect === undefined){
				this.userCorrect = false;
				switch(this.questionNo){
					case 1:
						$("#q1").append("<span class='incorrect'>");
						break;
					case 2:
						$("#q2").append("<span class='incorrect'>");
						break;
					case 3:
						$("#q3").append("<span class='incorrect'>");
						break;
					case 4:
						$("#q4").append("<span class='incorrect'>");
						break;
					case 5:
						$("#q5").append("<span class='incorrect'>");
						break;
					};
			};	

		};
	};
/*
	// Process user answer
	$("#answer-buttons").click(function(event){
		// if(currentQuestion === this.questionNo){
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
		// };
	});
*/


		// return question;
	// };	// End of question

	// Load next question
	$("#next-btn").click(function(event){
		if(currentQuestion < questions.length){
			currentQuestion++;
			questions[currentQuestion - 1].newQuestion();
		};
	});

	// Array for question objects
	var questions = [];

	// Global variables
	var questionNo;
	var correctAnsNo;
	var questionText;
	var answerButtonsArr = [];
	var answerText;
	var imgUrl;
	var currentQuestion;


	// Question 1 Data
	questionNo = 1;
	correctAnsNo = 1;
	questionText = "Who is Melbourne named after?";
	answerButtonsArr[0] = "William Lamb";
	answerButtonsArr[1] = "William Shatner";
	answerButtonsArr[2] = "William Shakespeare";
	answerButtonsArr[3] = "Will.i.am";
	answerButtonsArr[4] = "Prince William";

	answerText = 'It was named "Melbourne" in 1837 by the Governor of New South Wales, Sir Richard Bourke, in honour of the British Prime Minister of the day, <span class="bold">William Lamb</span>, 2nd Viscount Melbourne, who resided in the village of Melbourne in Derbyshire.';
	imgUrl = "images/william-lamb.jpg";

	questions[0] = new Question(questionNo, correctAnsNo, questionText, answerButtonsArr, answerText, imgUrl);

	// // undefined?
	// // console.log(questions[0][questionNo]);

	// // Question 2 Data
	questionNo = 2;
	correctAnsNo = 3;
	questionText = "Who is one of Melbourne's founders?";
	answerButtonsArr[0] = "Superman";
	answerButtonsArr[1] = "Spiderman";
	answerButtonsArr[2] = "Batman";
	answerButtonsArr[3] = "Robin";
	answerButtonsArr[4] = "The Green Lantern";

	answerText = "As a leading member of the Port Phillip Association, in 1835 <span class='bold'>John Batman</span> led an expedition which explored the Port Phillip Bay area on the Australian mainland with a view to establishing a new settlement there. Batman is best known for his role in the founding of the settlement on the Yarra River which became the city of Melbourne, eventual capital of the new Colony of Victoria, and one of Australia's largest and most important cities.";
	imgUrl = "images/john-batman.jpg";

	questions[1] = new Question(questionNo, correctAnsNo, questionText, answerButtonsArr, answerText, imgUrl);


	// // Question 3 Data
	questionNo = 3;
	correctAnsNo = 4;
	questionText = "When was the Formula 1 Grand Prix first held in Melbourne?";
	answerButtonsArr[0] = "1928";
	answerButtonsArr[1] = "1985";
	answerButtonsArr[2] = "1990";
	answerButtonsArr[3] = "1996";
	answerButtonsArr[4] = "2015";

	answerText = "The Formula 1 Grand Prix was first held in Melbourne in <span class='bold'>1996</span>. The Grand Prix is the oldest surviving motor racing competition held in Australia having been held 79 times since it was first run at Phillip Island in 1928. It was held at various locations through to 1985 where it was in Adelaide until 1995.";
	imgUrl = "images/f1-melbourne.jpg";

	questions[2] = new Question(questionNo, correctAnsNo, questionText, answerButtonsArr, answerText, imgUrl);

	// Load first question for user
	questions[0].newQuestion();
});
