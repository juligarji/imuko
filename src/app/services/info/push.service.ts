import { Injectable } from '@angular/core';
import {  ActionCableService } from 'angular2-actioncable';
import { Events } from '@ionic/angular';
import { CONSTANTS } from '../../constants'
//var  ActionCableService =  require('actioncable')
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';
import { ConnectorService } from '../connector/connector.service'
import { isMobile } from '../is-mobile.function'
import { concatMap } from 'rxjs/operators'
import { Device } from '@ionic-native/device/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushService {
private channel
private subscription

  init(){
    this.channel =  this.cableServ.cable(CONSTANTS.WEB_SOCKET_ADDRESS)
      .channel(CONSTANTS.WEB_SOCKET_CHANNEL)

      this.subscription = this.channel.received().subscribe(message => {
        this.events.publish('message',message)
    });
  }
  
  constructor(private cableServ:ActionCableService,private push:Push,
      private events:Events, private connector:ConnectorService, private device:Device) { }

      initPush(){
        if(isMobile())
        {
          const options: PushOptions = {
            android: {
                senderID: CONSTANTS.ANDROID_SENDER_ID
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'true'
                }
        };

        const pushObject: PushObject = this.push.init(options)
        pushObject.on('registration')
            .pipe(
                concatMap(registration =>{
                    return this.saveToken(registration['registrationId'])
                }),
                concatMap(registration =>{
                    return pushObject.on('notification')
                })
            )
            .subscribe(notification =>{
                this.events.publish("notification",notification)
            })
    }  

        }
        saveToken(token:string){
          let bodyCall = {
            platform: this.device.platform,
            model: this.device.model,
            uuid: this.device.uuid,
            token: token
          }
          return this.connector.unprotected("post",{},CONSTANTS.NOTIFICATIONS_URI + '/devices',bodyCall)
           
      }
    }