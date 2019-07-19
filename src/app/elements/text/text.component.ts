import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ElementBaseComponent } from '../element-base.component';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent extends ElementBaseComponent {
  constructor() {
    super();
  }
}
