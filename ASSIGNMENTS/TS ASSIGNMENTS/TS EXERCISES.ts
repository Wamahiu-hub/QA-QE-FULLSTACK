//function getUsername(username: string) {
  //  if (username !== null) {
  //    return `User: ${username}`
   // } else {
  //    return 'Guest'
   // }
 // }

//Question 1
// Exercise 1. Currently, the username parameter only accepts a string type, and the check for null isn't doing anything. Update the function parameter's type so the errors are resolved and the function can handle null.
  

function getUsername(username: string | null): string {
    return username ?? "Guest"; 
  }
  
  const result = getUsername("Alice"); 
  const result2 = getUsername(null); 
  
  
  //Question 1
  //Exercise 2: Restricting Function Parameters
  //Make the move function to only accept up,down,left or riight.
  
  //function move(direction: string, distance: number) {
    // Move the specified distance in the given direction
  //}
  


  function move(direction: "up" | "down" | "left" | "right", distance: number) {
    console.log(`Moving ${distance} units ${direction}`);
  }
  
  
  move("up", 10);   
  move("right", 5); 
  
  //Question 2
  //Exercise 1: Narrowing with if Statements
  //rewrite the validateUsername function to add narrowing so that the null case is handled and the tests all pass.
  
  //function validateUsername(username: string | null): boolean {
   // return username.length > 5
  //'username' is possibly 'null'.
  
  //  return false
 // }
  
  
  
 function validateUsername(username: string | null): boolean {
    if (!username) {
      return false; 
    }
    return username.length > 5;
  }
  
  
  console.log(validateUsername("Matt1234")); 
  console.log(validateUsername("Alice")); 
  console.log(validateUsername("Bob")); 
  console.log(validateUsername(null)); 
  console.log(validateUsername("")); 

//Question 2
//Exercise 2: Throwing Errors to Narrow

//Here we have a line of code that uses document.getElementById to fetch an HTML element, which can return either an HTMLElement or null:

//const appElement = document.getElementById('app')
//use throw to narrow down the type of appElement before it's checked by the test.


const appElement = document.getElementById('app');
if (!appElement) {
  throw new Error("Element with ID 'app' not found");
}




  
  
  

 

  

