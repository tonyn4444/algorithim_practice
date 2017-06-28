function sortScores(scores, highestScorePossible) {
	var scoreOccurences = [];

	for(var i = 0; i < highestScorePossible; i++) {
		scoreOccurences.push(0);
	}

	// Iterate through our scores and add the # of occurences
	scores.forEach(function(score) {
		scoreOccurences[score]++;
	});

	var sortedScores = [];
	// Create a new array and iterate through our occurences array to add scores in order
	for(var j = scoreOccurences.length; j >= 0; j--) {
		var currentScore = j;
		for(var occurences = 0; occurences < scoreOccurences[j]; occurences++) {
			sortedScores.push(currentScore);
			console.log(sortedScores);
		}
	}
}

var unsortedScores = [2, 7, 3, 4, 2];
const HIGHEST_POSSIBLE_SCORE = 10;

sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
