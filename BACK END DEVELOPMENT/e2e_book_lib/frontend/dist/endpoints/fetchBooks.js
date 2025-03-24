var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function fetchBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("Fetching books...");
            const response = yield fetch("http://localhost:3000/api/books/getbooks", {
                method: "GET",
                credentials: "include" // Remove this if not needed
            });
            console.log("Response status:", response.status);
            if (!response.ok) {
                const errorText = yield response.text();
                throw new Error(`Failed to fetch books: ${response.status} - ${errorText}`);
            }
            const books = yield response.json();
            console.log("Books data:", books);
            displayBooks(books);
        }
        catch (error) {
            console.error("Error fetching books:");
        }
    });
}
function displayBooks(books) {
    const booksGrid = document.getElementById('books-grid');
    if (!booksGrid)
        return;
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
//# sourceMappingURL=fetchBooks.js.map