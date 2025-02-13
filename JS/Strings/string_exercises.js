//JavaScript String Practice Questions
//1. Check String Input

// Question 1
//Check String Input 
// Write a JavaScript function to check whether an 'input' is a string or not
function is_string(input) {
    return typeof input === "string";
}
console.log(is_string('w3resource')); // true
console.log(is_string([1, 2, 4, 0])); // false

// Question 2 
//Check Blank String
//  Write a JavaScript function to check whether a string is blank or not.
function is_Blank(str) {
    return typeof str === "string" && str.trim() === "";
}
console.log(is_Blank('')); // true
console.log(is_Blank('abc')); // false
// Question 3 
//String to Array of Words
// Write a JavaScript function to split a string and convert it into an array of words

function string_to_array(str) {
    return str.split(/\s+/); // Splits by one or more spaces
}
console.log(string_to_array("Robin Singh")); // ["Robin", "Singh"]
//Question 4
//Extract Characters
// Write a JavaScript function to extract a specified number of characters from a
//string.

function truncate_string(str,num){
    return str.slice(0,num);
}
console.log(truncate_string("Robin Singh", 4)); // "Robi"
//Question 5
//Abbreviate Name
//Write a JavaScript function to convert a string into abbreviated form

function abbrev_name(name) {
    let parts = name.split(" ");
    return parts.length > 1 ? `${parts[0]} ${parts[1][0]}.` : name;
}
console.log(abbrev_name("Robin Singh")); // "Robin S."

// Question 6
//Hide Email Address
// Write a JavaScript function that hides email addresses to prevent unauthorized
//access

function protect_email(email){
    let parts = email.split("@");
    return parts[0] .slice(0,5) +"...@" + parts[1];
}

console.log(protect_email("robin_singh@example.com")); //
"robin...@example.com"

//Question 7 
//Parameterize String
// Write a JavaScript function to parameterize a string.
function string_parameterize (str){
    return (str)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
}
    console.log(string_parameterize("Robin Singh from USA.")); //
    "robin-singh-from-usa"
//Question 8 
//Capitalize First Letter
// Write a JavaScript function to capitalize the first letter of a string.
    function capitalize (str){
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
        
    }

    console.log(capitalize('js string exercises')); // "Js string exercises"
    
// Question 9 
// Capitalize Each Word
// Write a JavaScript function to capitalize the first letter of each word in a string.
function capitalize_Words (str){
    return str.toUpperCase ()
}
console.log(capitalize_Words('js string exercises')); // "Js String Exercises"
//question 10 
// Swap Case
// Write a JavaScript function that converts uppercase letters to lowercase and vice

console.log(swapcase('AaBbc')); // "aAbBC"
function swapcase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        }
        else {
            result += char.toUpperCase();
        }
    }
    return result;
}
console.log(swapcase('AaBbc')); // "aAbBC"
//Question 11
//Camelize String
//Write a JavaScript function to convert a string into camel case



function camelize(str) {
    return str
        .split(' ')            
        .map((word, index) => {
            return index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');             
}

console.log(camelize("JavaScript Exercises")); // "JavaScriptExercises

//Question 12
//Uncamelize String
//Write a JavaScript function to uncamelize a string.


function uncamelize(str) {
return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}
console.log(uncamelize('helloWorld')); // "hello world"
//Queston 13
//Repeat String
//Write a JavaScript function to concatenate a given string n times.

function repeat(str,n){
    return str.repeat(n);
}
console.log(repeat('Ha!', 3)); // "Ha!Ha!Ha!"
//Question 14
//Insert in String
//Write a JavaScript function to insert a string within another string at a given
//position.
function insert(mainStr,insertStr,position){
    let parts = [mainStr.slice(0, position), insertStr, mainStr.slice(position)];
    return parts.join('');
}

console.log(insert('We are doing some exercises.', 'JavaScript ', 18));
//Question 15
//Humanize Format
// Write a JavaScript function that formats a number with the correct suffix (1st,
//2nd, etc.)
function humanize_format(num) {
    let suffixes = ["th", "st", "nd", "rd"];
    let lastDigit = num % 10;
    let lastTwoDigits = num % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return num + "th";
    }
    return num + (suffixes[lastDigit] || "th")
}
//Question 16
//Truncate String with Ellipsis
//Write a JavaScript function to truncate a string and append "...".


function text_truncate(str, num, ending = "...") {
    return str.length > num ? str.slice(0, num) + ending : str;
}

console.log(text_truncate('We are doing JS string exercises.', 15, '!!')); // "We are doing !!"
//Question 17
// Chop String into Chunks
// Write a JavaScript function to chop a string into chunks

function string_chop(str, size) {
  let chunks = [];
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.slice(i, i + size));
  }
  return chunks;
}
console.log(string_chop('w3resource', 3)); // ["w3r", "eso", "urc", "e"]

//Question 18
// Count Substring Occurrences
//Write a JavaScript function to count occurrences of a substring in a string
function count(str, sub) {
    return str.toLowerCase().split(sub.toLowerCase()).length - 1;
}

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Output: 2

//Question 19
// Reverse Binary Representation
// Write a JavaScript function that reverses the binary representation of a number
//and returns its decimal form.

function reverse_binary(num){
    let binary = num.toString(2);
    let reversedBinary = binary.split('').reverse().join('');
    return parseInt(reversedBinary, 2);
}
console.log(reverse_binary(100)); // 19
//Question 20
//Pad String to Length
// Write a JavaScript function to pad a string to a specified length.

function formatted_string(pad, str, side){
    str = str.toString();
    return side === 'l'
    ? (pad + str).slice(-pad.length)
    : (str + pad).slice(0, pad.length);
}
console.log(formatted_string('0000', 123, 'l')); // "0123"

