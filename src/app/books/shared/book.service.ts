import { Injectable } from '@angular/core';
import { Book } from './book';
import { FlashMessageService } from '../../flash-message/shared/flash-message.service';
import { MockBooks } from './mock-books';
import { BooksResponse } from './books-response';


@Injectable()
export class BookService {

  static PER_PAGE = 10;
  books: Book[] = MockBooks;

  constructor(private flashMessageService: FlashMessageService) { }

  // 30 content is 0..29
  // 1: 0-9 => (page -1 ) * PER_PAGE     slice(0,10) is 0..9
  // 2: 10-19 => (page -1 ) * PER_PAGE   slice(10,20) is 10..19
  // 3: 20-29 => (page -1 ) * PER_PAGE    slice(20,30) is 20..29
  getBooks(page = 1): BooksResponse {
    console.log('page:value = ' + page);
    const startIndex = (page - 1 ) * BookService.PER_PAGE;
    const books = this.books
      .slice(startIndex, startIndex + BookService.PER_PAGE);
    return {
      books,
      currentPage: page,
      //math.ceil 31/10 = 3 page   and 1  ---> 4 page
      totalPages: Math.ceil(this.books.length / BookService.PER_PAGE)
    }
   
  }

  getBook(id: number): Book{
    const index = this.books.findIndex(book => book.id === id );
    const { title, content, description} = this.books[index];
    const prevBook = this.books[index -1 ];
    const nextBook = this.books[index +1 ]

    return{
      id,
      title,
      content,
      description,
      prevId: prevBook ? prevBook.id : null,
      nextId: nextBook ? nextBook.id : null
    }
  }

  getContent(id: number): string{
    return this.findBook(id).content;
  }

  getReviews(id: number): string[]{
    return this.findBook(id).reviews;
  }

  createBook(book: Book) {
   this.books = [ ...this.books, { ...book, id: this.books.length + 1 } ];
   
   this.flashMessageService.addMessage('success', 'The book has been create.');
  }

 updateBook(id: number, book: Book){
   const index = this.books.findIndex(book => book.id === id);
   const selectedBook = this.books[index];

   this.books = [
     ...this.books.slice(0, index),
     {...book, id},
     ...this.books.slice(index + 1)
   ];

      this.flashMessageService.addMessage('success', 'The book has been update.');
 }

 private findBook(id: number): Book{
  return this.books.find(book => book.id === id);
 }

}
