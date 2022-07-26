import {Component, OnInit} from '@angular/core'
import { Data } from '../../data'

@Component({
  selector:'one-app',
  templateUrl:'./one.component.html',
  styleUrls:['./one.component.css']
})

export class OneComponent implements OnInit {
    name = "Prudhvi"
   
    ngOnInit(){
      this.getData()
    }

    getData(){
      const family = Data;

    }

}