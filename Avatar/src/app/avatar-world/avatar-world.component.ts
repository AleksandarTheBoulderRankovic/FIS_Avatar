import { Component, OnInit, OnDestroy } from '@angular/core';
import { DestinationServiceService } from '../service/destination-service.service';
import { Destination } from '../models/destination.model';
import { ReloadService } from '../service/reload.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-avatar-world',
  templateUrl: './avatar-world.component.html',
  styleUrls: ['./avatar-world.component.css']
})
export class AvatarWorldComponent implements OnInit, OnDestroy {

  public destList : Destination[];
  private sub : Subscription;

  constructor(private destinationService: DestinationServiceService) { 
    this.sub = this.destinationService.getDestList().subscribe( destL => this.destList = destL);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
