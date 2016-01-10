$(document).ready(function(){
	// Create a question object for each question
	function questionObject(questionNo, correctAnsNo, questionText, answerButtons, answerText, imgUrl){
		var question = {};

		// Process user selection
		$("#answer-buttons").click(function(event){
			switch(event.target.id){
				case "answer1-btn":
					question.chkAns(1);
					break;
				case "answer2-btn":
					question.chkAns(2);
					break;
				case "answer3-btn":
					question.chkAns(3);
					break;
				case "answer4-btn":
					question.chkAns(4);
					break;
				case "answer5-btn":
					question.chkAns(5);
					break;
			};
		});

		// Check if the user selected the correct answer
		question.chkAns = function(userAnsNo){
			if(userAnsNo === correctAnsNo){
				$("#answer h3").empty().append("Correct!");
				$("#answer p").css("visibility", "visible");
				$("#answer").css("visibility", "visible");
			} else {
				$("#answer h3").empty().append("Incorrect, try again");
				$("#answer p").css("visibility", "hidden");
				$("#answer").css("visibility", "visible");
			};
		};

		// Display a new question
		question.newQuestion = function(){
			// Update tabs
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

			// Update answer answerText
			$("#answer p").empty().append(answerText);
		};

		return question;
	};

	// Instantiate question array
	var questions = [];

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
	answerButtons[0] = "William Lamb";
	answerButtons[1] = "William Shatner";
	answerButtons[2] = "William Shakespeare";
	answerButtons[3] = "Will.i.am";
	answerButtons[4] = "Prince William";

	answerText = 'It was named "Melbourne" in 1837 by the Governor of New South Wales, Sir Richard Bourke, in honour of the British Prime Minister of the day, <span class="bold">William Lamb</span>, 2nd Viscount Melbourne, who resided in the village of Melbourne in Derbyshire.';
	imgUrl = "images/william-lamb.jpg";

	// Create object
	questions[0] = questionObject(questionNo, correctAnsNo, questionText, answerButtons, answerText, imgUrl);

	questions[0].newQuestion();


});
