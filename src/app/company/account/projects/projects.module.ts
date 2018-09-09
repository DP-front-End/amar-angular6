import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProjectsRoutingModule} from './projects-routing.module';
import {ComapanyAddProjectComponent} from "./comapany-add-project/comapany-add-project.component";
import {ComapanyProjectsComponent} from "./comapany-projects/comapany-projects.component";
import {FormsModule} from "@angular/forms";
import {AngularFireDatabase} from "angularfire2/database";

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule
  ],
  declarations: [ComapanyAddProjectComponent, ComapanyProjectsComponent],
  exports: [ComapanyAddProjectComponent, ComapanyProjectsComponent]
})
export class ProjectsModule {
}
