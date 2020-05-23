import { Injectable } from '@angular/core';
import { Destination } from '../models/destination.model';

@Injectable({
  providedIn: 'root'
})
export class DestinationServiceService {

  private destList: Destination[] = [];
  constructor() { 
    const path = 'assets/BaSingSe/BSS_';
    this.destList.push(new Destination(0, 'Ba Sing Se', "a nice place", 15, [path+'palace.jpg', path+'peace.jpg', path+'street.jpg', path+'tea.png', path+'Wall.png']));
    this.destList.push(new Destination(1, 'South Pole', "a bitchin place", 2, []));
  }

  public getDestList() {
    return this.destList;
  }

  public getDestById(id: number) {
      return this.destList.filter(x => x._id === id)[0];
  }
}
