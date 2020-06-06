import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Destination } from '../models/destination.model';
import { DestinationServiceService } from '../service/destination-service.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { ReloadService } from '../service/reload.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit, OnDestroy {

  public destination: Destination;
  private paramMapSub: Subscription = null;
  public pictures = [];
  public desc : string = '';

  constructor(private destinationService: DestinationServiceService, private route: ActivatedRoute) {
    this.paramMapSub = this.route.paramMap.subscribe(params => {
      const pId: number = Number(params.get('_id'))
      this.destinationService.getDestById(pId).subscribe((dest : Destination) => {
      this.destination = dest; this.desc = this.destination.description; this.destination.images.forEach(img => {

        this.pictures.push({ path: img });

      });
      });
    });

  }

  ngOnInit(): void {


    console.log(this.destination);



  }

  ngOnDestroy(): void {
    if (this.paramMapSub != null) {
      this.paramMapSub.unsubscribe();
      this.paramMapSub = null;
    }
  }

}
