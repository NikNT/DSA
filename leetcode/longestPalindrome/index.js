function longestPalindrome(s) {
  var obj = {};
  var sum = 0;

  for (var i = 0; i < s.length; i++) {
    var char = s[i];
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char] = 0;
      sum += 2;
    }
  }

  if (sum < s.length) {
    return sum + 1;
  } else {
    return sum;
  }
}
var s = "abccccdd";
console.log(longestPalindrome(s));
