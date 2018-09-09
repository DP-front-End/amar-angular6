import {Component, OnInit} from '@angular/core';
import {ExtendHeadTitles} from "../../../../extends/extend-head-titles.enum";
import {ExtendBtnNames} from "../../../../extends/extend-btn-names.enum";
import {AccountService} from "../../account.service";


@Component({
  selector: 'app-company-ads',
  templateUrl: './company-ads.component.html',
  styleUrls: ['./company-ads.component.sass']
})
export class CompanyAdsComponent implements OnInit {
  readonly headTitle: string = ExtendHeadTitles.adsTitle;
  readonly addAdBtn: string = ExtendBtnNames.addAdbtn;
  readonly editBtn: string = ExtendBtnNames.editBtn;
  readonly deleteBtn: string = ExtendBtnNames.deleteBtn;
  getAds = [];

  constructor(private acServ: AccountService) {
  }
  /*
  delete() {
    let id = event.target.id;
    this.acServ.deleteAd(id)
      .subscribe(data => {
      });
  };
  */
  ngOnInit() {
    this.acServ.getADS().subscribe(data => {
      this.getAds = data.data;
    });
  }
}
