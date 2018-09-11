import {Component, OnInit} from '@angular/core';
import {ExtendHeadTitles} from '../../extends/extend-head-titles.enum';
import {ExtendLabels} from '../../extends/extend-form-labels.enum';
import {ExtendBtnNames} from '../../extends/extend-btn-names.enum';
import {SelectsService} from '../../selects.service';
import {Router} from '@angular/router';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.sass']
})
export class SearchFormComponent implements OnInit {
  searchTitle: string = ExtendHeadTitles.searchTitle;
  chooseCountry: string = ExtendLabels.countryLabel;
  chooseCity: string = ExtendLabels.cityLabel;
  companyCategory: string = ExtendLabels.companyCat;
  companyIndustry: string = ExtendLabels.companyIndustry;
  btnName: string = ExtendBtnNames.searchBtn;
  loading: boolean;

  selectCountry: any[] = [];
  selectCity: any[] = [];
  selectCategory: any[] = [];
  selectSpecialization: any[] = [];

  selectCountryVal: string = '';
  selectCityVal: string = '';
  selectCategoryVal: string = '';
  selectSpecializationVal: string = '';


  constructor(private selectService: SelectsService,
              private router: Router,
              private searchServ: SearchService) {
  }

  searchSubmit() {
    this.loading = false;
    let country = this.selectCountryVal;
    let city = this.selectCityVal;
    let category = this.selectCategoryVal;
    let specialization = this.selectSpecializationVal;
    this.searchServ.result(country, city, category, specialization);
    setTimeout(() => {
      this.router.navigate(['result']);
    }, 3000);


    /*.subscribe((data: any) => {
        this.loading = false;
        this.router.navigate(['result']);
          localStorage.setItem('result', JSON.stringify(data));

      },
      error => {
        this.loading = false;
      });
      */

  }

  ngOnInit() {
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

  }

}
