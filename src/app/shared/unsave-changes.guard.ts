import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormComponent } from '../books/form/form.component';

@Injectable()
export class UnsaveChangesGuard implements CanDeactivate<FormComponent> {
  canDeactivate(): boolean {
    return window.confirm("You have unsave change. Still want to leave?");
  }
}
