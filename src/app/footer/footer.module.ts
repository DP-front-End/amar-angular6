import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {ContactInformationComponent} from './contact-information/contact-information.component';
import {MainFooterComponent} from './main-footer/main-footer.component';
import {CopyrightComponent} from './copyright/copyright.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ContactFormComponent, ContactInformationComponent, MainFooterComponent, CopyrightComponent],
  exports: [ContactFormComponent, ContactInformationComponent, MainFooterComponent, CopyrightComponent]
})
export class FooterModule {
}
