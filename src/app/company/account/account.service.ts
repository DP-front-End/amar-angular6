import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Project} from './project.model';
import {Ad} from './ad.model';

interface getAd {
  data: [
    {
      id: number,
      name: string,
      description: string,
      address: string,
      images: null,
    }]
}

interface getProject {
  data: [
    {
      id: number,
      name: string,
      description: string,
      images: string
    }]
}

interface getComment {
  data: [
    {
      id: number,
      client: {
        id: number,
        name: string
      },
      comment: string,
    }]
}


interface getDetails {
  data: {
    id: number,
    name: string,
    email: string,
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
      website: string,
      images: {},
      logo: string,
      social_networks: {
        facebook: string,
        twitter: string
      }
    },
    category: {
      id: number,
      name: string
    },
    specialization: {
      id: number,
      name: string
    },
    phone: number

  }
}

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

interface workinDays {
  days: [
    {
      day: number,
      from: string,
      to: string,
      shift: string,
    },
    {
      day: number,
      from: string,
      to: string,
      shift: string,
    }]
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private data: any = localStorage.getItem('data');
  private CompanyID: number = JSON.parse(this.data).id;
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

  constructor(private http: HttpClient) {
  }

  getDetails() {
    return this.http.get<getDetails>(this.apiUrl + '/company/' + this.CompanyID, this.CreateAPI);
  }


  createProject(data) {
    const body: Project = {
      name: data.name,
      description: data.description,
      images: data.images,
    };
    return this.http.post(this.apiUrl + '/companies/projects', body, this.CreateAPI);
  }

  getProjects() {
    return this.http.get<getProject>(this.apiUrl + '/company/' + this.CompanyID + '/projects', this.CreateAPI);
  }

  getProjectById(project) {
    return this.http.patch(this.apiUrl + '/company/' + this.CompanyID + '/projects/' + project.id, JSON.stringify({isRead: true}), this.CreateAPI);
  }

  deleteProject(id) {
    return this.http.delete(this.apiUrl + '/companies/projects/' + id, this.CreateAPI);
  }

  createAd(data) {
    const body: Ad = {
      title: data.title,
      content: data.content,
      city_id: data.city_id,
      duration: data.duration,
      image: data.image
    };
    return this.http.post(this.apiUrl + '/companies/ads', body, this.CreateAPI);
  }

  getADS() {
    return this.http.get<getAd>(this.apiUrl + '/companies/ads', this.CreateAPI);
  }

  deleteAd(id) {
    return this.http.delete(this.apiUrl + '/companies/ads/' + id, this.CreateAPI);
  }

  getComments() {
    return this.http.get<getComment>(this.apiUrl + '/company/' + this.CompanyID + '/comments', this.CreateAPI);
  }

  updateSetting(data) {
    const body = {
      name: data.name,
      phone: data.phone,
      city_id: data.city_id,
      country_id: data.country_id,
      specialization_id: data.specialization_id,
      description: data.description,
      social_networks: data.social_networks,
      logo: data.logo,
      license_image: data.license_image,
      website: data.website,
      images: data.images

    };
    return this.http.put(this.apiUrl + '/companies/company-meta-data', body, this.CreateAPI);
  }

  getCompanyData() {
    return this.http.get<getCompanyData>(this.apiUrl + '/data', this.CreateAPI);
  }

  updateWorkingDays(data) {
    const body = {
      days: data.days

    };
    return this.http.put(this.apiUrl + '/companies/workdays', body, this.CreateAPI);
  }
}
