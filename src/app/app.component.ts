import { Component } from '@angular/core';
import {single, multi} from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  showYAxisLabel = true;
  yAxisLabel = 'Data';
  updateInterval: number;
  counter = 99;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  constructor() {
    Object.assign(this, {single})

    this.multi = [{
    "name": "Data",
    "series": this.initData()
  }];

  this.updateInterval = setInterval(() => this.addData(), 1000);
  }

  onSelect(event) {
    console.log(event);
  }

    initData(){
    const array =[];
    for (let i = 0; i < 50; i++) {
      console.log(i)
      array.push( {
        "name": i.toString(),
        "value": 0
      });
    }
    console.log("generated",array)
    //debugger;
    return array;
  }

  addData(){
    this.counter++;
    console.log("test",this.counter, this.multi);
    this.multi[0].series.shift();

    const data =
      {
        "name": this.counter.toString(),
        "value": this.getRandomArbitrary(-200, 200)
      }
    this.multi[0].series.push(data);
    this.multi = [...this.multi];
  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

}
