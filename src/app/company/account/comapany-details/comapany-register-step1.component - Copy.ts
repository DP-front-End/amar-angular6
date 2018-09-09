import {Component, OnInit} from '@angular/core';
import {ExtendCompanyLabels} from "../../../extends/extend-company-labels.enum";
import {ExtendBtnNames} from "../../../extends/extend-btn-names.enum";
import {ExtendLabels} from "../../../extends/extend-form-labels.enum";
import {Router} from "@angular/router";
import {AccountService} from "../account.service";
import {SelectsService} from "../../../selects.service";
import {ExtendHeadTitles} from "../../../extends/extend-head-titles.enum";

@Component({
  selector: 'app-comapany-register-step1',
  templateUrl: './comapany-register-step1.component.html',
  styleUrls: ['./comapany-register-step1.component.sass']
})
export class ComapanyDetailsComponent implements OnInit {
  readonly headTitle: string = ExtendHeadTitles.registerStep1Title;
  readonly updateBtn: string = ExtendBtnNames.updateBtn;
  readonly namePlaceHolder: string = ExtendLabels.nameLabel;
  readonly emailPlaceHolder: string = ExtendLabels.emailLabel;
  readonly passwordPlaceHolder: string = ExtendLabels.passwordLabel;
  readonly phonePlaceHolder: string = ExtendLabels.phoneNumLabel;
  readonly chooseCountryPlaceHolder: string = ExtendLabels.countryLabel;
  readonly chooseCityPlaceHolder: string = ExtendLabels.cityLabel;
  readonly choosespecializationPlaceHolder: string = ExtendCompanyLabels.specializationNameLabel;
  readonly CompanyNameLabel: string = ExtendCompanyLabels.CompanyNameLabel;
  readonly websiteUrl: string = ExtendCompanyLabels.websiteUrlNameLabel;
  readonly logoUrl: string = ExtendCompanyLabels.logoNameLabel;
  readonly coName: string = ExtendCompanyLabels.CompanyNameLabel;
  readonly coPrief: string = ExtendCompanyLabels.briefNameLabel;
  readonly coCategory: string = ExtendCompanyLabels.categoryNameLabel;
  readonly coSpecialization: string = ExtendCompanyLabels.specializationNameLabel;
  readonly coLogo: string = ExtendCompanyLabels.logoNameLabel;
  readonly coID: string = ExtendCompanyLabels.idCompanyNameLabel;
  readonly coImage: string = ExtendCompanyLabels.companyImageNameLabel;
  readonly facebookUrl: string = ExtendCompanyLabels.facebookUrlNameLabel;
  readonly twitterUrl: string = ExtendCompanyLabels.twitterUrlNameLabel;

  data: any = localStorage.getItem('data');

  CompanyID: number = JSON.parse(this.data).id;
  CompanyEmail: string = JSON.parse(this.data).email;

  coNameVal: string = JSON.parse(this.data).name;
  coPriefVal: string = JSON.parse(this.data).description;
  coPhoneVal: number = JSON.parse(this.data).phone;

  CompanyCountyID: number = JSON.parse(this.data).country.id;

  CompanyCountyName: string = JSON.parse(this.data).country.name;

  CompanyCityID: number = JSON.parse(this.data).city.id;

  CompanyCityName: string = JSON.parse(this.data).city.name;
  coWebsiteVal: string = JSON.parse(this.data).meta_data.website;

  coLogoVal: string = JSON.parse(this.data).meta_data.logo;
  CatID: string = JSON.parse(this.data).category.id;
  CatName: string = JSON.parse(this.data).category.name;

  specializationID: string = JSON.parse(this.data).specialization.id;

  specializationName: string = JSON.parse(this.data).specialization.name;

  coFacebookVal: string;
  coTwitterVal: string;
  CompanyIdImage: string;
  images: string[] = [];

  coCountryVal = this.CompanyCountyID;
  coCityVal = this.CompanyCityID;
  coCatVal = this.CatID;
  coSpecialVal = this.specializationID;

  social_networks: any[] = [];
  loading: boolean;

  countries = [];
  cities = [];
  cat = [];
  CoDetails: any;

  constructor(private router: Router,
              private authService: AccountService,
              private selectService: SelectsService) {
  }

  updateSetting() {
    let facebook = this.coFacebookVal;
    let twitter = this.coTwitterVal;
    this.social_networks.push(facebook, twitter);

    console.log(this.social_networks);

    this.loading = true;
    const data = {
      name: this.coNameVal,
      description: this.coPriefVal,
      country_id: this.CompanyCountyID,
      city_id: this.CompanyCityID,
      specialization_id: this.specializationID,
      social_networks: this.social_networks,
      logo: this.coLogoVal,
      website: this.coWebsiteVal,
      license_image: this.CompanyIdImage,
      images: this.images

    };

    this.authService.updateSetting(data)
      .subscribe((data: any) => {
          this.router.navigate(['/']);
          if (data.Succeeded == true) {
            this.router.navigate(['/']);
          }
        },
        error => {
          this.loading = false;
        });
  }

  ngOnInit() {
    this.selectService.getCountries().subscribe(data => {
      this.countries = data.data;
    });
    this.selectService.getCities().subscribe(data => {
      this.cities = data.data;
    });
    this.selectService.getCat().subscribe(data => {
      this.cat = data.data;
    });
    this.authService.getDetails().subscribe(data => {
      this.CoDetails = data.data;
    });

  }

}
