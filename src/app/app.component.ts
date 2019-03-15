import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Network } from '@ionic-native/network/ngx';
import { ApiService } from './services/info/api.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { isMobile } from '../app/services/is-mobile.function'
import { PushService } from '../app/services/info/push.service'

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
      icon: 'rose'
    },
    {
      title: 'Ocean',
      url: '/ocean',
      icon: 'rainy'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private network:Network,
    private apiServ:ApiService,
    private screenOrientation: ScreenOrientation,
    private pushServ:PushService
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
      this.pushServ.init()
      this.pushServ.initPush()
    });
  }
}
