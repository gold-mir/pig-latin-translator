var alphabet = "abcdefghijklmnopqrstuvwxyz";
var vowels = "aeiouy"
function englishToPigLatin(inputText){
  if (typeof inputText !== "string" || inputText.length == 0) {
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

    for(var index = 0; index < text.length; index++){
      var currentLetter = text[index]

      if (index === 0 && vowels.includes(currentLetter) && currentLetter !== "y") {
        firstVowelIndex = index;
        break;
      } else if (index != 0 && vowels.includes(currentLetter)){
        firstVowelIndex = index;
        break;
      } else if (currentLetter === "q"){
        if(text[index + 1] === "u"){
          firstVowelIndex = index + 2;
          break;
        }
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

function test(){
  console.log(englishToPigLatin("4"));
  console.log(englishToPigLatin(""));
  console.log(englishToPigLatin("i"));
  console.log(englishToPigLatin("example"));
  console.log(englishToPigLatin("cat"));
  console.log(englishToPigLatin("writing"));
  console.log(englishToPigLatin("yellow"));
  console.log(englishToPigLatin("squirrel"));
}
