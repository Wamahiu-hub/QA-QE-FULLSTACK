import { loginUser } from "./auth/login";
import { registerUser } from "./auth/register";
import { fetchBooks } from "./endpoints/fetchBooks";



document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault(); // Prevent default form submission

      const name = (document.getElementById("name") as HTMLInputElement).value;
      const email = (document.getElementById("email") as HTMLInputElement).value;
      const password = (document.getElementById("password") as HTMLInputElement).value;
      const role = (document.getElementById("role") as HTMLSelectElement).value;

      if (!name || !email || !password || !role) {
        alert("Please fill in all fields.");
        return;
      }

      await registerUser({
        name,
        email,
        password_hash: password,
        role_id: role,
      });
    });
  }
});






document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault(); // Prevent default form submission

            const emailInput = document.getElementById("email") as HTMLInputElement | null;
            const passwordInput = document.getElementById("password") as HTMLInputElement | null;

            if (!emailInput || !passwordInput) {
                console.error("Email or password input not found");
                return;
            }

            const email = emailInput.value;
            const password = passwordInput.value;

            if (!email || !password) {
                alert("Please fill in all fields.");
                return;
            }

            await loginUser({
                email,
                password,
            });
        });
    }
});


fetchBooks()

