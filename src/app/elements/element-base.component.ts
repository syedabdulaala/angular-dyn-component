import { Component, OnInit, EventEmitter } from '@angular/core';

export class ElementBaseComponent {

  constructor() { }

  label: string;
  click = new EventEmitter<string>();

  onClick(event: MouseEvent) {
    this.click.emit(this.label);
  }
}
