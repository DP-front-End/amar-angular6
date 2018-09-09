import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewRoutingModule} from './view-routing.module';
import {CompanyProfileComponent} from "./company-profile/company-profile.component";
import {FooterModule} from "../../footer/footer.module";


@NgModule({
  imports: [
    CommonModule,
    ViewRoutingModule,
    FooterModule
  ],
  declarations: [CompanyProfileComponent],
  exports: [CompanyProfileComponent]
})
export class ViewModule {
}
