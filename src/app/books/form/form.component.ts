import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  formType: 'NEW' | 'EDIT';
  submitBtnText: 'Create' | 'Update';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.setFormType();
    this.createForm(); 
    this.loadBook();
    this.setSubmitBtnText();
  }

  onSubmit(event){
    event.preventDefault();

    this.formType === 'NEW' ? this.createBook() : this.updateBook();
  }

 //CreateBook  /books/new
  private createBook(){
    //call  method createBook() from book.service.ts
   this.bookService.createBook(this.form.value);
   //video 10 navigate
   this.router.navigate(['/books']);
  }

  //Update book /books/id/edit
  private updateBook(){
    const { id } = this.route.snapshot.params;

    this.bookService.updateBook(+id, this.form.value);
    this.router.navigate(['/books', id]);
  }

  private setFormType(){
    this.formType = this.route.snapshot.data.formType;
  }

  private setSubmitBtnText(){
    this.submitBtnText = this.formType === 'NEW' ? 'Create':'Update';
  }

  private loadBook(){
    if (this.formType === 'NEW') return;

     const { id } = this.route.snapshot.params;
     const { title, description, content } = this.bookService.getBook(+id);

     this.form.setValue({title, description, content});

  }

  private createForm(){
    this.form = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    content: ['', Validators.required]
  });
 }
}
