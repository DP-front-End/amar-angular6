import {Component} from '@angular/core';
import {ExtendBtnNames} from '../../extends/extend-btn-names.enum';
import {ExtendLabels} from '../../extends/extend-form-labels.enum';
import {ExtendHeadTitles} from "../../extends/extend-head-titles.enum";
import {Validation} from "../../extends/extend-validation.enum";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent {
  readonly loginHeadTitle: string = ExtendHeadTitles.loginTitle;
  readonly emailLabel: string = ExtendLabels.emailLabel;
  readonly PasswordLabel: string = ExtendLabels.passwordLabel;
  readonly loginBtn: string = ExtendBtnNames.loginPageBtnName;
  readonly registerBtn: string = ExtendBtnNames.registerPageBtnName;
  readonly forgetPass: string = ExtendBtnNames.forgetPass;
  readonly emailValidate: string = Validation.emailValidate;
  readonly passwordValidate: string = Validation.passwordValidate;
  readonly passLeastValidate: string = Validation.passAtLeast;
  readonly emailMustValidate: string = Validation.emailMustValidate;
  invalidLogIn: boolean = false;
  loading: boolean;

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
  }

  OnSubmit(email, password) {
    this.loading = true;
    this.authService.login(email, password).subscribe((data: any) => {
        localStorage.setItem('data', JSON.stringify(data.data));
        location.reload();
        if (data.data.role == 'client') {
          this.router.navigate(['/package']);

        }

        else {
          this.router.navigate(['/company']);

        }

      },
      error => {
        this.invalidLogIn = true;
        this.loading = false;
      });

  }

}

