import {Component} from '@angular/core';
import {ExtendBtnNames} from "../../../extends/extend-btn-names.enum";
import {ExtendHeadTitles} from "../../../extends/extend-head-titles.enum";
import {ExtendLabels} from "../../../extends/extend-form-labels.enum";
import {ChangePassService} from "../../../change-pass.service";

@Component({
  selector: 'app-company-setting',
  templateUrl: './company-setting.component.html',
  styleUrls: ['./company-setting.component.sass']
})
export class CompanySettingComponent {
  readonly updateBtn: string = ExtendBtnNames.updateBtn;
  readonly changePassTitle: string = ExtendHeadTitles.changePassTitle;
  readonly oldPlaceHolder: string = ExtendLabels.oldpasswordLabel;
  readonly newPlaceHolder: string = ExtendLabels.newpasswordLabel;
  readonly renewPlaceHolder: string = ExtendLabels.renewpasswordLabel;

  oldPass: string;
  newPass: string;
  renewPass: string;
  loading: boolean;
  updateSuccess: boolean;
  matchPAss: boolean;
  constructor(private authService: ChangePassService) {

  }

  changePassword() {
    const data = {
      old_password: this.oldPass,
      password: this.newPass,
      password_confirmation: this.renewPass

    };
    this.loading = true;
    this.authService.changePassword(data)

      .subscribe((data: any) => {
          this.updateSuccess = true;
          this.loading = false;
          if (data.Succeeded == true) {

          }
        },
        error => {
          this.loading = false;
        });

  }
  matchpass() {
    if (this.newPass !== this.renewPass) {
      console.log("notEqual");
      this.matchPAss = true;
    }
    else {
      console.log("Equal");
      this.matchPAss = false;
    }
  }
  ngOnInit(){

    if (this.renewPass !== this.newPass) {
      return {
        doesMatchPassword: true
      };
    }

  }


}
