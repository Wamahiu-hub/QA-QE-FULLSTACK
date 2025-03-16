import { API_URL } from "./config";
import { fetchBooksFilter } from "./filter";

// Fetch Books
const fetchBook = async () => {
    try {
        const response = await fetch(`${API_URL}/books`);
        if (!response.ok) throw new Error("Failed to fetch books");
        const books = await response.json();
        console.log(books);
        return books;
    } catch (error) {
        console.error("Error fetching books:", error);
        return [];
    }
};

// Display Books
const displayBooks = (books) => {
    const container = document.getElementById("book-list");
    if (!container) return;
    container.innerHTML = books
        .map((book) => `
      <div class="book-card">
        <div class="book-content">
          <img src="${book.image}" alt="${book.title}" style="width:100%;">
          <p><strong>Title:</strong> ${book.title}</p>
          <p><strong>Author:</strong> ${book.author}</p>
          <p><strong>Genre:</strong> ${book.genre}</p>
          <p><strong>Year:</strong> ${book.year}</p>
          <p><strong>Pages:</strong> ${book.pages}</p>
          <p><strong>Price:</strong> KSH ${book.price}</p>
          <button class="buy-now" data-id="${book.id}" data-title="${book.title}" data-price="${book.price}" data-image="${book.image}">
            Buy Now
          </button>
        </div>
      </div>
    `)
        .join("");
};

// Fetch and Display Books
fetchBook().then((books) => {
    if (books.length) {
        displayBooks(books);
    }
});

// Apply Filters
const applyFilters = async () => {
    const title = document.getElementById("title")?.value.trim() || "";
    const genre = document.getElementById("genre")?.value.trim() || "";
    const year = document.getElementById("year")?.value.trim() || "";
    
    const params = new URLSearchParams();
    if (title) params.set("title", title);
    if (genre) params.set("genre", genre);
    if (year) params.set("year", year);

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, "", newUrl);

    const books = await fetchBooksFilter(`?${params.toString()}`);
    displayBooks(books);
};

// Load Filters from URL
const loadFiltersFromUrl = async () => {
    const params = new URLSearchParams(window.location.search);
    document.getElementById("title").value = params.get("title") || "";
    document.getElementById("genre").value = params.get("genre") || "";
    document.getElementById("year").value = params.get("year") || "";

    if ([params.get("title"), params.get("genre"), params.get("year")].some(Boolean)) {
        const books = await fetchBooksFilter(`?${params.toString()}`);
        displayBooks(books);
    }
};

// Attach Event Listeners
document.getElementById("title")?.addEventListener("input", applyFilters);
document.getElementById("genre")?.addEventListener("input", applyFilters);
document.getElementById("year")?.addEventListener("input", applyFilters);
document.getElementById("applyFilters")?.addEventListener("click", applyFilters);
window.addEventListener("load", loadFiltersFromUrl);

// Cart Management
let cart = JSON.parse(localStorage.getItem("cart") || "[]");

function addToCart(event) {
    const button = event.target;
    if (!button) return;

    const id = button.getAttribute("data-id") || "";
    const title = button.getAttribute("data-title") || "Unknown Book";
    const price = parseFloat(button.getAttribute("data-price") || "0");
    const image = button.getAttribute("data-image") || "";

    if (isNaN(price)) {
        console.error("Invalid price for item:", title);
        return;
    }

    const existingItem = cart.find(item => item.id === id);
    existingItem ? existingItem.quantity++ : cart.push({ id, title, price, image, quantity: 1 });

    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) cart = cart.filter(cartItem => cartItem.id !== id);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
}

export { addToCart, updateQuantity };
