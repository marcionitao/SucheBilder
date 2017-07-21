import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ImageService {

 // private query: string;
  private API_KEY: any = environment.PIXABAY_API_KEY; // key is in "environments" Folder
  private API_URL: any = environment.PIXABAY_URL; // URL is in "environments" Folder
  private URL: any = this.API_URL + this.API_KEY + '&q='; // join all variables
  private perPage = '&per_page=20'; // Nº od image what to show per page

  constructor( private http: Http ) { }

  getImage(query) {
    return this.http.get(this.URL + query + this.perPage)
    .map(response => response.json());
  }

}