import { Injectable } from '@angular/core';
import { Book } from './book';
import { MockBooks } from './mock-books';


@Injectable()
export class BookService {

  books: Book[] = MockBooks;

  constructor() { }

  getBooks(){
    return this.books;
  }

  createBook(book: Book) {
   this.books = [
     ...this.books,
     { ...book, id: this.books.length + 1 }
     ];
  console.log(this.books);
  }

}
