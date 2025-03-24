
export async function fetchBooks() {
    try {
        console.log("Fetching books...");
        const response = await fetch("http://localhost:3000/api/books/getbooks", {
            method: "GET",
            credentials: "include" // Remove this if not needed
        });

        console.log("Response status:", response.status);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to fetch books: ${response.status} - ${errorText}`);
        }

        const books = await response.json();
        console.log("Books data:", books);
        displayBooks(books);
    } catch (error) {
        console.error("Error fetching books:",);
    }
}


interface Book {
    image?: string;
    title: string;
    author: string;
    genre: string;
    year: number;
    pages: number;
    publisher: string;
    description: string;
    available_copies: number;
}
 
 function displayBooks(books: Book[]) {
    const booksGrid = document.getElementById('books-grid');
    if (!booksGrid) return;

    booksGrid.innerHTML = books.map(book => `
        <div class="book-card">
            ${book.image ? `<img src="${book.image}" alt="${book.title}">` : ''}
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <p><strong>Year:</strong> ${book.year}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Publisher:</strong> ${book.publisher}</p>
            <p><strong>Description:</strong> ${book.description}</p>
            <p><strong>Available Copies:</strong> ${book.available_copies}</p>
        </div>
    `).join('');
}