import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-basicelements',
  templateUrl: './basicelements.component.html',
  styleUrls: ['./basicelements.component.scss']
})
export class BasicelementsComponent implements OnInit {
    simpleSlider = 40;
    doubleSlider = [20, 60];
    state_default: boolean = true;
    focus: any;
    constructor(private apiService: ApiService) { }
    cars;
    selectedCars: String[];
    filter: boolean = false;
    dropDownData = ["TODOS", "HIBRIDO", "ELECTRICO", "GASOLINA", "HIDROGENO"];
    dropDownDataLabel = ["TODOS", "0", "ECO"]
    onOptionsSelected(value:string){
      this.filter = true;
      this.selectedCars= this.cars.cars.filter(x => x.engine === value);
      if (value === 'TODOS') {
        this.filter = false;
      }
  
    }

    onOptionsLabelSelected(value:string){
      this.filter = true;
      if (value === "0") {
        this.selectedCars= this.cars.cars.filter(x => x.label0DGT === true);
      }
      if (value === "ECO") {
        this.selectedCars= this.cars.cars.filter(x => x.labelDGTECO === true);
      }
      if (value === 'TODOS') {
        this.filter = false;
      }
  
    }
    ngOnInit() {
      this.apiService.getCars().subscribe(
        data => {
          this.cars = data;
          console.log(data);
        }
      );
    }

}
