import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompanyComponent} from "./account/company/company.component";
import {ComapanyProjectsComponent} from "./account/projects/comapany-projects/comapany-projects.component";
import {ComapanyAddProjectComponent} from "./account/projects/comapany-add-project/comapany-add-project.component";
import {CompanyCreateAdComponent} from "./account/ads/company-create-ad/company-create-ad.component";
import {CompanyAdsComponent} from "./account/ads/company-ads/company-ads.component";
import {ComapanyDetailsComponent} from "./account/comapany-details/comapany-register-step1.component";
import {ComapanyCommentsComponent} from "./account/comapany-comments/comapany-comments.component";
import {CompanySettingComponent} from "./account/company-setting/company-setting.component";
import {ComapanyTimeDurationComponent} from "./account/comapany-time-duration/comapany-register-step2.component";

const CompanyRoutes: Routes = [
  {
    path: 'company',
    component: CompanyComponent,
    children: [
      {
        path: '',
        redirectTo: 'company-projects',
        pathMatch: 'full'
      },
      {
        path: 'company-projects',
        component: ComapanyProjectsComponent,

      },
      {
        path: 'add-project',
        component: ComapanyAddProjectComponent
      },
      {
        path: 'company-ads',
        component: CompanyAdsComponent
      },
      {
        path: 'Add-ad',
        component: CompanyCreateAdComponent
      },
      {
        path: 'company-details',
        component: ComapanyDetailsComponent
      },
      {
        path: 'company-time-duration',
        component: ComapanyTimeDurationComponent
      },
      {
        path: 'company-comments',
        component: ComapanyCommentsComponent
      },
      {
        path: 'company-setting',
        component: CompanySettingComponent
      }

    ]

  }
];

@NgModule({
  imports: [
    RouterModule.forChild(CompanyRoutes)
  ],
  exports: [
    RouterModule,

  ]
})
export class CompanyRoutingModule {
}
