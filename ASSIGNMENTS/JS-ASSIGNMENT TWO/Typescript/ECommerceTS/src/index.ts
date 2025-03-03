import { displayBooks } from "./products";
import { API_URL } from "./config";
import { CartItem } from "./types";
import { updateCartUI } from "./filter" ;

displayBooks();


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

  updateCartUI();
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
  updateCartUI();
}

export { addToCart, updateQuantity, API_URL };
