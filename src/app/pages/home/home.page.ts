import { Component, OnInit } from '@angular/core';
import { ConnectorService } from 'src/app/services/connector/connector.service';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  ngOnInit(): void {
      this.events.subscribe('message',(mess)=>{
        this.messages.push(mess)
      })
  }

  private messages =  [{
    body: 'Hi !!, I am a message'
  },
  {
    body: 'hi'
  },
  {
    body: 'message'
  }]

  constructor(private connectorServ:ConnectorService, private events:Events){
      
  }

  


}
