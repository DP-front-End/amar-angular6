import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountRoutingModule} from './account-routing.module';
import {CompanyComponent} from './company/company.component';
import {ProjectsModule} from "./projects/projects.module";
import {ComapanyCommentsComponent} from "./comapany-comments/comapany-comments.component";
import {ComapanyDetailsComponent} from "./comapany-details/comapany-register-step1.component";
import {ComapanyTimeDurationComponent} from "./comapany-time-duration/comapany-register-step2.component";
import {CompanyNavComponent} from "./company-nav/company-nav.component";
import {CompanySettingComponent} from "./company-setting/company-setting.component";
import {CompanyTabsComponent} from "./company-tabs/company-tabs.component";
import {AdsModule} from "./ads/ads.module";
import {FooterModule} from "../../footer/footer.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    ProjectsModule,
    FooterModule,
    AdsModule,
    FormsModule
  ],
  declarations: [CompanyComponent, ComapanyCommentsComponent, ComapanyDetailsComponent, ComapanyTimeDurationComponent, CompanyNavComponent, CompanySettingComponent, CompanyTabsComponent],
  exports: [CompanyComponent, ComapanyCommentsComponent, ComapanyDetailsComponent, ComapanyTimeDurationComponent, CompanyNavComponent, CompanySettingComponent, CompanyTabsComponent]
})
export class AccountModule {
}
