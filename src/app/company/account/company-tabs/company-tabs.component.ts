import {Component, OnInit} from '@angular/core';
import {CompanyNavComponent} from "../company-nav/company-nav.component";

@Component({
  selector: 'app-company-tabs',
  templateUrl: './company-tabs.component.html',
  styleUrls: ['./company-tabs.component.sass']
})
export class CompanyTabsComponent extends CompanyNavComponent implements OnInit {

  super() {
  }

  ngOnInit() {
  }

}
