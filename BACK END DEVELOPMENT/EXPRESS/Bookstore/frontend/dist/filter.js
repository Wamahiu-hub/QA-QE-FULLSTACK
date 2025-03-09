var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const fetchBooksFilter = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (queryParams = "") {
    try {
        const response = yield fetch(`http://localhost:3000/api/books/filter${queryParams}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
            throw new Error("Failed to fetch books");
        }
        return yield response.json();
    }
    catch (error) {
        console.error("Error fetching books:", error);
        return [];
    }
});
// document.getElementById("applyFilters")?.addEventListener("click", applyFilters);
// export function updateCartUI(): void {
//   const cartItemsContainer = document.getElementById("cartItems");
//   const totalPriceElement = document.getElementById("totalPrice");
//   const cartCountElement = document.getElementById("cartCount");
//   if (!cartItemsContainer || !totalPriceElement || !cartCountElement) return;
//   let cart: { id: string; title: string; price: number; image: string; quantity: number }[] =
//     JSON.parse(localStorage.getItem("cart") || "[]");
//   cartItemsContainer.innerHTML = "";
//   let totalPrice = 0;
//   let totalCount = 0;
//   cart.forEach((item) => {
//     totalPrice += item.price * item.quantity;
//     totalCount += item.quantity;
//     const cartItemElement = document.createElement("div");
//     cartItemElement.innerHTML = `
//       <div class="cart-item">
//         <img src="${item.image}" alt="${item.title}" style="width: 50px;">
//         <p>${item.title} - KSH ${item.price} x ${item.quantity}</p>
//         <button class="remove" data-id="${item.id}">Remove</button>
//       </div>
//     `;
//     cartItemsContainer.appendChild(cartItemElement);
//   });
//   totalPriceElement.textContent = `Total: KSH ${totalPrice.toFixed(2)}`;
//   cartCountElement.textContent = `${totalCount}`;
//   // Add event listeners to remove buttons
//   document.querySelectorAll(".remove").forEach((button) => {
//     button.addEventListener("click", (event) => {
//       const target = event.target as HTMLElement;
//       const id = target.getAttribute("data-id");
//       if (id) {
//         removeFromCart(id);
//       }
//     });
//   });
// }
// export function removeFromCart(id: string): void {
//   let cart: { id: string; title: string; price: number; image: string; quantity: number }[] =
//     JSON.parse(localStorage.getItem("cart") || "[]");
//   cart = cart.filter((item) => item.id !== id);
//   localStorage.setItem("cart", JSON.stringify(cart));
//   updateCartUI();
// }
//# sourceMappingURL=filter.js.map