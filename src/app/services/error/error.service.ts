import { Injectable, ErrorHandler } from '@angular/core';
import { NotificationService } from '../notification/notification.service'
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../info/api.service';

@Injectable({
  providedIn: 'root'
})

// ............. SERVICE DESCRIPTION ...................
//  This is the global error handler, implements the ErrorHandler inferface
// that handles the errors of the aplications with the handleError function
// .....................................................

export class ErrorService implements ErrorHandler{
  constructor(private notificationServ:NotificationService, private api:ApiService) { }

  handleError(error) {
    // implemented function that recives the apps errors and handles it. 
    (error instanceof HttpErrorResponse) ? this.http(error) : this.internal(error);
  }

  private http(error:any){
      // handles the errors that occurred in the http communication
      this.notificationServ.alert('Opps an communication error has occurred','',error.message)
      this.api.SEMAPHORE = true
      throw error
  }

  private internal(error:Error){
      // handles the errors that occurred in the internal functionality of the plugins or libraries
      this.notificationServ.alert('Opps an internal error has occurred','',error.message)
      throw error
  }
}
