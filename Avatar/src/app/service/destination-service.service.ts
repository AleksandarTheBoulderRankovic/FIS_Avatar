import { Injectable } from '@angular/core';
import { Destination } from '../models/destination.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DestinationServiceService {

  constructor(private http : HttpClient) { 
    
  }

  public getDestList() : Observable<Destination[]> {
    return this.http.get<Destination[]>('assets/destination.json');
  }

  public getDestById(id: number) : Observable<Destination>{
      return this.http.get<Destination[]>('assets/destination.json').pipe(map(dest => dest.filter(x => x._id === id)[0]));
  }
}
