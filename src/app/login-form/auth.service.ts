import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';
import {Client} from "./client.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = "http://www.dp-itc.com:8080/api";
  private API = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'x-api-key': 'nKwyEX0bIDvmAliwVA5iVHM081embegJYrF7UeFLl89iHwEkuF4MWglIEkk9'
    })
  };

  constructor(private http: HttpClient) {
  }

  clientRegister(userClient: Client) {
    const body: Client = {
      name: userClient.name,
      email: userClient.email,
      password: userClient.password,
      password_confirmation: userClient.password_confirmation,
      phone: userClient.phone,
      city_id: userClient.city_id
    };
    return this.http.post(this.apiUrl + '/clients/register', body, this.API);
  }

  companyRegister(data) {
    const body = {
      name: data.name,
      email: data.email,
      password: data.password,
      password_confirmation: data.password_confirmation,
      phone: data.phone,
      city_id: data.city_id,
      description: data.description,
      specialization_id: data.specialization_id,
      logo: data.logo,
      website: data.website

    };

    return this.http.post(this.apiUrl + '/companies/register', body, this.API);
  }

  login(email, password) {
    let data = {
      email: email,
      password: password
    };

    return this.http.post(this.apiUrl + '/login', data, this.API);

  }

  isLoggedIn() {
    if (localStorage.getItem('data') != null)
      return true;

  }


}
