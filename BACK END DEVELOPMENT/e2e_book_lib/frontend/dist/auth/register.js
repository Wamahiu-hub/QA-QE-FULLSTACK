var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const registerUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch("http://localhost:3000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            credentials: "include", // Include cookies for authenticated requests
        });
        const result = yield response.json();
        if (!response.ok) {
            throw new Error(result.message || "Registration failed");
        }
        alert("Registration successful!"); // Show success message
        window.location.href = "/login"; // Redirect to the login page
        return result;
    }
    catch (error) {
        console.error("Error registering user:", error);
        alert(error);
    }
});
//# sourceMappingURL=register.js.map