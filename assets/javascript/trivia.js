//Get Number of Questions
var numQuestions = trivia.question.length;
var askedQuestions =[];
var q;



//Initialize askedQuestions.  None of the questions have been asked 	
for (var i=0; i < numQuestions; i++){
 	askedQuestions[i] = false;
	}
 
//Get Next Question
$(document).ready(function(){

		
function makeQuestion()	{

		q = getQuestion();

		if (q.questionText !== undefined) {
				$("#question").html(q.questionText);
				console.log(q.questionText);
				getChoices(q.choice);

			} //if questionText undefined
		else {
			$("#gameOver").html("GAME OVER !");
			throw new Error(); // forced exit reached last question in trivia object
			}
				
} //function makeQuestion  

//event delegation
$("body").on('click', '#rf input:radio', function(){					
	
	console.log(this.value + " clicked");
	//unclick button
	$(this).attr('checked', false);
	trivia.answer = getWhatWasClicked(this.value, q.choice);
	
	//start timer
	trivia.timerOff = setInterval(trivia.timer,1000);
	
	trivia.answer ?  trivia.score.correct ++ : trivia.score.wrong ++ ;	
	$("#wins").html("Wins: " + trivia.score.correct);
	$("#losses").html("Losses: " + trivia.score.wrong);

	console.log("answer: " + trivia.answer);
	
	makeQuestion();

}); //event delegation
//display first question
trivia.timerOff = setInterval(trivia.timer,1000);
makeQuestion();
console.log('makeQuestion first pass');
	
}) //document ready

// return pointer to random question and mark that question as used in the askedQuestions global array
function	getQuestion(){
	//get a random number between zero and numQuestions - 1
	var i = Math.floor((Math.random() * numQuestions) + 0);	
	//find an unasked question	
	while (askedQuestions[i] === true  && (askedQuestions.indexOf(false) !== -1) ){
		var i = Math.floor((Math.random() * numQuestions) + 0);		
		}//while
	
	if (askedQuestions.indexOf(false) !== -1){ 
			askedQuestions[i] = true;
			return trivia.question[i];
		} 
		else {
			trivia.gameOver = true;
			return "Game Over";
		}
	
} //function getQuestion

// argument is pointer to choices
function getChoices (question){
	$("#radioA").html(question.a.caption);
	$("#radioB").html(question.b.caption);
	$("#radioC").html(question.c.caption);
	$("#radioD").html(question.d.caption); 

	console.log("a :" + question.a.caption);
	console.log("b :" + question.b.caption);
	console.log("c :" + question.c.caption);
	console.log("d :" + question.d.caption);
} //fucntion getChoices

// parameter is letter corresponding to radio button chosen 
function getWhatWasClicked (letter, possibleAnswers){
	var ans = false;
	switch (letter){		
		case "a":
			possibleAnswers.a.isAnswer ? ans = true : ans = false;			
			break;
		case "b":
			possibleAnswers.b.isAnswer ? ans = true : ans = false;			
			break;
		case "c":
			possibleAnswers.c.isAnswer ? ans = true : ans =  false;			
			break;
		case "d":
			possibleAnswers.d.isAnswer ? ans = true : ans =  false;			
			break;
	}//switch
	return ans;
}//function getWhatWasClicked

