import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Destination } from '../models/destination.model';
import { DestinationServiceService } from '../service/destination-service.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ReloadService } from '../service/reload.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit, OnDestroy {
  //get this with the _id
  public destination: Destination;
  private paramMapSub: Subscription = null;

  

  constructor(private destinationService: DestinationServiceService, private route: ActivatedRoute) { 
    

    this.paramMapSub = this.route.paramMap.subscribe(params => {
      const pId: number = Number(params.get('_id'))
      this.destination = this.destinationService.getDestById(pId);
    });

    
    
    
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    if(this.paramMapSub != null){
      this.paramMapSub.unsubscribe();
      this.paramMapSub = null;
    }
  }

}
