var alphabet = "abcdefghijklmnopqrstuvwxyz";
var vowels = "aeiouy"
function englishToPigLatin(inputText){
  if (typeof inputText !== "string") {
    return;
  }
  var text = inputText.toLowerCase();
  var result = "";
  // var characters = text.split('');

  //Make sure text contains no non-letter characters
  for(var index = 0; index < text.length; index++){
    if (!alphabet.includes(text[index])) {
      return inputText;
    }
  }

  //if string begins with a vowel, add 'ay'
  if(vowels.includes(text[0]) && text[0] !== "y"){
    result += text + "ay";
  } else {

    //get index of first vowel
    var firstVowelIndex;

    //Loops to look for the first vowel. Starts from the second
    //letter of the word because we've already determined that the
    //first one is not a vowel
    for(var index = 1; index < text.length; index++){
      if(vowels.includes(text[index])){
        firstVowelIndex = index;
        break;
      }
    }

    var firstConsonant;
    var wordBody;
    firstConsonant = text.slice(0, firstVowelIndex);
    wordBody = text.slice(firstVowelIndex, text.length);
    result += wordBody + firstConsonant + "ay";
  }
  return result;
}
