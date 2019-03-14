import { Injectable } from '@angular/core';
import { Events } from '@ionic/angular';
import { ConnectorService } from '../connector/connector.service';
import { CONSTANTS } from '../../constants'
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
   OBJECTS =[]
   SEMAPHORE = true

  init(){
    this.SEMAPHORE = false
    console.log('api service init')
    this.db.collection(CONSTANTS.COLLECTION_NAME).get()
      .subscribe(data=>{
        this.OBJECTS = data.docs.map(doc=>{ return doc.data()})
        console.log(this.OBJECTS)
        console.log(data)
        this.SEMAPHORE = true
      })
  }

  constructor(private events:Events,private connector:ConnectorService,
      private db:AngularFirestore) { 
    console.log('construct api service');
    
  }
  
  update(){
    this.updateInfo()
  }

  private updateInfo(){
    this.SEMAPHORE = false
    this.connector.unprotected('get',{},CONSTANTS.API_URI)
      .subscribe(data=>{
        this.OBJECTS = data

        this.events.publish('new-info',data)
        this.SEMAPHORE = true
      })
  }
}
