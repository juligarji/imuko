import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Forest',
      url: '/forest',
      icon: 'leaf'
    },
    {
      title: 'Ocean',
      url: '/ocean',
      icon: 'water'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private network:Network
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // ............. CUSTOM FUNCTIONS .............
      this.network.onConnect()
        .subscribe(status =>{
          console.log('You are connected to the internet');
          window.localStorage.setItem('isConnected',String(true))
        })

      this.network.onDisconnect()
        .subscribe(status =>{
          console.log('You are not connected to the internet');
          window.localStorage.setItem('isConnected',String(false))
        })
    });
  }
}
