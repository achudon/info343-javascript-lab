/*  
	1. Addition 
	There are two different fields: #additionInput1 and #additionInput2. 
	We've already written the functionality for handling when the user 
	clicks on the button (called #additionButton). 
	Your job is to write code that takes the two fields, 
	and alerts the user what the sum is.
*/ 

function addition() {
	var val1 = parseInt(document.getElementById('additionInput1').value);
    var val2 = parseInt(document.getElementById('additionInput2').value);

    console.log(val1 + ' ' + val2);

    var total = val1 + val2;

    alert(total);
}

/* --------------------------------------------------------- */

/*  
	2. Vowel Counter 
	You have one input field: #vowelInput. 
	Like question 1, we've already written the functionality for handling 
	when the user clicks on the button (this time, called #vowelButton). 
	This time, you will replace the text within #vowelInput with the following string:

		"That sentence has X vowels in it."

	Vowels are the characters a, e, i, o, and u. If there is only 1 vowel in the sentence, 
	then the text should say "That sentence has 1 vowel in it." - 
	note the lack of plurality on the word vowel.
*/ 

function vowelCounter() {
	var text = document.getElementById('vowelInput').value;
    console.log(text);
    var idx;
    var count = 0;

    for (idx = 0; idx < text.length; idx++) {
        var letter = text.charAt(idx);
        console.log(letter);
        if (letter == 'a' || letter == 'e' || letter == 'i' ||
            letter == 'o' || letter == 'u' ) {
            count++;
        }
    }

    console.log(count);

    if (count == 1) {
        document.getElementById('vowelInput').value =
            'That sentence has 1 vowel in it.';
    } else {
        document.getElementById('vowelInput').value =
            'That sentence has ' + count + ' vowels in it.';
    }
}

/* --------------------------------------------------------- */


/*  
	3. Guess the Number

	This one's going to be a bit more challenging than the past two, so be careful.
	You will need to write up the functionality for a simple "guess the number" game.
	
	There are four parts to the game:
		1. A guess field (#numberGuess)
		2. A result paragraph (#numberResult)
		3. A submit button (#numberSubmit)
		4. A reset button (#numberReset)

	When a player hits the reset button, a random number between 1 and 100 should be generated.
	When a player hits the submit button, the system should identify their guess within the guessing field.
	If it's higher than the random number, print "Lower" to the result paragraph.
	If it's lower than the random number, print "Higher" to the result paragraph.
	If it's exactly the random number, signify that they've won.

	We've written the handlers for #numberSubmit and #numberReset, but it's your job to
	write the functionality. You may need to define a variable or two.

	For extra functionality, track the number of guesses the user has made, and print that as part of the result.
*/ 

var random = Math.floor(Math.random() * 100) + 1;
var count = 0;
function submit() {
    var guess = parseFloat(document.getElementById('numberGuess').value);
    console.log(guess);
    console.log(random);
    count++;
    if (guess > random) {
        document.getElementById('numberResult').innerHTML = 'Lower! ' + 'Guesses: ' + count;
    } else if (guess == random) {
        document.getElementById('numberResult').innerHTML= 'YOU WON! ' + 'Guesses: ' + count;
    } else {
        document.getElementById('numberResult').innerHTML = 'Higher! ' + 'Guesses: ' + count;
    }
}

function reset() {
    random = parseInt(Math.floor((Math.random() * 100) + 1).value);
    count = 0;
    document.getElementById('numberResult').innerHTML = 'Your result will go here.';

}


/* click handlers */
document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('additionButton').addEventListener('click', addition);
	document.getElementById('vowelButton').addEventListener('click', vowelCounter);
	document.getElementById('numberSubmit').addEventListener('click', submit);
	document.getElementById('numberReset').addEventListener('click', reset);
});