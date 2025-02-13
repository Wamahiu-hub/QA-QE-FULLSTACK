let age = 25;
const schoolName = "Greenwood High";
let studentsList = [];
/*What is the difference between let, const, and var when declaring variables?
let declares variables that can be subject to change if need be.
const declares variables that can be termed as constant meaning they are not changeable e.g birthdate
var a way of declaring variables but it has been used for so long before but not common nowadays.
*/

/*2. Naming Conventions
Which of the following variable names is invalid?
let $price = 100;
//let 1stPlace = "John"; Ths one is wrong because in JS variable names cannot star with a number.
let _score = 89;
let userName = "Alice";
*/

Why is the following variable name incorrect?
const #taxRate = 0.16;  
//This variable is wrong because it starts with a hastag sign while JS variables can only start with an undrscore or 
//adollar sign.

/*Rewrite this variable name to follow best practices:
//let MyvariableNAME = "JavaScript";
let myVariableName = "JavaScript";
/*
/*. Identifying Data Types
//What will be the output of the following?
console.log(typeof "Hello");  = string
console.log(typeof 99);       =Number
console.log(typeof true);     =Boolean
console.log(typeof undefined);=Undefined
/*

//Identify the data types in this array:
//let data = ["Kenya", 34, false, { country: "USA" }, null];
Kenya = string
34 = Number
False = Boolean
{ country: "USA" } = Object
null = Null 

/*9. How do you define a BigInt in JavaScript? Provide an example.
Adding an n at the endof a big integer
e.g let average = 1200000020000200020020n
console .log(Average)
*/

4. //Objects & Arrays
11. //Create an object person with properties name, age, and city.
12. //Add a new property email to the person object.
13. //Declare an array fruits with three fruit names.
14. //Access the second item in the fruits array.

/*let person = {
    name = "Alex Mwangi";
    age = 34;
    city = "Nyeri";
    email = "Alexmwangi10@gmail.com";
}
    /*
let Fruits["Oranges","Mangoes","Apples"];

console.log(Fruits[1]);

//5. Type Coercion
15. //What will be the output of the following?
console.log("5" + 2); = 52
console.log( "5" - 2); = 3 
//16. Convert the string "100" into a number.
let num = Number("100");
console.log(num)
//17. Convert the number 50 into a string.
let num = Number(50);
let str = (50).toString();
console.log(str);
//18. What will be the result of this operation?
//console.log(5 + true);
6 because true is treated as one in arithmetic operations
