import {Component, OnInit} from '@angular/core';
import {ExtendHeadTitles} from "../../../../extends/extend-head-titles.enum";
import {ExtendAddProjectLabels} from "../../../../extends/extend-add-project-labels.enum";
import {ExtendBtnNames} from "../../../../extends/extend-btn-names.enum";
import {Router} from "@angular/router";
import {AccountService} from "../../account.service";
import {finalize} from "rxjs/internal/operators";
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from "angularfire2/storage";
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'app-comapany-add-project',
  templateUrl: './comapany-add-project.component.html',
  styleUrls: ['./comapany-add-project.component.sass']
})
export class ComapanyAddProjectComponent implements OnInit {
  readonly headTitle: string = ExtendHeadTitles.addProjectTitle;
  readonly projectName: string = ExtendAddProjectLabels.projectNameLabel;
  readonly projectDesc: string = ExtendAddProjectLabels.briefProjectNameLabel;
  readonly projectImgs: string = ExtendAddProjectLabels.projectImagesNameLabel;
  readonly projectNaturalImgs: string = ExtendAddProjectLabels.naturalProjectImagesNameLabel;
  readonly projectAddress: string = ExtendAddProjectLabels.projectAddress;
  readonly addBtn: string = ExtendBtnNames.addProjectBtn;
  name: string;
  description: string;
  image: string;
  images: any[] = [];


  address: string;
  loadingFile = false;
  loading = false;
  submitted = false;

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  uploadState: Observable<string>;

  constructor(
    private router: Router,
    private authService: AccountService,
    private afStorage: AngularFireStorage
  ) {
  }

  ngOnInit() {
  }

  uploadImageCo(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.loadingFile = true;

    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.loadingFile = false;
        this.downloadURL = this.ref.getDownloadURL();
        this.downloadURL.subscribe(url => {
          this.image = url;
          this.images.push(this.image);
        });
      })
    )
      .subscribe();
  }


  OnSubmit() {
    const data = {
      name: this.name,
      description: this.description,
      images: this.images,
    };
    this.loading = true;
    this.authService.createProject(data)
      .subscribe((data: any) => {
          if (data.Succeeded == true) {
            this.router.navigate(['/company']);
          }
        },
        error => {
          this.loading = false;
        });
  }

}
