var alphabet = "abcdefghijklmnopqrstuvwxyz";

function englishToPigLatin(inputText){
  var text = inputText.toLowerCase();
  var characters = text.split('');
  for(var index = 0; index < characters.length; index++){
    if (!alphabet.includes(characters[index])) {
      return inputText;
    }
  }
  
  return false;
}
