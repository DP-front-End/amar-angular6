import {Component} from '@angular/core';
import {SignUpComponent} from '../../login-form/sign-up/sign-up.component';
import {ExtendBtnNames} from "../../extends/extend-btn-names.enum";
import {ExtendHeadTitles} from "../../extends/extend-head-titles.enum";

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.sass']
})
export class SettingComponent extends SignUpComponent {
  readonly settingTitle: string = ExtendHeadTitles.settingPageTitle;
  readonly formBtn: string = ExtendBtnNames.updateBtn;
  data: any = localStorage.getItem('data');
  clientName: string = JSON.parse(this.data).name;
  clientEmail: string = JSON.parse(this.data).email;
  clientPhone: string = JSON.parse(this.data).phone;

  super() {
  }
}
