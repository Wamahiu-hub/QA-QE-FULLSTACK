const store = {
    name: "Tech Haven",
    location: "Downtown, Metropolis",
    owner: {
      firstName: "John",
      lastName: "Doe",
      contact: "john@techhaven.com",
      info: {
        adress: "Kimathi",
        phoneNumber: 566778898,
        houseNumber: "1245678",
        maritalStatus: "married"
      }
    },
    products: [
      { id: "P-101", name: "Laptop", price: "1200.00", category: "Electronics" },
      { id: "P-102", name: "Smartphone", price: "800.00", category: "Electronics" },
      { id: "P-103", name: "Headphones", price: "150.00", category: "Accessories" },
      { id: "P-104", name: "Monitor", price: "300.00", category: "Electronics" }
    ]
  };
  const {owner:{lastName}} = store
  const {owner:{info: {phoneNumber}}} = store
  const{products} = store
  const{owner:{contact}} = store
  const {owner:{info:{maritalStatus}}}= store
  console.log(phoneNumber)
  console.log(contact)


  const{owner:{info:{houseNumber}}} = store
  console.log(lastName)
  console.log(products)
  console.log(maritalStatus)