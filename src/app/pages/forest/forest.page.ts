import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';
import { ApiService } from 'src/app/services/info/api.service';

@Component({
  selector: 'app-forest',
  templateUrl: './forest.page.html',
  styleUrls: ['./forest.page.scss'],
})
export class ForestPage implements OnInit {
  private data:any ={
    title:'Forest',
    body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit '
  }
  constructor(private events:Events, private apiServ:ApiService) { 
    console.log('construct forest');
  }

  ngOnInit() {
    console.log('init forest');
    
    this.events.subscribe('new-info',(info)=>{
        this.data = info[1]
    })
  }
  
  exploreAction(){
    this.apiServ.update()
  }

}
