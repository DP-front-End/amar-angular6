import {Component, OnInit} from '@angular/core';
import {Validation} from "../../extends/extend-validation.enum";
import {ExtendHeadTitles} from "../../extends/extend-head-titles.enum";
import {ExtendBtnNames} from "../../extends/extend-btn-names.enum";
import {ExtendLabels} from "../../extends/extend-form-labels.enum";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {ExtendCompanyLabels} from "../../extends/extend-company-labels.enum";
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from "angularfire2/storage";
import {Observable} from "rxjs/Rx";
import {finalize, map} from "rxjs/internal/operators";
import {SelectsService} from "../../selects.service";


@Component({
  selector: 'app-company-signup',
  templateUrl: './company-signup.component.html',
  styleUrls: ['./company-signup.component.sass']
})
export class CompanySignupComponent implements OnInit {
  readonly signUpTitle: string = ExtendHeadTitles.registerTitle;
  readonly namePlaceHolder: string = ExtendLabels.nameLabel;
  readonly emailPlaceHolder: string = ExtendLabels.emailLabel;
  readonly passwordPlaceHolder: string = ExtendLabels.passwordLabel;
  readonly phonePlaceHolder: string = ExtendLabels.phoneNumLabel;
  readonly chooseCountryPlaceHolder: string = ExtendLabels.countryLabel;
  readonly chooseCityPlaceHolder: string = ExtendLabels.cityLabel;
  readonly choosespecializationPlaceHolder: string = ExtendCompanyLabels.specializationNameLabel;
  readonly CompanyName: string = ExtendCompanyLabels.CompanyNameLabel;
  readonly websiteUrl: string = ExtendCompanyLabels.websiteUrlNameLabel;
  readonly logoUrl: string = ExtendCompanyLabels.logoNameLabel;
  readonly briefName: string = ExtendCompanyLabels.briefNameLabel;
  readonly signUpBtn: string = ExtendBtnNames.registerPageBtnName;
  readonly nameValidate: string = Validation.nameValidate;
  readonly emailValidate: string = Validation.emailValidate;
  readonly passwordValidate: string = Validation.passwordValidate;
  readonly phoneValidate: string = Validation.phoneValidate;
  readonly cityValidate: string = Validation.cityValidate;
  readonly passLeastValidate: string = Validation.passAtLeast;
  readonly nameLeastValidate: string = Validation.nameAtLeast;
  readonly passMatch: string = Validation.passMatch;
  readonly emailMustValidate: string = Validation.emailMustValidate;
  readonly logoValidate: string = Validation.logoValidate;
  readonly discriptionValidate: string = Validation.discriptionValidate;
  readonly websiteValidate: string = Validation.websiteValidate;
  readonly websiteUrlValidate: string = Validation.websiteUrlValidate;
  readonly coNameValidate: string = Validation.coNameValidate;
  readonly specializationValidate: string = Validation.specializationValidate;
  loading = false;
  loadingFile = false;
  submitted = false;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  uploadState: Observable<string>;
  image: string;
  logo: string;
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  phone: number;
  city_id: number;
  description: string;
  specialization_id: number;
  website: string;
  city = [];
  special = [];
  constructor(
    private router: Router,
    private authService: AuthService,
    private afStorage: AngularFireStorage,
    private selectService: SelectsService
  ) {
  }

  ngOnInit() {
    this.selectService.getCities().subscribe(data => {
      this.city = data.data;
    });
    this.selectService.getSpecialization().subscribe(data => {
      this.special = data.data;
    });
  }

  upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    this.uploadProgress = this.task.percentageChanges();
    this.loadingFile = true;
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.loadingFile = false;
        this.downloadURL = this.ref.getDownloadURL();
        this.downloadURL.subscribe(url => (this.image = url));
      })
    )
      .subscribe();
  }

  OnSubmit() {
    this.loading = true;
    const data = {
      name: this.name,
      email: this.email,
      password: this.password,
      password_confirmation: this.password_confirmation,
      phone: this.phone,
      city_id: this.city_id,
      description: this.description,
      specialization_id: this.specialization_id,
      logo: this.image,
      website: this.website
    }

    this.authService.companyRegister(data)
      .subscribe((data: any) => {
          this.router.navigate(['/sign-in']);
          if (data.Succeeded == true) {
            this.router.navigate(['/sign-in']);
          }
        },
        error => {
          this.loading = false;
        });
  }
}
