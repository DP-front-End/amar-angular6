import {Component, OnInit} from '@angular/core';
import {ExtendHeadTitles} from "../../extends/extend-head-titles.enum";
import {ExtendLabels} from "../../extends/extend-form-labels.enum";
import {ExtendBtnNames} from "../../extends/extend-btn-names.enum";
import {Validation} from "../../extends/extend-validation.enum";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass']
})
export class ContactFormComponent implements OnInit {
  readonly blockTitle: string = ExtendHeadTitles.ContactFormTitle;
  readonly placeHolderName: string = ExtendLabels.nameLabel;
  readonly placeHolderEmail: string = ExtendLabels.emailLabel;
  readonly placeHolderMessage: string = ExtendLabels.messageLabel;
  readonly btnForm: string = ExtendBtnNames.fooFormBtn;
  readonly nameValidate: string = Validation.nameValidate;
  readonly emailValidate: string = Validation.emailValidate;
  readonly messageValidate: string = Validation.messageValidate;

  constructor() {
  }

  ngOnInit() {
  }

}
