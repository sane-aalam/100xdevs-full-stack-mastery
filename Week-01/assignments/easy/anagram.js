/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
  - Both the string have same characters with same frequency. So, they are anagrams.
  - otherwise no
*/

function isAnagram(str1, str2) {
  //define a freq array of size 26 coz no of alphabates inenglish are 26
  let size1 = str1.length;
  let size2 = str2.length;

  // convert both of string into lowercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  str1 = str1.split("").sort();
  str2 = str2.split("").sort();

  for (let i = 0; i < size1; i++) {
    if (str1[i] != str2[i]) {
      return false;
    } else {
      continue;
    }
  }
  return true;
}

module.exports = isAnagram;
