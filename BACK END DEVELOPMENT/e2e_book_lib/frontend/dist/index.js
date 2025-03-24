var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { loginUser } from "./auth/login";
import { registerUser } from "./auth/register";
import { fetchBooks } from "./endpoints/fetchBooks";
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
            event.preventDefault(); // Prevent default form submission
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const role = document.getElementById("role").value;
            if (!name || !email || !password || !role) {
                alert("Please fill in all fields.");
                return;
            }
            yield registerUser({
                name,
                email,
                password_hash: password,
                role_id: role,
            });
        }));
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
            event.preventDefault(); // Prevent default form submission
            const emailInput = document.getElementById("email");
            const passwordInput = document.getElementById("password");
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
            yield loginUser({
                email,
                password,
            });
        }));
    }
});
fetchBooks();
//# sourceMappingURL=index.js.map