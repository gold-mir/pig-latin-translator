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
  if(vowels.includes(text[0])){
    result += text + "ay";
  }
  if(!vowels.includes(text[0])){
    var firstConsonant;
    var wordBody;
    firstConsonant = text.slice(0, 1);
    wordBody = text.slice(1, text.length);
    result += wordBody + firstConsonant + "ay";
  }
  return result;
}
