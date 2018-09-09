import {Component, OnInit} from '@angular/core';
import {ClientNavComponent} from "../../../client/client-nav/client-nav.component";
import {AccountNav} from "../../../extends/extend-account-nav.enum";
import {ExtendHeadTitles} from "../../../extends/extend-head-titles.enum";

@Component({
  selector: 'app-company-nav',
  templateUrl: './company-nav.component.html',
  styleUrls: ['./company-nav.component.sass']
})
export class CompanyNavComponent extends ClientNavComponent implements OnInit {
  readonly listTimeDuration: string = AccountNav.timeDuration;
  readonly listProject: string = AccountNav.myProjects;
  readonly listAds: string = AccountNav.myAds;
  readonly listDetails: string = AccountNav.myDetails;
  readonly listComments: string = AccountNav.myComment;
  readonly changePassTitle: string = ExtendHeadTitles.changePassTitle;


  super() {
  }

  ngOnInit() {
  }

}
