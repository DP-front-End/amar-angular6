import {Component, OnInit} from '@angular/core';
import {ExtendCompanyLabels} from "../../../extends/extend-company-labels.enum";
import {ExtendBtnNames} from "../../../extends/extend-btn-names.enum";
import {ExtendLabels} from "../../../extends/extend-form-labels.enum";
import {Router} from "@angular/router";
import {AccountService} from "../account.service";
import {SelectsService} from "../../../selects.service";
import {ExtendHeadTitles} from "../../../extends/extend-head-titles.enum";
import {finalize, map} from "rxjs/internal/operators";
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from "angularfire2/storage";
import {Observable} from "rxjs/Rx";

interface imagesCo {
  image1: string,
  image2: string,
  image3: string,
  image4: string

}

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

  coSocialLinks: any = JSON.parse(this.data).meta_data.social_networks;
  coLogoVal: string = JSON.parse(this.data).meta_data.logo;
  CatID: string = JSON.parse(this.data).category.id;
  CatName: string = JSON.parse(this.data).category.name;

  specializationID: string = JSON.parse(this.data).specialization.id;

  specializationName: string = JSON.parse(this.data).specialization.name;

  coFacebookVal: string = "fgdgd";
  coTwitterVal: string = "sfsfs";

  CompanyIdImage: string;
  image: string;

  images: any[] = JSON.parse(this.data).meta_data.images;

  logoImage: string = JSON.parse(this.data).meta_data.logo;
  IDImage: string = JSON.parse(this.data).meta_data.license_image;
  coCountryVal = this.CompanyCountyID;
  coCityVal = this.CompanyCityID;
  coCatVal = this.CatID;
  coSpecialVal = this.specializationID;

  social_networks: any[] = [];
  loading: boolean;

  countries = [];
  cities = [];
  cat = [];
  companyData: any[] = [];

  loadingFile: boolean;
  loadingImgLogo: boolean;
  loadingImgID: boolean;
  loadingImgImagesCo: boolean;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  uploadState: Observable<string>;
  updateSuccess: boolean;


  constructor(private router: Router,
              private authService: AccountService,
              private selectService: SelectsService,
              private afStorage: AngularFireStorage) {

  }

  uploadImageCo(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.loadingImgImagesCo = true;

    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.loadingImgImagesCo = false;
        this.downloadURL = this.ref.getDownloadURL();
        this.downloadURL.subscribe(url => {
          this.image = url;
          this.images.push(this.image);
        });
      })
    )
      .subscribe();
  }

    uploadLogo(event) {
      const id = Math.random().toString(36).substring(2);
      this.ref = this.afStorage.ref(id);
      this.task = this.ref.put(event.target.files[0]);
      this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
      this.uploadProgress = this.task.percentageChanges();
      this.loadingImgLogo = true;
      this.task.snapshotChanges().pipe(
        finalize(() => {
          this.loadingImgLogo = false;
          this.downloadURL = this.ref.getDownloadURL();
          this.downloadURL.subscribe(url => (this.logoImage = url));
          console.log(this.downloadURL);
        })
      )
        .subscribe();
    }
  uploadID(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    this.uploadProgress = this.task.percentageChanges();
    this.loadingImgID = true;
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.loadingImgID = false;
        this.downloadURL = this.ref.getDownloadURL();
        this.downloadURL.subscribe(url => (this.IDImage = url));
      })
    )
      .subscribe();
  }


  updateSetting() {
    this.social_networks.push(this.coSocialLinks);
    console.log(this.social_networks);
    this.loading = true;
    const data = {
      name: this.coNameVal,
      description: this.coPriefVal,
      country_id: this.CompanyCountyID,
      city_id: this.CompanyCityID,
      specialization_id: this.specializationID,
      social_networks: this.coSocialLinks,
      logo: this.logoImage,
      website: this.coWebsiteVal,
      license_image: this.IDImage,
      images: this.images

    };

    this.authService.updateSetting(data)
      .subscribe((data: any) => {
          this.updateSuccess = true;
          this.loading = false;
          this.authService.getCompanyData().subscribe(data => {
            this.companyData = data.data;
            localStorage.setItem('data', JSON.stringify(data.data));
            console.log(this.data);
          });

        },
        error => {
          this.loading = false;
        });

  }

  ngOnInit() {
    // let localStorageJsonData = JSON.parse(localStorage.getItem(this.key));
    //localStorage.setItem("obj", JSON.stringify(localStorageJsonData));
    //console.log('localStorageJsonData', localStorageJsonData);
    //let movies = "dasdsadasda";
    //localStorage.setItem(this.data, JSON.stringify(this.jsonObj));
    this.selectService.getCountries().subscribe(data => {
      this.countries = data.data;
    });
    this.selectService.getCities().subscribe(data => {
      this.cities = data.data;
    });
    this.selectService.getCat().subscribe(data => {
      this.cat = data.data;
    });


  }

}
