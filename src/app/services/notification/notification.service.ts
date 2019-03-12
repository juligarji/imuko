
import { Injectable } from '@angular/core';
import { isMobile } from '../is-mobile.function'

import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

// ............. SERVICE DESCRIPTION ...................
//  This service shows different types of informative messages on the
// user's screen
// .....................................................

export class NotificationService {
  private loaderDuration:number = 10000
  private loaderMessage:string = "Please wait ..."
  private loader:any = null

  constructor(private alertCtrl:AlertController, private loadingCtrl:LoadingController, private toastCtrl:ToastController) { }

  async alert(title:string = 'Information',subTitle:string,message:string){
    // Shows a simple alert in the foreground
    let alert = await this.alertCtrl.create({
      header: title,
      subHeader: subTitle,
      message: message,
      buttons: ['Ok']
    })
    return await alert.present()
  }

  async showLoader(){
    if(!this.loader)
    {
      // Shows a message for loading times in the foreground
      this.loader = await this.loadingCtrl.create({
        message: this.loaderMessage,
        duration: this.loaderDuration,
        spinner: 'crescent'
      })
      return await this.loader.present()
    }    
  }

  async hideLoader(){
    // If a loader was created, this hides it
    if(this.loader)
    {
      await this.loader.dismiss()
      delete this.loader 
    }
  }

  async showToast(message:string){
    // Shows a toast message if the app is running on a mobile device
    if(isMobile())
    {
      let toast = await this.toastCtrl.create({
        message: message,
        duration: 3000
      })
     return await toast.present()
    }
  }
}
