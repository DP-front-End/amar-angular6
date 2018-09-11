import {Component, OnInit} from '@angular/core';
import {ExtendHeadTitles} from '../../extends/extend-head-titles.enum';
import {ExtendCompanyLabels} from '../../extends/extend-company-labels.enum';
import {ExtendCommentLabels} from '../../extends/extend-comment-labels.enum';
import {ExtendBtnNames} from '../../extends/extend-btn-names.enum';
import {SearchService} from '../search.service';
import {ExtendLabels} from '../../extends/extend-form-labels.enum';
import {Router} from '@angular/router';
import {SelectsService} from '../../selects.service';
import {CompanyService} from '../company.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.sass']
})
export class SearchResultComponent implements OnInit {
  readonly headTitle: string = ExtendHeadTitles.searchResultTitle;
  readonly projectHeadTitle: string = ExtendCompanyLabels.CompanyNameLabel;
  readonly coCity: string = ExtendCompanyLabels.companyCity;
  readonly coCategory: string = ExtendCompanyLabels.categoryNameLabel;
  readonly coSpecialization: string = ExtendCompanyLabels.specializationNameLabel;
  readonly CoRate: string = ExtendCompanyLabels.companyRateNameLabel;
  readonly CoViews: string = ExtendCompanyLabels.companyViewNameLabel;
  readonly coPrief: string = ExtendCompanyLabels.briefNameLabel;
  readonly coComments: string = ExtendCommentLabels.commentsTitle;
  readonly moreBtn: string = ExtendBtnNames.readMoreBtnName;
  result: any[];
  moreResult: any[] = [];

  links: string;
  getAds: any[];
  searchTitle: string = ExtendHeadTitles.searchTitle;
  chooseCountry: string = ExtendLabels.countryLabel;
  chooseCity: string = ExtendLabels.cityLabel;
  companyCategory: string = ExtendLabels.companyCat;
  companyIndustry: string = ExtendLabels.companyIndustry;
  btnName: string = ExtendBtnNames.searchBtn;
  loading: boolean;

  selectCountry: any[];
  selectCity: any[] = [];
  selectCategory: any[] = [];
  selectSpecialization: any[] = [];

  selectCountryVal: string = '';
  selectCityVal: string = '';
  selectCategoryVal: string = '';
  selectSpecializationVal: string = '';
  moreBtnNull: boolean;

  constructor(private selectService: SelectsService,
              private router: Router,
              private searchServ: SearchService,
              private coService: CompanyService) {
  }

  viewCompany(id: number) {
    this.coService.getDetails(id);
  }


  searchSubmit() {
    this.loading = true;
    let country = this.selectCountryVal;
    let city = this.selectCityVal;
    let category = this.selectCategoryVal;
    let specialization = this.selectSpecializationVal;
    this.searchServ.newQuery(country, city, category, specialization).subscribe(
      data => this.theResult(data),
    );
    const index: any = this.moreResult;
    if (index !== -1) {
      this.moreResult.splice(index, 1);
    }
  }

  theResult(data) {
    this.loading = false;
    this.result = data.data;
    if (data.links.next == null) {
      this.moreBtnNull = false;
    }
    else {
      this.moreBtnNull = true;
      this.links = data.links.next.substr(length - 1);
    }
  }
  nextLink() {
    this.loading = true;
    this.moreBtnNull = false;
    let country = this.selectCountryVal;
    let city = this.selectCityVal;
    let category = this.selectCategoryVal;
    let specialization = this.selectSpecializationVal;
    let next = this.links;
    this.searchServ.nextLink(country, city, category, specialization, next).subscribe(
      data => this.nextResult(data),
    );
  }

  nextResult(data) {
    this.loading = false;
    this.moreBtnNull = true;
    this.moreResult.push(data);
    if (data.links.next == null) {
      this.moreBtnNull = false;
    }
    else {
      this.moreBtnNull = true;
      this.links = data.links.next.substr(length - 1);
    }
  }

  ngOnInit() {

    this.result = this.searchServ.theRes.data;
    this.links = this.searchServ.theRes.links;
    if (this.searchServ.theRes.links.next == null) {
      this.moreBtnNull = false;
    }
    else {
      this.moreBtnNull = true;
      this.links = this.searchServ.theRes.links.next.substr(length - 1);
    }
    this.selectService.getCountries().subscribe(data => {
      this.selectCountry = data.data;
    });
    this.selectService.getCities().subscribe(data => {
      this.selectCity = data.data;
    });
    this.selectService.getCat().subscribe(data => {
      this.selectCategory = data.data;
    });
    this.selectService.getSpecialization().subscribe(data => {
      this.selectSpecialization = data.data;
    });
    this.searchServ.getAds().subscribe(data => {
      this.getAds = data.data;
    });
  }


}
