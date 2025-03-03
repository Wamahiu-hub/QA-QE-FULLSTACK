export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  year: number;
  pages: number;
  price: number;
  publisher: string;
  description: string;
  image: string;
}

  
  export interface CartItem {
    id: string;
    title: string;
    price: number;
    image: string;
    quantity: number;
  }
  