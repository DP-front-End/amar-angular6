import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignInComponent} from './sign-in/sign-in.component';
import {ForgetPasswordComponent} from './forget-password/forget-password.component';
import {EmailConfirmationComponent} from './email-confirmation/email-confirmation.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {RouterModule} from "@angular/router";
import {FooterModule} from "../footer/footer.module";
import {FormsModule} from '@angular/forms';
import {ClientModule} from "../client/client.module";
import {UserComponent} from './user/user.component';
import {AuthService} from "./auth.service";
import {HttpClientModule} from "@angular/common/http";
import {AuthGuard} from "./auth.guard";
import {CompanyModule} from "../company/company.module";
import {ChooseSignupComponent} from './choose-signup/choose-signup.component';
import {CompanySignupComponent} from './company-signup/company-signup.component';
import {AngularFireModule} from "angularfire2";
import {AngularFireStorageModule} from "angularfire2/storage";

@NgModule({
  imports: [
    CommonModule,
    FooterModule,
    FormsModule,
    ClientModule,
    CompanyModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBks_8jCPRX6d7G3_EgBOarCN5nsjO7fS8",
      authDomain: "amar-web-app.firebaseapp.com",
      databaseURL: "https://amar-web-app.firebaseio.com",
      projectId: "amar-web-app",
      storageBucket: "amar-web-app.appspot.com",
      messagingSenderId: "175810009033"
    }),
    AngularFireStorageModule,
    RouterModule.forRoot([
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: 'sign-up',
        component: ChooseSignupComponent
      },
      {
        path: 'signUp-user',
        component: SignUpComponent
      },
      {
        path: 'signUp-company',
        component: CompanySignupComponent,
        /*children: [
          { path: '', redirectTo: 'step1', pathMatch: 'full' },
          { path: 'step1', component: CompanySignupStep1Component },
          { path: 'step2', component: CompanySignupStep2Component }
        ]*/

      },

      {
        path: 'package',
        loadChildren: () => ClientModule
      },
      {
        path: 'company',
        loadChildren: () => CompanyModule
      }
    ])
  ],
  declarations: [SignInComponent, ForgetPasswordComponent, EmailConfirmationComponent, SignUpComponent, UserComponent, ChooseSignupComponent, CompanySignupComponent],
  exports: [SignInComponent, ForgetPasswordComponent, EmailConfirmationComponent, SignUpComponent, ChooseSignupComponent, RouterModule],
  providers: [AuthService, AuthGuard]

})
export class LoginFormModule {
}
