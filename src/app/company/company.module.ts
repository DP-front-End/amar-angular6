import {NgModule} from '@angular/core';
import {CompanyRoutingModule} from './routing.module';
import {AccountModule} from "./account/account.module";


@NgModule({
  imports: [
    //BrowserModule,
    CompanyRoutingModule,
    AccountModule
  ],
  declarations: []
})
export class CompanyModule {
}
