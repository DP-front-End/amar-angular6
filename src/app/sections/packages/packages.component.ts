import { Component, OnInit } from '@angular/core';
import {ExtendHeadTitles} from "../../extends/extend-head-titles.enum";

@Component({
  selector: 'app-home-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.sass']
})
export class PackagesComponent implements OnInit {
  packagePrice: string = ExtendHeadTitles.packagesTitle;
  packageName: string;
  packageDetails:string;
  packageBtn: string;

  constructor() { }

  ngOnInit() {
  }

}
