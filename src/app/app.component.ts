import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Network } from '@ionic-native/network/ngx';
import { ApiService } from './services/info/api.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { isMobile } from '../app/services/is-mobile.function'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
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
    private network:Network,
    private apiServ:ApiService,
    private screenOrientation: ScreenOrientation
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if(isMobile())
      {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      }
      
      // ............. CUSTOM FUNCTIONS .............
      this.apiServ.init()
    });
  }
}
