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

  if(vowels.includes(text[0])){
    result += text;
    result += "ay";
  }

  return result;
}
