function getStringLength(str) {
  return str ? str.length : 0;
}
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}
function concatenateStrings(value1, value2) {
  return value1.concat('', value2);
}
function getFirstChar(value) {
  return value.charAt(0);
}
// function removeLeadingAndTrailingWhitespaces(/* value */) {
//   throw new Error('Not implemented');
// }

getStringLength('str');
isString('str');
concatenateStrings('str');
getFirstChar('str');
// removeLeadingAndTrailingWhitespaces,
// removeLeadingWhitespaces,
// removeTrailingWhitespaces,
// repeatString,
// removeFirstOccurrences,
// removeLastOccurrences,
// sumOfCodes,
// endsWith,
// startsWith,
// formatTime,
// reverseString,
// countVowels,
// orderAlphabetically,
// containsSubstring,
// isPalindrome,
// findLongestWord,
// reverseWords,
// invertCase,
// getStringFromTemplate,
// extractNameFromTemplate,
// extractEmails,
// unbracketTag,
// encodeToRot13,
// getCardId,
