import {Component, OnInit} from '@angular/core';
import {ExtendBtnNames} from "../../extends/extend-btn-names.enum";

@Component({
  selector: 'app-btns',
  templateUrl: './btns.component.html',
  styleUrls: ['./btns.component.sass']
})
export class BtnsComponent implements OnInit {
  readonly loginBtnText: string = ExtendBtnNames.loginPageBtnName;
  readonly registerBtnText: string = ExtendBtnNames.companyRegisterBtnName;

  constructor() {
  }

  ngOnInit() {
  }

}
