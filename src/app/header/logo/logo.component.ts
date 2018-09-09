import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.sass']
})
export class LogoComponent implements OnInit {
  logoUrl: string = "";
  backgroundImg: string = "";

  constructor() { }

  ngOnInit() {
  }

}
