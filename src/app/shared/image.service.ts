
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ImageService {

 // private query: string;
  private API_KEY: any = environment.PIXABAY_API_KEY; // key is in "environments" Folder
  private API_URL: any = environment.PIXABAY_URL; // URL is in "environments" Folder
  private URL: any = this.API_URL + this.API_KEY + '&q='; // join all variables
  private perPage = '&per_page=200'; // Nº od image what to show per page

  constructor( private http: HttpClient ) { }

  getImage(query) {
    return this.http.get(this.URL + query + this.perPage);
  }

}
