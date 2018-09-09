import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackagesComponent } from './packages/packages.component';
import { PartnersComponent } from './partners/partners.component';
import { AboutAmaarComponent } from './about-amaar/about-amaar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PackagesComponent, PartnersComponent, AboutAmaarComponent],
  exports: [PackagesComponent, PartnersComponent, AboutAmaarComponent]
})
export class SectionsModule { }
