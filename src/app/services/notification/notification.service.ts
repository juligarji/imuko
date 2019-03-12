
import { Injectable } from '@angular/core';
import { isMobile } from '../is-mobile.function'

import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class NotificationService {
  private loaderDuration:number = 10000
  private loaderMessage:string = "Please wait ..."
  private loader:any = null

  constructor(private alertCtrl:AlertController, private loadingCtrl:LoadingController, private toastCtrl:ToastController) { }

  async alert(title:string = 'Information',subTitle:string,message:string){
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
      this.loader = await this.loadingCtrl.create({
        message: this.loaderMessage,
        duration: this.loaderDuration,
        spinner: 'crescent'
      })
      return await this.loader.present()
    }    
  }

  async hideLoader(){
    if(this.loader)
    {
      await this.loader.dismiss()
      delete this.loader 
    }
  }

  async showToast(message:string){
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
