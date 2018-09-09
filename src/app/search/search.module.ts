import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchFormComponent} from './search-form/search-form.component';
import {SearchResultComponent} from './search-result/search-result.component';
import {SearchResultNotFoundComponent} from './search-result-not-found/search-result-not-found.component';
import {FooterModule} from '../footer/footer.module';
import {SearchComponent} from './search/search.component';
import {ViewAdsComponent} from './view-ads/view-ads.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CompanyProfileComponent} from '../company/view/company-profile/company-profile.component';
import {ViewModule} from '../company/view/view.module';
import {SearchService} from './search.service';

@NgModule({
  imports: [
    CommonModule,
    FooterModule,
    FormsModule,
    ViewModule,
    RouterModule.forRoot([
      {
        path: 'CompanyProfile',
        component: CompanyProfileComponent
      },
      {
        path: 'result',
        component: SearchResultComponent
      }
    ])
  ],
  declarations: [SearchFormComponent, SearchResultComponent, SearchResultNotFoundComponent, SearchComponent, ViewAdsComponent],
  exports: [SearchFormComponent, SearchResultComponent, SearchResultNotFoundComponent, FormsModule, RouterModule],
  providers: [SearchService]
})
export class SearchModule {
}
