// This is the file where you will write the Truncate Words function and related code.

function truncateWords (longText, numWords) {		// TODO: Create a Function called truncateWords() that accepts two arguments:
	 
	 var textArray = longText.split(' ');           	// 1. Use the split() function to split the String into an Array
	 var totalWords = textArray.length;					// 2. Use the length attribute to find the number of words in the Array
	 console.log(textArray);							// 3. Determine how many words should be removed from the String
	 var removeWords = (totalWords - numWords); 		// 4. Remove those words from the Array
	 console.log(removeWords);																		
	 textArray.splice(numWords, removeWords);				
	 console.log(textArray);
	 textArray.push("..."); 							// 5. Add an additional String item to the Array to put an ellipses in: "..."
	 console.log(textArray);
	 var newString = textArray.join(" "); 				// 6. Use the join() function to convert the Array back into a String
	 console.log(newString);
	 return newString; 									// 7. Return the truncated String from the Function
}

var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;
var shortText = truncateWords(originalText, wordLimit);
 
// longText (a String with several words in it)
// numWords (an Integer that sets the number of words you want in the returned text)

// TODO: Within the truncateWords() Function, complete the following steps:


// This portion of the script is meant to call and display the result of your Function.
// You do not need to change the following lines, but you may change them if you 
// are experimenting further or pursuing stretch goals.

console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);
