import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data/data';

import { CarMake } from '../../models/carmake';
import { CarModel } from '../../models/carmodel';

@Component({
  selector: 'app-car-make-dropdown',
  templateUrl: './car-make.html',
  styleUrls: ['./car-make.sass']
})

export class CarMakeSelectComponent implements OnInit {
  selectedCarMake: CarMake = new CarMake(0, null);
  carmakes: CarMake[];
  carmodels: CarModel[];

  constructor(private _dataService: DataService) {}

  ngOnInit() {
     this._dataService.getAllCarMakes().subscribe(
          data => {
            this.carmakes = data ;
          }
      );
  }
}
