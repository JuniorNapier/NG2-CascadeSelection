import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges
} from '@angular/core';

import {DataService} from '../../services/data/data';

import {CarMake} from '../../models/carmake';
import {CarModel} from '../../models/carmodel';

@Component({
    selector: 'app-car-model-dropdown',
    templateUrl: './car-model.html',
    styleUrls: ['./car-model.sass']
})

export class CarModelSelectComponent implements OnInit,
OnChanges {
  @Input()carmake: String;

  selectedCarModel: CarModel = new CarModel(0, 0, null, null, null);
  selectedCarModelId = 0;
  carmodels: CarModel[];

  constructor(private _dataService: DataService) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    const makeid: number = parseInt(changes['carmake'].currentValue, 10);

    this
      ._dataService
      .getAllCarModels()
      .subscribe(data => {
        this.carmodels = data.filter((item) => item.make === makeid);
        this.selectedCarModelId = 0;
        this.selectedCarModel = new CarModel(0, 0, null, null, null);
      });
  }

  onSelect(carmodelid: string) {
    const modelid: number = parseInt(carmodelid, 10);

    this.selectedCarModel = this.carmodels.filter((item) => item.id === modelid)[0] || new CarModel(0, 0, null, null, null);
  }
}
