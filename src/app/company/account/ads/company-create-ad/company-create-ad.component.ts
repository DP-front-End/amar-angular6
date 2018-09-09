import {Component, OnInit} from '@angular/core';
import {ExtendHeadTitles} from "../../../../extends/extend-head-titles.enum";
import {AddAdLabel} from "../../../../extends/add-ad-label.enum";
import {ExtendBtnNames} from "../../../../extends/extend-btn-names.enum";
import {Router} from "@angular/router";
import {AccountService} from "../../account.service";
import {ExtendLabels} from "../../../../extends/extend-form-labels.enum";
import {SelectsService} from "../../../../selects.service";
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from "angularfire2/storage";
import {finalize, map} from "rxjs/internal/operators";
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'app-company-create-ad',
  templateUrl: './company-create-ad.component.html',
  styleUrls: ['./company-create-ad.component.sass']
})
export class CompanyCreateAdComponent implements OnInit {
  readonly headTitle: string = ExtendHeadTitles.createAdTitle;
  readonly adTitle: string = AddAdLabel.adTitle;
  readonly adDesc: string = AddAdLabel.adDesc;
  readonly adImg: string = AddAdLabel.adImg;
  readonly chooseDuration: string = AddAdLabel.duration;
  readonly chooseCity: string = ExtendLabels.cityLabel;
  readonly addBtn: string = ExtendBtnNames.addProjectBtn;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  uploadState: Observable<string>;
  title: string;
  content: string;
  city_id: number;
  duration: string;
  adDurationDAY: string;
  adDurationMONTH: string;
  adDurationSIXMONTHES: string;
  adDurationYEAR: string;
  image: string;
  loading = false;
  loadingFile = false;
  submitted = false;
  countries = [];
  cities = [];

  constructor(
    private router: Router,
    private authService: AccountService,
    private selectService: SelectsService,
    private afStorage: AngularFireStorage
  ) {
  }

  ngOnInit() {
    this.selectService.getCountries().subscribe(data => {
      this.countries = data.data;
    });
    this.selectService.getCities().subscribe(data => {
      this.cities = data.data;
    });
    this.selectService.getAdDuration().subscribe(data => {
      this.adDurationDAY = data.DAY;
      this.adDurationMONTH = data.MONTH;
      this.adDurationSIXMONTHES = data.SIXMONTHES;
      this.adDurationYEAR = data.YEAR;
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
    const data = {
      title: this.title,
      content: this.content,
      city_id: this.city_id,
      duration: this.duration,
      image: this.image
    };
    this.loading = true;
    this.authService.createAd(data)
      .subscribe((data: any) => {
          this.router.navigate(['company/company-ads']);
          if (data.Succeeded == true) {
            this.router.navigate(['/company-ads']);
          }
        },
        error => {
          this.loading = false;
        });
  }
}
