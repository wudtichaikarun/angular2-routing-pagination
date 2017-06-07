//Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Service
import { BookService } from './books/shared/book.service';
import { FlashMessageService } from './flash-message/shared/flash-message.service';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth.guard';

//Component
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { FormComponent } from './books/form/form.component';
import { BookComponent } from './books/book/book.component';
import { FlashMessageComponent } from './flash-message/flash-message.component';
import { ReviewsComponent } from './books/book/reviews/reviews.component';
import { ContentComponent } from './books/book/content/content.component';

const appRouts: Routes = [
  {
    path: 'books',
    component: BooksComponent,
    //children of books localhost:4200/books/
    children: [
      {
        path: '',
        component: BookListComponent
      },
      {
        path: 'new',
        component: FormComponent,
        canActivate: [AuthGuard],
        data: { formType: 'NEW'}
      },
      {
        path: ':id/edit',
        component: FormComponent,
        canActivate: [AuthGuard],
        data: { formType: 'EDIT'}
      },
      {
        path: ':id',
        component: BookComponent,
        children: [
            {
              path: '',
              redirectTo: 'cotent',
              pathMatch: 'full'
            },
          {
            path: 'cotent',
            component: ContentComponent
          },
          {
            path: 'reviews',
            component: ReviewsComponent
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookListComponent,
    FormComponent,
    BookComponent,
    FlashMessageComponent,
    ContentComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRouts)
  ],
  providers: [
    BookService,
    AuthGuard,
    AuthService,
    FlashMessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
