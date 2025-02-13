//1. Check if a String is a Palindrome
//Write a function to determine if a given string is a palindrome. A palindrome is a string that reads the same forward and backward (ignoring spaces, punctuation, and case).

function isPalindrome(str){
    //str = str.replace(/[0-9a-z]/gi, '').toLowerCase();
    str = str.replace(/[\.|,|?|!| ]/g, "").toLowerCase()
    const reversedString = str.split("").reverse("").join("") 
    return reversedString === str
  }
  console.log(isPalindrome('A man, a plan, a canal, panama'));
  console.log(isPalindrome('Was it a car or a cat I saw?'));
  console.log(isPalindrome('Hello, World!'));
  
  //2. Reverse a String
  //Write a function to reverse a given string.
  
  function reverse_string(str){
      return str = str.split("").reverse("").join("");
      
  }
  console.log (reverse_string('My cat is black'));
  
  
  //3. Find the Longest Palindromic Substring
  //Write a function to find the longest palindromic substring in a given string.
  
  function longestPalindromicSubstring(s) {
      let longest = "";
      for (let i = 0; i < s.length; i++) {
      for (let j = i + 1; j <= s.length; j++) {
        let substring = s.substring(i, j);
       if (substring === substring.split("").reverse().join("") && substring.length > longest.length) {
           longest = substring;
       } 
     }
  
      }
  
      return longest;
  }
  
  console.log(longestPalindromicSubstring('babad'));
  console.log(longestPalindromicSubstring('cbbd'));
  
  //4. Check if Two Strings are Anagrams
  //Write a function to check if two given strings are anagrams of each other. Two strings are anagrams if they contain the same characters in the same frequency but in different orders
   
  function  isAnagram(str1,str2) {
      str1 = str1.replace(/\s/g, '').toLowerCase ();
      str2 = str2.replace(/\s/g, '').toLowerCase ();
      
      return str1.split('').sort().join('') === str2.split('').sort().join('');
      return false(str1.length  !== str2.length)
  }
  
  console.log(isAnagram("listen", "silent"));
  console.log(isAnagram("Hello", "World"));
  
  //5. Remove Duplicates from a String
  //Write a function to remove duplicate characters from a string while preserving the order of the first appearance of each character.
  
  function removeDuplicates (str){
      return [...new Set (str)].join('')
  }
  console.log(removeDuplicates('programming'));
  console.log(removeDuplicates('Hello Worrld'));
  console.log(removeDuplicates('aaaaa'));
  console.log(removeDuplicates('abcd'));
  console.log(removeDuplicates('aabbcc'));
  
  //6. Count Palindromes in a String
  //Write a function to count how many distinct palindromes are in a given string. A palindrome is considered distinct based on its start and end position in the string.
  
  function countPalindromicSubstrings(str) {
      let seen = new Set();  
      function isPalindrome(sub) { 
          return sub === sub.split('').reverse().join('');
      }
      for (let i = 0; i < str.length; i++) {  
          for (let j = i + 1; j <= str.length; j++) { 
              let substring = str.substring(i, j);
              if (isPalindrome(substring)) {  
                  seen.add(substring);  
              }
          }
      }
  
      return seen.size;  
  }
  console.log(countPalindromicSubstrings("ababa"));
  console.log(countPalindromicSubstrings("racecar"));
  console.log(countPalindromicSubstrings("aabb"));
  console.log(countPalindromicSubstrings("a"));
  console.log(countPalindromicSubstrings("abc"));
  
  //7. Longest Common Prefix
  //Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string.
  
  function longestCommonPrefix(strs) {
      if (!strs.length) return "";
  
      let prefix = strs[0];
  
      for (let i = 0; i < prefix.length; i++) {
          let char = prefix[i];
          if (!strs.every(str => str[i] === char)) {
              return prefix.substring(0, i);
          }
      }
  
      return prefix;
  }
  
  // Example usage
  console.log(longestCommonPrefix(["flower", "flow", "flight"]));
  console.log(longestCommonPrefix(["dog", "racecar", "car"]));
  console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"]));
  console.log(longestCommonPrefix(["prefix", "prefixes", "preform"]));
  console.log(longestCommonPrefix(["apple", "banana", "cherry"]));
  
  
  //8. Case Insensitive Palindrome
  //Modify the palindrome function to be case insensitive, meaning it should ignore upper and lower case differences when checking for a palindrome.
  
  function isCaseInsensitivePalindrome(str){
      str = str.toLowerCase();
      return str === str.split('').reverse().join('');
  }
  console.log(isCaseInsensitivePalindrome('Aba'))
  console.log(isCaseInsensitivePalindrome('RaceCar'))
  console.log(isCaseInsensitivePalindrome('Hello'))
  console.log(isCaseInsensitivePalindrome('madam'))