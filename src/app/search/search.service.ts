import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
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

interface searchQuery {
  country: number,
  city: number,
  category: number,
  specialization: number,
  sort: number
}

interface searchResult {
  data: [
    {
      id: number,
      name: string,
      email: string,
      phone: number,
      description: string,
      country: {
        id: number,
        name: string
      },
      city: {
        id: number,
        name: string
      },
      meta_data: {
        images: any,
        logo: string,
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
      views: number
    }]
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUrl: string = 'http://www.dp-itc.com:8080/api';
  private CreateAPI = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'x-api-key': 'nKwyEX0bIDvmAliwVA5iVHM081embegJYrF7UeFLl89iHwEkuF4MWglIEkk9'
    })
  };

  constructor(private http: HttpClient,
              private router: Router) {
  }

  theRes: any;

  result(country, city, category, specialization) {
    let params = new HttpParams().set('country', country).set('city', city).set('category', category).set('specialization', specialization);

    return this.http.get<searchResult>(this.apiUrl + '/search' + '?' + params, this.CreateAPI).subscribe((data) => {
      this.router.navigate(['result']);
      this.theRes = data;
      console.log(this.theRes);

    });

  }


}
