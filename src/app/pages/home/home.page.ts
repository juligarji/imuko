import { Component } from '@angular/core';
import { ConnectorService } from 'src/app/services/connector/connector.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private messages =  [{
    body: 'Hi !!, i am a message'
  },
  {
    body: 'Hi !!, i am a message'
  },
  {
    body: 'Hi !!, i am a message'
  },
  {
    body: 'Hi !!, i am a message'
  },
  {
    body: 'Hi !!, i am a message'
  },
  {
    body: 'Hi !!, i am a message'
  },
  {
    body: 'Hi !!, i am a message'
  }]

  constructor(private connectorServ:ConnectorService){
      
  }


}
