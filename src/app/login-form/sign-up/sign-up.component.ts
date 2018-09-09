import {Component} from '@angular/core';
import {ExtendLabels} from "../../extends/extend-form-labels.enum";
import {ExtendHeadTitles} from "../../extends/extend-head-titles.enum";
import {ExtendBtnNames} from "../../extends/extend-btn-names.enum";
import {Validation} from "../../extends/extend-validation.enum";
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Client} from "../client.model";
import {AuthService} from "../auth.service";
import {SelectsService} from "../../selects.service";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})


export class SignUpComponent {
  readonly signUpTitle: string = ExtendHeadTitles.registerTitle;
  readonly namePlaceHolder: string = ExtendLabels.nameLabel;
  readonly emailPlaceHolder: string = ExtendLabels.emailLabel;
  readonly passwordPlaceHolder: string = ExtendLabels.passwordLabel;
  readonly phonePlaceHolder: string = ExtendLabels.phoneNumLabel;
  readonly chooseCountryPlaceHolder: string = ExtendLabels.countryLabel;
  readonly chooseCityPlaceHolder: string = ExtendLabels.cityLabel;
  readonly signUpBtn: string = ExtendBtnNames.registerPageBtnName;
  readonly nameValidate: string = Validation.nameValidate;
  readonly emailValidate: string = Validation.emailValidate;
  readonly passwordValidate: string = Validation.passwordValidate;
  readonly phoneValidate: string = Validation.phoneValidate;
  readonly cityValidate: string = Validation.cityValidate;
  readonly passLeastValidate: string = Validation.passAtLeast;
  readonly nameLeastValidate: string = Validation.nameAtLeast;
  readonly passMatch: string = Validation.passMatch;
  readonly emailMustValidate: string = Validation.emailMustValidate;
  userClient: Client;
  loading = false;
  submitted = false;
  city = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private selectService: SelectsService
  ) {
  }

  ngOnInit() {
    this.selectService.getCities().subscribe(data => {
      this.city = data.data;
    });
  }

  OnSubmit(form: NgForm) {
    this.loading = true;
    this.authService.clientRegister(form.value)
      .subscribe((data: any) => {
          if (data.Succeeded == true) {
            this.router.navigate(['/sign-in']);
          }
        },
        error => {
          this.loading = false;
        });
  }

}
