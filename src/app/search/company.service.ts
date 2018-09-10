import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';


interface getCompanyData {
  data: [
    {
      id: number,
      name: string,
      email: string,
      phone: number,
      role: string,
      country: {
        id: number,
        name: string
      },
      city: {
        id: number,
        name: string
      },
      status: boolean,
      confirmed_phone: boolean,
      token: string
      device_token: null,
      description: string,
      meta_data: {
        website: string,
        images: any,
        logo: string,
        social_networks: [
          {
            facebook: string,
            twitter: string
          }
          ],
        license_image: string
      },
      category: {
        id: number,
        name: string
      },
      specialization: {
        id: number,
        name: string
      },
      average_rating: number,
      comments_count: number,
      views: number,
      projects: any[],
      work_days: any[]
    }]
}


@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private data: any = localStorage.getItem('data');

  private token: string = JSON.parse(this.data).token;
  private apiUrl: string = 'http://www.dp-itc.com:8080/api';
  private CreateAPI = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'x-api-key': 'nKwyEX0bIDvmAliwVA5iVHM081embegJYrF7UeFLl89iHwEkuF4MWglIEkk9',
      'Authorization': 'Bearer ' + this.token
    })
  };

  constructor(private http: HttpClient,
              private router: Router) {
  }

  CoDetails: any;

  getDetails(id) {
    return this.http.get<getCompanyData>(this.apiUrl + '/company/' + id + '/data', this.CreateAPI).subscribe((data) => {
      this.router.navigate(['CompanyProfile']);
      localStorage.setItem('co', JSON.stringify(data.data));
    });
  }
}
