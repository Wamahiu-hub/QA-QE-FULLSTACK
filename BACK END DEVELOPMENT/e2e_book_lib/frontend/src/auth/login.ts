import { LoginData } from "../types";

export const loginUser = async (data: LoginData) => {
    try {
        const response = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            credentials: "include", // Include cookies for authenticated requests
        });

        // Check if the response is JSON
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            throw new Error("Invalid response from server");
        }

        const result = await response.json();
        console.log("Login response:", result);

        if (!response.ok) {
            throw new Error(result.message || "Login failed");
        }

        alert("Login successful!");
        window.location.href = "/dashboard"; // Redirect to dashboard
        return result;
    } catch (error) {
        console.error("Error logging in:", error);
        alert(error);
    }
};