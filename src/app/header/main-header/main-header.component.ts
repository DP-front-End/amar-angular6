import {Component} from '@angular/core';
import {AuthService} from "../../login-form/auth.service";

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.sass']
})
export class MainHeaderComponent {
  clientRole: boolean = false;
  companyRole: boolean = false;
  data: any = localStorage.getItem('data');

  constructor(private authServ: AuthService) {
    if (localStorage.getItem('data') != null) {
      let dataClient = JSON.parse(this.data).role;
      if (dataClient == 'client') {
        this.clientRole = true;
      }
      else if (dataClient == 'company') {
        this.companyRole = true;
      }
    }
    else {
      this.clientRole = false;
      this.companyRole = false;
    }

  }


}
