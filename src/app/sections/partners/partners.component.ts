import {Component, OnInit} from '@angular/core';
import {ExtendHeadTitles} from "../../extends/extend-head-titles.enum";

@Component({
  selector: 'app-home-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.sass']
})
export class PartnersComponent implements OnInit {
  partnersTitle: string = ExtendHeadTitles.partenrsTitle;
  partnerImage: string;
  partnerName: string;

  constructor() {
  }

  ngOnInit() {
  }

}

