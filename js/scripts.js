var alphabet = "abcdefghijklmnopqrstuvwxyz";

function englishToPigLatin(inputText){
  if (typeof inputText !== "string") {
    return;
  }
  var text = inputText.toLowerCase();
  var characters = text.split('');
  for(var index = 0; index < characters.length; index++){
    if (!alphabet.includes(characters[index])) {
      return inputText;
    }
  }

  return false;
}
