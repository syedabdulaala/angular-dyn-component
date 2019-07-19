import { Component, OnInit, EventEmitter } from '@angular/core';
import { ElementBaseComponent } from '../element-base.component';

@Component({
  selector: 'app-numeric',
  templateUrl: './numeric.component.html',
  styleUrls: ['./numeric.component.css']
})
export class NumericComponent extends ElementBaseComponent {

  constructor() {
    super();
  }
}
