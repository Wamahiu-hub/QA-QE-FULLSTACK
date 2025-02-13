//Anything that holds data is an object
// A data structure is anything that holds data ina certain structure
//example a data structure that holds data in form of keys and value pairs
//An object can e creates  using {} - [[prototype]] :object
//on an objevt you can add cooma after every part of the key
//{key1 : value,key2 : value}

//empty object
const myObject = {}
console.log(typeOf myObject)// object
// how to add data to an object
//using dot notation
//objectNme.key = value

myObject.FirstName = 'Alamin'
myObject.age = 25
myObject.marks = [123, 45, 67, 78]
myObject.info = {idNum: 72727272,country: 'Kenya'}
console.log(myObject)

//objects can contain different types of data

const Bruno  = {
    fname:'Bruno',// string
    marks: [23,45,D minus],//arrays
    goveInfo: {
        idNumber: 0989899
        location: 'Nairobi'
    }

}
//accessing modifers in objects
//1. dot notation
//2. index string type
//3. usng object.keys
//4. destructuring 
//5. using this keyword

// 1. using dot notation
//objectName.keyName
console.log(Bruno.age)//26

//2. index string type
//pass in a keyb as a string inside []
syntax is objectName{'keyName'}
console.log(Bruno["age"])// 26

//3. usng object.keys a static method that retuns an array of a given objects own enumerable strong keyed property names
//accessing age key 
console.log(object,keys(Bruno)[1]//)// age
////5. using this keyword
//this key word is used torefer 
