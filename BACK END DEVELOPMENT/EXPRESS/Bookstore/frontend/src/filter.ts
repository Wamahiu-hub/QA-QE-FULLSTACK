import { Book } from "./types";
import { displayBooks } from "./products";
import { API_URL } from "./index";

function applyFilters(): void {
  const genre = (document.getElementById("genreFilter") as HTMLSelectElement).value.trim();
  const minYear = parseInt((document.getElementById("yearFilter") as HTMLInputElement).value) || 0;
  const minPages = parseInt((document.getElementById("pageFilter") as HTMLInputElement).value) || 0;
  const sortBy = (document.getElementById("sortBy") as HTMLSelectElement).value;

  fetch(`${API_URL}?limit=20`)
    .then(response => response.json())
    .then((books: Book[]) => {
      let filteredBooks: Book[] = books;

      // Apply genre filter
      if (genre) {
        filteredBooks = filteredBooks.filter((book: Book) => book.genre === genre);
      }

      // Apply year filter
      if (minYear) {
        filteredBooks = filteredBooks.filter((book: Book) => book.year >= minYear);
      }

      // Apply pages filter
      if (minPages) {
        filteredBooks = filteredBooks.filter((book: Book) => book.pages >= minPages);
      }

      // Sort books
      filteredBooks.sort((a: Book, b: Book) => {
        if (sortBy === "year" || sortBy === "pages") {
          return (a as any)[sortBy] - (b as any)[sortBy];
        }
        return a.title.localeCompare(b.title);
      });

      displayBooks(filteredBooks);
    })
    .catch(error => console.error("Error filtering books:", error));
}

document.getElementById("applyFilters")?.addEventListener("click", applyFilters);

export { applyFilters };

export function updateCartUI(): void {
  const cartItemsContainer = document.getElementById("cartItems");
  const totalPriceElement = document.getElementById("totalPrice");
  const cartCountElement = document.getElementById("cartCount");

  if (!cartItemsContainer || !totalPriceElement || !cartCountElement) return;

  let cart: { id: string; title: string; price: number; image: string; quantity: number }[] =
    JSON.parse(localStorage.getItem("cart") || "[]");

  cartItemsContainer.innerHTML = "";
  let totalPrice = 0;
  let totalCount = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.quantity;
    totalCount += item.quantity;

    const cartItemElement = document.createElement("div");
    cartItemElement.innerHTML = `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.title}" style="width: 50px;">
        <p>${item.title} - KSH ${item.price} x ${item.quantity}</p>
        <button class="remove" data-id="${item.id}">Remove</button>
      </div>
    `;

    cartItemsContainer.appendChild(cartItemElement);
  });

  totalPriceElement.textContent = `Total: KSH ${totalPrice.toFixed(2)}`;
  cartCountElement.textContent = `${totalCount}`;

  // Add event listeners to remove buttons
  document.querySelectorAll(".remove").forEach((button) => {
    button.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      const id = target.getAttribute("data-id");
      if (id) {
        removeFromCart(id);
      }
    });
  });
}

export function removeFromCart(id: string): void {
  let cart: { id: string; title: string; price: number; image: string; quantity: number }[] =
    JSON.parse(localStorage.getItem("cart") || "[]");

  cart = cart.filter((item) => item.id !== id);

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
}
