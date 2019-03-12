import { Injectable, ErrorHandler } from '@angular/core';
import { NotificationService } from '../notification/notification.service'
import { HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ErrorService implements ErrorHandler{
  constructor(private notificationServ:NotificationService) { }

  handleError(error) {
    (error instanceof HttpErrorResponse) ? this.http(error) : this.internal(error);
  }

  private http(error:any){
      this.notificationServ.alert('Opps an communication error has occurred','',error.message)
      throw error
  }

  private internal(error:Error){
      this.notificationServ.alert('Opps an internal error has occurred','',error.message)
      throw error
  }
}
