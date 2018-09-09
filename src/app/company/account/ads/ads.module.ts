import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdsRoutingModule} from './ads-routing.module';
import {CompanyCreateAdComponent} from "./company-create-ad/company-create-ad.component";
import {CompanyAdsComponent} from "./company-ads/company-ads.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    AdsRoutingModule,
    FormsModule

  ],
  declarations: [CompanyCreateAdComponent, CompanyAdsComponent],
  exports: [CompanyCreateAdComponent, CompanyAdsComponent]
})
export class AdsModule {
}
