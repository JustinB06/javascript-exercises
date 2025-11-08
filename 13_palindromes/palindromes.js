const palindromes = function (str) {
  /* Regex: 
    - The characters we match are
    indicated by the inner "/ /"
    
    - The "g" is a global flag, meaning that
    regex will attempt to continue to search
    the string after the first valid match.
    */
  const regex = /\w/g;

  /* Using the regex pattern, str.match()
    will return an array of individual 
    string characters that matched the pattern. */
  let filteredArrayString = str.match(regex);
  let filteredString = filteredArrayString.join("");
  filteredString = filteredString.toLowerCase();

  let left = 0;
  let right = filteredString.length - 1;
  while (left < right) {
    if (filteredString[left] !== filteredString[right]) return false;
    left++;
    right--;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
