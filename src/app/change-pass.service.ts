import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChangePassService {
  apiUrl: string = "http://www.dp-itc.com:8080/api";
  private data: any = localStorage.getItem('data');
  private token: string = JSON.parse(this.data).token;
  private APIWithToken = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'x-api-key': 'nKwyEX0bIDvmAliwVA5iVHM081embegJYrF7UeFLl89iHwEkuF4MWglIEkk9',
      'Authorization': 'Bearer ' + this.token
    })
  };
  constructor(private http: HttpClient) { }

  changePassword(data) {
    const body = {
      old_password: data.old_password,
      password: data.password,
      password_confirmation: data.password_confirmation
    }
    return this.http.post(this.apiUrl + '/change-password', body, this.APIWithToken);


  }
}
