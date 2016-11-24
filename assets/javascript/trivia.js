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
		q= getQuestion();
		if (q.questionText !== undefined) {
				$("#question").html(q.questionText);
				console.log(q.questionText);
				getChoices(q.choice);
				
				//check radio button not doing anything

  			$("rf input:radio").triggerHandler("click"); 

		/*		if ($('#a')[0].checked === true){
					if (q.choice.a.isAnswer){
						trivia.score.correct += 1;
					}
					else{
						trivia.score.wrong += 1
					}
	
				}	*/
		} //if questionText undefined

				
} //function makeQuestion  set timer to -1 comapre + cleartimer when you detect last q

//event delegation
			$("body").on('click', '#rf input:radio', function(){
					makeQuestion();
					console.log(this.value + " clicked");
					if ( this.value === "a") {console.log ("It's a")}
					//unclick button
					$(this).attr('checked', false);
					
					

    
   			});
			//display first question
					makeQuestion();
					console.log('last makeQuestion')


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