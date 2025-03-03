const API_URL = "http://localhost:3001/books"; 
let cart = JSON.parse(localStorage.getItem("cart")) || [];


async function fetchBooks() {
    try {
        const response = await fetch(API_URL);
        const books = await response.json();
        displayBooks(books);
    } catch (error) {
        console.error("Error fetching books:", error);
    }
}


function displayBooks(books) {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    if (books.length === 0) {
        bookList.innerHTML = "<p>No books found.</p>";
        return;
    }

    books.forEach(({ id, title, author, genre, year, pages, price, image }) => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");
        bookElement.innerHTML = `
            <h3>${title}</h3>
            <img src="${image}" alt="${title}">
            <p><strong>Author:</strong> ${author}</p>
            <p><strong>Genre:</strong> ${genre}</p>
            <p><strong>Year:</strong> ${year}</p>
            <p><strong>Pages:</strong> ${pages}</p>
            <p><strong>Price:</strong> ${price}</p>
            <button class="buy-now" data-id="${id}" data-title="${title}" data-price="${price}" data-image="${image}">Buy Now</button>
        `;

        bookList.appendChild(bookElement);
    });

    // Add event listeners to "Buy Now" buttons
    document.querySelectorAll(".buy-now").forEach(button => {
        button.addEventListener("click", addToCart);
    });
}

// Add a book to the cart
function addToCart(event) {
    const button = event.target;
    const id = button.getAttribute("data-id");
    const title = button.getAttribute("data-title");
    const priceString = button.getAttribute("data-price"); // Get the price as a string
    const price = parseFloat(priceString.replace("KSH ", "")); // Remove "KSH " and parse as a number
    const image = button.getAttribute("data-image");

   
    if (isNaN(price)) {
        console.error("Invalid price for item:", title);
        return;
    }

   
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1; 
    } else {
        cart.push({ id, title, price, image, quantity: 1 }); 
    }

   
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
}


async function updateCartUI() {
    const cartContainer = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const totalPriceElement = document.getElementById("totalPrice");

    cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartContainer.innerHTML = "";
    let totalItems = 0;
    let totalPrice = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        try {
            const response = await fetch(API_URL);
            const books = await response.json();

            cart.forEach(item => {
                const book = books.find(book => book.id === item.id);
                if (book) {
                   
                    item.price = parseFloat(book.price.replace("KSH ", ""));
                }

                // Validate price
                if (isNaN(item.price)) {
                    console.error("Invalid price for item:", item.title);
                    return;
                }

                
                totalItems += item.quantity;
                totalPrice += item.price * item.quantity;

                // Create cart item element
                const cartItem = document.createElement("div");
                cartItem.classList.add("cart-item");
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.title}" class="cart-img">
                    <div>
                        <p>${item.title} - KSH ${item.price} x ${item.quantity}</p>
                        <div>
                            <button onclick="updateQuantity('${item.id}', -1)">➖</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateQuantity('${item.id}', 1)">➕</button>
                        </div>
                    </div>
                `;
                cartContainer.appendChild(cartItem);
            });

            // Update localStorage
            localStorage.setItem("cart", JSON.stringify(cart));
        } catch (error) {
            console.error("Error fetching books for cart update:", error);
        }
    }

   
    cartCount.textContent = totalItems;
    totalPriceElement.innerHTML = `Total: KSH ${totalPrice.toFixed(2)}`;
}


function updateQuantity(id, change) {
    const item = cart.find(item => item.id === id);

    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== id); // Remove item if quantity is 0
        }
    }

    
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
}

// Toggle the cart modal
function toggleCart() {
    const cartModal = document.getElementById("cartModal");
    cartModal.style.display = (cartModal.style.display === "block") ? "none" : "block";
}

// Apply filters to the book list
function applyFilters() {
    const genre = document.getElementById("genreFilter").value;
    const minYear = parseInt(document.getElementById("yearFilter").value) || 0;
    const minPages = parseInt(document.getElementById("pageFilter").value) || 0;
    const sortBy = document.getElementById("sortBy").value;

    fetch(API_URL)
        .then(response => response.json())
        .then(books => {
            let filteredBooks = books;

            // Apply genre filter
            if (genre) {
                filteredBooks = filteredBooks.filter(book => book.genre === genre);
            }

            // Apply year filter
            if (minYear) {
                filteredBooks = filteredBooks.filter(book => book.year >= minYear);
            }

            // Apply pages filter
            if (minPages) {
                filteredBooks = filteredBooks.filter(book => book.pages >= minPages);
            }

            // Sort books
            filteredBooks.sort((a, b) => {
                if (sortBy === "year" || sortBy === "pages") {
                    return a[sortBy] - b[sortBy];
                }
                return a.title.localeCompare(b.title);
            });

            // Display filtered books
            displayBooks(filteredBooks);
        })
        .catch(error => console.error("Error filtering books:", error));
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
    fetchBooks();
    updateCartUI();
});