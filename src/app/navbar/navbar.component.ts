import { LocalSessionDataService } from './../local-session-data.service';
import { IPlace } from './../models/place';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() places: IPlace[];
  constructor( private router:Router,private route:ActivatedRoute) { 
  }
  onPlaceSelected():void{

  }
  @Output() onPlaceSelectedFromHistory= new EventEmitter<IPlace>();
  getSelectedPlace(index:number):void{
    let place:IPlace = this.places[index];
    this.router.navigate(['/search', place.placeId, 'current'],{relativeTo: this.route});
    this.onPlaceSelectedFromHistory.emit(place);
   }

  ngOnInit() {
     
  }

}
