/*
   Complete the function to return true if the two arguments given are anagrams
   of the each other; return false otherwise.

   Examples
     "foefet" is an anagram of "toffee"
     "Buckethead" is an anagram of "DeathCubeK"
*/
function prepareString (str) {
  // convert string to lowercase
  // remove white spaces
  // sort string (split/convert string to array, sort, and join back to string)
  return str.toLowerCase().replace(/[^a-z\d]/g,'').split('').sort().join('');
}

module.exports = function isAnagram(test, original) {
  return prepareString(test) === prepareString(original);
};
