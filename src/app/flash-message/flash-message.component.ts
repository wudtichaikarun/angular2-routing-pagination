import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FlashMessageService } from './shared/flash-message.service';
import { FlashMessage } from './shared/flash-message';
@Component({
  selector: 'app-flash-message',
  templateUrl: './flash-message.component.html',
  styleUrls: ['./flash-message.component.css']
})
export class FlashMessageComponent implements OnInit,OnDestroy {
  flashMessage: FlashMessage;
  subscription: Subscription;
  constructor(private flashMessageService: FlashMessageService) { }

  ngOnInit() {
    this.subscription =this.flashMessageService
    .getMessage()
    .subscribe(flashMessage => this.flashMessage = flashMessage);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  clearMessage(){
    this.flashMessageService.clearMessage();
  }

}
