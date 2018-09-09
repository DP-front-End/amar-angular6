import {Component, OnInit} from '@angular/core';
import {ExtendHeadTitles} from '../../../../extends/extend-head-titles.enum';
import {ExtendBtnNames} from '../../../../extends/extend-btn-names.enum';
import {ExtendLabels} from '../../../../extends/extend-form-labels.enum';
import {AccountService} from '../../account.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-comapany-projects',
  templateUrl: './comapany-projects.component.html',
  styleUrls: ['./comapany-projects.component.sass']
})
export class ComapanyProjectsComponent implements OnInit {
  readonly headTitle: string = ExtendHeadTitles.projectTitle;
  readonly addProjectBtn: string = ExtendBtnNames.addProjectBtn;
  readonly editBtn: string = ExtendBtnNames.editBtn;
  readonly deleteBtn: string = ExtendBtnNames.deleteBtn;
  readonly category: string = ExtendLabels.companyCat;
  project: any[] = [];

  constructor(private authService: AccountService,
              private router: Router) {
  }

  getProjectById(project) {
    const data = {
      name,

    };
    this.authService.getProjectById(project)
      .subscribe(data => {
        console.log(data)
      });
  };
/*

  delete() {
    let id = event.target.id;
    this.authService.deleteProject(id)
      .subscribe(data => {
      });
  };
*/
  ngOnInit() {
    this.authService.getProjects().subscribe(data => {
      this.project = data.data;
    });

  }

}
