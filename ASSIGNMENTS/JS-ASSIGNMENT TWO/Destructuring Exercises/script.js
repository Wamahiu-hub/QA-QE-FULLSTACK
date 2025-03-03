const user = {
  id: "USER-123456",
  name: {
    first: "Alice",
    last: "Liddell",
  },
  email: "alice@example.com",
  address: {
    shipping: {
      street: "123 Rabbit Hole",
      city: "Wonderland",
      state: "Fantasy",
      postalCode: "12345",
      country: "WL",
    },
    billing: {
      street: "456 Mad Hatter Lane",
      city: "Tea Party",
      state: "Fantasy",
      postalCode: "67890",
      country: "WL",
    },
  },
  payment: {
    total: "100.00",
    currency: "USD",
    details: {
      subtotal: "75.00",
      tax: "15.00",
      shipping: "10.00",
    },
    transactions: [
      { id: "TXN-123", amount: "50.00", description: "Magic Potion" },
      { id: "TXN-456", amount: "50.00", description: "Enchanted Sword" },
    ],
  },
};
const personalInfo = document.getElementById("personal-info");
const shippingInfo = document.getElementById("shipping-address");
const billinglnfo = document.getElementById("billing-address");
const transactionlnfo = document.getElementById("transactions");

function InjectData() {
  const {id, name: { first, last }, email} = user;

  personalInfo.innerHTML = `
  <hr>
    <h2>User :${id}</h2>
    <p2><strong>first Name</strong>:${first}</p2><br><br>
    <p2><strong>Last Name</strong>:${last}</p2><br><br>
    <p2><strong>email</strong>:${email}</p2><hr>`

  
  const {address:{shipping:{street,city,state,postalCode,country}}} = user
  
  shippingInfo.innerHTML = ` 
    <h2>street:${street}</h2>
    <p2><strong>city</strong>:${city}</p2><br><br>
    <p2><strong>state</strong>:${state}</p2><br><br>
    <p2><strong>postalCode</strong>:${postalCode}</p2><br><br>
    <p2><strong>country</strong>:${country}</p2>
    `

    const {address:{shipping:{street:street1,city:city1,state:state1,postalCode:postalCode1,country:country1}}} = user

    billinglnfo.innerHTML = ` 
    <hr>
    <h2>street:${street1}</h2>
    <p3><strong>city</strong>:${city1}</p3><br><br>
    <p3><strong>state</strong>:${state1}</p3><br><br>
    <p3><strong>postalCode:</strong>${postalCode1}</p3><br><br>
    <p3><strong>country</strong>:${country1}</p3>`

    const {payment:{transactions}} = user
// an unordered list that will hold the transaction
    const list = document.createElement("ul")
// loop through each transaction using .map()
    transactions.map(transaction => {
// destructure the transaction to get id, amount and desc
        const{id,amount,description} = transaction
// create a list element (<li>) for the transaction
        const listItem = document.createElement("li")
// add the details to the list element using template literals
        listItem.innerHTML = `
        <p><strong>id</strong>: ${id} </p>
        <p><strong>description</strong>: ${description} </p>
        <p><strong>amount</strong>: ${amount} </p>
        `
// append the transaction/list item to the unordered list
        list.append(listItem)
        
    })
// append the list to the transactions section
transactionlnfo.append(list)
}
InjectData();
