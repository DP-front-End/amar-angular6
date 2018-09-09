import { Component, OnInit } from '@angular/core';
import {ExtendBtnNames} from '../../extends/extend-btn-names.enum';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.sass']
})
export class EmailConfirmationComponent implements OnInit {
  emailLabel: string ;
  phoneLabel: string;
  BtnName: string ;

  constructor() { }

  ngOnInit() {
  }

}
