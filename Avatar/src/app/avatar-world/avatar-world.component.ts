import { Component, OnInit } from '@angular/core';
import { DestinationServiceService } from '../service/destination-service.service';
import { Destination } from '../models/destination.model';
import { ReloadService } from '../service/reload.service';

@Component({
  selector: 'app-avatar-world',
  templateUrl: './avatar-world.component.html',
  styleUrls: ['./avatar-world.component.css']
})
export class AvatarWorldComponent implements OnInit {

  public destList : Destination[] = [];

  constructor(private destinationService: DestinationServiceService) { 
    this.destList = this.destinationService.getDestList();
  }

  ngOnInit(): void {
  }


}
