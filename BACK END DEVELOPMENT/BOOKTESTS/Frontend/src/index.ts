import { books,} from "./products";
import { API_URL } from "./config";
import { Book, CartItem } from "./types";
import { fetchBooksFilter } from "./filter";

const fetchBook = async () => {
  try {
    const response = await fetch("http://localhost:3000/API/BOOKS")
    const books = await response.json()
    console.log(books)
    return books
  } catch (error) {
    console.error(error)
  }
}

fetchBook()

const displayBooks = (books: Book[]) => {
  const container = document.getElementById("book-list"); // Parent div to append books
  if (!container) return;

  // Use map() to create book elements as a single HTML string
  container.innerHTML = books
    .map(
      (book) => `
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
    `
    )
    .join(""); // Convert array to a single HTML string and insert into container
};
// Fetch books and display formatted details
fetchBook().then((books) => {
  if (books) {
    displayBooks(books);
  }
});

const applyFilters = async () => {
  const titleElement = document.getElementById("title") as HTMLInputElement;
  const genreElement = document.getElementById("genre") as HTMLInputElement;
  const yearElement = document.getElementById("year") as HTMLInputElement;

  const title = titleElement ? titleElement.value.trim() : "";
  const genre = genreElement ? genreElement.value.trim() : "";
  const year = yearElement ? yearElement.value.trim() : "";

  const params = new URLSearchParams();
  if (title) params.set("title", title);
  if (genre) params.set("genre", genre);
  if (year) params.set("year", year);

  // Update the URL without reloading the page
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.pushState({}, "", newUrl);

  // Fetch books based on filters
  const books = await fetchBooksFilter(`?${params.toString()}`);
  displayBooks(books);
};

// Load filters from URL on page load
const loadFiltersFromUrl = async () => {
  const params = new URLSearchParams(window.location.search);
  const title = params.get("title") || "";
  const genre = params.get("genre") || "";
  const year = params.get("year") || "";

  // Set input values from URL
  (document.getElementById("title") as HTMLInputElement).value = title;
  (document.getElementById("genre") as HTMLInputElement).value = genre;
  (document.getElementById("year") as HTMLInputElement).value = year;

  if (title || genre || year) {
    const books = await fetchBooksFilter(`?${params.toString()}`);
    displayBooks(books);
  }
};

// Attach event listeners for real-time filtering
document.getElementById("title")?.addEventListener("input", applyFilters);
document.getElementById("genre")?.addEventListener("input", applyFilters);
document.getElementById("year")?.addEventListener("input", applyFilters);
document.getElementById("applyFilters")?.addEventListener("click", applyFilters);

// Load filters when the page loads
window.addEventListener("load", loadFiltersFromUrl);





































let cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");


function addToCart(event: Event): void {
  const button = event.target as HTMLElement;
  if (!button) return;

  const id = button.getAttribute("data-id") || "";
  const title = button.getAttribute("data-title") || "Unknown Book";
  const priceString = button.getAttribute("data-price") || "0";
  const image = button.getAttribute("data-image") || "";


  const price = parseFloat(priceString);
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

  // updateCartUI();
}


function updateQuantity(id: string, change: number): void {
  const item = cart.find(item => item.id === id);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      cart = cart.filter(cartItem => cartItem.id !== id);
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  // updateCartUI();
}

export { addToCart, updateQuantity, API_URL };
