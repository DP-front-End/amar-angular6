import { Component, OnInit } from '@angular/core';
import {ExtendBtnNames} from '../../extends/extend-btn-names.enum';
import {ExtendLabels} from '../../extends/extend-form-labels.enum';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.sass']
})
export class ForgetPasswordComponent implements OnInit {
  emailLabel: string = ExtendLabels.emailLabel;
  SubmitBtnText: string = ExtendBtnNames.resetPagePasswordBtnName;

  constructor() { }

  ngOnInit() {
  }

}
