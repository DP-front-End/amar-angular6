import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about/about.component';
import {PartnersComponent} from './partners/partners.component';
import {PackagesComponent} from './packages/packages.component';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';
import {ContactComponent} from './contact/contact.component';
import {RouterModule} from "@angular/router";
import {HomeComponent} from './home/home.component';
import {SectionsModule} from "../sections/sections.module";
import {SearchModule} from "../search/search.module";
import {FooterModule} from "../footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    SectionsModule,
    SearchModule,
    FooterModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'partners',
        component: PartnersComponent
      },
      {
        path: 'packages',
        component: PackagesComponent
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ])
  ],
  declarations: [AboutComponent, PartnersComponent, PackagesComponent, PrivacyPolicyComponent, ContactComponent, HomeComponent],
  exports: [AboutComponent, PartnersComponent, PackagesComponent, PrivacyPolicyComponent, ContactComponent, RouterModule]
})
export class PagesModule {
}
