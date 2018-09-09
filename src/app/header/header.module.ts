import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogoComponent} from './logo/logo.component';
import {NavComponent} from './nav/nav.component';
import {SocialComponent} from './social/social.component';
import {BtnsComponent} from './btns/btns.component';
import {MainHeaderComponent} from './main-header/main-header.component';
import {NavResponsiveComponent} from './nav-responsive/nav-responsive.component';
import {RouterModule} from "@angular/router";
import {ClientModule} from "../client/client.module";
import {AuthService} from "../login-form/auth.service";
import {AccountModule} from "../company/account/account.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ClientModule,
    AccountModule
  ],
  declarations: [LogoComponent, NavComponent, SocialComponent, BtnsComponent, MainHeaderComponent, NavResponsiveComponent],
  exports: [LogoComponent, NavComponent, SocialComponent, BtnsComponent, MainHeaderComponent, NavResponsiveComponent],
  providers: [AuthService]
})
export class HeaderModule {
}
