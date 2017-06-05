import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../shared/book';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  
  book: Book;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.subscribeToId();
  }

  //Previous btn id - 1
  onPrev(){
    this.router.navigate(['/books', this.book.prevId]);
  }

  //Next btn id + 1
  onNext(){
      this.router.navigate(['/books', this.book.nextId]);
  }

  //Subscrit by parems.id
  private subscribeToId(){
    this.route.params.subscribe(parames => this.book = this.bookService.getBook(+parames.id));
  }

}
