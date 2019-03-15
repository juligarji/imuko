import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

/* ........................................... */
import { ServicesModule } from '../app/services/services.module'
import { HttpClientModule } from '@angular/common/http'
import { ErrorService } from '../app/services/error/error.service'
import { AngularFireModule } from 'angularfire2';
import { firebaseData } from '../app/credentials';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { ActionCableService } from 'angular2-actioncable';
import { Push } from '@ionic-native/push/ngx';
import { Device } from '@ionic-native/device/ngx';
/* ........................................... */

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ServicesModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseData),
    AngularFirestoreModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: ErrorHandler, useClass: ErrorService}, 
    ScreenOrientation,
    ActionCableService,
    Push,
    Device
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
