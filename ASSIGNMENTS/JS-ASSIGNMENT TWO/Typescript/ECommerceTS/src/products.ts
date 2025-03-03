import { Book } from "./types";
import { addToCart } from "./index";

export const books: Book[] = [
  {
    id: "1",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    year: 1960,
    pages: 281,
    price: 1200,
    publisher: "J.B. Lippincott & Co.",
    description: "A novel about racial injustice in the Deep South.",
    image: "https://m.media-amazon.com/images/I/81gepf1eMqL.jpg"
  },
  {
    id: "2",
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    year: 1949,
    pages: 328,
    price: 1500,
    publisher: "Secker & Warburg",
    description: "A chilling vision of a totalitarian future where Big Brother watches all.",
    image: "https://i.ebayimg.com/images/g/vZQAAeSwSbRnrJge/s-l500.webp"
  },
  {
    id: "3",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    year: 1925,
    pages: 180,
    price: 1100,
    publisher: "Charles Scribner's Sons",
    description: "A story of Jay Gatsby and his dream of rekindling his past love.",
    image: "https://m.media-amazon.com/images/I/81af+MCATTL.jpg"
  },
  {
    id: "4",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    year: 1813,
    pages: 279,
    price: 1300,
    publisher: "T. Egerton, Whitehall",
    description: "A romantic novel of manners featuring Elizabeth Bennet and Mr. Darcy.",
    image: "https://i.ebayimg.com/images/g/ikQAAOSwm8JnkrMW/s-l500.webp"
  },
  {
    id: "5",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    year: 1951,
    pages: 234,
    price: 1250,
    publisher: "Little, Brown and Company",
    description: "Holden Caulfield's experiences in New York City after leaving school.",
    image: "https://m.media-amazon.com/images/I/81OthjkJBuL.jpg"
  },
  {
    id: "6",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    year: 1937,
    pages: 310,
    price: 1800,
    publisher: "George Allen & Unwin",
    description: "The adventures of Bilbo Baggins as he seeks a share of a dragon's treasure.",
    image: "https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg"
  },
  {
    id: "7",
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    genre: "Dystopian",
    year: 1953,
    pages: 249,
    price: 1400,
    publisher: "Ballantine Books",
    description: "A novel about a society where books are banned, and firemen burn them.",
    image: "https://i.ebayimg.com/images/g/v0AAAOSwxrpkfnD1/s-l500.webp"
  },
  {
    id: "8",
    title: "Moby-Dick",
    author: "Herman Melville",
    genre: "Adventure",
    year: 1851,
    pages: 635,
    price: 2000,
    publisher: "Harper & Brothers",
    description: "Captain Ahab's obsessive quest to hunt the white whale, Moby-Dick.",
    image: "https://i.ebayimg.com/images/g/aEQAAOSwuYhnTx6N/s-l500.webp"
  },
  {
    id: "9",
    title: "War and Peace",
    author: "Leo Tolstoy",
    genre: "Historical Fiction",
    year: 1869,
    pages: 1225,
    price: 2500,
    publisher: "The Russian Messenger",
    description: "A chronicle of the French invasion of Russia and its impact on society.",
    image: "https://i.ebayimg.com/images/g/28AAAOSw5Alf~fcP/s-l500.webp"
  },
  {
    id: "10",
    title: "The Odyssey",
    author: "Homer",
    genre: "Epic Poetry",
    year: -800,
    pages: 541,
    price: 1600,
    publisher: "Unknown",
    description: "The epic journey of Odysseus returning home after the Trojan War.",
    image: "https://i.ebayimg.com/images/g/65oAAOSwsvFnqNgJ/s-l500.webp"
  }
];



export function displayBooks(filteredBooks: Book[] = books): void {
  const bookList = document.getElementById("book-list");
  if (!bookList) return;

  bookList.innerHTML = "";

  if (filteredBooks.length === 0) {
    bookList.innerHTML = "<p>No books found.</p>";
    return;
  }

  filteredBooks.forEach(({ id, title, author, genre, year, pages, price, image }) => {
    const bookElement = document.createElement("div");
    bookElement.innerHTML = `
      <div class="book-content">
        <img src="${image}" alt="${title}" style="width:100%;">
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Author:</strong> ${author}</p>
        <p><strong>Genre:</strong> ${genre}</p>
        <p><strong>Year:</strong> ${year}</p>
        <p><strong>Pages:</strong> ${pages}</p>
        <p><strong>Price:</strong> KSH ${price}</p>
        <button class="buy-now" data-id="${id}" data-title="${title}" data-price="${price}" data-image="${image}">Buy Now</button>
      </div>
    `;

    bookList.appendChild(bookElement);
  });

  document.querySelectorAll(".buy-now").forEach(button => {
    button.addEventListener("click", addToCart);
  });
}
