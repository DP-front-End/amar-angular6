import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.sass']
})
export class SocialComponent implements OnInit {
  socialName: string = "" ;
  socialIcon: string = "" ;
  socialUrl: string = "" ;

  constructor() { }

  ngOnInit() {
  }

}
