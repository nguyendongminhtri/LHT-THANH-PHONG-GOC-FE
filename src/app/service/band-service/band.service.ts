import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Band} from '../../model/Band';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BandService {
//API LOCAL:
//   private API_BAND = environment.API_LOCAL+'band';

  //API SERVER
  private API_BAND = environment.API_SERVER+'band';
  constructor(private http: HttpClient) { }
  createBand(band: Band): Observable<Band>{
    return this.http.post<Band>(this.API_BAND, band)
  }
  listBand(): Observable<Band[]>{
    return this.http.get<Band[]>(this.API_BAND+'/list')
  }
}
