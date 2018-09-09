import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

interface countries {
  data: [
    {
      id: number,
      name: string,
      cities: [
        {
          id: number,
          name: string
        }
        ]
    }]

}

interface cities {
  data: [
    {
      id: number,
      name: string
    }]

}

interface specialization {
  data: [
    {
      id: number,
      name: string
    }]

}

interface duration {
  DAY,
  MONTH,
  SIXMONTHES,
  YEAR
}

interface Cat {
  data: [
    {
      id: number,
      name: string,
      specializations: [
        {
          id: number,
          name: string
        }
        ]
    }]

}

@Injectable({
  providedIn: 'root'
})

export class SelectsService {
  private apiUrl: string = "http://www.dp-itc.com:8080/api";
  private data: any = localStorage.getItem('data');
  private apiService = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'x-api-key': 'nKwyEX0bIDvmAliwVA5iVHM081embegJYrF7UeFLl89iHwEkuF4MWglIEkk9'
    })
  };

  constructor(private http: HttpClient) {
  }

  getCountries() {
    return this.http.get<countries>(this.apiUrl + '/utilities/countries', this.apiService);
  }

  getCities() {
    return this.http.get<cities>(this.apiUrl + '/utilities/cities', this.apiService);
  }

  getAdDuration() {
    return this.http.get<duration>(this.apiUrl + '/utilities/durations', this.apiService);
  }

  getCat() {
    return this.http.get<Cat>(this.apiUrl + '/utilities/categories', this.apiService);
  }

  getSpecialization() {
    return this.http.get<specialization>(this.apiUrl + '/utilities/specializations', this.apiService);

  }


}


