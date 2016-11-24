//path to answer: trivia.question[i].choice.a.isAnswer
//path to answer: trivia["question"][i]["choice"]["a"]["isAnswer"]
var trivia = 
		{
			gameOver: false,
			score: {
				correct: 0,
				wrong: 0
			},
			timer: function(){

			},//function timer
			question: 
			[ 
				{
					
					
					questionText: "What's Austin's Population?",
					choice: {
					
							a: { caption: '950,000', isAnswer: true},
					
							b: {caption:'1,000,000', isAnswer: false},
					
							c: {caption:'1,500,000', isAnswer: false},
					
							d: {caption: '2,000,000+', isAnswer: false}
					}, //choice
				}, //question
				{
					
					
					questionText: "Which Super Market Chain Started in Austin?",
					choice: {
					
							a: { caption: 'Kroger', isAnswer: false},
					
							b: {caption:'Whole Foods', isAnswer: true},
					
							c: {caption:'Trader Joes', isAnswer: false},
					
							d: {caption: 'HEB', isAnswer: false},
					},//choice
				}, //question
				{
					
					
					questionText: "The Austin City Limits TV Show First Aired in the?",
					choice: {
					
					a: { caption: '60s', isAnswer: false},
					
					b: {caption:'80s', isAnswer: false},
					
					c: {caption:'70s', isAnswer: true},
					
					d: {caption: '90s', isAnswer: false},	
					},//choice
				}, //question
				{
					
					
					questionText: "The Tallest Building in Austin is:",
					choice: {
					
					a: { caption: 'W Hotel', isAnswer: false},
					
					b: {caption:'Frost Bank Tower', isAnswer: false},
					
					c: {caption:'360 Condominiums', isAnswer: false},
					
					d: {caption: 'The Austonian', isAnswer: true},
					
					},//choice
				}, //question
			]
		} //trivia object