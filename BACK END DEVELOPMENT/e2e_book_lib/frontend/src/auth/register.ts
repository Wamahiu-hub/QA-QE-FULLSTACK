import { RegisterData } from "../types";

export const registerUser = async (data: RegisterData) => {
    try {
        const response = await fetch("http://localhost:3000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            credentials: "include", // Include cookies for authenticated requests
        });

        const result = await response.json();
        if (!response.ok) {
            throw new Error(result.message || "Registration failed");
        }

        alert("Registration successful!"); // Show success message
        window.location.href = "/login"; // Redirect to the login page
        return result;
    } catch (error) {
        console.error("Error registering user:", error);
        alert(error);
    }
};