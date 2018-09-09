import {Component, OnInit} from '@angular/core';
import {AccountNav} from "../../extends/extend-account-nav.enum";
import {Router} from "@angular/router";

@Component({
  selector: 'app-client-nav',
  templateUrl: './client-nav.component.html',
  styleUrls: ['./client-nav.component.sass']
})
export class ClientNavComponent implements OnInit {
  listMyAccount: string = AccountNav.myAcount;
  listSetting: string = AccountNav.accountSetting;
  listPackage: string = AccountNav.myPackage;
  listLogOut: string = AccountNav.Logout;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  show: boolean = false;

  toggleCollapse() {
    this.show = !this.show
  }

  logout() {
    localStorage.removeItem('data');
    this.router.navigate(['/sign-in']);
  }

}
