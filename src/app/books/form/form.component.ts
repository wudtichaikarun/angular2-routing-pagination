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
  submitBtnText: 'Create' | 'Update';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.createForm();
    this.setSubmitBtnText();
  }

  onSubmit(event){
    event.preventDefault();

    //call  method createBook() from book.service.ts
   this.bookService.createBook(this.form.value);
   //video 10 navigate
   this.router.navigate(['/books']);
  }

  private setSubmitBtnText(){
    const { formType } = this.route.snapshot.data
    this.submitBtnText = formType === 'NEW' ? 'Create':'Update';
  }

  private createForm(){
    this.form = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    content: ['', Validators.required]
  });
 }
}
