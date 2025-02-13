import { Console } from "console"
import { CLIENT_RENEG_LIMIT } from "tls"

let myName=""// empty string
let fName = "shakira"
console.log(fName)
let name = 'Alice'
console.log(name.length)

let Mname = "ALICE"
console.log(Mname.length)

let firstName= "Julia";
let secondName= "Mwangi";

console.log(firstName.concat(" " , secondName)); // Takes first name and concats or joins it to the second name .
// something to note is that you must put a space betweeen the to quotes for it to return a name with a space.

const Iname = "Ann Kipkoech keio";
console.log(Iname.indexOf("Kipkoech"));
let first = Iname.indexOf("k");
console.log(Iname.indexOf("k", first))

let animalName = "ELEPHANT"
console.log(animalName.toLowerCase())

let Uname = "wendani"
console.log(Uname.split(""))

function reverseString(str){
    return str.split("").reverse().join("") // splits the string then reveres it and fnally joins it
}
console.log(reverseString("hello"));
console.log(reverseString("magic")); // reveres the string

let sentence = "I am a student" //gives stud because it takes chaacter at index 7,counts to 11 and subtracts one so it be like (7-(11-1))
console.log(sentence.substring(7,11))

let sentence1 = "Hellowz my name is juma"
console.log(sentence1.substr(2,5))

//substr(starting index,number of characters)
let jsentence = "I am a blogger"
console.log(sentence.substr(7,4))

// trim.This one removes white spaces

let sent = "     the percel was sent       "
console.log(sent) // this one is what it returns before trim
console.log(sent.trim()) // this one is what it returns after trim
console.log(sent.trimStart()) // this is when you only trim the strt of the sentence
console.log(sent.trimEnd()) // this is when you trim the end and leave the start
