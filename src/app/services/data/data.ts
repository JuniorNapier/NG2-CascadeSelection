import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import { CarMake } from '../../models/carmake';
import { CarModel } from '../../models/carmodel';

@Injectable()
export class DataService {
    private apiUrl = 'http://localhost:3000/api';

    constructor(private _http: Http) {}

    getAllCarModels() {
        return this
            ._http
            .get(`${this.apiUrl}/car/model`)
            .map(data => {
                return data.json().map( (a) =>  new CarModel(a.id, a.make, a.name, a.description, a.img));
            });
    }

    getAllCarMakes() {
        return this
            ._http
            .get(`${this.apiUrl}/car/make`)
            .map(data => {
                return data.json().map( (a) =>  new CarMake(a.id, a.name));
            });
    }
}
