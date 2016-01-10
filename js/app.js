$(document).ready(function(){
	// Create a question object for each question
	function questionObject(questionNo, correctAnsNo, questionText, answerButtons, answerText, imgUrl){
		var question = {};

		// Check if the user selected the correct answer
		question.chkAns = function(userAnsNo){
			if(userAnsNo === correctAnsNo){
				return true;
			} else {
				return false;
			};
		};

		// Display a new question
		question.newQuestion = function(){
			// Update tabs
			// $("#q1").addClass("selected-tab");
			$("#q1").attr("class", "selected-tab");

			// Update question
			$("#content h2").empty().append(questionText);

			// Update image
			$("#content img").attr("src", imgUrl);

			// Update answer buttons
			$("#answer1-btn").empty().append(answerButtons[0]);
			$("#answer2-btn").empty().append(answerButtons[1]);
			$("#answer3-btn").empty().append(answerButtons[2]);
			$("#answer4-btn").empty().append(answerButtons[3]);
			$("#answer5-btn").empty().append(answerButtons[4]);
		};

		return question;
	};

	// Instantiate question array
	var questions = [];
	// var questions;

	// Create variables
	var questionNo;
	var correctAnsNo;
	var questionText;
	var answerButtons = [];
	var answerText;
	var imgUrl;


	// Question 1 Data
	questionNo = 1;
	correctAnsNo = 1;
	questionText = "Who is Melbourne named after?";
	// answerButtons.push = "William Lamb";
	// answerButtons.push = "William Shatner";
	// answerButtons.push = "William Shakespeare";
	// answerButtons.push = "Will.i.am";
	// answerButtons.push = "Prince William";
	answerButtons[0] = "William Lamb";
	answerButtons[1] = "William Shatner";
	answerButtons[2] = "William Shakespeare";
	answerButtons[3] = "Will.i.am";
	answerButtons[4] = "Prince William";

	answerText = 'It was named "Melbourne" in 1837 by the Governor of New South Wales, Sir Richard Bourke, in honour of the British Prime Minister of the day, William Lamb, 2nd Viscount Melbourne, who resided in the village of Melbourne in Derbyshire.';
	imgUrl = "images/william-lamb.jpg";

	// Create object
	questions[0] = questionObject(questionNo, correctAnsNo, questionText, answerButtons, answerText, imgUrl);

	questions[0].newQuestion();

	// questions = questionObject(questionNo, correctAnsNo, questionText, answerButtons, answerText, imgUrl);

	// questions.newQuestion();
});
