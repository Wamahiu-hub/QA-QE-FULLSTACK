document.addEventListener("DOMContentLoaded", () => {
    const productContainer = document.getElementById("product-container");

 
    fetch("http://localhost:3000/products")  
        .then(response => response.json())  
        .then(products => {
            products.forEach(product => {  
                const productCard = document.createElement("div");
                productCard.classList.add("product-card");

              
                productCard.innerHTML = `
                    <h2>${product.name}</h2><br>
                    <img src ="${product.images}" alt = "${product.name}">
                    <p><strong>ID:</strong> ${product.id}</p><br>
                    <p><strong>Description:</strong> ${product.description}</p><br>
                    <p><strong>Price:</strong> $${product.price}</p><br>
                    <p><strong>Category:</strong> ${product.category}</p><br>
                    <p><strong>Stock:</strong> ${product.stock} available</p><br><br><br>
                    <button class="Mybtn">Confirm purchase</button>
                    
                `;

                productContainer.appendChild(productCard); 
            });
        })
        .catch(error => console.error("Error fetching products:", error));
});
