import { API_URL } from "./config";

export const fetchBooksFilter = async (queryParams = "") => {
    try {
        const response = await fetch(`http://localhost:3000/books${queryParams}`);
        if (!response.ok) {
            throw new Error("Failed to fetch books");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching books:", error);
        return [];
    }
};

