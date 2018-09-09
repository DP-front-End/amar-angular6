import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingComponent} from './setting/setting.component';
import {PackageComponent} from './package/package.component';
import {ClientNavComponent} from './client-nav/client-nav.component';
import {FooterModule} from "../footer/footer.module";
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "../login-form/auth.guard";

const clientRoute: Routes = [
  {
    path: 'package',
    component: PackageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Setting',
    component: SettingComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FooterModule,
    RouterModule.forChild(clientRoute)
  ],
  declarations: [SettingComponent, PackageComponent, ClientNavComponent],
  exports: [SettingComponent, PackageComponent, ClientNavComponent, RouterModule],
})
export class ClientModule {
}
