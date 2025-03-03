const store = {
    name: "Tech Haven",
    location: "Downtown, Metropolis",
    owner: {
      firstName: "John",
      lastName: "Doe",
      contact: "john@techhaven.com"
    },
    products: [
      { id: "P-101", name: "Laptop", price: "1200.00", category: "Electronics" },
      { id: "P-102", name: "Smartphone", price: "800.00", category: "Electronics" },
      { id: "P-103", name: "Headphones", price: "150.00", category: "Accessories" },
      { id: "P-104", name: "Monitor", price: "300.00", category: "Electronics" }
    ]
  };
  
 // Destructure store data
const { name, location, owner, products } = store;
const { firstName, lastName, contact } = owner;

// Inject store info into HTML
document.getElementById("store-info").innerHTML = `
  <h2>${name}</h2>
  <p><strong>Location:</strong> ${location}</p>
  <p><strong>Owner:</strong> ${firstName} ${lastName} (${contact})</p>
`;

// Generate product list using map()
const productsList = document.getElementById("products-list");
productsList.innerHTML = "<h2>Products</h2><ul>" + 
  products.map(product => `<li><strong>${product.name}</strong> - $${product.price} (${product.category})</li>`).join("") + 
  "</ul>";