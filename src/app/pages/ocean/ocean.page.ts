import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ocean',
  templateUrl: './ocean.page.html',
  styleUrls: ['./ocean.page.scss'],
})
export class OceanPage implements OnInit {
  private data:any ={
    title:'Ocean',
    body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit '
  }
  constructor() { }

  ngOnInit() {
  }
  
  exploreAction(){
    alert('si')
  }

}
