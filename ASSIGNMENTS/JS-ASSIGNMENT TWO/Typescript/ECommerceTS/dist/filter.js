var _a;
import { displayBooks } from "./products";
import { API_URL } from "./index";
function applyFilters() {
    const genre = document.getElementById("genreFilter").value.trim();
    const minYear = parseInt(document.getElementById("yearFilter").value) || 0;
    const minPages = parseInt(document.getElementById("pageFilter").value) || 0;
    const sortBy = document.getElementById("sortBy").value;
    fetch(`${API_URL}?limit=20`)
        .then(response => response.json())
        .then((books) => {
        let filteredBooks = books;
        // Apply genre filter
        if (genre) {
            filteredBooks = filteredBooks.filter((book) => book.genre === genre);
        }
        // Apply year filter
        if (minYear) {
            filteredBooks = filteredBooks.filter((book) => book.year >= minYear);
        }
        // Apply pages filter
        if (minPages) {
            filteredBooks = filteredBooks.filter((book) => book.pages >= minPages);
        }
        // Sort books
        filteredBooks.sort((a, b) => {
            if (sortBy === "year" || sortBy === "pages") {
                return a[sortBy] - b[sortBy];
            }
            return a.title.localeCompare(b.title);
        });
        displayBooks(filteredBooks);
    })
        .catch(error => console.error("Error filtering books:", error));
}
(_a = document.getElementById("applyFilters")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", applyFilters);
export { applyFilters };
export function updateCartUI() {
    const cartItemsContainer = document.getElementById("cartItems");
    const totalPriceElement = document.getElementById("totalPrice");
    const cartCountElement = document.getElementById("cartCount");
    if (!cartItemsContainer || !totalPriceElement || !cartCountElement)
        return;
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
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
            const target = event.target;
            const id = target.getAttribute("data-id");
            if (id) {
                removeFromCart(id);
            }
        });
    });
}
export function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
}
//# sourceMappingURL=filter.js.map