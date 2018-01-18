###The program does nothing for non-alphabetical characters. -done
  * Example Input: 3
  * Example Output: 3

###The program doesn't fail when given a blank Input -done
  * Example Input: ""
  * Example Output:

###The program adds "ay" to single-letter words beginning with a vowel. -done
  * Example Input: i
  * Example Output: iay

###The program adds "ay" to words beginning with a vowel of any length. -done
  * Example Input: example
  * Example Output: exampleay

###For words beginning with a consonant, the program moves the consonant to the end and then adds "ay". -done
  * Example Input: cat
  * Example Output: atcay

###For words beginning with multiple consonants, the program moves them to the end in order and adds "ay". -done
  * Example Input: writing
  * Example Output: itingwray

###'Y' is treated as a consonant when it's the first letter in a word.
  * Example Input: yellow
  * Example Output: ellowyay

###If first consonants include a "qu", the u is moved at the same time as the q.
  * Example Input: squirrel
  * Example Output: irrelsquay

###The program propely translates multi-word sentences.
  * Example Input: i like cats
  * Example Output: iay ikelay atscay
